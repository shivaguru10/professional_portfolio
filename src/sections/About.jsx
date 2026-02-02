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
    <section id="about" ref={containerRef} className="px-6 py-[100px] bg-white">
      <div className="max-w-[680px] mx-auto about-content">
        <h2 className="text-[40px] font-semibold mb-6 text-[#111111] tracking-[-0.03em] leading-[1.1]">
          About Me
        </h2>

        {/* Thin left-aligned divider */}
        <div className="w-16 h-[1px] bg-[#E5E5E5] mb-8"></div>

        <p className="text-[#555555] text-[17px] leading-[1.58] tracking-[-0.01em]">
          I'm <span className="text-[#111111] font-medium">Shivaguru</span>,
          a dedicated <span className="text-[#111111] font-medium">Full Stack Developer</span> skilled in
          React.js, Node.js, and Express.js. With hands-on internship experience building
          real-world web features and REST APIs, I have a strong focus on writing clean,
          efficient code and delivering responsive UIs. I am a quick learner with solid
          problem-solving skills and a passion for building reliable, user-friendly applications.
        </p>
      </div>
    </section>
  );
}
