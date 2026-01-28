import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV_LINKS } from "../constants";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("#home");

  // Simple active tab logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveTab(`#${section}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo / Name */}
        <a
          href="#home"
          className="text-xl font-bold text-[var(--color-primary)] tracking-tight"
          onClick={() => setActiveTab("#home")}
        >
          Shivaguru
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.href)}
              className={`relative text-sm font-medium transition-colors duration-200 group ${activeTab === link.href ? "text-[var(--color-primary)]" : "text-[var(--color-text-dim)] hover:text-[var(--color-primary)]"
                }`}
            >
              {link.name}
              <span className={`absolute left-0 bottom-[-4px] h-[1px] bg-[var(--color-primary)] transition-all duration-300 ${activeTab === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}

          {/* Theme Toggle - Minimal SVG Style */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-[var(--color-primary)]/10 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg className="w-5 h-5 text-[var(--color-text-dim)]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[var(--color-text)] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)] px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors py-2"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-[var(--color-primary)]/10 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <>
                <svg className="w-5 h-5 text-[var(--color-text)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <span className="text-sm text-[var(--color-text)]">Dark Mode</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="text-sm text-[var(--color-text)]">Light Mode</span>
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
