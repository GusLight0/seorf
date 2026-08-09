const loader = document.getElementById("siteLoader");
const yearTarget = document.querySelector("[data-current-year]");
const creditTarget = document.querySelector("[data-credit-typewriter]");
const creditCaret = document.querySelector("[data-credit-caret]");
let loaderHidden = false;
let creditTypewriterStarted = false;
let creditCaretStarted = false;

if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
}

function updateLoader(progress) {
    if (!loader) {
        return;
    }

    const value = Math.max(0, Math.min(100, progress));
    loader.style.setProperty("--loader-progress", `${value}%`);
    loader
        .querySelector(".loader-bar")
        ?.setAttribute("aria-valuenow", String(Math.round(value)));
}

function hideLoader() {
    if (loaderHidden) {
        return;
    }

    loaderHidden = true;

    if (!loader) {
        document.body.classList.remove("is-loading");
        startCreditTypewriter();
        return;
    }

    updateLoader(100);

    window.setTimeout(() => {
        loader.classList.add("site-loader--hidden");
        document.body.classList.remove("is-loading");
        startCreditTypewriter();
    }, 280);

    window.setTimeout(() => {
        loader.remove();
    }, 900);
}

function startCreditTypewriter() {
    if (!creditTarget || creditTypewriterStarted) {
        return;
    }

    creditTypewriterStarted = true;
    startCreditCaret();

    const text = creditTarget.dataset.creditTypewriter || creditTarget.textContent.trim();
    const stepTime = 3000 / text.length;
    let index = 0;
    let isDeleting = false;

    function tick() {
        creditTarget.textContent = text.slice(0, index);

        if (!isDeleting && index < text.length) {
            index += 1;
            window.setTimeout(tick, stepTime);
            return;
        }

        if (!isDeleting && index === text.length) {
            isDeleting = true;
            window.setTimeout(tick, 5000);
            return;
        }

        if (isDeleting && index > 0) {
            index -= 1;
            window.setTimeout(tick, stepTime);
            return;
        }

        isDeleting = false;
        window.setTimeout(tick, 350);
    }

    tick();
}

function startCreditCaret() {
    if (!creditCaret || creditCaretStarted) {
        return;
    }

    creditCaretStarted = true;
    creditCaret.classList.remove("is-hidden");

    window.setInterval(() => {
        creditCaret.classList.toggle("is-hidden");
    }, 280);
}

function initializeLoader() {
    let progress = 0;
    const timer = window.setInterval(() => {
        progress += Math.max(3, (96 - progress) * 0.12);
        updateLoader(progress);

        if (progress >= 96) {
            window.clearInterval(timer);
        }
    }, 90);

    window.addEventListener("load", () => {
        window.setTimeout(() => {
            window.clearInterval(timer);
            hideLoader();
        }, 450);
    });

    window.setTimeout(() => {
        window.clearInterval(timer);
        hideLoader();
    }, 2600);
}

function initializeReveal() {
    const revealItems = document.querySelectorAll(".reveal-item");

    if (!("IntersectionObserver" in window)) {
        revealItems.forEach((item) => item.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.18,
            rootMargin: "0px 0px -20px"
        }
    );

    revealItems.forEach((item) => observer.observe(item));
}

function initializeLinkFeedback() {
    document.querySelectorAll(".bio-link").forEach((link) => {
        link.addEventListener("pointerdown", () => {
            link.classList.remove("is-pressed");
            window.requestAnimationFrame(() => link.classList.add("is-pressed"));
        });

        link.addEventListener("animationend", () => {
            link.classList.remove("is-pressed");
        });
    });
}

function initializeStoreCarousel() {
    document.querySelectorAll(".store-carousel").forEach((carousel) => {
        const track = carousel.querySelector(".carousel-track");
        const firstSet = carousel.querySelector(".carousel-slide-set:not([aria-hidden='true'])");

        if (!track || !firstSet) {
            return;
        }

        function syncCarousel() {
            const distance = firstSet.getBoundingClientRect().width;

            if (!distance) {
                return;
            }

            const duration = Math.max(20, distance / 42);
            carousel.style.setProperty("--carousel-offset", `-${distance}px`);
            carousel.style.setProperty("--carousel-duration", `${duration}s`);

            track.style.animation = "none";
            track.offsetHeight;
            track.style.animation = "";
        }

        firstSet.querySelectorAll("img").forEach((image) => {
            if (!image.complete) {
                image.addEventListener("load", syncCarousel, { once: true });
            }
        });

        window.addEventListener("resize", syncCarousel);
        syncCarousel();
    });
}

initializeLoader();
initializeReveal();
initializeLinkFeedback();
initializeStoreCarousel();
