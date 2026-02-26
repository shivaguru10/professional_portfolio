import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
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
            href="https://github.com/shivaguru10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#777777] hover:text-[#111111]"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shivaguru-gs-b06015270/"
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
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gsshivaguru@gmail.com&su=Portfolio%20Inquiry%20-%20Job%20Opportunity&body=Hi%20Shivaguru,%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out..."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#777777] hover:text-[#111111]"
            title="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/918667573511?text=Hi%20Shivaguru,%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#777777] hover:text-[#111111]"
            title="Message on WhatsApp"
          >
            <FaWhatsapp />
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
