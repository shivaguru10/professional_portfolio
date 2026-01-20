import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { NAV_LINKS } from "../constants";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-primary)]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Name */}
        <a
          href="#home"
          className="text-xl font-bold text-[var(--color-primary)]"
        >
          Shivaguru
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl p-2 rounded-full cursor-pointer
                       text-[var(--color-text)]
                       hover:bg-[var(--color-primary)]/10
                       transition duration-200"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FaMoon /> : <FaSun className="text-yellow-400" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[var(--color-text)]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[var(--color-bg)] border-t border-[var(--color-primary)]/20 px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-[var(--color-text)] hover:text-[var(--color-primary)] transition"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="text-xl p-2 rounded-full cursor-pointer
                       text-[var(--color-text)]
                       hover:bg-[var(--color-primary)]/10
                       transition duration-200"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FaMoon /> : <FaSun className="text-yellow-400" />}
          </button>
        </div>
      )}
    </nav>
  );
}
