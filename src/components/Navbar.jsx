import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--bg)] border-b border-[var(--accent)]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-xl font-bold text-[var(--accent)]"
        >
          Shivaguru
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[var(--accent)] transition"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
  onClick={toggleTheme}
  className="text-xl p-2 rounded-full cursor-pointer
             hover:bg-(--accent)/10
             transition duration-200
             "
  aria-label="Toggle theme"
>
  {theme === "light" ? <FaMoon /> : <FaSun />}
</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[var(--bg)] border-t border-[var(--accent)]/20 px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block hover:text-[var(--accent)] transition"
            >
              {link.name}
            </a>
          ))}

          <button
  onClick={toggleTheme}
  className="text-xl p-2 rounded-full cursor-pointer
             hover:bg-(--accent)/10
             transition duration-200
             "
  aria-label="Toggle theme"
>
  {theme === "light" ? <FaMoon /> : <FaSun />}
</button>

        </div>
      )}
    </nav>
  );
}
