// Drop down boxes
const dropDownMenu = document.getElementsByClassName('drop-section')

for (i = 0; i < dropDownMenu.length; i++) {
  dropDownMenu[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

// Scroll bar disappear/reappear

let prevScrollPos = window.scrollY
let navbar = document.querySelector('.navbar')
let navListVert = document.querySelector('.navlist-vert')

window.onscroll = function () {
  let currentScrollPos = window.scrollY

  if (prevScrollPos > currentScrollPos) {
    navbar.style.transform = 'translateY(0)'
    navListVert.style.transform = 'translateY(0)'
  } else {
    navbar.style.transform = 'translateY(-100%)'
    navListVert.style.transform = 'translateY(-100%)'
  }

  prevScrollPos = currentScrollPos
}

// menu compress
function toggleMenu() {
  let menuToggle = document.querySelector('.menu-toggle')
  let navlistVert = document.querySelector('.navlist-vert')

  menuToggle.classList.toggle('active')
  navlistVert.classList.toggle('active')
}

//
function menuAnimation() {
  let bar1 = document.querySelector('.bar1')
  let bar2 = document.querySelector('.bar2')
  let bar3 = document.querySelector('.bar3')
  bar1.classList.toggle('active')
  bar2.classList.toggle('active')
  bar3.classList.toggle('active')
}
