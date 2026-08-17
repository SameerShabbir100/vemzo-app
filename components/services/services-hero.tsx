"use client";




export const ServicesHero = () => {
  return (
    <section className="relative flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05),transparent_70%)]" />

      {/* Hero */}
      <div className="text-center mb-16">
        <span className="inline-flex px-4 py-2 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-sm font-medium mb-5">
          Premium Software Development Services
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
           We design & build digital products
          <span className="text-[#00dc82]"> that help businesses grow.</span>
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-lg">
          From Shopify stores and SaaS platforms to enterprise software,
          CRM systems, POS solutions, and custom web applications, we
          create scalable, high-performance solutions tailored to your
          business goals.
        </p>
      
      </div>
    </section>
  );
};