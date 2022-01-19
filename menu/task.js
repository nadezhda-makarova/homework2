const NodeCollectionLink = document.querySelectorAll('.menu__link');
const showMenu = (e, element) => {
  const subMenu = element.parentElement.querySelector('.menu');
  e.preventDefault();
  if(subMenu.classList.contains('menu_active')) {
    return subMenu.classList.remove('menu_active');
  } else {
    document.querySelectorAll('.menu_active').forEach(item => {
      item.classList.remove('menu_active');
    });
    e.target.parentElement.querySelector('.menu').classList.add('menu_active');
  };
};

NodeCollectionLink.forEach((item, index) => {
  const parrent = item.parentElement;
  if(parrent.getElementsByClassName('menu').length > 0) {
    NodeCollectionLink[index].addEventListener('click', (e) => showMenu(e, item));
  };
});
