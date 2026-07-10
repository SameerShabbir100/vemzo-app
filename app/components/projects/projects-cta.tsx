import Link from "next/link";

export const ProjectsCTA = () => {
  return (
    <section className="px-6 py-24">
      <div
        className="
          relative
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-3xl
          border
          border-[rgba(0,220,130,0.15)]
          p-16
          text-center
          backdrop-blur-sm
        "
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,220,130,0.08),transparent_70%)]" />

        <div className="relative z-10">
          {/* Heading */}
          <h2 className="text-[40px] font-semibold text-white md:text-[50px]">
            Have a <span className="text-[#00dc82]">Project</span> In Mind?
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              leading-8
              text-gray-400
            "
          >
            Whether you're launching a startup, building a Shopify store, or
            scaling an enterprise application, we're ready to help bring your
            vision to life.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="
              mt-10
              inline-flex
              items-center
              justify-center
              rounded-xl
              bg-[#00dc82]
              px-10
              py-4
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#00c474]
              hover:shadow-lg
              hover:shadow-[#00dc82]/20
            "
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};
