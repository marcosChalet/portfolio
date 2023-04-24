import { BarContext } from '@/context/BarContext';
import { SectionVisibleType } from '@/core/SectionVisible.type';
import { useContext, useEffect } from 'react';
import Layout from '../ui/Layout';

export default function Projects({
  isVisible,
  setSection,
}: SectionVisibleType) {
  const projects = [
    {
      title: 'Next CRUD',
      img: '/imgs/next-crud-project.png',
      alt: 'imagem de um projeto de crud',
    },
    {
      title: 'Marvel API',
      img: '/imgs/marvel-project.png',
      alt: 'imagem de commics da Marvel',
    },
    {
      title: 'Memory Game',
      img: '/imgs/memory-project.png',
      alt: 'imagem de um jogo da memória',
    },
    {
      title: 'Jogo da Velha',
      img: '/imgs/velha-project.png',
      alt: 'imagem de um tabuleiro de jogo da velha',
    },
    {
      title: 'MoviesLib',
      img: '/imgs/moviesLib-project.png',
      alt: 'imagem de um catálogo de filmes',
    },
    {
      title: 'Logic Calculator',
      img: '/imgs/logicCalculator-project.png',
      alt: 'imagem de uma calculadora de expressões lógicas',
    },
  ];

  useEffect(() => {
    if (isVisible) {
      setSection(6);
    }
  }, [isVisible]);

  return (
    <Layout
      id={'projects'}
      sectionClass={`bg-[#121b32] py-10 justify-center`}
      articleClass="flex-wrap items-center justify-center pt-28 pb-40 max-w-7xl"
    >
      <div className="glow md:glow-xl absolute left-10 top-64 max-w-7xl md:left-60 md:top-48" />
      <div className="flex w-full items-center justify-center">
        <h1 className="absolute top-3 bg-gradient-to-r from-fuchsia-500 to-rose-500 bg-clip-text text-4xl font-bold text-transparent">
          PROJECTS
        </h1>
      </div>

      {projects.map((project) => {
        return (
          <div
            key={project.title}
            className="m-2 overflow-hidden rounded-sm bg-slate-800 font-bold text-slate-400 hover:cursor-pointer"
          >
            <div className="relative h-[120px] w-[250px] lg:h-[250px] lg:w-[380px]">
              <img
                src={project.img}
                alt={project.alt}
                className="h-full w-full object-cover brightness-[0.8] transition-all hover:brightness-100"
              />
              <span className="absolute top-2 left-3">{project.title}</span>
            </div>
          </div>
        );
      })}

      <button className="absolute bottom-12 cursor-not-allowed rounded-md bg-slate-800 px-16 py-5 text-xl font-bold text-slate-400">
        MORE
      </button>
    </Layout>
  );
}
