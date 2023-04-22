import About from '@/components/About';
import Contact from '@/components/Contact';
import Experiences from '@/components/Experiences';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Learning from '@/components/Learning';
import Projects from '@/components/Projects';
import Ribons from '@/components/Ribons';
import Skills from '@/components/Skills';
import { BarContext } from '@/context/BarContext';
import TrackVisibility from 'react-on-screen';
import { useContext } from 'react';
import Head from 'next/head';

export default function Home() {
  const bar = useContext(BarContext);

  return (
    <>
      <Head>
        <title>Portfólio</title>
        <meta
          name="description"
          content="Página pessoal para contato e exposição da minha experiência profissional."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicn.ico" />
      </Head>
      <main className="scrollbar-hide relative bg-slate-600">
        <Ribons section={bar.section} />
        <TrackVisibility>
          {({ isVisible }: { isVisible: boolean }) => (
            <Hero isVisible={isVisible} setSection={bar.setSection} />
          )}
        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }: { isVisible: boolean }) => (
            <About isVisible={isVisible} setSection={bar.setSection} />
          )}
        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }: { isVisible: boolean }) => (
            <Skills isVisible={isVisible} setSection={bar.setSection} />
          )}
        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }: { isVisible: boolean }) => (
            <Learning isVisible={isVisible} setSection={bar.setSection} />
          )}
        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }: { isVisible: boolean }) => (
            <Experiences isVisible={isVisible} setSection={bar.setSection} />
          )}
        </TrackVisibility>

        <TrackVisibility offset={500}>
          {({ isVisible }: { isVisible: boolean }) => (
            <Projects isVisible={isVisible} setSection={bar.setSection} />
          )}
        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }: { isVisible: boolean }) => (
            <Contact isVisible={isVisible} setSection={bar.setSection} />
          )}
        </TrackVisibility>
        <Footer />
      </main>
    </>
  );
}
