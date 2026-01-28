import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef();

  useGSAP(() => {
    // Animations removed per request
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="px-6 py-24 bg-[var(--color-bg)] transition-colors duration-300">
      <div className="max-w-4xl mx-auto about-content text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-[var(--color-text)]">
          About <span className="text-[var(--color-primary)]">Me</span>
        </h2>

        <div className="bg-[var(--color-surface)] p-8 md:p-10 rounded-xl border-l-[3px] border-[var(--color-primary)] shadow-sm text-left mx-auto">
          <p className="text-[var(--color-text-dim)] text-[18px] md:text-[19px] leading-8 md:leading-9">
            I’m <span className="text-[var(--color-text)] font-semibold">Shivaguru</span>,
            a passionate Full Stack Developer who enjoys building
            modern, scalable web applications using React, Node.js, and MongoDB.
            I focus on clean UI, good UX, and solid backend logic. My goal is to create
            software that not only works but provides a delightful experience for users.
          </p>
        </div>
      </div>
    </section>
  );
}
