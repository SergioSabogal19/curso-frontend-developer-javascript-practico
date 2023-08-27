const navEmail = document.getElementsByClassName('navbar-email');
const desktopMenu= document.getElementsByClassName('desktop-menu');

navEmail[0].addEventListener('click', toggleMenu);

function toggleMenu() {

    desktopMenu[0].classList.toggle('inactive');

}
console.log('funcionando');