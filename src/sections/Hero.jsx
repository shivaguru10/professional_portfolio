import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(".hero-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    )
      .fromTo(".hero-btn",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
        "-=0.5"
      );
  }, { scope: containerRef });

  return (
    <section id="home" ref={containerRef} className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-[var(--color-bg)]">
      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-primary)]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[var(--color-primary)]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="text-center max-w-3xl relative z-10">
        <h1 className="hero-text opacity-0 text-4xl md:text-7xl font-extrabold mb-6 text-[var(--color-text)] leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-500 bg-clip-text text-transparent">Shivaguru</span> 👋
        </h1>

        <p className="hero-text opacity-0 text-[var(--color-primary)] text-xl md:text-2xl mb-4 font-medium">
          Full Stack Developer | MERN | React | Node.js
        </p>

        <p className="hero-text opacity-0 text-[var(--color-text-dim)] mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-semibold">
          I build modern, fast, and scalable web applications with clean UI and solid backend logic.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="hero-btn opacity-0 px-8 py-4 rounded-xl bg-[var(--color-primary)] text-white font-semibold text-lg
                       hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/20 
                       transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            View Projects
          </a>

          <a
            href="/Shivaguru_Resume.pdf"
            download
            className="hero-btn opacity-0 px-8 py-4 rounded-xl
                       border-2 border-[var(--color-primary)]
                       text-[var(--color-primary)] font-semibold text-lg
                       hover:bg-[var(--color-primary)]/10
                       transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
