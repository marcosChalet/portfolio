import { SectionVisibleType } from '@/core/SectionVisible.type';
import { useEffect } from 'react';
import Layout from '../ui/Layout';
import Image from 'next/image';

const projects = [
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
    title: 'Next CRUD',
    img: '/imgs/next-crud-project.png',
    alt: 'imagem de um projeto de crud',
    description: 'Crud NextJs utilizando o Firebase e TypeScript.',
    productionLink: 'https://crud.mchalet.xyz/',
    githubLink: 'https://github.com/marcosChalet/next-crud',
  },
  {
    title: '',
    img: '/imgs/marvel-project.png',
    alt: 'imagem de commics da Marvel',
    description: 'Página que consome a API da Marvel e do Google Maps.',
    productionLink: 'https://marvel-page-dusky.vercel.app/',
    githubLink: 'https://github.com/marcosChalet/marvel-page',
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
      sectionClass={`sm:py-10 justify-center`}
      articleClass="flex-wrap items-center justify-center sm:pt-20 pb-5"
    >
      <h1
        className={`bg-gradient-to-r from-fuchsia-500 to-rose-500
          bg-clip-text text-4xl font-black text-transparent sm:text-6xl
        `}
      >
        PROJETOS
      </h1>

      <div
        className={`mt-6 grid w-full grid-flow-row-dense grid-cols-1 
          sm:mt-16 sm:grid-cols-2 lg:grid-cols-4
        `}
      >
        {projects.map((project, idx) => {
          return (
            <div
              key={project.title}
              className={`h-[420px] overflow-hidden rounded-sm border-[1px] border-r-0 border-l-0 
              border-white/10 p-4 font-bold text-slate-400 hover:cursor-pointer
                ${idx > 3 && 'h-[520px] sm:col-span-2'}
              `}
            >
              <div className="group relative flex h-full flex-col justify-start">
                <div
                  className="absolute flex h-full w-full flex-col items-center justify-center gap-3
                    rounded-t-md p-4 text-center opacity-0 backdrop-blur-xl backdrop-brightness-[.3] 
                    transition-opacity duration-300 ease-in after:content-[''] group-hover:opacity-100"
                >
                  <p className="-translate-y-16 text-sm duration-300 group-hover:translate-y-0 sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={project.productionLink}
                      target="_blank"
                      className="flex h-9 w-28 items-center justify-center rounded-md border-[1px]
                        border-slate-700 bg-gray-600/10 text-sm uppercase
                        hover:border-slate-500 sm:ml-1 sm:mt-5 sm:h-12 sm:w-32 sm:p-2"
                    >
                      Produção
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="flex h-9 w-28 items-center justify-center  rounded-md border-[1px]
                      border-slate-700 bg-gray-600/10 text-sm uppercase hover:border-slate-500
                      sm:mt-5 sm:h-12 sm:w-32 sm:p-2"
                    >
                      Projeto
                    </a>
                  </div>
                </div>
                <Image
                  width={1200}
                  height={900}
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
