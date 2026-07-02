"use client";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SecurityIcon from "@mui/icons-material/Security";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import BoltIcon from "@mui/icons-material/Bolt";
import BuildIcon from "@mui/icons-material/Build";

const FEATURES = [
  {
    icon: RocketLaunchIcon,
    title: "Fast Delivery",
    description:
      "We deliver high-quality digital products quickly using agile development, efficient workflows, and clear communication.",
  },
  {
    icon: SecurityIcon,
    title: "Secure Development",
    description:
      "Every project follows modern security best practices to help protect your business, customer data, and applications.",
  },
  {
    icon: PhoneIphoneIcon,
    title: "Mobile-First Design",
    description:
      "Every interface is designed to provide a seamless experience across desktops, tablets, and mobile devices.",
  },
  {
    icon: QueryStatsIcon,
    title: "SEO Optimized",
    description:
      "Our websites are built with performance, accessibility, and search engine optimization in mind.",
  },
  {
    icon: BoltIcon,
    title: "High Performance",
    description:
      "We create lightning-fast websites and web applications focused on speed, scalability, and exceptional user experience.",
  },
  {
    icon: BuildIcon,
    title: "Long-Term Support",
    description:
      "We provide ongoing maintenance, feature enhancements, bug fixes, and technical support after launch.",
  },
];

export const WhyChoose = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,220,130,0.06),transparent_65%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-2 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-sm font-medium mb-5">
            Why Choose Vemzo
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Building Digital Products
            <span className="text-[#00dc82]">
              {" "}
              That Drive Results
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-lg">
            We combine strategy, design, and engineering to build secure,
            scalable, and high-performing digital solutions that help businesses
            grow with confidence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl border border-[rgba(0,220,130,0.15)] bg-[#000000] backdrop-blur-xl p-8 group transition-all duration-300 hover:border-[rgba(0,220,130,0.4)] hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-[rgba(0,220,130,0.1)] border border-[rgba(0,220,130,0.2)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon sx={{ fontSize: 36 }} className="text-[#00dc82]" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {feature.description}
                </p>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(0,220,130,0.08),transparent_70%)] pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};