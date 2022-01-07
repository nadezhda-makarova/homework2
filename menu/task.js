const NodeCollectionLink = document.querySelectorAll('.menu__link');
const showMenu = (elem) => {
  elem.preventDefault();
  document.querySelectorAll('.menu_active').forEach(item => {
    item.classList.remove('menu_active');
  });
  elem.target.parentElement.querySelector('.menu').classList.add('menu_active');
}

NodeCollectionLink.forEach((item, index) => {
  const parrent = item.parentElement;
  if(parrent.getElementsByClassName('menu').length > 0) {
    NodeCollectionLink[index].addEventListener('click', showMenu);
  }
})
