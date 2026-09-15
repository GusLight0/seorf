const CDP_LIST_URL = 'http://127.0.0.1:9335/json/list';
const SITE_URL = 'http://127.0.0.1:8000/?skipLoader=1#produto=seorf-15';

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getWebSocketUrl() {
    for (let attempt = 0; attempt < 20; attempt += 1) {
        try {
            const targets = await fetch(CDP_LIST_URL).then(response => response.json());
            const page = targets.find(item => item.type === 'page');
            if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
        } catch {}
        await wait(250);
    }

    throw new Error('No CDP target available');
}

function createClient(wsUrl) {
    const ws = new WebSocket(wsUrl);
    let id = 0;

    const call = (method, params = {}) => new Promise((resolve, reject) => {
        const messageId = ++id;
        const handler = event => {
            const message = JSON.parse(event.data);
            if (message.id !== messageId) return;
            ws.removeEventListener('message', handler);
            if (message.error) {
                reject(new Error(`${method}: ${message.error.message}`));
                return;
            }
            resolve(message.result);
        };

        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: messageId, method, params }));
    });

    const ready = new Promise(resolve => ws.addEventListener('open', resolve, { once: true }));
    return { call, ready, close: () => ws.close() };
}

async function auditWidth(client, width, height) {
    await client.call('Emulation.setDeviceMetricsOverride', {
        width,
        height,
        deviceScaleFactor: 1,
        mobile: width < 700
    });
    await client.call('Page.navigate', { url: `${SITE_URL}&audit=${width}` });
    await wait(1300);

    const result = await client.call('Runtime.evaluate', {
        returnByValue: true,
        expression: `(() => {
            const rect = selector => {
                const element = document.querySelector(selector);
                if (!element) return null;
                const value = element.getBoundingClientRect();
                return {
                    x: Math.round(value.x),
                    y: Math.round(value.y),
                    width: Math.round(value.width),
                    height: Math.round(value.height),
                    right: Math.round(value.right)
                };
            };
            const overflow = [...document.querySelectorAll('body *')]
                .map(element => {
                    const value = element.getBoundingClientRect();
                    return {
                        tag: element.tagName.toLowerCase(),
                        className: String(element.className || '').slice(0, 90),
                        id: element.id || '',
                        x: Math.round(value.x),
                        width: Math.round(value.width),
                        right: Math.round(value.right)
                    };
                })
                .filter(item => item.width > 0 && (item.right > window.innerWidth + 1 || item.x < -1))
                .sort((a, b) => b.right - a.right)
                .slice(0, 8);
            const activeNav = [...document.querySelectorAll('.nav-menu a.is-active, .nav-menu a[aria-current="page"]')]
                .map(item => item.textContent.trim());
            return {
                viewport: { width: window.innerWidth, height: window.innerHeight },
                scrollWidth: document.documentElement.scrollWidth,
                bodyScrollWidth: document.body.scrollWidth,
                activeNav,
                rects: {
                    container: rect('.product-detail-container'),
                    bar: rect('.product-detail-bar'),
                    breadcrumb: rect('.product-breadcrumb'),
                    actions: rect('.product-modal-top-actions'),
                    productShare: rect('.product-share'),
                    shareButton: rect('.share-product-modal'),
                    closeButton: rect('.close-product-modal'),
                    media: rect('.modal-media'),
                    zoom: rect('.modal-zoom'),
                    thumbs: rect('.modal-thumbs'),
                    copy: rect('.modal-copy'),
                    colorList: rect('.modal-color-list'),
                    cta: rect('[data-modal-add]'),
                    headerActions: rect('.site-header .nav-actions')
                },
                overflow
            };
        })()`
    });

    return result.result.value;
}

async function main() {
    const client = createClient(await getWebSocketUrl());
    await client.ready;
    await client.call('Page.enable');
    await client.call('Runtime.enable');

    const widths = [320, 360, 375, 390, 414, 1280, 1440, 1920];
    const audits = [];
    for (const width of widths) {
        audits.push({ width, ...(await auditWidth(client, width, width < 700 ? 980 : 1100)) });
    }

    client.close();
    console.log(JSON.stringify(audits, null, 2));
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});
