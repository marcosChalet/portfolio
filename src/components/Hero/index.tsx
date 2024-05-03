import { SectionVisibleType } from '@/core/SectionVisible.type';
import { useEffect } from 'react';

export default function Hero({ isVisible, setSection }: SectionVisibleType) {
  useEffect(() => {
    if (isVisible) setSection(1);
  }, [isVisible]);

  return (
    <section
      id={'hero'}
      className="flex max-h-[1000px] items-center justify-center py-36 text-slate-200 sm:h-[80vh] 2xl:py-36"
    >
      <h1 className="hero-text-clamp inline-block w-full max-w-sm flex-col text-center font-bold leading-none md:max-w-4xl">
        Olá, Sou o{' '}
        <div className="inline-block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          Marcos.
        </div>
        Desenvolvedor Web{' '}
        <div className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          Full Stack.
        </div>
      </h1>
    </section>
  );
}
