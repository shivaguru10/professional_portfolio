import { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants";

export default function Navbar() {
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
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#E5E5E5]">
      <div className="max-w-[980px] mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Name - Apple style */}
        <a
          href="#home"
          className="text-[18px] font-semibold text-[#111111] tracking-[-0.02em]"
          onClick={() => setActiveTab("#home")}
        >
          Shivaguru
        </a>

        {/* Desktop Links - Apple style */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.href)}
              className={`text-[12px] font-normal tracking-[-0.01em] ${
                activeTab === link.href 
                  ? "text-[#111111]" 
                  : "text-[#555555] hover:text-[#111111]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Apple style */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - Apple style */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E5E5E5] px-6 py-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-[14px] font-normal text-[#111111] py-3 border-b border-[#E5E5E5] last:border-b-0"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
