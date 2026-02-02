import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animations removed per request
  }, { scope: containerRef });

  return (
    <section id="home" ref={containerRef} className="flex items-center justify-center px-6 pt-[160px] pb-[120px] bg-white">

      <div className="text-center max-w-[900px] mx-auto">
        {/* Tagline */}
        <p className="text-[17px] font-medium text-[#6E6E73] tracking-[-0.2px] mb-3">
          Full Stack Developer
        </p>

        {/* Main Heading */}
        <h1 className="text-[48px] md:text-[60px] font-bold text-[#111111] leading-[1.1] tracking-[-1px]">
          Hi, I'm Shivaguru
        </h1>

        {/* Underline Element */}
        <div className="w-12 h-[2px] bg-[#E5E5E5] mx-auto mt-3 mb-6 rounded-sm"></div>

        {/* Subheading */}
        <p className="text-[20px] font-medium text-[#555555] mt-[18px] mb-5">
          Building clean, efficient, real-world web applications.
        </p>

        {/* Paragraph */}
        <p className="text-[17px] text-[#555555] leading-[1.55] max-w-[640px] mx-auto mb-10">
          Experienced in modern frontend and backend technologies, specializing in React, Node.js, and scalable REST APIs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* Primary Button - View Projects */}
          <a
            href="#projects"
            className="h-12 px-7 rounded-lg bg-[#0071E3] text-white font-medium text-[16px] flex items-center gap-2 hover:bg-[#005BBB]"
          >
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
            View Projects
          </a>

          {/* Tertiary Neutral Button - View Resume */}
          <a
            href={`${import.meta.env.BASE_URL}Shivaguru_CV_2026.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-7 rounded-lg bg-[#F5F5F7] border border-[#D2D2D7] text-[#111111] font-medium text-[16px] flex items-center gap-2 hover:bg-[#EBEBED]"
          >
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            View CV
          </a>

          {/* Secondary Outline Button - Download Resume */}
          <a
            href={`${import.meta.env.BASE_URL}Shivaguru_CV_2026.pdf`}
            download="Shivaguru_CV_2026.pdf"
            className="h-12 px-7 rounded-lg bg-transparent border border-[#0071E3] text-[#0071E3] font-medium text-[16px] flex items-center gap-2 hover:bg-[#0071E3]/5"
          >
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
