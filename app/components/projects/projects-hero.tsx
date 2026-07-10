"use client";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export const ProjectsHero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-6 py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,220,130,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Badge */}
        <div className="Welcome-box border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] px-4 py-2 opacity-90">
          <AutoAwesomeIcon
            sx={{
              fontSize: 20,
              color: "#00dc82",
              mr: "10px",
            }}
          />

          <h2 className="Welcome-text text-xs text-[#00dc82] sm:text-sm">
            Our Featured Work & Success Stories
          </h2>
        </div>

        {/* Heading */}
        <h1
          className="
            mt-8
            text-4xl
            font-bold
            leading-tight
            text-white
            sm:text-5xl
            lg:text-7xl
          "
        >
          We build <span className="text-[#00dc82]">products</span> that deliver
          real results
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          Explore our portfolio of Shopify stores, SaaS platforms, enterprise
          applications, CRM systems, POS solutions, and custom software. Every
          project reflects our commitment to quality, performance, and
          exceptional user experiences.
        </p>
      </div>
    </section>
  );
};
