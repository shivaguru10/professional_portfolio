import { useRef } from "react";
import emailjs from "emailjs-com";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const formRef = useRef();
  const containerRef = useRef();

  useGSAP(() => {
    // Animations removed per request
  }, { scope: containerRef });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pf729tq",
        "template_onyalui",
        formRef.current,
        "ZldIPW7qXycYVhTZa"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current.reset();
        },
        (error) => {
          alert("Something went wrong ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" ref={containerRef} className="px-6 pt-[120px] pb-20 bg-white">
      <div className="max-w-[1040px] mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div className="contact-item max-w-[480px]">
          <h2 className="text-[36px] font-semibold mb-4 text-[#111111] tracking-[-0.025em]">
            Get in Touch
          </h2>
          <div className="w-full h-[1px] bg-[#E5E5E5] mb-6"></div>
          <p className="text-[#555555] text-[17px] leading-[1.6] tracking-[-0.01em]">
            Have a project in mind or just want to say hi? Feel free to reach out.
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        {/* Form - Apple style */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4 w-full max-w-[480px]"
        >
          <div>
            <label className="block text-[13px] font-medium text-[#111111] mb-2 tracking-[-0.01em]">Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3.5 rounded-lg bg-[#F5F5F7] border border-[#D2D2D7] text-[#111111] text-[16px] placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3]"
            />
          </div>

          <div>
            <label className="block text-[13px] font-medium text-[#111111] mb-2 tracking-[-0.01em]">Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3.5 rounded-lg bg-[#F5F5F7] border border-[#D2D2D7] text-[#111111] text-[16px] placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3]"
            />
          </div>

          <div>
            <label className="block text-[13px] font-medium text-[#111111] mb-2 tracking-[-0.01em]">Message</label>
            <textarea
              name="message"
              placeholder="How can I help you?"
              rows="5"
              required
              className="w-full px-4 py-3.5 rounded-lg bg-[#F5F5F7] border border-[#D2D2D7] text-[#111111] text-[16px] placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3] resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-lg bg-[#0071E3] text-white font-medium text-[16px] hover:bg-[#005BBB] mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
