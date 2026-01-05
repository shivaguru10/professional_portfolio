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
    <section className="px-6 py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-green-400">
            Let’s Get In Touch
          </h2>
          <p className="text-gray-400">
            Want to hire me or discuss an opportunity?  
            Just drop a message — I’ll get back to you.
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-green-400/20 space-y-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-black border border-green-400/30 text-white focus:outline-none"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-black border border-green-400/30 text-white focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full px-4 py-3 rounded-lg bg-black border border-green-400/30 text-white focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-green-400 text-black font-semibold hover:bg-green-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
