"use client";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export const ProjectsHero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-6 py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,220,130,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Badge */}

       <div className="text-center mb-16">
          <span className="inline-flex px-4 py-2 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-sm font-medium mb-5">
            Our Featured Work & Success Stories.
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
             We build products
            <span className="text-[#00dc82]"> that deliver
          real results</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-lg">
             Explore our portfolio of Shopify stores, SaaS platforms, enterprise
          applications, CRM systems, POS solutions, and custom software. Every
          project reflects our commitment to quality, performance, and
          exceptional user experiences.
          </p>
        </div>
        {/* Heading */}


      </div>
    </section>
  );
};
