const hero =  document.querySelector('section.js-show--effect')
const curriculo = document.querySelector('section.js-curriculo')
const header = document.querySelector('header.js-header')
let heroAnimando = true
let headerTheme = false
let idAnimacao

window.addEventListener("scroll", function() {
  clearTimeout(idAnimacao)
  idAnimacao = setTimeout(animar, 10);
})

function animar() {
  const sy = this.scrollY

  if (sy > 230 && !headerTheme) {
    header.classList.add('c-header--theme')
    headerTheme = true
  } 
  else if (sy < 220 && headerTheme) { 
    header.classList.remove('c-header--theme')
    headerTheme = false
  }

  if (sy < 560 && !heroAnimando) {
    hero.classList.add('c-home--animate')
    heroAnimando = true
  }

  if (sy > 400+curriculo.scrollHeight && heroAnimando) {
    hero.classList.remove('c-home--animate')
    heroAnimando = false
  }

}
