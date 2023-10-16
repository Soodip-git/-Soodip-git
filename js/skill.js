const tabMenu = document.querySelectorAll('.tab_menu_List');
const tabContent = document.querySelectorAll('.tab_content');

tabMenu.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabContent.forEach((content) => {
      content.classList.remove('active')
    })
    tabMenu.forEach((menu) => {
      menu.classList.remove('active')
    })
    tabMenu[index].classList.add('active')
    tabContent[index].classList.add('active')
  })
})