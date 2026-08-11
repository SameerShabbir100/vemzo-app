"use client";

import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const GUARANTEES = [
  {
    title: "Full Source Code Ownership",
    subtitle: "100% Commercial Repo Rights",
    icon: VerifiedUserRoundedIcon,
    description:
      "You receive complete, unencrypted commercial Git repository access. Host on your own servers, customize features, or sell without monthly subscription fees or vendor lock-in.",
    highlights: ["Complete Git Repo Handover", "Zero Monthly Licensing Fees", "Unrestricted Commercial Use"],
  },
  {
    title: "Sub-Second Performance Warranty",
    subtitle: "Optimized Database & SSR",
    icon: FlashOnRoundedIcon,
    description:
      "Every software suite is pre-tuned for ultra-fast load times (under 800ms) with optimized SQL/NoSQL queries, server-side rendering (SSR), and CDN asset delivery.",
    highlights: ["Sub-800ms Global Response", "Optimized Query Indexing", "Next.js / Vue SSR Ready"],
  },
  {
    title: "OWASP Security & Encryption",
    subtitle: "Enterprise Data Protection",
    icon: LockRoundedIcon,
    description:
      "Built with enterprise security standards: JWT / OAuth2 authentication, bcrypt password hashing, SQL injection protection, CORS policies, and SSL data encryption.",
    highlights: ["JWT & OAuth2 Auth", "Role-Based Access Control", "Encrypted Data Transmission"],
  },
  {
    title: "30-Day Developer Support",
    subtitle: "Direct Technical Assistance",
    icon: SupportAgentRoundedIcon,
    description:
      "Our core engineering team stays by your side for 30 days post-launch to fix bugs, assist with cloud deployment, train your team, and answer technical questions.",
    highlights: ["Bug Fixes & Patching", "Cloud Server Handover", "Direct WhatsApp & Email Support"],
  },
];

export const QualityGuarantee = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[rgba(0,220,130,0.2)]">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[rgba(0,220,130,0.3)] bg-[rgba(0,220,130,0.08)] text-[#00dc82] text-xs font-bold mb-3">
          <VerifiedUserRoundedIcon sx={{ fontSize: 16 }} />
          Commercial Quality Commitment
        </span>

        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Built for Scale, Security & <span className="text-[#00dc82]">Long-Term Success</span>
        </h2>
        <p className="max-w-xl mx-auto mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
          Every software product engineered by Vemzo Technologies meets rigorous enterprise standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
        {GUARANTEES.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="p-7 rounded-3xl border-2 border-[rgba(0,220,130,0.25)] bg-transparent backdrop-blur-md hover:border-[#00dc82] hover:bg-[rgba(0,220,130,0.03)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[rgba(0,220,130,0.12)] border border-[rgba(0,220,130,0.35)] flex items-center justify-center text-[#00dc82] group-hover:scale-110 transition-transform">
                    <Icon sx={{ fontSize: 26 }} />
                  </div>

                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#00dc82]">
                      {item.subtitle}
                    </span>
                    <h3 className="text-xl font-black text-white">{item.title}</h3>
                  </div>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[rgba(0,220,130,0.15)]">
                  {item.highlights.map((hl) => (
                    <div key={hl} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircleRoundedIcon sx={{ fontSize: 16 }} className="text-[#00dc82] shrink-0" />
                      <span className="font-semibold text-white">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
