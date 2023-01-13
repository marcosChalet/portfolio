const modal = document.querySelector('div.js-modal')
const modalContent = document.querySelector('div.js-modal__content')
const projetos = Array.from(document.querySelectorAll('div.c-projetos__projeto'))

const contentProjects = [
  {
    id: "projeto1",
    title: "Calculadora Lógica",
    body: "Esse projeto foi desenvolvido com intuito de treinar os conceitos básicos de React através da criação de uma calculadora que mostra a tabela verdade de uma fórmula WFF. Sempre que vou iniciar uma tecnologia nova, seja linguagem ou framework, tomo como método de treino o desenvolvimento desse projeto...",
    link: "https://marcoschalet.github.io/logic-calculator/"
  },{
    id: "projeto2",
    title: "Parallax Effect",
    body: "Fiz essa página para treinar conceitos básicos de css e javascript.",
    link: "https://marcoschalet.github.io/parallax-effect/"
  },{
    id: "projeto3",
    title: "To-Do List",
    body: "Esse projeto foi desenvolvido para o teinamento de Sass com algo mais abrangente que apenas exercícios.",
    link: "https://marcoschalet.github.io/todo-list/"
  },{
    id: "projeto4",
    title: "Página de Exercícios",
    body: "Com a necessidade de exercitar React, fiz esse projeto para armazenar os exercícios e projetos pequenos - que não têm tanta relevância para um projeto sozinho no github - que estou desenvolvendo enquanto pratico.",
    link: "https://marcoschalet.github.io/my-react-exercises-page/"
  },{
    id: "projeto5",
    title: "Jogo da Velha",
    body: "Jogo da Velha feito com intuito de melhorar e treinar o desenvolvimento com React.",
    link: "https://jogo-da-velha-sage-one.vercel.app/"
  },{
    id: "projeto6",
    title: "Futuramente",
    body: "",
    link: "#"
  }
]

projetos.map((projeto) => {
  projeto.addEventListener('click',() => {
    showProject(projeto)
  })
})

function showProject(projeto) {
  const item = contentProjects.find(p => p.id === projeto.id)
  modal.style.display = 'flex'
  modal.classList.toggle('c-content--show')
  modalContent.innerHTML += `
    <i id="js-modal--close" class="c-content--close">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </i>
    <h1>${item.title}</h1>
    <p>${item.body}</p>
    <a class="c-content__button c-button" href="${item.link}">Testar</a>
  `

  const modalClose = document.getElementById('js-modal--close')
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
    modalContent.innerHTML = ""
  })
}
