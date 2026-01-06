import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_arxk2a5",
        "template_wi5wjhq",
        formRef.current,
        "NcwiRJ2zflNQfNbcb"
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
    <section id="contact" className="px-6 py-20 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-green-400">
            Let’s Get In Touch
          </h2>
          <p className="text-gray-400">
            Want to hire me or discuss an opportunity? Just drop a message —
            I’ll get back to you.
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="p-8 rounded-2xl bg-[var(--bg)] text-[var(--text)]
           border border-[var(--accent)]/30
           space-y-6 shadow-lg"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg
           bg-transparent
           border border-[var(--accent)]/30
           text-[var(--text)]
           placeholder:text-gray-400
           focus:outline-none focus:ring-2
           focus:ring-[var(--accent)]
"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg
           bg-transparent
           border border-[var(--accent)]/30
           text-[var(--text)]
           placeholder:text-gray-400
           focus:outline-none focus:ring-2
           focus:ring-[var(--accent)]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full px-4 py-3 rounded-lg
           bg-transparent
           border border-[var(--accent)]/30
           text-[var(--text)]
           placeholder:text-gray-400
           focus:outline-none focus:ring-2
           focus:ring-[var(--accent)]"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-lg
                       bg-[var(--accent)] text-black
                       font-semibold
                       hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
