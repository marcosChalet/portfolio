import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  sectionClass?: string;
  articleClass?: string;
  sectionVisible?: number;
  isVisible?: boolean;
  setSection?: (n: number) => void;
};

export default function Layout({
  children,
  sectionClass,
  articleClass,
  sectionVisible,
  isVisible,
  setSection,
}: LayoutProps) {
  return (
    <section className={`relative flex text-slate-400 ${sectionClass}`}>
      <>
        {isVisible && setSection ? setSection(sectionVisible ?? 0) : false}
        <article className={`flex ${articleClass}`}>{children}</article>
      </>
    </section>
  );
}
