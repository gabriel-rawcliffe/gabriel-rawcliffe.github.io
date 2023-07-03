// Drop down boxes
const dropDownMenu = document.getElementsByClassName('drop-section')

for (i = 0; i < dropDownMenu.length; i++) {
  dropDownMenu[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
