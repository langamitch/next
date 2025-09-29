"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (!aboutRef.current) return;
    gsap.fromTo(
      aboutRef.current,
      { y: "100vh", opacity: 0, position: "absolute", top: 0, left: 0 },
      {
        y: 0,
        opacity: 1,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 20,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 0.5,
          pin: true,
          pinSpacing: false,
        },
      }
    );
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <section
        ref={aboutRef}
        className="w-full min-h-[60vh] flex justify-center bg-[#fcfcfc] z-20"
        style={{ fontFamily: 'Inter, sans-serif', position: 'absolute', top: 0, left: 0 }}
      >
        <div className="max-w-2xl mx-auto ">
        <div className="max-w-2xl mx-auto p-8">
          {/* Heading */}
          <h2
            className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-black uppercase font-medium tracking-wider mb-2"
            aria-label="Services"
          >
            <div
              className="line-mask line1-mask"
              aria-hidden="true"
              style={{ position: 'relative', display: 'block', textAlign: 'start', overflow: 'clip' }}
            >
              <div
                className="line line1 font-medium"
                aria-hidden="true"
                style={{ position: 'relative', display: 'block', textAlign: 'start' }}
              >
                Services
              </div>
            </div>
          </h2>

          {/* Paragraph */}
          <p
            className="text-black text-[clamp(24px,3.3vw,56px)] tracking-tighter font-medium leading-[1.1] lg:leading-[1.05]"
            aria-label="Evolving with every brief and built for impact, my process spans design, development, and brand strategy—aligning vision with execution to bring clarity and edge to every project."
          >
            <div className="line-mask line1-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start', overflow: 'clip' }}>
              <div className="line line1" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start' }}>
                Evolving with every brief and
              </div>
            </div>

            <div className="line-mask line2-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start', overflow: 'clip' }}>
              <div className="line line2" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start' }}>
                built for impact, my process
              </div>
            </div>

            <div className="line-mask line3-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start', overflow: 'clip' }}>
              <div className="line line3" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start' }}>
                spans design, development,
              </div>
            </div>

            <div className="line-mask line4-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start', overflow: 'clip' }}>
              <div className="line line4" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start' }}>
                and brand strategy—aligning
              </div>
            </div>

            <div className="line-mask line5-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start', overflow: 'clip' }}>
              <div className="line line5" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start' }}>
                vision with execution to bring
              </div>
            </div>

            <div className="line-mask line6-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start', overflow: 'clip' }}>
              <div className="line line6" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start' }}>
                clarity and edge to every
              </div>
            </div>

            <div className="line-mask line7-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start', overflow: 'clip' }}>
              <div className="line line7" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'start' }}>
                project.
              </div>
            </div>
          </p>
  </div>
{/* Video below the image */}
<div className="w-full mt-8">
  <video
    className="w-full h-auto object-cover"
    autoPlay={true}
    loop
    muted
  >
    <source
      src="https://cdn.pixabay.com/video/2024/09/22/232685_large.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</div>


        </div>
      </section>
    </>
  );
}
