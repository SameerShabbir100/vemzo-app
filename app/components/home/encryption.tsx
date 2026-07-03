"use client";

import {
  Security as SecurityIcon,
  Lock as LockIcon,
} from "@mui/icons-material";

const FEATURES = [
  {
    icon: SecurityIcon,
    title: "Enterprise Security",
    description:
      "We build applications with industry-standard security practices to safeguard your business and customer data.",
  },
  {
    icon: LockIcon,
    title: "Encrypted Communication",
    description:
      "Sensitive information is protected using HTTPS, SSL/TLS encryption, secure authentication, and modern security protocols.",
  },
  {
    icon: SecurityIcon,
    title: "Privacy First",
    description:
      "From authentication to storage, we implement secure workflows that help keep your data private and compliant.",
  },
];

export const Encryption = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,220,130,0.06),transparent_65%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-2 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-sm font-medium mb-5">
            Security & Encryption
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Your Data.
            <span className="text-[#00dc82]"> Protected.</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-lg">
            Security is integrated into every stage of development. We use
            modern encryption standards, secure authentication, and best
            practices to help protect your applications and customer data.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3">
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

        {/* Bottom Banner */}
        <div className="mt-20 rounded-3xl border border-[rgba(0,220,130,0.2)] bg-gradient-to-r from-[rgba(0,220,130,0.1)] to-[rgba(3,0,20,0.3)] p-10 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Security Comes Standard
          </h3>

          <p className="text-gray-300 max-w-3xl mx-auto leading-8">
            Every website, SaaS platform, CRM, POS system, or enterprise
            application we build follows secure development practices designed
            to reduce risk and protect your business.
          </p>
        </div>
      </div>
    </section>
  );
};