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
import { useContext, useEffect, useRef } from 'react';
import Head from 'next/head';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const bar = useContext(BarContext);
  const main = useRef(null);

  useEffect(() => {
    gsap.utils.toArray('.card').forEach((card: any, index) => {
      gsap.to(card, {
        yPercent: -100,
        ease: 'power3.out',
        scrollBehavior: 'smooth',
        scrollTrigger: {
          trigger: card,
          start: 'top 8%',
          end: 'bottom 8%',
          scrub: true,
          snap: {
            snapTo: 'labels',
            duration: { min: 0.2, max: 3 },
            delay: 1,
          },
        },
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>I mChalet</title>
        <meta
          name="description"
          content="Página pessoal para contato e exposição da minha experiência profissional."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicn.ico" />
      </Head>
      <main
        ref={main}
        className="scrollbar-hide relative m-auto overflow-clip w-[calc(100vw-2px)] max-w-[2560px] bg-black"
      >
        <div
          className="absolute inset-0 mx-10 grid grid-cols-3 divide-x-[1px] divide-[#777]/10
            border-x-[1px] border-[#777]/10 md:mx-20 md:grid-cols-4 xl:mx-40"
        >
          <div />
          <div />
          <div />
          <div className="hidden md:flex" />
        </div>
        <Ribons section={bar.section} />
        <div className="background-glow-blue">
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
        </div>

        <div className="background-glow-red">
          <TrackVisibility>
            {({ isVisible }: { isVisible: boolean }) => (
              <Learning isVisible={isVisible} setSection={bar.setSection} />
            )}
          </TrackVisibility>

          <TrackVisibility offset={400}>
            {({ isVisible }: { isVisible: boolean }) => (
              <Experiences isVisible={isVisible} setSection={bar.setSection} />
            )}
          </TrackVisibility>
        </div>

        <div className="background-glow-green">
          <TrackVisibility offset={2900}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className="box">
                <Projects isVisible={isVisible} setSection={bar.setSection} />
              </div>
            )}
          </TrackVisibility>

          <TrackVisibility partialVisibility>
            {({ isVisible }: { isVisible: boolean }) => (
              <Contact isVisible={isVisible} setSection={bar.setSection} />
            )}
          </TrackVisibility>
          <Footer />
        </div>
      </main>
    </>
  );
}
