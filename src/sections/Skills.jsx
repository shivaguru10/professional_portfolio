import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILLS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef();

  useGSAP(() => {
    // Ensure visibility if ScrollTrigger is already past the point
    gsap.set(".skill-card", { opacity: 0, y: 40 });

    gsap.to(".skill-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });

    // Refresh to handle layout shifts
    ScrollTrigger.refresh();
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
              className="skill-card p-10 rounded-[2rem] border border-[var(--color-primary)]/10 bg-[var(--color-surface)] shadow-sm hover:shadow-xl hover:shadow-[var(--color-primary)]/5 transition-all duration-500 group"
            >
              <h3 className="text-2xl font-bold mb-8 text-[var(--color-primary)] group-hover:translate-x-1 transition-transform">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-5 py-2.5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-primary)]/10 text-[var(--color-text-dim)] font-semibold text-sm group-hover:border-[var(--color-primary)]/40 group-hover:text-[var(--color-text)] transition-all duration-300"
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
