import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animations removed per request
  }, { scope: containerRef });

  return (
    <section id="home" ref={containerRef} className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-[var(--color-bg)]">

      <div className="text-center max-w-4xl relative z-10">
        {/* Minimal SVG Icon */}
        <div className="mb-6 flex justify-center">
          <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 22l-.394-1.433a2.25 2.25 0 00-1.423-1.423L13.25 19l1.433-.394a2.25 2.25 0 001.423-1.423L16.5 16l.394 1.183a2.25 2.25 0 001.423 1.423L19.75 19l-1.433.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[var(--color-text)] leading-tight">
          Hi, I'm <span className="text-[var(--color-primary)]">Shivaguru</span>
        </h1>

        <p className="text-[var(--color-text-dim)] text-xl md:text-2xl mb-4 font-medium">
          Full Stack Developer | MERN | React | Node.js
        </p>

        <p className="text-[var(--color-text-dim)] text-base md:text-lg mb-12 max-w-2xl mx-auto" style={{ lineHeight: '1.8' }}>
          I build modern, fast, and scalable web applications with clean UI and solid backend logic.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-4 rounded-lg bg-[var(--color-primary)] text-white font-semibold text-base
                       hover:bg-[var(--color-primary-hover)] transition-all duration-200"
          >
            View Projects
          </a>

          <a
            href="/Shivaguru_CV_2026.pdf"
            download="Shivaguru_CV_2026.pdf"
            className="px-8 py-4 rounded-lg
                       border-2 border-[var(--color-primary)]
                       text-[var(--color-primary)] font-semibold text-base
                       hover:bg-[var(--color-primary)]/10 transition-all duration-200"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
