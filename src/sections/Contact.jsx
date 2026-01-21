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
    gsap.from(".contact-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 95%",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
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
    <section id="contact" ref={containerRef} className="px-6 py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="contact-item">
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text)]">
            Let’s <span className="text-[var(--color-primary)]">Connect</span>
          </h2> */}
          <p className="text-[var(--color-text-dim)] text-lg leading-relaxed max-w-md">
            Have a project in mind or just want to say hi? Feel free to reach out.
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-item p-8 rounded-3xl bg-[var(--color-bg)]
                     border border-[var(--color-primary)]/10
                     space-y-6 shadow-xl relative z-10"
        >
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--color-text-dim)] ml-1">Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-4 rounded-xl
                         bg-[var(--color-surface)]
                         border border-[var(--color-primary)]/10
                         text-[var(--color-text)]
                         placeholder:text-[var(--color-text-dim)]/50
                         focus:outline-none focus:ring-2
                         focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)]
                         transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--color-text-dim)] ml-1">Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-4 rounded-xl
                         bg-[var(--color-surface)]
                         border border-[var(--color-primary)]/10
                         text-[var(--color-text)]
                         placeholder:text-[var(--color-text-dim)]/50
                         focus:outline-none focus:ring-2
                         focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)]
                         transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--color-text-dim)] ml-1">Message</label>
            <textarea
              name="message"
              placeholder="How can I help you?"
              rows="5"
              required
              className="w-full px-4 py-4 rounded-xl
                         bg-[var(--color-surface)]
                         border border-[var(--color-primary)]/10
                         text-[var(--color-text)]
                         placeholder:text-[var(--color-text-dim)]/50
                         focus:outline-none focus:ring-2
                         focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)]
                         transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl
                        text-black
                       font-bold text-lg
                       
                       transition-all active:scale-[0.98]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
