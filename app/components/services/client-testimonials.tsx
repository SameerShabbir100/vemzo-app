"use client";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

const REVIEWS = [
  {
    name: "Tariq Mahmood",
    role: "Founder & CEO, Apex Retail Brands",
    system: "Retail POS System ($2,100 / PKR 588,000)",
    review:
      "Vemzo Technologies delivered our multi-branch POS software within 14 days. The barcode scanning and offline thermal receipt printing work flawlessly across our 4 retail outlets. Outstanding engineering work!",
    rating: 5,
  },
  {
    name: "Zainab Shah",
    role: "Managing Director, Stellar CRM Consultancy",
    system: "Custom CRM Platform ($1,800 / PKR 504,000)",
    review:
      "We replaced our $600/month Salesforce subscription with Vemzo's custom CRM. Having 100% source code ownership and zero monthly fees saved us thousands. Highly recommended!",
    rating: 5,
  },
  {
    name: "Hamza Farooq",
    role: "Operations Lead, NextGen Logistics",
    system: "HRM & Payroll System ($1,400 / PKR 392,000)",
    review:
      "Our employee attendance tracking, biometric sync, and automated monthly payroll slips were configured seamlessly. The dev team guided us step-by-step during deployment.",
    rating: 5,
  },
  {
    name: "Sarah Al-Hassan",
    role: "Co-Founder, EduLearn Academy",
    system: "LMS Platform ($1,900 / PKR 532,000)",
    review:
      "Launching our online academy with Vemzo LMS was smooth. Student course progress tracking, video streaming security, and PDF certificate generation work perfectly.",
    rating: 5,
  },
];

export const ClientTestimonials = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[rgba(0,220,130,0.2)]">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[rgba(0,220,130,0.3)] bg-[rgba(0,220,130,0.08)] text-[#00dc82] text-xs font-bold mb-3">
          💬 Verified Client Feedback
        </span>

        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Trusted by Business Owners & <span className="text-[#00dc82]">Engineers</span>
        </h2>
        <p className="max-w-xl mx-auto mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
          Read how our turn-key software systems helped companies replace expensive SaaS subscriptions and accelerate deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {REVIEWS.map((r) => (
          <div
            key={r.name}
            className="p-7 rounded-3xl border border-[rgba(0,220,130,0.25)] bg-transparent backdrop-blur-md hover:border-[#00dc82] hover:bg-[rgba(0,220,130,0.03)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-[#00dc82]">
                  {[...Array(r.rating)].map((_, i) => (
                    <StarRoundedIcon key={i} sx={{ fontSize: 18 }} />
                  ))}
                </div>
                <FormatQuoteRoundedIcon className="text-[#00dc82]/30" sx={{ fontSize: 36 }} />
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic mb-5">
                &quot;{r.review}&quot;
              </p>
            </div>

            <div className="pt-4 border-t border-[rgba(0,220,130,0.15)] flex items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-extrabold text-white">{r.name}</h3>
                <p className="text-[11px] text-gray-400">{r.role}</p>
              </div>

              <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-[rgba(0,220,130,0.1)] border border-[rgba(0,220,130,0.25)] text-[#00dc82]">
                {r.system}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
