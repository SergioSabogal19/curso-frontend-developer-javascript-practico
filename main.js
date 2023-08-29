const navEmail = document.getElementsByClassName('navbar-email');
const desktopMenu= document.getElementsByClassName('desktop-menu');
const iconMobileMenu = document.getElementsByClassName('menu');
const mobileMenu = document.getElementsByClassName('mobile-menu');
const iconShoppingCart =  document.getElementsByClassName('navbar-shopping-cart');
const asideShoppingCart = document.getElementsByClassName('product-detail');

const isClosedMenuCart = asideShoppingCart[0].classList.contains('inactive');
const isClosedMenuMobile = mobileMenu[0].classList.contains('inactive');
const isClosedMenuDesktop = desktopMenu[0].classList.contains('inactive');

navEmail[0].addEventListener('click', toggleMenu);
iconMobileMenu[0].addEventListener('click', toggleMobileMenu);
iconShoppingCart[0].addEventListener('click', toggleMenuCart);

function toggleMenu() {
    desktopMenu[0].classList.toggle('inactive');
    if (isClosedMenuCart) {
        asideShoppingCart[0].classList.add('inactive');
    }
}

function toggleMobileMenu() {
    mobileMenu[0].classList.toggle('inactive');
    if (isClosedMenuCart) {
        asideShoppingCart[0].classList.add('inactive');
    }
}

function toggleMenuCart() {
    asideShoppingCart[0].classList.toggle('inactive');
    if (isClosedMenuMobile) {
        mobileMenu[0].classList.add('inactive');
    }
    if (isClosedMenuDesktop) {
        desktopMenu[0].classList.add('inactive');
    }

}
console.log('funcionando');