import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animations removed per request
  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="px-6 py-24 bg-[var(--color-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-[var(--color-text)]">
          <span className="text-[var(--color-primary)]">Featured</span> Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="project-card flex flex-col rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 text-[var(--color-text)]">
                  {project.title}
                </h3>

                <p className="text-[var(--color-text-dim)] text-base mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="text-xs font-bold px-3 py-1 rounded-full border border-[var(--color-primary)] text-[var(--color-text)]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold text-sm transition-colors"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-3 rounded-xl bg-[var(--color-primary)] text-white font-bold text-sm transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
