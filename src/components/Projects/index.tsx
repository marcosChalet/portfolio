import { BarContext } from '@/context/BarContext';
import { SectionVisibleType } from '@/core/SectionVisible.type';
import { useContext, useEffect } from 'react';
import Layout from '../ui/Layout';

const projects = [
  {
    title: 'Next CRUD',
    img: '/imgs/next-crud-project.png',
    alt: 'imagem de um projeto de crud',
    description: 'Crud NextJs utilizando o Firebase e TypeScript.',
    productionLink: 'https://crud.mchalet.xyz/',
    githubLink: 'https://github.com/marcosChalet/next-crud',
  },
  {
    title: 'Marvel API',
    img: '/imgs/marvel-project.png',
    alt: 'imagem de commics da Marvel',
    description: 'Página que consome a API da Marvel e do Google Maps.',
    productionLink: 'https://marvel-page-dusky.vercel.app/',
    githubLink: 'https://github.com/marcosChalet/marvel-page',
  },
  {
    title: 'Chalet blog',
    img: '/imgs/blog-project.png',
    alt: 'blog pessoal desenvolvido em Next.js',
    description:
      'Blog pessoal para compartilhar meus conhecimentos e o conteúdo que venho estudando sobre desenvolvimento web.',
    productionLink: 'https://blog.mchalet.xyz/',
    githubLink: 'https://github.com/marcosChalet/chalet-blog',
  },
  {
    title: 'Logic Calculator',
    img: '/imgs/logicCalculator-project.png',
    alt: 'imagem de uma calculadora de expressões lógicas',
    description:
      'Calculadora que processa uma expressão lógica e cria sua tabela verdade.',
    productionLink: 'https://marcoschalet.github.io/logic-calculator/',
    githubLink: 'https://github.com/marcosChalet/logic-calculator',
  },
  {
    title: 'Memory Game',
    img: '/imgs/memory-project.png',
    alt: 'imagem de um jogo da memória',
    description: 'Jogo da memória desenvolvido com NextJs.',
    productionLink: 'https://memory-game-seven-rho.vercel.app/',
    githubLink: 'https://github.com/marcosChalet/memory-game',
  },
  {
    title: 'Jogo da Velha',
    img: '/imgs/velha-project.png',
    alt: 'imagem de um tabuleiro de jogo da velha',
    description: 'Jogo da velha desenvolvido com NextJs.',
    productionLink: 'https://jogo-da-velha-sage-one.vercel.app/',
    githubLink: 'https://github.com/marcosChalet/jogo-da-velha',
  },
];

export default function Projects({
  isVisible,
  setSection,
}: SectionVisibleType) {
  useEffect(() => {
    if (isVisible) {
      setSection(6);
    }
  }, [isVisible]);

  return (
    <Layout
      id={'projects'}
      sectionClass={`bg-[#121b32] py-10 justify-center`}
      articleClass="flex-wrap items-center justify-center pt-20 pb-5 max-w-7xl"
    >
      <div className="glow md:glow-xl absolute left-10 top-64 max-w-7xl md:left-60 md:top-48" />
      <div className="flex w-full items-center justify-center">
        <h1
          className={`absolute top-3 bg-gradient-to-r from-fuchsia-500 to-rose-500
                        bg-clip-text text-4xl font-bold text-transparent`}
        >
          PROJECTS
        </h1>
      </div>

      <div className="rows-[200px] max-w-4xl sm:grid sm:grid-cols-2 sm:grid-rows-[380px_250px_300px_250px]">
        {projects.map((project, idx) => {
          return (
            <div
              key={project.title}
              className={`m-2 overflow-hidden rounded-sm bg-slate-800 font-bold
               text-slate-400 shadow-2xl shadow-slate-900 hover:cursor-pointer ${
                 idx === 0 && 'col-span-2'
               } ${idx === 4 && 'row-span-2'}`}
            >
              <div className="group relative flex h-full flex-col justify-center">
                <div
                  className={`absolute flex h-full w-full flex-col items-center justify-center gap-3
                              rounded-t-md p-4 text-center opacity-0 backdrop-blur-xl transition-opacity
                              duration-300 ease-in after:content-[''] group-hover:opacity-100`}
                >
                  <p className="text-sm sm:text-base">{project.description}</p>
                  <div className="flex items-center justify-center gap-1">
                    <a
                      href={project.productionLink}
                      target="_blank"
                      className={`flex h-9 w-28 items-center justify-center rounded-md border-2
                                  border-transparent bg-slate-900 text-sm uppercase
                                hover:border-slate-500 sm:ml-1 sm:mt-5 sm:h-12 sm:w-32 sm:p-2`}
                    >
                      Produção
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className={`flex h-9 w-28 items-center justify-center  rounded-md border-2
                                  border-transparent bg-slate-900 text-sm uppercase
                                hover:border-slate-500 sm:mt-5 sm:h-12 sm:w-32 sm:p-2`}
                    >
                      Projeto
                    </a>
                  </div>
                </div>
                <img
                  src={project.img}
                  alt={project.alt}
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-2 left-3 group-hover:opacity-0">
                  {project.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
