"use client";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";

const STEPS = [
  {
    step: "01",
    title: "Requirement Alignment & Scope",
    time: "Day 1",
    icon: CodeRoundedIcon,
    description:
      "We align on your specific business requirements, custom features, branding themes, payment gateway choices, and database structure.",
  },
  {
    step: "02",
    title: "Source Code & Database Provisioning",
    time: "Days 2 - 5",
    icon: CloudUploadRoundedIcon,
    description:
      "Our engineering team provisions the commercial repository, sets up environment keys, configures relational/NoSQL schemas, and builds custom APIs.",
  },
  {
    step: "03",
    title: "Customization & QA Testing",
    time: "Days 6 - 10",
    icon: CheckCircleOutlineIcon,
    description:
      "Rigorous quality assurance, end-to-end user testing, security audit, mobile responsiveness check, and automated workflow validation.",
  },
  {
    step: "04",
    title: "Cloud Handover & Live Onboarding",
    time: "Deployment Day",
    icon: SupportAgentRoundedIcon,
    description:
      "Full cloud deployment to your AWS/Vercel/Linux VPS server, domain SSL connection, complete source code handover, and 30-day dev support kickoff.",
  },
];

export const DeliveryProcess = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[rgba(0,220,130,0.2)]">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[rgba(0,220,130,0.3)] bg-[rgba(0,220,130,0.08)] text-[#00dc82] text-xs font-bold mb-3">
          <RocketLaunchRoundedIcon sx={{ fontSize: 16 }} />
          Transparent Production Sprint
        </span>

        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          How We Deliver Your <span className="text-[#00dc82]">Software System</span>
        </h2>
        <p className="max-w-xl mx-auto mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
          From initial architecture alignment to 1-click cloud handover, our streamlined engineering workflow guarantees speed, precision, and zero friction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10">
        {STEPS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="relative p-6 rounded-3xl border border-[rgba(0,220,130,0.25)] bg-transparent backdrop-blur-sm hover:border-[#00dc82] hover:bg-[rgba(0,220,130,0.03)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[rgba(0,220,130,0.12)] border border-[rgba(0,220,130,0.3)] flex items-center justify-center text-[#00dc82] group-hover:scale-110 transition-transform">
                    <Icon sx={{ fontSize: 24 }} />
                  </div>
                  <span className="text-2xl font-black text-gray-700 group-hover:text-[#00dc82] transition-colors font-mono">
                    {item.step}
                  </span>
                </div>

                <div className="text-[10px] font-black uppercase text-[#00dc82] tracking-wider mb-1">
                  Timeline: {item.time}
                </div>

                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[rgba(0,220,130,0.15)] flex items-center gap-1.5 text-[11px] text-[#00dc82] font-semibold">
                <span>Phase Milestone</span>
                <span className="text-gray-600">→ Verified</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
