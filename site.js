const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const header = document.querySelector('[data-header]');

if (menuButton && menu) {
  const closeMenu = (restoreFocus = false) => {
    if (!menu.classList.contains('is-open')) return;
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    if (restoreFocus) menuButton.focus();
  };

  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu(true);
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) closeMenu();
  }, { passive: true });
}

const setHeader = () => header?.classList.toggle('is-stuck', window.scrollY > 24);
setHeader();
window.addEventListener('scroll', setHeader, { passive: true });

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reducedMotion || !('IntersectionObserver' in window)) {
  document.querySelectorAll('.reveal').forEach((node) => node.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
}
