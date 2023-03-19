import About from '@/components/About';
import Contact from '@/components/Contact';
import Experiences from '@/components/Experiences';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Learning from '@/components/Learning';
import Projects from '@/components/Projects';
import Ribons from '@/components/Ribons';
import Skills from '@/components/Skills';
import { useState } from 'react';

export default function Home() {
  const [section, setSection] = useState(1);

  return (
    <main className="relative bg-slate-600">
      <Ribons section={section} />
      <Hero />
      <About />
      <Skills />
      <Learning />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
