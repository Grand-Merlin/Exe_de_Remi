const mainMenu = document.querySelector('.menuBurger');
const menu = document.querySelector('#mainMenu');

// -------BOUTTON MENU------- //

mainMenu.addEventListener('click', visibleMenu);

function visibleMenu() {
  if (menu.classList.contains('menuVisible')) {
    menu.classList.replace('menuVisible', 'menuHide');
  } else {
    menu.classList.replace('menuHide', 'menuVisible');
  }
}
