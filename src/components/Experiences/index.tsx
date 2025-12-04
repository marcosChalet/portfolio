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
    date: 'Mai 2024 - Atual',
    local: 'Universidade Federal do Cariri',
    description:
      'Atualmente, foco no desenvolvimento e na conformidade de sistemas acadêmicos, liderando a implementação da geração de diplomas digitais segundo as diretrizes do MEC. Paralelamente, atuo na otimização do SIGAA, refinando regras de negócio e aprimorando módulos de extensão e graduação para garantir uma gestão acadêmica mais eficiente.',
  },
  {
    id: 2,
    date: 'Jan 2024 - Fev 2025',
    local: 'Compass UOL',
    description:
      'Integrei o desenvolvimento de interfaces para o e-commerce Divvino e o Backoffice do ClubeD, criando componentes responsivos e ferramentas analíticas integradas ao ecossistema Microsoft. Além da entrega técnica, desempenhei um papel ativo na cultura do time, mentorando desenvolvedores iniciantes e mantendo integrações críticas de pagamento.',
  },
  {
    id: 3,
    date: 'Abr 2023 - Fev 2025',
    local: 'Calang.io',
    description:
      'Atuei impulsionando a presença digital de pequenas e médias empresas através da criação de SPAs modernas. Implementei uma nova stack tecnológica baseada em Vite e Tailwind CSS que otimizou o fluxo de trabalho, resultando em uma redução de 40% no tempo de entrega dos projetos e maior performance nas aplicações finais.',
  },
  {
    id: 4,
    date: 'Ago 2023 - Dez 2023',
    local: 'Universidade Federal do Cariri',
    description:
      'Iniciei minha jornada na instituição contribuindo para a modernização da infraestrutura de software, participando da migração estratégica de sistemas legados para uma arquitetura de microsserviços. Também colaborei na automatização de processos seletivos (SIGPS), assegurando a estabilidade e a conformidade legal das novas implementações.',
  },
  {
    id: 5,
    date: 'Abr 2022 - Nov 2022',
    local: 'Universidade Federal do Cariri',
    description:
      'Dediquei-me ao ensino e suporte acadêmico na disciplina de Algoritmos, desenvolvendo materiais didáticos personalizados e novas abordagens de ensino. Essa iniciativa fortaleceu a base lógica dos estudantes e resultou em um aumento expressivo de 20% na taxa de aprovação da turma.',
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