"use client";

interface LegalHeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  lastUpdated?: string;
}

export const LegalHero = ({
  badge,
  title,
  highlight,
  description,
  lastUpdated,
}: LegalHeroProps) => {
  return (
    <section className="relative flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05),transparent_70%)]" />

      {/* Hero */}
      <div className="text-center mb-16">
        <span className="inline-flex px-4 py-2 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-sm font-medium mb-5">
          {badge}
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {title}
          <span className="text-[#00dc82]"> {highlight}</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-lg">
          {description}
        </p>

        {lastUpdated && (
          <p className="mt-4 text-sm text-gray-500">
            Last updated: {lastUpdated}
          </p>
        )}
      </div>
    </section>
  );
};
