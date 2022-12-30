const componenteMenu = document.querySelector('.js-nav')
const menuIcon = document.querySelector('.js-nav--toggle')
const navLinks = Array.from(document.querySelectorAll('.c-nav__item a'))

menuIcon.addEventListener('click', () => {
  componenteMenu.classList.toggle('c-header__nav--open')

  navLinks.map(mlink => {
    mlink.addEventListener('click', () => {
      componenteMenu.classList.remove('c-header__nav--open')
    })
  })
})
