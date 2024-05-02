import { SectionVisibleType } from '@/core/SectionVisible.type';
import { useEffect } from 'react';
import Layout from '../ui/Layout';

type ExprerienceType = {
  date: string;
  local: string;
  description: string;
};

const experiences: ExprerienceType[] = [
  {
    date: 'Mar 2021 até Mar 2022',
    local: 'Universidade Federal do Ceará',
    description:
      'Durante minha experiência acadêmica em Computação Gráfica, realizei pesquisas, desenvolvi materiais didáticos e auxiliei no acompanhamento da disciplina de Computação Gráfica.',
  },
  {
    date: 'Abr 2022 até Nov 2022',
    local: 'Universidade Federal do Cariri',
    description:
      'Durante a monitoria em estruturas de dados e introdução à computação eu elaborei material didático, criei exercícios e prestei assistência aos alunos por meio de monitorias.',
  },
  {
    date: 'Abr 2023 até Agora',
    local: 'Calang.io',
    description:
      'Participo como desenvolvedor web front-end como voluntário, utilizando React e TypeScript. Destaca-se minha contribuição no desenvolvimento de uma plataforma para gerenciamento de pedidos.',
  },
  {
    date: 'Jul 2023 até Agora',
    local: 'Universidade Federal do Cariri',
    description:
      'Estágio em desenvolvimento web e DevOps. Trabalhei com foco na implantação do sistema para processo seletivo na UFCA. Participei da migração de módulos de um sistema monolítico para micro-serviços, utilizando docker para containerização. Aqui trabalhei com tecnologias como Java, PostgreSQL, Docker, Apache, Eureka, Kong...',
  },
  {
    date: 'Jan 2024 até Agora',
    local: 'Compass UOL',
    description:
      'Estágio em desenvolvimento web full stack + AWS. Desenvolvi projetos voltados a área de comercial, utilizando React, TypeScript, Prisma e Nest.',
  },
];

export default function Experiences({
  isVisible,
  setSection,
}: SectionVisibleType) {
  useEffect(() => {
    if (isVisible) setSection(5);
  }, [isVisible]);

  return (
    <Layout
      id={'experiences'}
      articleClass="w-full flex-col py-36 sm:py-64 overflow-visible"
      sectionClass="overflow-visible"
    >
      <h1
        className="-mx-4 bg-gradient-to-r from-fuchsia-500 to-rose-500 bg-clip-text 
          text-3xl font-bold text-transparent sm:ml-3 sm:text-4xl"
      >
        EXPERIÊNCIA
      </h1>

      <ul
        className="mt-4 grid w-full grid-flow-row-dense gap-x-8 gap-y-5 px-1 text-slate-300
          sm:mt-14 sm:grid-flow-col-dense sm:grid-rows-3 xl:grid-rows-2"
      >
        {experiences.map((experience: ExprerienceType) => {
          return (
            <li
              key={experience.description}
              className="flex w-full max-w-prose cursor-pointer flex-col items-center justify-start
              rounded-md border-[1px] border-gray-800 bg-slate-400/5 px-4 py-3 backdrop-blur-md
              duration-300 hover:scale-105"
            >
              <span className="w-full text-lg font-bold leading-4 text-slate-400">
                {experience.date}
              </span>
              <h2 className="mt-1 w-full text-lg font-semibold text-slate-200/75">
                {experience.local}
              </h2>
              <span className="text-md mt-3 w-full italic leading-5">
                {experience.description}
              </span>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
