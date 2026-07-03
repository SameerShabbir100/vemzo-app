"use client";



export const AboutHero = () => {
  return (
    <section className="relative flex items-center justify-center py-28 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05),transparent_70%)]" />

      {/* Hero */}
      <div className="text-center mb-16">
        <span className="inline-flex px-4 py-2 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-sm font-medium mb-5">
          Trusted Software Development Partner
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          We build exceptional software
          <span className="text-[#00dc82]"> with exceptional peoples.</span>
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-lg">
           We&apos;re a team of designers, developers, and strategists passionate about creating digital products that solve real business challenges. By combining innovation, technical expertise, and user-focused design, we deliver solutions that help companies grow with confidence.
        </p>
        {/* <div className="max-w-7xl mx-auto px-6"><div
        className="
        rounded-3xl
        border
        border-[#2A0E61]
        backdrop-blur-sm
        p-10
        "
      >
        <h2
          className="
          text-[44px]
          font-semibold
          text-transparent
          bg-clip-text
          bg-gradient-to-r
          from-purple-500
          to-cyan-500
          mb-8
          "
        >
          Our Story
        </h2>

        <p className="text-gray-400 leading-9 text-lg">
          Our agency was founded with a simple mission:
          help businesses leverage technology to grow faster.
          We specialize in custom SaaS applications, Shopify development,
          enterprise systems, and modern web experiences.
        </p>

        <p className="text-gray-400 leading-9 text-lg mt-8">
          From startups launching their first MVP to established
          companies scaling globally, we deliver solutions
          designed for performance, security, and long-term success.
        </p>
      </div></div> */}
      
      </div>
    </section>
  );
};