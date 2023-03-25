import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  sectionClass?: string;
  articleClass?: string;
};

export default function Layout({
  children,
  sectionClass,
  articleClass,
}: LayoutProps) {
  return (
    <section className={`relative flex text-slate-400 ${sectionClass}`}>
      <article className={`flex ${articleClass}`}>{children}</article>
    </section>
  );
}
