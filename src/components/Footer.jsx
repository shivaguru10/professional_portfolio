import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6">

        {/* Name / Tagline */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-[var(--color-primary)]">
            Shivaguru
          </h3>
          <p className="text-[var(--color-text-dim)] text-sm">
            Full Stack Developer • MERN • React
          </p>
        </div>

        {/* Social + Contact Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-colors"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-colors"
            title="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:gsshivaguru@gmail.com"
            className="text-[var(--color-primary)] hover:opacity-80 transition-all font-medium"
            title="Email"
          >
            <FaEnvelope />
          </a>

          {/* Call Button */}
          <a
            href="tel:+918667573511"
            className="text-[var(--color-primary)] hover:opacity-80 transition-all"
            title="Call me"
          >
            <FaPhoneAlt />
          </a>
        </div>

        {/* Phone Number (Optional Visible Text) */}
        <p className="text-[var(--color-primary)] text-sm font-medium">
          📞 +91 86675 73511
        </p>

        {/* Copyright */}
        <p className="text-[var(--color-text-dim)] text-sm text-center">
          © {new Date().getFullYear()} Shivaguru. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
