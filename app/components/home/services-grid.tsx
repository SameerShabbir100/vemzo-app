"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PROJECT_DETAILS } from "@/constants/project-details";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ExtensionIcon from "@mui/icons-material/Extension";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import GroupsIcon from "@mui/icons-material/Groups";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";
import CloudIcon from "@mui/icons-material/Cloud";
import CodeIcon from "@mui/icons-material/Code";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";

const ICON_MAP: Record<string, any> = {
  "shopify-store-development": StorefrontIcon,
  "shopify-app-development": ExtensionIcon,
  "pos-systems": PointOfSaleIcon,
  "crm-systems": GroupsIcon,
  "hrm-systems": BadgeIcon,
  "lms-platforms": SchoolIcon,
  "custom-saas-applications": CloudIcon,
  "mern-stack-development": CodeIcon,
  "mevn-stack-development": CodeIcon,
};

const SPECIAL_BADGES: Record<string, string> = {
  "shopify-store-development": "⚡ Turn-Key Storefront",
  "shopify-app-development": "🔌 Custom API Extension",
  "pos-systems": "🏬 Retail & Offline Sync",
  "crm-systems": "🎯 Lead Pipeline Engine",
  "hrm-systems": "💼 Workforce & Payroll",
  "lms-platforms": "🎓 E-Learning & Streaming",
  "custom-saas-applications": "☁️ Multi-Tenant SaaS",
  "mern-stack-development": "💻 Full-Stack React App",
  "mevn-stack-development": "🚀 Vue.js & Nuxt.js SSR",
};

const parsePrices = (priceStr: string) => {
  const match = priceStr.match(/^(.*?)(?:\s*\((PKR\s*[\d,]+)\))?$/i);
  const usd = match ? match[1].trim() : priceStr;
  const pkr = match && match[2] ? match[2].trim() : null;
  return { usd, pkr };
};

export const ServicesGrid = () => {
  const [activeCardTabs, setActiveCardTabs] = useState<Record<string, "overview" | "tech" | "deliverables">>({});
  const [activeModalSlug, setActiveModalSlug] = useState<string | null>(null);

  const allProjects = useMemo(() => Object.values(PROJECT_DETAILS), []);

  const setCardTab = (slug: string, tab: "overview" | "tech" | "deliverables") => {
    setActiveCardTabs((prev) => ({ ...prev, [slug]: tab }));
  };

  const getCardTab = (slug: string) => activeCardTabs[slug] || "overview";

  const activeProjectModal = useMemo(() => {
    if (!activeModalSlug) return null;
    return PROJECT_DETAILS[activeModalSlug] || null;
  }, [activeModalSlug]);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,220,130,0.06),transparent_65%)] pointer-events-none" />

      <div className="relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(0,220,130,0.35)] bg-[rgba(0,220,130,0.08)] backdrop-blur-md text-[#00dc82] text-xs sm:text-sm font-extrabold mb-4 shadow-[0_0_20px_rgba(0,220,130,0.2)]">
            Our Ready Digital Products
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Turn-Key Software & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00dc82] via-[#00f59b] to-[#00c675]">Digital Systems</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Explore our pre-engineered software products. Every product includes 100% full commercial source code, production deployment scripts, database schemas, and 30 days of free support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {allProjects.map((project) => {
            const Icon = ICON_MAP[project.slug] || CodeIcon;
            const { usd, pkr } = parsePrices(project.price);
            const currentTab = getCardTab(project.slug);

            return (
              <div
                key={project.slug}
                className="relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-[rgba(0,220,130,0.3)] bg-transparent backdrop-blur-md p-6 sm:p-7 transition-all duration-400 hover:-translate-y-2 hover:border-[#00dc82] hover:bg-[rgba(0,220,130,0.04)] hover:shadow-[0_15px_40px_rgba(0,220,130,0.2)] group"
              >
                <div>
                  {/* Card Header: Icon + Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(0,220,130,0.12)] border border-[rgba(0,220,130,0.35)] flex items-center justify-center text-[#00dc82] shadow-[0_0_15px_rgba(0,220,130,0.2)] group-hover:scale-110 transition-transform duration-300">
                      <Icon sx={{ fontSize: 26 }} />
                    </div>

                    <div className="text-right">
                      <div className="px-3.5 py-1 rounded-full bg-[rgba(0,220,130,0.15)] border border-[#00dc82]/40 text-[#00dc82] font-black text-xs sm:text-sm">
                        {usd}
                      </div>
                      {pkr && (
                        <div className="text-[10px] text-gray-400 mt-1 font-semibold">
                          {pkr}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Specialized System Badge */}
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#00dc82] mb-1.5 flex items-center gap-1">
                    <span>{SPECIAL_BADGES[project.slug] || "💎 Commercial Product"}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#00dc82] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  {/* Card Mini Tabs Header */}
                  <div className="flex items-center gap-1 mb-4 p-1 bg-transparent rounded-xl border border-[rgba(0,220,130,0.25)] text-[10px] font-bold">
                    <button
                      onClick={() => setCardTab(project.slug, "overview")}
                      className={`flex-1 py-1 rounded-lg transition-all ${
                        currentTab === "overview"
                          ? "bg-[#00dc82] text-black font-extrabold shadow-sm"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setCardTab(project.slug, "tech")}
                      className={`flex-1 py-1 rounded-lg transition-all ${
                        currentTab === "tech"
                          ? "bg-[#00dc82] text-black font-extrabold shadow-sm"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      Tech Stack
                    </button>
                    <button
                      onClick={() => setCardTab(project.slug, "deliverables")}
                      className={`flex-1 py-1 rounded-lg transition-all ${
                        currentTab === "deliverables"
                          ? "bg-[#00dc82] text-black font-extrabold shadow-sm"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      Features
                    </button>
                  </div>

                  {/* Mini Tab Contents */}
                  {currentTab === "overview" && (
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 min-h-[64px]">
                      {project.description}
                    </p>
                  )}

                  {currentTab === "tech" && (
                    <div className="flex flex-wrap gap-1.5 mb-4 min-h-[64px]">
                      {project.techStack.frontend?.map((t) => (
                        <span key={t} className="text-[10px] bg-transparent px-2.5 py-1 rounded-lg border border-[rgba(0,220,130,0.25)] text-gray-200 font-mono">
                          ⚡ {t}
                        </span>
                      ))}
                      {project.techStack.backend?.map((t) => (
                        <span key={t} className="text-[10px] bg-transparent px-2.5 py-1 rounded-lg border border-[rgba(0,220,130,0.25)] text-gray-200 font-mono">
                          🛠️ {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {currentTab === "deliverables" && (
                    <div className="space-y-1 mb-4 min-h-[64px]">
                      {project.features.slice(0, 3).map((f) => (
                        <div key={f.title} className="text-[11px] text-gray-300 truncate flex items-center gap-1.5">
                          <span className="text-[#00dc82] font-bold">✓</span>
                          <span className="text-white font-medium">{f.title}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Production Fulfillment Time */}
                  <div className="flex items-center justify-between text-[11px] text-gray-400 mb-4 pt-2.5 border-t border-[rgba(0,220,130,0.2)]">
                    <div className="flex items-center gap-1.5">
                      <LocalShippingRoundedIcon sx={{ fontSize: 15 }} className="text-[#00dc82]" />
                      <span>Fulfillment: <strong className="text-white">{project.deliveryTime}</strong></span>
                    </div>

                    <span className="text-[10px] font-semibold text-[#00dc82]">100% Source Code</span>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-3.5 border-t border-[rgba(0,220,130,0.2)] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalSlug(project.slug)}
                    className="text-xs text-gray-400 hover:text-[#00dc82] font-semibold flex items-center gap-1 transition-colors"
                  >
                    <TerminalRoundedIcon sx={{ fontSize: 15 }} />
                    Quick Specs
                  </button>

                  <Link
                    href={`/services/${project.slug}`}
                    className="text-xs font-black text-[#00dc82] hover:text-white flex items-center gap-1 transition-colors group-hover:translate-x-1 duration-300"
                  >
                    <span>System Details</span>
                    <ArrowForwardIcon sx={{ fontSize: 15 }} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Systems CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#00dc82] to-[#00c675] text-black font-extrabold text-sm shadow-[0_0_30px_rgba(0,220,130,0.4)] hover:scale-105 transition-all"
          >
            <span>Explore All 9 Systems & Multi-Bundle Estimator</span>
            <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Link>
        </div>
      </div>

      {/* QUICK SPECS MODAL */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-black border-2 border-[rgba(0,220,130,0.5)] rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,220,130,0.3)]">
            <button
              onClick={() => setActiveModalSlug(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white flex items-center justify-center transition-colors border border-gray-800"
            >
              <CloseIcon sx={{ fontSize: 18 }} />
            </button>

            <div className="flex items-center gap-2 text-xs font-black text-[#00dc82] uppercase tracking-wider mb-2">
              <TerminalRoundedIcon sx={{ fontSize: 18 }} />
              Quick Specs Overview
            </div>

            <h3 className="text-2xl font-black text-white mb-2">{activeProjectModal.title}</h3>
            <p className="text-xs text-gray-400 mb-6">{activeProjectModal.subtitle}</p>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-[rgba(0,220,130,0.05)] border border-[rgba(0,220,130,0.2)]">
                <div className="font-bold text-[#00dc82] mb-1">Pricing & Ownership</div>
                <div className="text-white text-sm font-black">{activeProjectModal.price}</div>
                <div className="text-gray-400 text-[11px] mt-1">✓ 100% Commercial Source Code Handover (Zero Monthly License Fees)</div>
              </div>

              <div className="p-4 rounded-2xl bg-[rgba(0,220,130,0.05)] border border-[rgba(0,220,130,0.2)]">
                <div className="font-bold text-[#00dc82] mb-2">Key Production Features</div>
                <div className="space-y-1.5">
                  {activeProjectModal.features.map((f) => (
                    <div key={f.title} className="flex items-start gap-2">
                      <CheckCircleOutlineIcon sx={{ fontSize: 15 }} className="text-[#00dc82] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white">{f.title}:</span>{" "}
                        <span className="text-gray-300">{f.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 pt-4 border-t border-gray-800">
              <button
                onClick={() => setActiveModalSlug(null)}
                className="px-4 py-2 rounded-xl bg-gray-900 text-gray-400 hover:text-white text-xs font-bold"
              >
                Close
              </button>

              <Link
                href={`/services/${activeProjectModal.slug}`}
                className="px-5 py-2.5 rounded-xl bg-[#00dc82] text-black font-extrabold text-xs flex items-center gap-1.5 hover:scale-105 transition-all"
              >
                <span>Full System Specification</span>
                <ArrowForwardIcon sx={{ fontSize: 15 }} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};