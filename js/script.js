const SEORF = {
    whatsapp: '5598985254472',
    instagram: 'https://instagram.com/useseorf',
    cartKey: 'seorf_cart_v1',
    favoriteKey: 'seorf_favorites_v1'
};

const formatterBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

const products = [
    {
        id: 'seorf-01',
        name: 'Pulseira Viena',
        price: 69.90,
        color: 'Preto com Dourado',
        colors: ['Preto com Dourado'],
        tag: 'Destaque',
        categories: ['pulseiras', 'destaque', 'novidade'],
        image: './assets/images/produto-1.jpeg',
        description: 'Pulseira preta com detalhe dourado, elegante e fácil de combinar.',
        specs: ['Visual elegante', 'Pulseira de corda', 'Acabamento metálico premium']
    },
    {
        id: 'seorf-02',
        name: 'Pulseira São Bento',
        price: 79.90,
        color: 'Azul e Preto',
        colors: ['Azul', 'Preto'],
        tag: 'Destaque',
        categories: ['pulseiras', 'destaque'],
        image: './assets/images/produto-2.jpeg',
        images: ['./assets/images/produto-2.jpeg', './assets/images/produto-10.jpeg'],
        description: 'Modelo com medalha central e presença discreta para composições elegantes.',
        specs: ['Presença discreta', 'Medalha São Bento', 'Acabamento de presença discreta']
    },
    {
        id: 'seorf-03',
        name: 'Pulseira Marselha',
        price: 79.90,
        color: 'Prata e Azul',
        colors: ['Prata', 'Azul'],
        tag: 'Novidade',
        categories: ['pulseiras', 'novidade'],
        image: './assets/images/produto-3.png',
        images: ['./assets/images/produto-3.png', './assets/images/produto-14.jpeg'],
        description: 'Pulseira de leitura leve, com tons frios e acabamento sofisticado.',
        specs: ['Leitura leve', 'Trama texturizada', 'Detalhe central refinado']
    },
    {
        id: 'seorf-04',
        name: 'Pulseira Havaí',
        price: 89.90,
        color: 'Preto e Prata',
        colors: ['Preto', 'Prata'],
        tag: 'Destaque',
        categories: ['pulseiras', 'destaque'],
        image: './assets/images/produto-4.jpeg',
        images: ['./assets/images/produto-4.jpeg', './assets/images/produto-20.png'],
        description: 'Design preto e prata com brilho limpo para o dia a dia.',
        specs: ['Brilho limpo', 'Design minimalista', 'Acabamento prateado']
    },
    {
        id: 'seorf-05',
        name: 'Pulseira Munique',
        price: 69.90,
        color: 'Dourado e Prata',
        colors: ['Dourado', 'Prata'],
        tag: 'Novidade',
        categories: ['pulseiras', 'novidade'],
        image: './assets/images/produto-5.jpeg',
        images: ['./assets/images/produto-5.jpeg', './assets/images/produto-15.jpeg'],
        description: 'Modelo metalizado com mistura dourada e prata em visual elegante.',
        specs: ['Mistura metalizada', 'Perfil elegante', 'Detalhe metálico premium']
    },
    {
        id: 'seorf-06',
        name: 'Colar Rio',
        price: 99.90,
        color: 'Preto com Prata',
        colors: ['Preto com Prata'],
        tag: 'Destaque',
        categories: ['colares', 'destaque'],
        image: './assets/images/produto-6.png',
        images: ['./assets/images/produto-6.png'],
        description: 'Colar preto com detalhe prateado, limpo e marcante.',
        specs: ['Visual marcante', 'Colar de corda', 'Acabamento prateado']
    },
    {
        id: 'seorf-07',
        name: 'Riviera SEORF',
        price: 89.90,
        color: 'Azul e Preto',
        colors: ['Azul', 'Preto'],
        tag: 'Novo',
        categories: ['pulseiras', 'novidade'],
        image: './assets/images/produto-17.jpeg',
        images: ['./assets/images/produto-17.jpeg', './assets/images/produto-18.jpeg', './assets/images/produto-7.png', './assets/images/produto-16.jpeg'],
        description: 'Pulseira com assinatura SEORF, visual marcante e acabamento forte.',
        specs: ['Assinatura SEORF', 'Linha Riviera', 'Visual esportivo premium']
    },
    {
        id: 'seorf-08',
        name: 'Bracelete Lisboa',
        price: 69.98,
        color: 'Prata',
        colors: ['Prata'],
        tag: '',
        categories: ['pulseiras'],
        image: './assets/images/produto-8.jpeg',
        description: 'Bracelete prata de linhas simples para compor sem excesso.',
        specs: ['Linhas simples', 'Bracelete minimalista', 'Acabamento polido']
    },
    {
        id: 'seorf-09',
        name: 'Pulseira Viena',
        price: 69.90,
        color: 'Vermelha',
        colors: ['Vermelha'],
        tag: '',
        categories: ['pulseiras'],
        image: './assets/images/produto-9.jpeg',
        description: 'Versão vermelha da Viena, intensa e pronta para destacar o look.',
        specs: ['Destaque no look', 'Pulseira de corda', 'Detalhe metálico']
    },
    {
        id: 'seorf-10',
        name: 'Pulseira 7 Nós',
        price: 39.90,
        color: 'Vermelha',
        colors: ['Vermelha'],
        tag: '',
        categories: ['pulseiras'],
        image: './assets/images/produto-11.jpeg',
        description: 'Pulseira vermelha de sete nós, leve e cheia de personalidade.',
        specs: ['Leve e expressiva', 'Modelo 7 nós', 'Uso casual e versátil']
    },
    {
        id: 'seorf-11',
        name: 'Pulseira Mônaco',
        price: 69.90,
        color: 'Azul e Preto',
        colors: ['Azul', 'Preto'],
        tag: 'Novo',
        categories: ['pulseiras', 'novidade'],
        image: './assets/images/produto-12.png',
        images: ['./assets/images/produto-12.png', './assets/images/produto-13.png'],
        description: 'Trama azul e preta com acabamento limpo e presença versátil.',
        specs: ['Presença versátil', 'Trama texturizada', 'Acabamento premium']
    },
    {
        id: 'seorf-12',
        name: 'Colar Salvatore',
        price: 119.90,
        color: 'Prata',
        colors: ['Prata'],
        tag: 'Destaque',
        categories: ['colares', 'destaque'],
        image: './assets/images/produto-19.jpeg',
        description: 'Colar prata de presença elegante para produções mais refinadas.',
        specs: ['Presença refinada', 'Colar premium', 'Acabamento metálico']
    },
    {
        id: 'seorf-13',
        name: 'Pulseira Zurique',
        price: 79.90,
        color: 'Prata',
        colors: ['Prata'],
        tag: 'Novo',
        categories: ['pulseiras', 'novidade'],
        image: './assets/images/produto-21.png',
        description: 'Pulseira prata com visual urbano, discreto e sofisticado.',
        specs: ['Visual urbano', 'Design limpo', 'Acabamento polido']
    },
    {
        id: 'seorf-14',
        name: 'Colar Belém',
        price: 79.90,
        color: 'Prata',
        colors: ['Prata'],
        tag: 'Novo',
        categories: ['colares', 'novidade'],
        image: './assets/images/produto-23.png',
        description: 'Colar prata leve, com brilho sutil e acabamento versátil.',
        specs: ['Brilho sutil', 'Colar leve', 'Acabamento prateado']
    }
];

let cart = [];
let activeFilter = 'todos';
let activeSearch = '';
let pendingFilter = 'todos';
let activePriceMax = Infinity;
let pendingPriceMax = Infinity;
let activeColorFilters = [];
let pendingColorFilters = [];
let modalQuantity = 1;
let activeModalProductId = null;
let selectedModalColor = '';
let favoriteProductIds = [];

document.addEventListener('DOMContentLoaded', () => {
    initializeLoader();
    initializeHeader();
    initializeNavigation();
    initializeHeroCarousel();
    loadFavorites();
    initializeProducts();
    initializeFilters();
    initializeCart();
    initializeFavorites();
    initializeFAQ();
    loadCart();
    renderCart();
    renderFavorites();
    handleInitialHash();
});

function resolveAsset(path) {
    if (!path || path.startsWith('http')) return path;
    const script = document.querySelector('script[src$="js/script.js"]');
    const scriptSource = script?.getAttribute('src') || './js/script.js';
    const assetPrefix = scriptSource.startsWith('../') ? '../assets/' : './assets/';

    return path.replace('./assets/', assetPrefix);
}

function formatPrice(value) {
    return Number.isFinite(value) ? formatterBRL.format(value) : 'A definir';
}

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function normalizeSearchText(value) {
    return String(value)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
}

function getProduct(productId) {
    return products.find(product => product.id === productId);
}

function getProductImages(product) {
    return product.images && product.images.length ? product.images : [product.image];
}

function getProductColors(product) {
    return product.colors && product.colors.length ? product.colors : [product.color].filter(Boolean);
}

function getDefaultProductColor(product) {
    return getProductColors(product)[0] || product.color || 'Única';
}

function createCartItemKey(productId, color) {
    return `${productId}::${normalizeSearchText(color || '')}`;
}

function getCartItemKey(item) {
    return item.cartId || createCartItemKey(item.id, item.color || '');
}

function initializeLoader() {
    const loader = document.getElementById('siteLoader');
    if (!loader) return;

    const progress = loader.querySelector('.loader-tide');
    const skipLoader = new URLSearchParams(window.location.search).get('skipLoader') === '1';
    let progressValue = 0;
    let completed = false;

    const setProgress = value => {
        progressValue = Math.max(0, Math.min(100, value));
        loader.style.setProperty('--loader-progress', `${progressValue}%`);
        if (progress) {
            progress.setAttribute('aria-valuenow', String(Math.round(progressValue)));
        }
    };

    const finish = (immediate = false) => {
        if (completed) return;
        completed = true;
        setProgress(100);

        const removeLoader = () => {
            document.body.classList.remove('is-loading');
            if (immediate) {
                loader.remove();
                return;
            }
            loader.classList.add('site-loader--hidden');
            loader.setAttribute('aria-hidden', 'true');
            setTimeout(() => loader.remove(), 760);
        };

        setTimeout(removeLoader, immediate ? 0 : 360);
    };

    if (skipLoader) {
        finish(true);
        return;
    }

    const timer = setInterval(() => {
        if (completed) {
            clearInterval(timer);
            return;
        }
        progressValue += (88 - progressValue) * 0.08;
        setProgress(progressValue);
    }, 70);

    setProgress(8);
    window.addEventListener('load', () => setTimeout(finish, 900), { once: true });
    setTimeout(finish, 4200);
}

function initializeHeader() {
    const header = document.querySelector('[data-site-header]');
    if (!header) return;

    const updateHeader = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 16);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
}

function initializeNavigation() {
    const header = document.querySelector('[data-site-header]');
    const menu = document.getElementById('primaryNav');
    const toggle = document.querySelector('.menu-toggle');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('active');
            toggle.classList.toggle('active', isOpen);
            toggle.setAttribute('aria-expanded', String(isOpen));
            if (header) header.classList.toggle('menu-open', isOpen);
        });
    }

    document.querySelectorAll('[data-scroll-to]').forEach(button => {
        button.addEventListener('click', () => scrollToSection(button.dataset.scrollTo));
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => closeMobileMenu());
    });

    initializeActiveNavigation();
}

function initializeActiveNavigation() {
    const navLinks = [...document.querySelectorAll('.nav-menu a[data-nav-link]')];
    if (!navLinks.length) return;

    const page = document.body.dataset.page || 'home';
    const setActiveNav = activeKey => {
        navLinks.forEach(link => {
            const isActive = link.dataset.navLink === activeKey;
            link.classList.toggle('is-active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'page');
                return;
            }

            link.removeAttribute('aria-current');
        });
    };

    if (page !== 'home') {
        setActiveNav(page);
        return;
    }

    const sectionIds = [...new Set(navLinks.map(link => link.dataset.navLink))];
    const sections = sectionIds
        .map(sectionId => document.getElementById(sectionId))
        .filter(Boolean);

    if (!sections.length) return;

    let activeLockTimer = null;

    const getHeaderOffset = () => (
        Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10) || 76
    );

    const updateActiveFromScroll = () => {
        if (activeLockTimer) return;

        const marker = window.scrollY + getHeaderOffset() + Math.min(window.innerHeight * 0.32, 220);
        const activeSection = sections.reduce((current, section) => (
            section.offsetTop <= marker ? section : current
        ), sections[0]);

        setActiveNav(activeSection.id);
    };

    const lockActiveSection = sectionId => {
        if (!document.getElementById(sectionId)) return;

        setActiveNav(sectionId);
        window.clearTimeout(activeLockTimer);
        activeLockTimer = window.setTimeout(() => {
            activeLockTimer = null;
            updateActiveFromScroll();
        }, 750);
    };

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const sectionId = link.dataset.navLink;
            if (sectionId) lockActiveSection(sectionId);
        });
    });

    window.addEventListener('scroll', updateActiveFromScroll, { passive: true });
    window.addEventListener('resize', updateActiveFromScroll);
    window.addEventListener('hashchange', () => {
        const sectionId = window.location.hash.replace('#', '');
        if (sectionId) {
            lockActiveSection(sectionId);
            return;
        }

        updateActiveFromScroll();
    });

    const initialSectionId = window.location.hash.replace('#', '');
    if (initialSectionId && document.getElementById(initialSectionId)) {
        lockActiveSection(initialSectionId);
    } else {
        updateActiveFromScroll();
    }
}

function closeMobileMenu() {
    const header = document.querySelector('[data-site-header]');
    const menu = document.getElementById('primaryNav');
    const toggle = document.querySelector('.menu-toggle');

    if (menu) menu.classList.remove('active');
    if (toggle) {
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
    }
    if (header) header.classList.remove('menu-open');
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const offset = Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10) || 76;
    const top = section.getBoundingClientRect().top + window.scrollY - offset + 2;
    window.scrollTo({ top, behavior: 'smooth' });
}

function initializeHeroCarousel() {
    const carousel = document.querySelector('[data-promo-carousel]');
    if (!carousel) return;

    const track = carousel.querySelector('.promo-carousel');
    const slides = [...carousel.querySelectorAll('.promo-slide')];
    const dots = [...carousel.querySelectorAll('[data-promo-dot]')];
    if (slides.length <= 1) return;

    let activeIndex = slides.findIndex(slide => slide.classList.contains('active'));
    if (activeIndex < 0) activeIndex = 0;
    let slideTimer = null;

    const setActiveSlide = index => {
        activeIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === activeIndex;
            slide.classList.toggle('active', isActive);
            slide.setAttribute('aria-hidden', String(!isActive));
        });
        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('active', dotIndex === activeIndex);
            dot.setAttribute('aria-current', dotIndex === activeIndex ? 'true' : 'false');
        });
        if (track) track.style.setProperty('--promo-index', String(activeIndex));
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            setActiveSlide(index);
            clearInterval(slideTimer);
            slideTimer = setInterval(() => setActiveSlide(activeIndex + 1), 5000);
        });
    });

    setActiveSlide(activeIndex);

    slideTimer = setInterval(() => setActiveSlide(activeIndex + 1), 5000);
}

function initializeProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const limit = Number.parseInt(grid.dataset.limit || '', 10);
    const visibleProducts = Number.isFinite(limit) ? products.slice(0, limit) : products;

    grid.innerHTML = visibleProducts.map(product => createProductCard(product)).join('');

    grid.addEventListener('click', event => {
        const favoriteButton = event.target.closest('[data-toggle-favorite]');
        if (favoriteButton) {
            toggleFavorite(favoriteButton.dataset.toggleFavorite);
            return;
        }

        const addButton = event.target.closest('[data-add-product]');
        if (addButton) {
            addToCart(addButton.dataset.addProduct);
            return;
        }

        const openButton = event.target.closest('[data-open-product]');
        if (openButton) {
            openProductModal(openButton.dataset.openProduct);
        }
    });
}

function createProductCard(product) {
    const [primaryImage] = getProductImages(product);
    const searchableText = normalizeSearchText([
        product.name,
        product.color,
        product.tag,
        product.description,
        product.categories.join(' ')
    ].join(' '));
    const tagMarkup = product.tag ? `<span class="product-tag">${escapeHTML(product.tag)}</span>` : '';
    const isFavorite = isFavoriteProduct(product.id);

    return `
        <article class="product-card" data-product-id="${product.id}" data-search="${escapeHTML(searchableText)}" data-categories="${product.categories.join(' ')}">
            <div class="product-media">
                <img src="${resolveAsset(primaryImage)}" alt="${escapeHTML(product.name)}" loading="lazy">
                ${tagMarkup}
                <button class="icon-action product-favorite ${isFavorite ? 'active' : ''}" type="button" data-toggle-favorite="${product.id}" aria-label="${isFavorite ? `Remover ${escapeHTML(product.name)} dos favoritos` : `Adicionar ${escapeHTML(product.name)} aos favoritos`}" aria-pressed="${isFavorite}">
                    <i class="fas fa-heart" aria-hidden="true"></i>
                </button>
                <button class="icon-action product-quick-add" type="button" data-add-product="${product.id}" aria-label="Adicionar ${escapeHTML(product.name)} ao carrinho">
                    <i class="fas fa-plus" aria-hidden="true"></i>
                </button>
            </div>
            <div class="product-info">
                <h3>${escapeHTML(product.name)}</h3>
                <div class="product-meta">
                    <strong class="product-price">${formatPrice(product.price)}</strong>
                    <span class="product-color">${escapeHTML(product.color)}</span>
                </div>
                <button class="product-open" type="button" data-open-product="${product.id}">Ver detalhes</button>
            </div>
        </article>
    `;
}

function getProductPriceRange() {
    const prices = products.map(product => product.price).filter(Number.isFinite);
    if (!prices.length) return { min: 0, max: 0 };

    return {
        min: Math.floor(Math.min(...prices)),
        max: Math.ceil(Math.max(...prices))
    };
}

function getCategoryLabel(filter) {
    const labels = {
        destaque: 'Destaques',
        novidade: 'Novidades',
        colares: 'Colares',
        pulseiras: 'Pulseiras'
    };

    return labels[filter] || 'Todos';
}

function updateFilterSummary() {
    const summary = document.querySelector('[data-filter-summary]');
    if (!summary) return;

    const { max } = getProductPriceRange();
    const parts = [];
    if (activeFilter !== 'todos') parts.push(getCategoryLabel(activeFilter));
    if (Number.isFinite(activePriceMax) && activePriceMax < max) parts.push(`até ${formatPrice(activePriceMax)}`);
    if (activeColorFilters.length) parts.push(activeColorFilters.join(', '));

    summary.textContent = parts.length ? parts.join(' · ') : 'Todos os produtos';
}

function updateFilterCounts() {
    document.querySelectorAll('[data-filter-count]').forEach(element => {
        const category = element.dataset.filterCount || '';
        const total = products.filter(product => product.categories.includes(category)).length;
        element.textContent = String(total);
    });
}

function productMatchesSelectedColors(product) {
    if (!activeColorFilters.length) return true;

    const searchableColors = normalizeSearchText([
        product.color,
        ...getProductColors(product)
    ].join(' '));

    return activeColorFilters.some(color => searchableColors.includes(normalizeSearchText(color)));
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const grid = document.getElementById('productsGrid');
    const filterToggle = document.querySelector('[data-filter-toggle]');
    const filterPanel = document.getElementById('catalogFilterPanel');
    const applyFiltersBtn = document.querySelector('[data-apply-filters]');
    const resetFilterButtons = document.querySelectorAll('[data-reset-filters]');
    const colorButtons = document.querySelectorAll('[data-color-filter]');
    const priceInput = document.getElementById('priceMaxInput');
    const priceMinLabel = document.querySelector('[data-price-min-label]');
    const priceCurrent = document.querySelector('[data-price-current]');
    const redirectSearch = searchInput?.dataset.searchMode === 'redirect';
    const searchTarget = searchInput?.dataset.searchTarget || '#produtos';
    const scrollTarget = searchInput?.dataset.searchSection || 'produtos';
    const priceRange = getProductPriceRange();
    const hasApplyButton = Boolean(applyFiltersBtn);

    const updateCategoryButtons = () => {
        filterButtons.forEach(item => {
            item.classList.toggle('active', item.dataset.filter === pendingFilter);
        });
    };

    const updatePriceDisplay = () => {
        if (priceMinLabel) priceMinLabel.textContent = `A partir de ${formatPrice(priceRange.min)}`;
        if (priceCurrent) {
            priceCurrent.textContent = pendingPriceMax >= priceRange.max ? 'Todos os preços' : `Até ${formatPrice(pendingPriceMax)}`;
        }
    };

    const resetFilters = ({ includeSearch = true, apply = true } = {}) => {
        activeFilter = 'todos';
        pendingFilter = 'todos';
        activePriceMax = priceRange.max;
        pendingPriceMax = priceRange.max;
        activeColorFilters = [];
        pendingColorFilters = [];
        if (includeSearch) {
            activeSearch = '';
            if (searchInput) searchInput.value = '';
        }
        if (priceInput) priceInput.value = String(priceRange.max);
        colorButtons.forEach(button => button.classList.remove('active'));
        updateCategoryButtons();
        updatePriceDisplay();
        updateFilterSummary();
        if (apply) applyProductFilters();
    };

    updateFilterCounts();

    if (priceInput && Number.isFinite(priceRange.max)) {
        priceInput.min = String(priceRange.min);
        priceInput.max = String(priceRange.max);
        priceInput.value = String(priceRange.max);
        activePriceMax = priceRange.max;
        pendingPriceMax = priceRange.max;
        updatePriceDisplay();
    }

    if (filterToggle && filterPanel) {
        filterToggle.addEventListener('click', () => {
            const isOpen = filterToggle.classList.toggle('active');
            filterPanel.classList.toggle('active', isOpen);
            filterPanel.setAttribute('aria-hidden', String(!isOpen));
            filterToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            pendingFilter = button.dataset.filter || 'todos';
            updateCategoryButtons();

            if (!hasApplyButton) {
                activeFilter = pendingFilter;
                applyProductFilters();
                scrollToSection(scrollTarget);
            }
        });
    });

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.dataset.colorFilter || '';
            button.classList.toggle('active');
            pendingColorFilters = button.classList.contains('active')
                ? [...new Set([...pendingColorFilters, color])]
                : pendingColorFilters.filter(item => item !== color);
        });
    });

    if (priceInput) {
        priceInput.addEventListener('input', event => {
            pendingPriceMax = Number(event.target.value);
            updatePriceDisplay();
        });
    }

    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', () => {
            activeFilter = pendingFilter;
            activePriceMax = pendingPriceMax;
            activeColorFilters = [...pendingColorFilters];
            applyProductFilters();
            updateFilterSummary();
            scrollToSection(scrollTarget);
        });
    }

    resetFilterButtons.forEach(button => {
        button.addEventListener('click', () => resetFilters());
    });

    if (searchInput) {
        const params = new URLSearchParams(window.location.search);
        const initialSearch = params.get('busca') || params.get('q') || '';
        if (initialSearch && !redirectSearch) {
            searchInput.value = initialSearch;
            activeSearch = normalizeSearchText(initialSearch);
        }

        searchInput.addEventListener('input', event => {
            activeSearch = normalizeSearchText(event.target.value);
            if (!redirectSearch) applyProductFilters();
        });

        searchInput.addEventListener('keydown', event => {
            if (event.key !== 'Enter') return;
            event.preventDefault();
            closeMobileMenu();

            if (redirectSearch) {
                const query = event.target.value.trim();
                window.location.href = query ? `${searchTarget}?busca=${encodeURIComponent(query)}` : searchTarget;
                return;
            }

            scrollToSection(scrollTarget);
            searchInput.blur();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            resetFilters();
        });
    }

    updateCategoryButtons();
    updateFilterSummary();
    if (grid) applyProductFilters();
}

function applyProductFilters() {
    const cards = document.querySelectorAll('.product-card');
    const noResults = document.getElementById('noResults');
    let visible = 0;

    cards.forEach(card => {
        const product = getProduct(card.dataset.productId);
        const categories = card.dataset.categories || '';
        const searchableText = card.dataset.search || '';
        const matchesFilter = activeFilter === 'todos' || categories.includes(activeFilter);
        const matchesSearch = !activeSearch || searchableText.includes(activeSearch);
        const matchesPrice = !product || !Number.isFinite(activePriceMax) || product.price <= activePriceMax;
        const matchesColor = !product || productMatchesSelectedColors(product);
        const shouldShow = matchesFilter && matchesSearch && matchesPrice && matchesColor;

        card.classList.toggle('product-hidden', !shouldShow);
        card.style.display = shouldShow ? '' : 'none';
        if (shouldShow) visible += 1;
    });

    if (noResults) noResults.classList.toggle('hidden', visible !== 0);
}

function initializeCart() {
    const cartTriggers = document.querySelectorAll('.cart-trigger, .cart-icon');
    const cartModal = document.getElementById('cartModal');
    const closeButton = document.querySelector('.close-cart');
    const checkoutButton = document.getElementById('checkoutButton');

    cartTriggers.forEach(trigger => {
        trigger.addEventListener('click', event => {
            if (!cartModal) return;
            event.preventDefault();
            openCart();
        });
    });

    if (closeButton) closeButton.addEventListener('click', closeCart);

    if (cartModal) {
        cartModal.addEventListener('click', event => {
            if (event.target.matches('[data-close-cart]')) closeCart();
        });
    }

    if (checkoutButton) checkoutButton.addEventListener('click', checkout);
}

function openCart() {
    const cartModal = document.getElementById('cartModal');
    if (!cartModal) return;

    if (document.getElementById('favoritesModal')?.classList.contains('active')) {
        closeFavorites();
    }

    cartModal.classList.add('active');
    cartModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function closeCart() {
    const cartModal = document.getElementById('cartModal');
    if (!cartModal) return;

    cartModal.classList.remove('active');
    cartModal.setAttribute('aria-hidden', 'true');
    if (!document.querySelector('.product-modal.active, .cart-modal.active')) {
        document.body.classList.remove('modal-open');
    }
}

function initializeFavorites() {
    const favoriteTriggers = document.querySelectorAll('.favorites-trigger');
    const favoritesModal = document.getElementById('favoritesModal');
    const closeButton = document.querySelector('.close-favorites');

    favoriteTriggers.forEach(trigger => {
        trigger.addEventListener('click', event => {
            if (!favoritesModal) return;
            event.preventDefault();
            openFavorites();
        });
    });

    if (closeButton) closeButton.addEventListener('click', closeFavorites);

    if (favoritesModal) {
        favoritesModal.addEventListener('click', event => {
            if (event.target.matches('[data-close-favorites]')) closeFavorites();
        });
    }
}

function openFavorites() {
    const favoritesModal = document.getElementById('favoritesModal');
    if (!favoritesModal) return;

    renderFavorites();
    if (document.getElementById('cartModal')?.classList.contains('active')) {
        closeCart();
    }

    favoritesModal.classList.add('active');
    favoritesModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function closeFavorites() {
    const favoritesModal = document.getElementById('favoritesModal');
    if (!favoritesModal) return;

    favoritesModal.classList.remove('active');
    favoritesModal.setAttribute('aria-hidden', 'true');
    if (!document.querySelector('.product-modal.active, .cart-modal.active')) {
        document.body.classList.remove('modal-open');
    }
}

function isFavoriteProduct(productId) {
    return favoriteProductIds.includes(productId);
}

function toggleFavorite(productId) {
    const product = getProduct(productId);
    if (!product) return;

    const shouldRemove = isFavoriteProduct(productId);
    favoriteProductIds = shouldRemove
        ? favoriteProductIds.filter(id => id !== productId)
        : [productId, ...favoriteProductIds];

    saveFavorites();
    renderFavorites();
    showToast(shouldRemove ? 'Produto removido dos favoritos.' : 'Produto salvo nos favoritos.');
}

function removeFavorite(productId) {
    if (!isFavoriteProduct(productId)) return;

    favoriteProductIds = favoriteProductIds.filter(id => id !== productId);
    saveFavorites();
    renderFavorites();
    showToast('Produto removido dos favoritos.');
}

function renderFavoriteButtons() {
    const favoriteCount = String(favoriteProductIds.length);

    document.querySelectorAll('.favorite-count').forEach(element => {
        element.textContent = favoriteCount;
    });

    document.querySelectorAll('[data-toggle-favorite]').forEach(button => {
        const productId = button.dataset.toggleFavorite;
        const product = getProduct(productId);
        const isFavorite = isFavoriteProduct(productId);

        button.classList.toggle('active', isFavorite);
        button.setAttribute('aria-pressed', String(isFavorite));
        if (product) {
            button.setAttribute(
                'aria-label',
                isFavorite
                    ? `Remover ${product.name} dos favoritos`
                    : `Adicionar ${product.name} aos favoritos`
            );
        }
    });
}

function renderFavorites() {
    const favoriteItems = document.getElementById('favoriteItems');
    const favoriteProducts = favoriteProductIds.map(getProduct).filter(Boolean);

    renderFavoriteButtons();

    if (!favoriteItems) return;

    if (!favoriteProducts.length) {
        favoriteItems.innerHTML = '<p class="empty-cart">Nenhum produto curtido ainda.</p>';
        return;
    }

    favoriteItems.innerHTML = favoriteProducts.map(product => {
        const [primaryImage] = getProductImages(product);

        return `
        <article class="favorite-item">
            <button class="favorite-item-media" type="button" data-favorite-open="${product.id}" aria-label="Ver detalhes de ${escapeHTML(product.name)}">
                <img src="${resolveAsset(primaryImage)}" alt="${escapeHTML(product.name)}" loading="lazy">
            </button>
            <div class="favorite-item-copy">
                <div>
                    ${product.tag ? `<span class="favorite-item-tag">${escapeHTML(product.tag)}</span>` : ''}
                    <h4>${escapeHTML(product.name)}</h4>
                    <p>${escapeHTML(product.color || 'Cor única')}</p>
                </div>
                <strong>${formatPrice(product.price)}</strong>
                <div class="favorite-item-actions">
                    <button class="favorite-detail-btn" type="button" data-favorite-open="${product.id}">Detalhes</button>
                    <button class="qty-btn" type="button" data-favorite-add="${product.id}" aria-label="Adicionar ${escapeHTML(product.name)} ao carrinho">
                        <i class="fas fa-bag-shopping" aria-hidden="true"></i>
                    </button>
                    <button class="qty-btn remove-btn" type="button" data-favorite-remove="${product.id}" aria-label="Remover ${escapeHTML(product.name)} dos favoritos">
                        <i class="fas fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </article>
    `;
    }).join('');

    favoriteItems.querySelectorAll('[data-favorite-open]').forEach(button => {
        button.addEventListener('click', () => {
            closeFavorites();
            openProductModal(button.dataset.favoriteOpen);
        });
    });

    favoriteItems.querySelectorAll('[data-favorite-add]').forEach(button => {
        button.addEventListener('click', () => {
            addToCart(button.dataset.favoriteAdd);
        });
    });

    favoriteItems.querySelectorAll('[data-favorite-remove]').forEach(button => {
        button.addEventListener('click', () => removeFavorite(button.dataset.favoriteRemove));
    });
}

function saveFavorites() {
    localStorage.setItem(SEORF.favoriteKey, JSON.stringify(favoriteProductIds));
}

function loadFavorites() {
    try {
        const saved = localStorage.getItem(SEORF.favoriteKey);
        const parsed = saved ? JSON.parse(saved) : [];
        favoriteProductIds = Array.isArray(parsed)
            ? [...new Set(parsed.map(String).filter(id => getProduct(id)))]
            : [];
    } catch {
        favoriteProductIds = [];
    }
}

function addToCart(productId, quantity = 1, selectedColor = '') {
    const product = getProduct(productId);
    if (!product) return;

    const color = selectedColor || getDefaultProductColor(product);
    const cartId = createCartItemKey(productId, color);
    const item = cart.find(entry => getCartItemKey(entry) === cartId);
    if (item) {
        item.quantity += quantity;
    } else {
        cart.push({
            cartId,
            id: product.id,
            name: product.name,
            color,
            price: product.price,
            quantity
        });
    }

    saveCart();
    renderCart();
    showToast('Produto adicionado ao carrinho.');
}

function removeFromCart(cartItemKey) {
    cart = cart.filter(item => getCartItemKey(item) !== cartItemKey);
    saveCart();
    renderCart();
}

function updateCartQuantity(cartItemKey, quantity) {
    const item = cart.find(entry => getCartItemKey(entry) === cartItemKey);
    if (!item) return;

    if (quantity <= 0) {
        removeFromCart(cartItemKey);
        return;
    }

    item.quantity = quantity;
    saveCart();
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const countElements = document.querySelectorAll('.cart-count');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (Number.isFinite(item.price) ? item.price : 0) * item.quantity, 0);
    const hasAllPrices = cart.every(item => Number.isFinite(item.price));

    countElements.forEach(element => {
        element.textContent = String(totalItems);
    });

    if (subtotalElement) subtotalElement.textContent = hasAllPrices ? formatPrice(subtotal) : 'A definir';
    if (totalElement) totalElement.textContent = hasAllPrices ? formatPrice(subtotal) : 'A definir';

    if (!cartItems) return;

    if (!cart.length) {
        cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio.</p>';
        return;
    }

    cartItems.innerHTML = cart.map(item => {
        const cartItemKey = getCartItemKey(item);

        return `
        <article class="cart-item">
            <div>
                <h4>${escapeHTML(item.name)}</h4>
                <p>${escapeHTML(item.color || 'Cor única')} · ${formatPrice(item.price)} cada</p>
            </div>
            <div class="cart-controls">
                <button class="qty-btn" type="button" data-cart-decrease="${escapeHTML(cartItemKey)}" aria-label="Diminuir quantidade">
                    <i class="fas fa-minus" aria-hidden="true"></i>
                </button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" type="button" data-cart-increase="${escapeHTML(cartItemKey)}" aria-label="Aumentar quantidade">
                    <i class="fas fa-plus" aria-hidden="true"></i>
                </button>
                <button class="qty-btn remove-btn" type="button" data-cart-remove="${escapeHTML(cartItemKey)}" aria-label="Remover produto">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        </article>
    `;
    }).join('');

    cartItems.querySelectorAll('[data-cart-decrease]').forEach(button => {
        button.addEventListener('click', () => {
            const item = cart.find(entry => getCartItemKey(entry) === button.dataset.cartDecrease);
            if (item) updateCartQuantity(getCartItemKey(item), item.quantity - 1);
        });
    });

    cartItems.querySelectorAll('[data-cart-increase]').forEach(button => {
        button.addEventListener('click', () => {
            const item = cart.find(entry => getCartItemKey(entry) === button.dataset.cartIncrease);
            if (item) updateCartQuantity(getCartItemKey(item), item.quantity + 1);
        });
    });

    cartItems.querySelectorAll('[data-cart-remove]').forEach(button => {
        button.addEventListener('click', () => removeFromCart(button.dataset.cartRemove));
    });
}

function saveCart() {
    localStorage.setItem(SEORF.cartKey, JSON.stringify(cart));
}

function loadCart() {
    try {
        const saved = localStorage.getItem(SEORF.cartKey);
        cart = saved ? JSON.parse(saved) : [];
        cart = cart.map(item => {
            const product = getProduct(item.id);
            const color = item.color || (product ? getDefaultProductColor(product) : '');

            return {
                ...item,
                color,
                cartId: item.cartId || createCartItemKey(item.id, color)
            };
        });
    } catch {
        cart = [];
    }
}

function checkout() {
    if (!cart.length) {
        showToast('Seu carrinho está vazio.');
        return;
    }

    const note = document.getElementById('observacoes')?.value.trim();
    const hasAllPrices = cart.every(item => Number.isFinite(item.price));
    const total = cart.reduce((sum, item) => sum + (Number.isFinite(item.price) ? item.price : 0) * item.quantity, 0);
    const lines = [
        'Olá! Gostaria de realizar este pedido na SEORF:',
        ''
    ];

    cart.forEach(item => {
        lines.push(`Produto: ${item.name}`);
        lines.push(`Cor: ${item.color || 'Cor única'}`);
        lines.push(`Quantidade: ${item.quantity}`);
        lines.push(`Valor unitário: ${formatPrice(item.price)}`);
        lines.push('');
    });

    lines.push(hasAllPrices ? `Total: ${formatPrice(total)}` : 'Total: a confirmar');
    if (note) {
        lines.push('');
        lines.push(`Observações: ${note}`);
    }
    lines.push('');
    lines.push('Você pode confirmar a disponibilidade?');

    window.open(`https://wa.me/${SEORF.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');

    setTimeout(() => {
        cart = [];
        saveCart();
        renderCart();
        closeCart();
        showToast('Pedido enviado para o WhatsApp.');
    }, 500);
}

function openProductModal(productId) {
    const product = getProduct(productId);
    const modal = document.getElementById('productDetailModal');
    if (!product || !modal) return;

    activeModalProductId = product.id;
    modalQuantity = 1;
    selectedModalColor = getDefaultProductColor(product);
    modal.innerHTML = createProductModal(product);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    modal.querySelector('.close-product-modal')?.addEventListener('click', closeProductModal);
    modal.querySelector('[data-modal-decrease]')?.addEventListener('click', () => updateModalQuantity(-1));
    modal.querySelector('[data-modal-increase]')?.addEventListener('click', () => updateModalQuantity(1));
    modal.querySelector('[data-modal-add]')?.addEventListener('click', () => {
        addToCart(activeModalProductId, modalQuantity, selectedModalColor);
    });
    modal.querySelectorAll('[data-modal-color]').forEach(button => {
        button.addEventListener('click', () => {
            selectedModalColor = button.dataset.modalColor || selectedModalColor;
            modal.querySelectorAll('[data-modal-color]').forEach(item => item.classList.remove('active'));
            button.classList.add('active');
        });
    });
    modal.querySelectorAll('[data-modal-image]').forEach(button => {
        button.addEventListener('click', () => {
            const image = button.dataset.modalImage;
            const mainImage = modal.querySelector('[data-main-modal-image]');
            if (mainImage) mainImage.src = resolveAsset(image);
            resetProductZoom(modal);
            modal.querySelectorAll('[data-modal-image]').forEach(item => item.classList.remove('active'));
            button.classList.add('active');
        });
    });
    initializeProductZoom(modal);

    modal.addEventListener('click', event => {
        if (event.target === modal) closeProductModal();
    }, { once: true });
}

function createProductModal(product) {
    const images = getProductImages(product);
    const [primaryImage] = images;
    const colors = getProductColors(product);

    return `
        <section class="product-modal-panel" role="dialog" aria-modal="true" aria-labelledby="productModalTitle">
            <button class="icon-action close-product-modal" type="button" aria-label="Fechar detalhes">
                <i class="fas fa-xmark" aria-hidden="true"></i>
            </button>
            <div class="product-modal-layout">
                <div class="modal-media">
                    <button class="modal-zoom" type="button" data-zoom-stage aria-label="Ampliar imagem do produto" aria-pressed="false">
                        <img src="${resolveAsset(primaryImage)}" alt="${escapeHTML(product.name)}" data-main-modal-image draggable="false">
                        <span class="modal-zoom-indicator" aria-hidden="true">
                            <i class="fas fa-magnifying-glass-plus zoom-in-icon"></i>
                            <i class="fas fa-magnifying-glass-minus zoom-out-icon"></i>
                        </span>
                    </button>
                    ${images.length > 1 ? `
                        <div class="modal-thumbs">
                            ${images.map((image, index) => `
                                <button class="${index === 0 ? 'active' : ''}" type="button" data-modal-image="${image}" aria-label="Ver imagem ${index + 1} de ${escapeHTML(product.name)}">
                                    <img src="${resolveAsset(image)}" alt="">
                                </button>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
                <div class="modal-copy">
                    ${product.tag ? `<p class="eyebrow">${escapeHTML(product.tag)}</p>` : ''}
                    <h2 id="productModalTitle">${escapeHTML(product.name)}</h2>
                    <strong class="modal-price">${formatPrice(product.price)}</strong>
                    <p class="modal-description">${escapeHTML(product.description)}</p>
                    <div class="modal-color-options">
                        <span>Cor disponível</span>
                        <div class="modal-color-list">
                            ${colors.map((color, index) => `
                                <button class="${index === 0 ? 'active' : ''}" type="button" data-modal-color="${escapeHTML(color)}">
                                    ${escapeHTML(color)}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    <ul class="modal-specs">
                        ${product.specs.map(spec => `<li>${escapeHTML(spec)}</li>`).join('')}
                    </ul>
                    <div class="modal-actions">
                        <div class="quantity-control">
                            <button class="qty-btn" type="button" data-modal-decrease aria-label="Diminuir quantidade">
                                <i class="fas fa-minus" aria-hidden="true"></i>
                            </button>
                            <span class="qty-value" data-modal-quantity>${modalQuantity}</span>
                            <button class="qty-btn" type="button" data-modal-increase aria-label="Aumentar quantidade">
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                        <button class="btn btn-dark full-width" type="button" data-modal-add>
                            <i class="fas fa-bag-shopping" aria-hidden="true"></i>
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function initializeProductZoom(modal) {
    const zoomStage = modal.querySelector('[data-zoom-stage]');
    if (!zoomStage) return;

    let pointerIsDown = false;
    let pointerMoved = false;

    zoomStage.addEventListener('click', event => {
        if (pointerMoved) {
            pointerMoved = false;
            return;
        }

        setProductZoomState(zoomStage, !zoomStage.classList.contains('is-zoomed'), event.detail ? event : null);
    });

    zoomStage.addEventListener('pointerdown', event => {
        pointerIsDown = true;
        pointerMoved = false;

        if (zoomStage.classList.contains('is-zoomed')) {
            zoomStage.setPointerCapture?.(event.pointerId);
            updateProductZoomPosition(zoomStage, event);
        }
    });

    zoomStage.addEventListener('pointermove', event => {
        if (!zoomStage.classList.contains('is-zoomed')) return;

        if (pointerIsDown) {
            pointerMoved = true;
            event.preventDefault();
        }

        updateProductZoomPosition(zoomStage, event);
    });

    const releasePointer = () => {
        pointerIsDown = false;
    };

    zoomStage.addEventListener('pointerup', releasePointer);
    zoomStage.addEventListener('pointercancel', releasePointer);
    zoomStage.addEventListener('lostpointercapture', releasePointer);

}

function updateProductZoomPosition(zoomStage, event) {
    const bounds = zoomStage.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;

    const x = Math.min(100, Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100));
    const y = Math.min(100, Math.max(0, ((event.clientY - bounds.top) / bounds.height) * 100));

    zoomStage.style.setProperty('--zoom-x', `${x}%`);
    zoomStage.style.setProperty('--zoom-y', `${y}%`);
}

function setProductZoomState(zoomStage, shouldZoom, event) {
    zoomStage.classList.toggle('is-zoomed', shouldZoom);
    zoomStage.setAttribute('aria-pressed', String(shouldZoom));
    zoomStage.setAttribute('aria-label', shouldZoom ? 'Reduzir imagem do produto' : 'Ampliar imagem do produto');

    if (shouldZoom && event) {
        updateProductZoomPosition(zoomStage, event);
        return;
    }

    if (shouldZoom) {
        zoomStage.style.setProperty('--zoom-x', '50%');
        zoomStage.style.setProperty('--zoom-y', '50%');
        return;
    }

    zoomStage.style.removeProperty('--zoom-x');
    zoomStage.style.removeProperty('--zoom-y');
}

function resetProductZoom(modal) {
    const zoomStage = modal.querySelector('[data-zoom-stage]');
    if (!zoomStage) return;

    setProductZoomState(zoomStage, false);
}

function updateModalQuantity(change) {
    modalQuantity = Math.max(1, modalQuantity + change);
    const quantityElement = document.querySelector('[data-modal-quantity]');
    if (quantityElement) quantityElement.textContent = String(modalQuantity);
}

function closeProductModal() {
    const modal = document.getElementById('productDetailModal');
    if (!modal) return;

    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = '';
    activeModalProductId = null;
    selectedModalColor = '';
    if (!document.querySelector('.cart-modal.active')) {
        document.body.classList.remove('modal-open');
    }
}

function initializeFAQ() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq-item');
            const list = question.closest('.faq-list');
            const isActive = item.classList.contains('active');

            list?.querySelectorAll('.faq-item').forEach(entry => entry.classList.remove('active'));
            item.classList.toggle('active', !isActive);
        });
    });
}

function handleInitialHash() {
    if (window.location.hash === '#cartModal' || window.location.hash === '#cart') {
        openCart();
        return;
    }

    if (window.location.hash === '#favoritesModal' || window.location.hash === '#favoritos') {
        openFavorites();
        return;
    }

    const sectionId = window.location.hash.replace('#', '');
    if (sectionId && document.getElementById(sectionId)) {
        window.setTimeout(() => scrollToSection(sectionId), 120);
    }
}

function showToast(message) {
    const root = document.getElementById('toastRoot');
    if (!root) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    root.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-8px)';
        setTimeout(() => toast.remove(), 220);
    }, 2600);
}

document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    closeProductModal();
    closeFavorites();
    closeCart();
    closeMobileMenu();
});
