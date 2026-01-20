import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 95%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="px-6 py-24 bg-[var(--color-surface)]">
      <div className="max-w-7xl auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-[var(--color-text)]">
          <span className="text-[var(--color-primary)]">Featured</span> Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="project-card flex flex-col rounded-3xl overflow-hidden border border-[var(--color-primary)]/10 bg-[var(--color-bg)] shadow-lg hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[var(--color-text-dim)] text-base mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-3 rounded-xl border border-[var(--color-primary)]/20 text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white transition font-bold text-sm"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-3 rounded-xl bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition font-bold text-sm shadow-lg shadow-[var(--color-primary)]/20"
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
