const skills = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "REST API"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section className="px-6 py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-400">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-green-400/30 bg-white/5 backdrop-blur hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-green-300">
                {skill.title}
              </h3>

              <ul className="space-y-2 text-gray-400">
                {skill.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
