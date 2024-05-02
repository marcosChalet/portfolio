import { SectionVisibleType } from '@/core/SectionVisible.type';
import { useEffect } from 'react';
import Layout from '../ui/Layout';

const skills = [
  {
    language: 'React.Js',
    alt: 'React.Js logo',
    icnPath: '/imgs/react-logo.svg',
  },
  {
    language: 'JavaScript',
    alt: 'JavaScrip logo',
    icnPath: '/imgs/javascript-logo.svg',
  },
  {
    language: 'TypeScript',
    alt: 'TypeScripy logo',
    icnPath: '/imgs/typescript-logo.svg',
  },
  { language: 'HTML 5', alt: 'HTML logo', icnPath: '/imgs/html-logo.svg' },
  { language: 'CSS 3', alt: 'CSS logo', icnPath: '/imgs/css-logo.svg' },
  {
    language: 'TailwindCSS',
    alt: 'TailwindCSS logo',
    icnPath: '/imgs/tailwind-logo.svg',
  },
  {
    language: 'Node',
    alt: 'Node logo',
    icnPath: '/imgs/nodejs-logo.svg',
  },
  { language: 'Java', alt: 'Java logo', icnPath: '/imgs/java-logo.svg' },
  {
    language: 'Git',
    alt: 'Git logo',
    icnPath: '/imgs/git-logo.svg',
  },
  {
    language: 'Linux',
    alt: 'Linux logo',
    icnPath: '/imgs/linux-logo.svg',
  },
  {
    language: 'Docker',
    alt: 'Docker logo',
    icnPath: '/imgs/docker-logo.svg',
  },
  {
    language: 'Spring',
    alt: 'Spring logo',
    icnPath: '/imgs/spring-logo.svg',
  },
];

export default function Skills({ isVisible, setSection }: SectionVisibleType) {
  useEffect(() => {
    if (isVisible) setSection(3);
  }, [isVisible]);

  return (
    <Layout
      id={'skills'}
      articleClass="w-full flex-col mt-36 sm:mt-48"
      sectionClass="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black" />
      <h1
        className="z-10 -mx-4 bg-gradient-to-r from-fuchsia-500 to-rose-500
          bg-clip-text text-3xl font-bold text-transparent sm:ml-3 sm:text-4xl"
      >
        HABILIDADES
      </h1>

      <div
        className={`z-10 m-auto mt-4 flex w-full flex-wrap items-center
          justify-center gap-3 sm:mt-10 sm:max-w-[80%]
        `}
      >
        {skills.map((item) => {
          return (
            <div
              key={item.language}
              className="rounded-lg bg-gray-600/10 p-5 font-bold text-slate-400"
            >
              <div className="flex h-16 w-16 flex-col items-center justify-evenly xl:h-24 xl:w-24">
                <img
                  src={item.icnPath}
                  alt={item.alt}
                  className="h-12 w-12 pb-1"
                />
                <span className="text-slate-400 xl:text-lg">
                  {item.language}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
