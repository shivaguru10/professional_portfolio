const experienceData = [
  {
    title: "Internship – Full Stack Developer",
    place: "Sri Max Company, Sivakasi",
    time: "2024 (1 Month)",
    description:
      "Worked on real-world web development tasks, learned practical frontend and backend integration, and improved problem-solving skills.",
  },
  {
    title: "B.Tech – Information Technology",
    place: "PSNA College of Engineering and Technology",
    time: "2021 – 2025",
    description:
      "Completed Bachelor’s degree in Information Technology with strong fundamentals in programming, databases, and web development.",
  },
];

export default function Experience() {
  return (
    <section className="px-6 py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-400">
          Experience & Education
        </h2>

        <div className="relative border-l border-green-400/30 pl-6 space-y-10">
          {experienceData.map((item, index) => (
            <div key={index} className="relative">
              {/* Dot */}
              <span className="absolute -left-2.5 top-2 w-4 h-4 rounded-full bg-green-400"></span>

              <h3 className="text-xl font-semibold text-green-300">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400">
                {item.place} • {item.time}
              </p>

              <p className="mt-3 text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
