import { SectionVisibleType } from '@/core/SectionVisible.type';
import { useEffect } from 'react';
import Layout from '../ui/Layout';

import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
  display: 'block',
  style: 'italic',
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function About({ isVisible, setSection }: SectionVisibleType) {
  useEffect(() => {
    if (isVisible) setSection(2);
  }, [isVisible]);

  return (
    <Layout
      id={'about'}
      sectionClass="px-2 py-10 md:px-10 md:py-20 text-4xl bg-[#121b32] 2xl:py-40"
    >
      <div className="glow-sm md:glow absolute right-16 top-5 md:top-20 md:right-32" />
      <h1 className="absolute top-5 left-3 bg-gradient-to-r from-fuchsia-500 to-rose-500 bg-clip-text text-3xl font-bold text-transparent sm:left-14 sm:text-4xl">
        SOBRE
      </h1>
      <div className="relative mx-2 flex w-full px-5 py-1 text-left text-sm font-semibold sm:basis-3/4 sm:text-xl xl:text-2xl">
        <span className="absolute -ml-5 h-full w-1 rounded-sm bg-slate-600" />
        <div className={montserrat.className}>
          <span className="underline">Desenvolvedor Web Full Stack.</span>
          <span className="inline-block pt-5">
            Estudante de Ciência da Computação com experiência em
            Desenvolvimento Web Full Stack. Apesar de já possuir experiência com
            React.js, NestJs e TypeScript, também estou explorando as
            possibilidades do desenvolvimento de software, especialmente por
            meio dos estudos na área de DevOps.
          </span>
        </div>
      </div>
      <div className="absolute right-5 hidden animate-float items-center sm:flex">
        <img
          className="h-36 w-64 xl:h-40 xl:w-72"
          src="/imgs/computer.svg"
          alt="computer image"
        />
      </div>
    </Layout>
  );
}
