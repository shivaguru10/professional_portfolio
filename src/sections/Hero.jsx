export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          Hi, I'm Shivaguru 👋
        </h1>

        <p className="text-green-400 text-lg mb-3">
          Full Stack Developer | MERN | React | Node.js
        </p>

        <p className="text-gray-400 mb-8">
          I build modern, fast, and scalable web applications with clean UI and solid backend logic.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-green-400 text-black font-semibold hover:bg-green-300 transition">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-xl border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}
