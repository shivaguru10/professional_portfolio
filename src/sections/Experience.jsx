import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EXPERIENCE_EDUCATION } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef();

  useGSAP(() => {
    // Animations removed per request
  }, { scope: containerRef });

  return (
    <section id="experience" ref={containerRef} className="px-6 py-24 bg-[var(--color-bg)] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-[var(--color-text)]">
          My <span className="text-[var(--color-primary)]">Journey</span>
        </h2>

        <div className="relative border-l-2 border-[var(--color-primary)]/20 ml-4 md:ml-0 pl-8 space-y-16">
          {EXPERIENCE_EDUCATION.map((item, index) => (
            <div key={index} className="exp-item relative">
              {/* Dot */}
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[var(--color-primary)]" />

              <div className="bg-[var(--color-surface)] p-8 rounded-xl shadow-sm border border-[var(--color-border)]">
                <span className="inline-block px-3 py-1 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-xs font-bold mb-4">
                  {item.time}
                </span>

                <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2">
                  {item.title}
                </h3>

                <p className="text-[var(--color-primary)] font-medium mb-4">
                  {item.place}
                </p>

                <p className="text-[var(--color-text-dim)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
