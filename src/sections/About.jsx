import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from(".about-content", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 95%",
        toggleActions: "play none none none",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="px-6 py-24 bg-[var(--color-surface)]">
      <div className="max-w-4xl mx-auto about-content">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[var(--color-text)]">
          About <span className="text-[var(--color-primary)]">Me</span>
        </h2>

        <div className="bg-[var(--color-bg)] p-8 md:p-12 rounded-3xl border border-[var(--color-primary)]/10 shadow-lg">
          <p className="text-[var(--color-text-dim)] text-lg md:text-xl leading-relaxed">
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
