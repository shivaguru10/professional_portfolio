import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  useGSAP(() => {
    // Animations removed per request
  }, { scope: containerRef });

  // Show first 3 projects by default, all when expanded
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);
  const hasMoreProjects = PROJECTS.length > 3;

  return (
    <section id="projects" ref={containerRef} className="px-4 md:px-6 pt-20 pb-[80px] bg-white">
      <div className="max-w-[1080px] mx-auto">
        <h2 className="text-[34px] font-semibold mb-3 text-center text-[#111111] tracking-[-0.025em]">
          Featured Projects
        </h2>
        <p className="text-[15px] text-[#555555] text-center mb-12 tracking-[-0.01em]">
          A selection of my recent work
        </p>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden transition-all duration-500 ease-in-out"
        >
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="project-card flex flex-col rounded-lg border border-[#E5E5E5] bg-white max-w-[340px] mx-auto w-full"
            >
              {/* Project Image - Reduced height */}
              <div className="relative overflow-hidden h-[160px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>

              {/* Content - Compact padding */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[20px] font-semibold mb-2 text-[#111111] tracking-[-0.02em] leading-[1.2]">
                  {project.title}
                </h3>

                <p className="text-[#555555] text-[14px] mb-4 line-clamp-2 leading-[1.5]">
                  {project.description}
                </p>

                {/* Tags - Smaller, compact */}
                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="text-[12px] font-normal px-2.5 py-1 rounded-[16px] border border-[#E5E5E5] text-[#555555]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons - Apple compact style */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-lg border border-[#0071E3] text-[#0071E3] font-medium text-[13px] hover:bg-[#0071E3]/5"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-lg bg-[#0071E3] text-white font-medium text-[13px] hover:bg-[#005BBB]"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {hasMoreProjects && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-5 py-2.5 rounded-lg bg-[#0071E3] text-white font-medium text-[15px] hover:bg-[#005BBB]"
            >
              {showAll ? "Show Less" : "Show More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
