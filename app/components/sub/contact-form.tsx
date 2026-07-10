"use client";

export const ContactForm = () => {
  return (
    <div className="relative rounded-3xl border border-[#2A0E61] bg-transparent p-8 backdrop-blur-sm">

      <h2 className="text-2xl text-white font-semibold mb-8">
        Send Message
      </h2>

      <form className="flex flex-col gap-6">

        <input
          type="text"
          placeholder="Your Name"
          className="bg-[#090d1f]/40 border border-[#2A0E61] rounded-xl px-5 py-4 outline-none text-white focus:border-cyan-400 transition"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="bg-[#090d1f]/40 border border-[#2A0E61] rounded-xl px-5 py-4 outline-none text-white focus:border-cyan-400 transition"
        />

        <input
          type="text"
          placeholder="Subject"
          className="bg-[#090d1f]/40 border border-[#2A0E61] rounded-xl px-5 py-4 outline-none text-white focus:border-cyan-400 transition"
        />

        <textarea
          rows={6}
          placeholder="Tell us about your project..."
          className="bg-[#090d1f]/40 border border-[#2A0E61] rounded-xl px-5 py-4 outline-none text-white resize-none focus:border-cyan-400 transition"
        />

        <button
          className="
          py-4 button-primary text-center text-white cursor-pointer rounded-lg
          "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};