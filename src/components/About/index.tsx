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
          className="title-text-clamp bg-gradient-to-r from-fuchsia-500 to-rose-500
          bg-clip-text font-bold text-transparent
        "
        >
          SOBRE
        </h1>
        <span
          className={`paragraph-text-clamp mt-4 ml-5 flex w-full max-w-[95%] text-left font-semibold leading-5
          sm:mt-10 sm:max-w-[80%] sm:basis-3/4 xl:leading-6 2xl:leading-7 ${montserrat.className}`}
        >
          Sou um desenvolvedor web com mais de 3 anos de experiência em React,
          TypeScript e Node. Atualmente, estou atuando como desenvolvedor Full
          Stack, utilizando React e NestJS. No entanto, busco me tornar um especialista
          em desenvolvimento backend com Java + Spring Boot.
        </span>
        <div className="absolute right-0 top-16 hidden animate-float items-center sm:flex md:top-14 xl:top-0">
          <img
            className="h-28 w-32 md:h-32 md:w-44 xl:h-44 xl:w-64"
            src="/imgs/computer.svg"
            alt="computer image"
          />
        </div>
      </div>
    </Layout>
  );
}
