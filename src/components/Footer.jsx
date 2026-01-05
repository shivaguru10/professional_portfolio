import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-green-400/20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6">
        
        {/* Name / Tagline */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-400">
            Shivaguru
          </h3>
          <p className="text-gray-400 text-sm">
            Full Stack Developer • MERN • React
          </p>
        </div>

        {/* Social + Contact Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition"
            title="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:gsshivaguru@gmail.com"
            className="text-gray-400 hover:text-green-400 transition"
            title="Email"
          >
            <FaEnvelope />
          </a>

          {/* Call Button */}
          <a
            href="tel:+918667573511"
            className="text-gray-400 hover:text-green-400 transition"
            title="Call me"
          >
            <FaPhoneAlt />
          </a>
        </div>

        {/* Phone Number (Optional Visible Text) */}
        <p className="text-gray-500 text-sm">
          📞 +91 86675 73511
        </p>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Shivaguru. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
