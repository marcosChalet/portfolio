import './assets'
const progresso = document.getElementById('progresso')
const botoes = document.querySelectorAll('.btn-item')
const camposDescricao = document.querySelectorAll('.descricao')

let carreiraSelecionada = 0
const qtdCarreiras = botoes.length - 1
let time

// Mover ao clicar
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



function selecionaProxCarreira(proxIndice) {
   if (proxIndice > qtdCarreiras) {
      carreiraSelecionada = 0
   }else {
      carreiraSelecionada = proxIndice
   }
}

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
         btn.classList.add('selecionado')
      }else {
         btn.classList.remove('selecionado')
      }
   })
}

function removeDescricao() {
   camposDescricao.forEach(descricao => {
      descricao.classList.remove('ativo')
   })
}

function addDescricaoSelecionada(indiceDescricao) {
   camposDescricao[indiceDescricao].classList.add('ativo')
}

function atualizaProgresso(indice) {
   progresso.style.width = (indice / (botoes.length - 1) * 100 + '%')
}
