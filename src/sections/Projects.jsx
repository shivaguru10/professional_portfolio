const projects = [
  {
    title: "MERN E-Commerce App",
    description:
      "Full-featured e-commerce application with authentication, cart, orders, and admin panel.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    github: "https://github.com/yourusername/mern-ecommerce",
    live: "https://your-ecommerce-live-link.com",
  },
  {
    title: "Todo App with Backend",
    description:
      "Todo application built with React, Node.js, Express, and MongoDB.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    github: "https://github.com/yourusername/todo-app",
    live: "https://your-todo-live-link.com",
  },
  {
    title: "Authentication System",
    description:
      "JWT-based authentication system with secure login and registration.",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
    github: "https://github.com/yourusername/auth-system",
    live: "https://your-auth-live-link.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-green-400/20 bg-white/5 backdrop-blur hover:scale-[1.02] transition"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-lg border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-lg bg-green-400 text-black hover:bg-green-300 transition"
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
