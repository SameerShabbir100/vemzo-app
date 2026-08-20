"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const COMPARISONS = [
  {
    feature: "Pricing & Cost Structure",
    vemzo: { text: "Fixed transparent pricing, no hidden costs", status: "yes" },
    freelancer: { text: "Unstable hourly rates, scope creep costs", status: "no" },
    agency: { text: "Heavy overhead, expensive retainer fees", status: "no" },
  },
  {
    feature: "Delivery Speed",
    vemzo: { text: "Rapid MVP in weeks, agile milestones", status: "yes" },
    freelancer: { text: "Unpredictable timelines, high delays", status: "no" },
    agency: { text: "Slow bureaucratic process, long kickoffs", status: "neutral" },
  },
  {
    feature: "Quality Assurance",
    vemzo: { text: "Dedicated QA engineers, automated testing", status: "yes" },
    freelancer: { text: "Rarely tested, relies on manual self-checks", status: "no" },
    agency: { text: "Basic QA, extra fee for continuous testing", status: "neutral" },
  },
  {
    feature: "Post-Launch Support",
    vemzo: { text: "Free maintenance period + SLAs available", status: "yes" },
    freelancer: { text: "Usually unavailable after final payment", status: "no" },
    agency: { text: "Expensive monthly support contracts", status: "neutral" },
  },
  {
    feature: "Communication & PM",
    vemzo: { text: "Daily updates, Slack access, dedicated PM", status: "yes" },
    freelancer: { text: "Difficult to reach, sporadic updates", status: "no" },
    agency: { text: "Clunky email threads, weekly status calls", status: "neutral" },
  },
  {
    feature: "Technology Stack",
    vemzo: { text: "Modern stack (Next.js, FastAPI, Node, AI integrations)", status: "yes" },
    freelancer: { text: "Varies, often outdated single-person stack", status: "neutral" },
    agency: { text: "Legacy structures, slow to adopt modern tech", status: "neutral" },
  },
];

export const CompareUs = () => {
  const renderStatusIcon = (status: string) => {
    if (status === "yes") {
      return <CheckCircleIcon className="text-[#00dc82] mr-2 flex-shrink-0" fontSize="small" />;
    } else if (status === "no") {
      return <CancelIcon className="text-red-500 mr-2 flex-shrink-0" fontSize="small" />;
    }
    return <HorizontalRuleIcon className="text-gray-500 mr-2 flex-shrink-0" fontSize="small" />;
  };

  return (
    <section id="compare-us" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,220,130,0.04),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-2 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.05)] text-[#00dc82] text-sm font-semibold tracking-wider uppercase mb-5 backdrop-blur-md">
            The Vemzo Edge
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How We Compare to
            <span className="text-[#00dc82] bg-gradient-to-r from-[#00dc82] to-[#3ef8b1] bg-clip-text text-transparent"> Alternatives</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-lg">
            We bridge the gap between expensive, slow agency structures and unpredictable freelance work to deliver top-tier custom software development.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-[rgba(0,220,130,0.15)] bg-black/40 backdrop-blur-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[rgba(0,220,130,0.15)] bg-[#05080f]">
                <th className="p-6 text-gray-400 font-medium text-sm uppercase tracking-wider w-1/4">Key Features</th>
                <th className="p-6 text-[#00dc82] font-semibold text-lg tracking-wide w-1/3 bg-[rgba(0,220,130,0.03)] border-x border-[rgba(0,220,130,0.1)]">
                  VEMZO AGENCY
                </th>
                <th className="p-6 text-gray-400 font-semibold text-md w-1/5">Freelancers</th>
                <th className="p-6 text-gray-400 font-semibold text-md w-1/5">Traditional Agencies</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISONS.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-[rgba(255,255,255,0.05)] hover:bg-white/[0.01] transition-colors"
                >
                  {/* Feature Title */}
                  <td className="p-6 font-semibold text-white text-base">{item.feature}</td>

                  {/* Vemzo */}
                  <td className="p-6 text-white text-sm bg-[rgba(0,220,130,0.03)] border-x border-[rgba(0,220,130,0.1)] font-medium">
                    <div className="flex items-start">
                      {renderStatusIcon(item.vemzo.status)}
                      <span>{item.vemzo.text}</span>
                    </div>
                  </td>

                  {/* Freelancers */}
                  <td className="p-6 text-gray-400 text-sm">
                    <div className="flex items-start">
                      {renderStatusIcon(item.freelancer.status)}
                      <span>{item.freelancer.text}</span>
                    </div>
                  </td>

                  {/* Traditional Agencies */}
                  <td className="p-6 text-gray-400 text-sm">
                    <div className="flex items-start">
                      {renderStatusIcon(item.agency.status)}
                      <span>{item.agency.text}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Comparison Cards */}
        <div className="grid gap-6 md:hidden">
          {COMPARISONS.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[rgba(0,220,130,0.15)] bg-black/60 p-6 flex flex-col gap-4"
            >
              <h3 className="text-xl font-bold text-white border-b border-[rgba(255,255,255,0.1)] pb-2">
                {item.feature}
              </h3>
              
              {/* Vemzo */}
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase text-[#00dc82]">Vemzo Agency</span>
                <div className="flex items-start text-white text-sm">
                  {renderStatusIcon(item.vemzo.status)}
                  <span>{item.vemzo.text}</span>
                </div>
              </div>

              {/* Freelancers */}
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase text-gray-400">Freelancers</span>
                <div className="flex items-start text-gray-400 text-sm">
                  {renderStatusIcon(item.freelancer.status)}
                  <span>{item.freelancer.text}</span>
                </div>
              </div>

              {/* Traditional Agencies */}
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase text-gray-400">Traditional Agencies</span>
                <div className="flex items-start text-gray-400 text-sm">
                  {renderStatusIcon(item.agency.status)}
                  <span>{item.agency.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
