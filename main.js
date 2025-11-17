/**
 * Système de révélation des éléments au scroll
 */
const ratio = 0.1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
};

const handleIntersect = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.remove('reveal');
            observer.unobserve(entry.target);
        }
    });
};

document.documentElement.classList.add('reveal-loaded');
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(r => {
    observer.observe(r);
});

/**
 * Menu de navigation sur phone
 */
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', event => {
        event.currentTarget.classList.toggle('open');
        const topbarLinks = document.querySelector('.topbar-links');
        if (topbarLinks) {
            topbarLinks.classList.toggle('open');
        }
    });
}

const navTopbarItems = document.querySelectorAll('.nav-topbar li');
navTopbarItems.forEach(li => {
    li.addEventListener('click', () => {
        if (menuToggle) {
            menuToggle.classList.remove('open');
        }
        const topbarLinks = document.querySelector('.topbar-links');
        if (topbarLinks) {
            topbarLinks.classList.remove('open');
        }
    });
});