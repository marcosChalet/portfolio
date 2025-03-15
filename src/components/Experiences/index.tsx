import { SectionVisibleType } from '@/core/SectionVisible.type';
import { useEffect } from 'react';
import Layout from '../ui/Layout';

type ExprerienceType = {
  id: number;
  date: string;
  local: string;
  description: string;
};

const experiences: ExprerienceType[] = [
  {
    id: 1,
    date: 'Jan 2024 até Fev 2025',
    local: 'Compass UOL',
    description:
      'Desenvolvedor Web Full Stack com experiência em digital commerce. Atuei no desenvolvimento de aplicações utilizando React, TypeScript, Java, Spring Boot e NestJS, contribuindo para soluções escaláveis e de alto desempenho. Participei ativamente dos projetos Divvino, ClubeD e do Backoffice do ClubeD para o supermercado Angeloni, focando na criação, otimização, integração de sistemas e aprimoramento da experiência do usuário.',
  },
  {
    id: 2,
    date: 'Abr 2023 até Fev 2025',
    local: 'Calang.io',
    description:
      'Trabalho voluntário na empresa júnior utilizando React e TypeScript em projetos para pequenas empresas da região do Cariri.',
  },
  {
    id: 3,
    date: 'Jul 2023 até Dez 2023',
    local: 'Universidade Federal do Cariri',
    description:
      'Estágio em desenvolvimento web e DevOps, com foco na implantação e customização do sistema de processo seletivo na UFCA. Durante o estágio, participei da migração de módulos de um sistema legado para microsserviços, utilizando Docker para conteinerização. Durante o projeto, trabalhei diretamente com tecnologias como Java, PostgreSQL, Docker, Apache, Eureka e Kong.',
  },
  {
    id: 4,
    date: 'Abr 2022 até Nov 2022',
    local: 'Universidade Federal do Cariri',
    description:
      'Durante a monitoria em estruturas de dados e introdução à computação eu elaborei material didático, criei exercícios e prestei assistência aos alunos por meio de monitorias em sala de aula, resultando em um aumento em 20% na taxa de aprovação da disciplina. Essa experiência agregou, 1/2 além da minha capacidade de comunicação, na minha base em algoritmos, proporcionando um conhecimento sólido e aprofundado na área.',
  },
  {
    id: 5,
    date: 'Mar 2020 até Mar 2021',
    local: 'Universidade Federal do Ceará',
    description:
      'Durante minha experiência acadêmica em Computação Gráfica eu realizei pesquisas, desenvolvi materiais didáticos e auxiliei no acompanhamento da disciplina de Computação Gráfica.',
  },
];

export default function Experiences({
  isVisible,
  setSection,
}: SectionVisibleType) {
  useEffect(() => {
    isVisible && setSection(5);
  }, [isVisible]);

  return (
    <Layout
      id={'experiences'}
      articleClass="w-full flex-col py-36 sm:py-64 overflow-visible"
      sectionClass="overflow-visible relative"
    >
      <div className="bg-gradient-to-lt absolute inset-0 from-black" />
      <h1
        className="title-text-clamp -mx-4 bg-gradient-to-r from-fuchsia-500 to-rose-500 
          bg-clip-text font-bold text-transparent sm:ml-3"
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
              key={experience.id}
              className="flex w-full max-w-prose cursor-pointer flex-col items-center justify-start
              rounded-md border-[1px] border-gray-800 bg-slate-400/5 px-4 py-3 backdrop-blur-md
              duration-700 hover:scale-105"
            >
              <span className="w-full text-lg font-bold leading-4 text-slate-400">
                {experience.date}
              </span>
              <h2 className="mt-1 w-full text-lg font-semibold text-slate-200/75">
                {experience.local}
              </h2>
              <span className="text-md card-text-clamp mt-3 w-full italic leading-5 2xl:leading-[22px]">
                {experience.description}
              </span>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
