import { SectionVisibleType } from '@/core/SectionVisible.type';
import { useEffect } from 'react';
import Layout from '../ui/Layout';
import Image from 'next/image';

const projects = [
  {
    title: '',
    img: '/imgs/todoapp.png',
    alt: 'imagem de listas de tarefas',
    description: 'Todo app desenvolvido com React e spring.',
    productionLink: 'https://github.com/marcosChalet/toDoList-java-react',
    githubLink: 'https://github.com/marcosChalet/toDoList-java-react',
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
    title: '',
    img: '/imgs/ecommerce-project.png',
    alt: 'imagem de um ecommerce',
    description: 'eCommerce desenvolvido com React, TypeScript e Nest.',
    productionLink: 'https://frontend-ecommerce-seven-alpha.vercel.app/',
    githubLink: 'https://github.com/marcosChalet/frontend-ecommerce',
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
        className={`title-text-clamp bg-gradient-to-r from-fuchsia-500
          to-rose-500 bg-clip-text font-black text-transparent
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
              key={project.githubLink}
              className={`h-[400px] overflow-hidden rounded-sm border-[1px] border-r-0 border-l-0 
              border-[#777]/10 p-4 font-bold text-slate-400 hover:cursor-pointer sm:col-span-2
                ${idx === 4 && 'sm:col-span-4 md:h-[600px] xl:h-[820px]'}
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
                  priority={
                    project.githubLink ===
                    'https://github.com/marcosChalet/marvel-page'
                      ? true
                      : false
                  }
                  width={idx === 4 ? 1400 : 1200}
                  height={idx === 4 ? 1100 : 900}
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
