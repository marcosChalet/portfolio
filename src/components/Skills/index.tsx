import { SectionVisibleType } from '@/core/SectionVisible.type';
import { useEffect } from 'react';

export default function Skills({ isVisible, setSection }: SectionVisibleType) {
  useEffect(() => {
    if (isVisible) setSection(3);
  }, [isVisible]);

  const skills = [
    {
      language: 'R.Native',
      alt: 'React.Js logo',
      icnPath: '/imgs/native-logo.svg',
    },
    {
      language: 'React.Js',
      alt: 'React.Js logo',
      icnPath: '/imgs/react-logo.svg',
    },
    {
      language: 'Next.Js',
      alt: 'Next.Js logo',
      icnPath: '/imgs/next-logo.svg',
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
    { language: 'SCSS/SASS', alt: 'SASS logo', icnPath: '/imgs/sass-logo.svg' },
    {
      language: 'Node',
      alt: 'Node logo',
      icnPath: '/imgs/nodejs-logo.svg',
    },
    { language: 'Java', alt: 'Java logo', icnPath: '/imgs/java-logo.svg' },
    { language: 'C/C++', alt: 'C language logo', icnPath: '/imgs/c-logo.svg' },
    { language: 'MySQL', alt: 'MySQL logo', icnPath: '/imgs/mysql-logo.svg' },
    {
      language: 'Firebase',
      alt: 'Firebase logo',
      icnPath: '/imgs/firebase-logo.svg',
    },
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
  ];

  return (
    <section
      id={'skills'}
      className="relative flex h-fit items-center justify-center bg-slate-900"
    >
      <article className="flex flex-wrap items-center justify-center py-20 sm:px-12 sm:py-28 md:max-w-4xl lg:max-w-screen-xl xl:px-20">
        <h1 className="absolute top-5 left-3 bg-gradient-to-r from-fuchsia-500 to-rose-500 bg-clip-text text-3xl font-bold text-transparent sm:left-14 sm:text-4xl">
          MY SKILLS
        </h1>

        {skills.map((item) => {
          return (
            <div
              key={item.language}
              className="m-2 rounded-lg bg-slate-800 p-5 font-bold text-slate-400"
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
      </article>
    </section>
  );
}
