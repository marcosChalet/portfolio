import { SectionVisibleType } from '@/core/SectionVisible.type';
import { useEffect } from 'react';
import Layout from '../ui/Layout';

const learningSkills = [
  {
    language: 'Kubernetes',
    alt: 'Kubernetes logo',
    iconPath: '/imgs/k8s-logo.svg',
  },
  {
    language: 'Nestjs',
    alt: 'Nestjs logo',
    iconPath: '/imgs/nestjs-logo.svg',
  },
];

export default function Learning({
  isVisible,
  setSection,
}: SectionVisibleType) {
  useEffect(() => {
    if (isVisible) setSection(4);
  }, [isVisible]);

  return (
    <Layout
      id={'learning'}
      articleClass="w-full flex-col pt-36 sm:pt-48"
      sectionClass="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-black" />
      <h1
        className="title-text-clamp z-10 -mx-4 bg-gradient-to-r from-fuchsia-500
          to-rose-500 bg-clip-text font-bold text-transparent sm:ml-3"
      >
        ESTUDANDO
      </h1>

      <div className="z-10 m-auto mt-4 flex w-full max-w-[80%] flex-wrap items-center justify-center gap-3 sm:mt-10">
        {learningSkills.map((item) => {
          return (
            <div
              key={item.language}
              className="rounded-lg bg-gray-600/10 p-5 font-bold text-slate-400"
            >
              <div className="flex h-16 w-16 flex-col items-center justify-evenly xl:h-24 xl:w-24">
                <img
                  src={item.iconPath}
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
