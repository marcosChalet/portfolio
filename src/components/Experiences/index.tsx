import { SectionVisibleType } from '@/core/SectionVisible.type';
import { useEffect } from 'react';
import Layout from '../ui/Layout';

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
      sectionClass="bg-slate-900 px-5 sm:px-20"
      articleClass="flex-wrap items-center justify-start py-28"
    >
      <h1 className="absolute top-5 left-3 bg-gradient-to-r from-fuchsia-500 to-rose-500 bg-clip-text text-3xl font-bold text-transparent sm:left-14 sm:text-4xl">
        EXPERIÊNCIA
      </h1>
      <ul className="relative text-slate-300">
        <span className="absolute h-full w-2 rounded-md bg-slate-800" />
        <li className="relative pl-10 pt-7">
          <span className="absolute left-5 top-0 font-bold text-slate-400">
            Mar 2021 até Mar 2022
          </span>
          <article className="">
            <h2 className="font-semibold">Universidade Federal do Ceará</h2>
            <span>Iniciação Acadêmica em Computação Gráfica.</span>
          </article>
        </li>

        <li className="relative mt-7 pl-10 pt-7">
          <span className="absolute left-5 top-0 font-bold text-slate-400">
            Abr 2022 até Nov 2022
          </span>
          <article>
            <h2 className="font-semibold">Universidade Federal do Cariri</h2>
            <span>
              Monitoria em Estruturas de Dados e Introdução à Computação.
            </span>
          </article>
        </li>

        <li className="relative mt-7 pl-10 pt-7">
          <span className="absolute left-5 top-0 font-bold text-slate-400">
            Jul 2023 até Dez 2023
          </span>
          <article>
            <h2 className="font-semibold">Universidade Federaal do Cariri</h2>
            <span>Estágio em desenvolvimento web + DevOps.</span>
          </article>
        </li>

        <li className="relative mt-7 pl-10 pt-7">
          <span className="absolute left-5 top-0 font-bold text-slate-400">
            Abr 2023 até Agora
          </span>
          <article>
            <h2 className="font-semibold">Calang.io</h2>
            <span>Tabalho voluntário como desenvolvedor web front-end.</span>
          </article>
        </li>

        <li className="relative mt-7 pl-10 pt-7">
          <span className="absolute left-5 top-0 font-bold text-slate-400">
            Jan 2024 até Agora
          </span>
          <article>
            <h2 className="font-semibold">Compass UOL</h2>
            <span>Estágio em desenvolvimento web full stack + AWS.</span>
          </article>
        </li>
      </ul>
    </Layout>
  );
}
