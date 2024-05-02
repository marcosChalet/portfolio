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
    <Layout id={'about'} sectionClass="text-4xl sm:mt-20 rounded-sm">
      <div className="-mx-4 flex flex-col sm:mx-3">
        <h1
          className="bg-gradient-to-r from-fuchsia-500 to-rose-500 bg-clip-text
          text-3xl font-bold text-transparent sm:text-4xl
        "
        >
          SOBRE
        </h1>
        <span
          className={`mt-4 ml-5 flex w-full max-w-[95%] text-left text-sm font-semibold 
          sm:mt-10 sm:max-w-[80%] sm:basis-3/4 sm:text-xl ${montserrat.className}`}
        >
          Sou um desenvolvedor web com mais de 2 anos de experiência em React,
          TypeScript e Node. Atualmente, estou atuando como desenvolvedor Full
          Stack, utilizando React e NestJS. No entanto, estou buscando aprimorar
          minhas habilidades no desenvolvimento de backend.
        </span>
        <div className="absolute right-0 hidden animate-float items-center sm:flex">
          <img
            className="h-44 w-44 xl:h-44 xl:w-64"
            src="/imgs/computer.svg"
            alt="computer image"
          />
        </div>
      </div>
    </Layout>
  );
}
