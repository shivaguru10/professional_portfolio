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
    <section id="skills" ref={containerRef} className="px-6 py-24 bg-white">
      <div className="max-w-[860px] mx-auto">
        {/* Section Header */}
        <h2 className="text-[36px] font-semibold mb-3 text-center text-[#111111] tracking-[-0.025em]">
          Skills
        </h2>
        <div className="w-16 h-px bg-[#E5E5E5] mx-auto mb-4"></div>
        <p className="text-[16px] text-[#555555] text-center mb-16 tracking-[-0.01em]">
          Technologies and tools I work with
        </p>

        {/* Skills Categories */}
        <div className="space-y-[42px]">
          {SKILLS.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3 className="text-[24px] font-semibold mb-5 text-[#111111] tracking-[-0.02em]">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-[18px] border border-[#E5E5E5] text-[#111111] font-medium text-[14px] tracking-[-0.01em]"
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
