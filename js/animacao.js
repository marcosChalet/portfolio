const hero = document.querySelector('section.js-show--effect')
const form = document.querySelector('section.js-form')

const heroObserver = new IntersectionObserver(() => {
  hero.classList.toggle('c-home--animate')
})

const headerObserver = new IntersectionObserver(() => {
  form.classList.toggle('c-header--theme')
})

window.addEventListener("load", () => {
  heroObserver.observe(form)
  headerObserver.observe(hero)
}, false)
