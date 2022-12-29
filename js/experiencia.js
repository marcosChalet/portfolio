const progresso = document.getElementById('js-select--time')
const botoes = document.querySelectorAll('.js-button')
const camposDescricao = document.querySelectorAll('.js-experiencia')

let carreiraSelecionada = 0
const qtdCarreiras = botoes.length - 1
let time

//Mover ao clicar
botoes.forEach((botao, indice) => {
   botao.addEventListener('click', () => {
      clearTimeout(time)
      mover(indice)
      time = setTimeout(() => apresentacaoAuto(), 4000)
   })
})

// Mover automaticamente
function apresentacaoAuto() {
   mover(carreiraSelecionada)
   time = setTimeout(() => apresentacaoAuto(), 4000)
}
apresentacaoAuto()


function mover(indice) {
   addSelecao(indice)
   removeDescricao()
   addDescricaoSelecionada(indice)
   atualizaProgresso(indice)
   selecionaProxCarreira(indice+1)
}

function addSelecao(indice) {
   botoes.forEach((btn, curIndice) => {
      if (curIndice <= indice) {
         btn.classList.add('c-btn__slide--select')
      } else {
         btn.classList.remove('c-btn__slide--select')
      }
   })
}

function removeDescricao() {
   camposDescricao.forEach(descricao => {
      descricao.style.display = "none"
   })
}

function addDescricaoSelecionada(indiceDescricao) {
   camposDescricao[indiceDescricao].style.display = "flex"
}

function atualizaProgresso(indice) {
   progresso.style.width = (indice / (botoes.length - 1) * 100 + '%')
}


function selecionaProxCarreira(proxIndice) {
   if (proxIndice > qtdCarreiras) {
      carreiraSelecionada = 0
   }else {
      carreiraSelecionada = proxIndice
   }
}

