import React from 'react';

type LayoutProps = {
  id: string;
  children: React.ReactNode;
  sectionClass?: string;
  articleClass?: string;
};

export default function Layout({
  id,
  children,
  sectionClass,
  articleClass,
}: LayoutProps) {
  return (
    <section
      id={id}
      className={`relative mx-10 flex text-slate-400 md:mx-20 xl:mx-40 ${sectionClass}`}
    >
      <article className={`flex ${articleClass}`}>{children}</article>
    </section>
  );
}
