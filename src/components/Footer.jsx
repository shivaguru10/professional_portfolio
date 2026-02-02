import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F7]">
      <div className="max-w-[980px] mx-auto px-6 py-12 flex flex-col items-center gap-5">

        {/* Name */}
        <h3 className="text-[19px] font-semibold text-[#111111] tracking-[-0.02em]">
          Shivaguru
        </h3>

        {/* Role */}
        <p className="text-[#777777] text-[15px] tracking-[-0.01em] -mt-2">
          Full Stack Developer
        </p>

        {/* Social Icons - Monochrome grey */}
        <div className="flex gap-4 text-[20px] mt-2">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#777777] hover:text-[#111111]"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#777777] hover:text-[#111111]"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#777777] hover:text-[#111111]"
            title="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:gsshivaguru@gmail.com"
            className="text-[#777777] hover:text-[#111111]"
            title="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="tel:+918667573511"
            className="text-[#777777] hover:text-[#111111]"
            title="Call me"
          >
            <FaPhoneAlt />
          </a>
        </div>

        {/* Phone Number */}
        <p className="text-[#777777] text-[14px] tracking-[-0.01em] mt-1">
          +91 86675 73511
        </p>

        {/* Copyright */}
        <p className="text-[#888888] text-[12px] text-center tracking-[-0.01em] mt-2">
          Copyright {new Date().getFullYear()} Shivaguru. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
