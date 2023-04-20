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

export default function Home() {
  const bar = useContext(BarContext);

  return (
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
  );
}
