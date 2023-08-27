const navEmail = document.getElementsByClassName('navbar-email');
const desktopMenu= document.getElementsByClassName('desktop-menu');
const iconMobileMenu = document.getElementsByClassName('menu');
const mobileMenu = document.getElementsByClassName('mobile-menu');


navEmail[0].addEventListener('click', toggleMenu);
iconMobileMenu[0].addEventListener('click', toggleMobileMenu);

function toggleMenu() {

    desktopMenu[0].classList.toggle('inactive');

}

function toggleMobileMenu() {

    mobileMenu[0].classList.toggle('inactive');

}

console.log('funcionando');