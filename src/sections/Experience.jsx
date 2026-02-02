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
    <section id="experience" ref={containerRef} className="px-6 py-20 bg-[#F5F5F7]">
      <div className="max-w-[760px] mx-auto">
        {/* Section Header - Apple style */}
        <h2 className="text-[36px] font-semibold mb-3 text-center text-[#111111] tracking-[-0.025em]">
          Experience
        </h2>
        <p className="text-[17px] text-[#777777] text-center mb-[60px] tracking-[-0.01em]">
          My professional journey
        </p>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[3px] top-[4px] bottom-0 w-[1.5px] bg-[#D2D2D7]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {EXPERIENCE_EDUCATION.map((item, index) => (
              <div key={index} className="exp-item relative pl-10">
                {/* Timeline Dot - Aligned with title */}
                <div className="absolute left-0 top-[7px] w-2 h-2 rounded-full bg-[#0071E3]" />

                {/* Content */}
                <div className="max-w-[620px]">
                  {/* Role/Position Title */}
                  <h3 className="text-[21px] font-semibold text-[#111111] tracking-[-0.02em] leading-[1.25]">
                    {item.title}
                  </h3>

                  {/* Company Name */}
                  <p className="text-[#0071E3] font-medium text-[15px] mt-1">
                    {item.place}
                  </p>

                  {/* Duration */}
                  <span className="inline-block text-[13px] font-normal text-[#777777] mt-1">
                    {item.time}
                  </span>

                  {/* Description */}
                  <p className="text-[#555555] text-[15px] leading-[1.55] mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
