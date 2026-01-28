import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILLS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef();

  useGSAP(() => {
    // Animations removed per request
  }, { scope: containerRef });

  return (
    <section id="skills" ref={containerRef} className="px-6 py-24 bg-[var(--color-bg)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-center text-[var(--color-text)]">
          My <span className="text-[var(--color-primary)]">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="skill-card p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm group h-full"
            >
              <h3 className="text-xl font-bold mb-5 text-[var(--color-primary)]">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full border border-[var(--color-primary)] text-[var(--color-text)] font-medium text-sm bg-transparent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
