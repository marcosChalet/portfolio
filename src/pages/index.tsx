import { useContext, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { BarContext } from '@/context/BarContext';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Learning from '@/components/Learning';
import Experiences from '@/components/Experiences';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Ribons from '@/components/Ribons';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const bar = useContext(BarContext);
  const containerRef = useRef<HTMLDivElement>(null);

  const [sectionsVisibility, setSectionsVisibility] = useState({
    hero: false,
    about: false,
    skills: false,
    learning: false,
    experiences: false,
    projects: false,
    contact: false,
  });

  useEffect(() => {
    const removeHash = () => {
      if (window.location.hash) {
        window.history.replaceState(
          null,
          '',
          window.location.pathname + window.location.search,
        );
      }
    };

    removeHash();
    window.addEventListener('hashchange', removeHash);
    return () => window.removeEventListener('hashchange', removeHash);
  }, []);

  useEffect(() => {
    let scrollY = 0;
    let velocity = 0;
    const container = containerRef.current;
    if (!container) return;

    const updateScroll = () => {
      scrollY += velocity;
      velocity *= 0.98;
      const maxScroll = container.offsetHeight - window.innerHeight;
      if (scrollY < 0) {
        scrollY = 0;
        velocity = 0;
      } else if (scrollY > maxScroll) {
        scrollY = maxScroll;
        velocity = 0;
      }
      container.style.transform = `translateY(-${scrollY}px)`;
      ScrollTrigger.update();
      requestAnimationFrame(updateScroll);
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      velocity += event.deltaY * 0.015;
    };
    document.addEventListener('wheel', onWheel, { passive: false });
    updateScroll();

    ScrollTrigger.scrollerProxy(container, {
      scrollTop(value?: number) {
        if (typeof value === 'number') {
          scrollY = value;
        }
        return scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    const triggers = (
      gsap.utils.toArray('[data-section]') as HTMLElement[]
    ).map((el) => {
      return ScrollTrigger.create({
        trigger: el,
        scroller: container,
        start: 'top 30%',
        onEnter: () => {
          const id = el.getAttribute('data-section');
          if (id) {
            setSectionsVisibility((prev) => ({ ...prev, [id]: true }));
          }
        },
        onEnterBack: () => {
          const id = el.getAttribute('data-section');
          if (id) {
            setSectionsVisibility((prev) => ({ ...prev, [id]: true }));
          }
        },
        onLeave: () => {
          const id = el.getAttribute('data-section');
          if (id) {
            setSectionsVisibility((prev) => ({ ...prev, [id]: false }));
          }
        },
        onLeaveBack: () => {
          const id = el.getAttribute('data-section');
          if (id) {
            setSectionsVisibility((prev) => ({ ...prev, [id]: false }));
          }
        },
      });
    });

    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener('wheel', onWheel);
      triggers.forEach((trigger) => trigger.kill());
    };
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

      <main className="scrollbar-hide relative h-auto m-auto w-[calc(100vw-2px)] max-w-[2560px] bg-black">
        <Ribons section={bar.section} />

        <div ref={containerRef}>
          <div
            className="absolute inset-0 mx-10 grid grid-cols-3 divide-x-[1px] divide-[#333]/10
            border-x-[1px] border-[#333]/10 md:mx-20 md:grid-cols-4 xl:mx-40"
          >
            <div />
            <div />
            <div />
            <div className="hidden md:flex" />
          </div>
          <div className="background-glow-blue">
            <section data-section="hero">
              <Hero
                isVisible={sectionsVisibility.hero}
                setSection={bar.setSection}
              />
            </section>

            <section data-section="about">
              <About
                isVisible={sectionsVisibility.about}
                setSection={bar.setSection}
              />
            </section>

            <section data-section="skills">
              <Skills
                isVisible={sectionsVisibility.skills}
                setSection={bar.setSection}
              />
            </section>
          </div>

          <div className="background-glow-pink">
            <section data-section="learning">
              <Learning
                isVisible={sectionsVisibility.learning}
                setSection={bar.setSection}
              />
            </section>

            <section data-section="experiences">
              <Experiences
                isVisible={sectionsVisibility.experiences}
                setSection={bar.setSection}
              />
            </section>
          </div>

          <div className="background-glow-green">
            <section data-section="projects">
              <Projects
                isVisible={sectionsVisibility.projects}
                setSection={bar.setSection}
              />
            </section>

            <section data-section="contact">
              <Contact
                isVisible={sectionsVisibility.contact}
                setSection={bar.setSection}
              />
            </section>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
