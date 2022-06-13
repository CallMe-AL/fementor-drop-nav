const sidebarImg = document.querySelector('.sidebar-img');
const overlay = document.querySelector('.overlay');
const mobileNav = document.querySelector('.mobile-nav');
const dropMenu = [...document.querySelectorAll('.drop-tag')];

const checkMobileNav = () => {
  if (!mobileNav.classList.contains('open')) {
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-expanded', 'true');
    overlay.classList.add('visible');
    document.body.classList.add('fix-body');
    sidebarImg.src = './images/icon-close-menu.svg';
    sidebarImg.alt = 'close menu';
  } else {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('visible');
    document.body.classList.remove('fix-body');
    sidebarImg.src = './images/icon-menu.svg';
    sidebarImg.alt = 'hamburger menu';
  }
}

sidebarImg.addEventListener('click', checkMobileNav);

overlay.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  mobileNav.setAttribute('aria-expanded', 'false');
  overlay.classList.remove('visible');
  document.body.classList.remove('fix-body');
  sidebarImg.src = './images/icon-menu.svg';
  sidebarImg.alt = 'hamburger menu';
});

dropMenu.forEach(menu => {
  menu.addEventListener('click', () => {
    let sibling = menu.nextElementSibling;
    let img = menu.firstElementChild;

    // checking if dropdown menu is hidden or visible
    if (sibling.classList.contains('hidden')) {
      sibling.classList.remove('hidden');
      sibling.classList.add('visible');
      img.src = './images/icon-arrow-up.svg';
      img.alt = 'arrow up';
      menu.setAttribute('aria-expanded', 'true');
      sibling.setAttribute('aria-expanded', 'true');
    } else {
      sibling.classList.add('hidden');
      sibling.classList.remove('visible');
      img.src = './images/icon-arrow-down.svg';
      img.alt = 'arrow down';
      menu.setAttribute('aria-expanded', 'false');
      sibling.setAttribute('aria-expanded', 'false');
    }
  });
});