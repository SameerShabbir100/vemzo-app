"use client";

export const ContactMap = () => {
  return (
    <section className="w-full mx-auto  py-20">
      <div className="relative">
        <div className="text-center mb-16">

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Find Us On 
          <span className="text-[#00dc82]"> The Map.</span>
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-lg">
          Visit our office or schedule a meeting with our team. We are always
          ready to discuss your next project.
        </p>
      </div>


        <div
          className="
          relative
          overflow-hidden
          backdrop-blur-sm
          group
          "
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.99380696775!2d74.2073833!3d31.4826352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc2b94923f0388656!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715000000000!5m2!1sen!2s"
            className="w-full h-[500px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div
            className="
            absolute
            inset-0
            border
            border-cyan-500/20
            rounded-3xl
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
            pointer-events-none
            "
          />
        </div>
      </div>
    </section>
  );
};