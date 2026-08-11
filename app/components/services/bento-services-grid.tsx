"use client";

import { useState, useMemo } from "react";
import NextLink from "next/link";
import { PROJECT_DETAILS } from "@/constants/project-details";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ExtensionIcon from "@mui/icons-material/Extension";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import GroupsIcon from "@mui/icons-material/Groups";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";
import CloudIcon from "@mui/icons-material/Cloud";
import CodeIcon from "@mui/icons-material/Code";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TerminalIcon from "@mui/icons-material/Terminal";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import CompareIcon from "@mui/icons-material/Compare";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FilterListIcon from "@mui/icons-material/FilterList";

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

const CATEGORIES = [
  "All Solutions",
  "Shopify & E-Commerce",
  "Enterprise Systems",
  "Full-Stack Web Apps",
  "SaaS & Cloud Software",
  "EdTech & Learning",
  "Business Automation",
];

const TECH_FILTERS = [
  "All Tech",
  "React",
  "Next.js",
  "Nuxt.js",
  "Vue.js",
  "TypeScript",
  "Node.js",
  "Shopify",
  "GraphQL",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Express.js",
  "Stripe",
];

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

export const BentoServicesGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Solutions");
  const [selectedTech, setSelectedTech] = useState("All Tech");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalSlug, setActiveModalSlug] = useState<string | null>(null);
  const [showComparisonModal, setShowComparisonModal] = useState(false);
  const [selectedBundleSlugs, setSelectedBundleSlugs] = useState<string[]>([]);
  const [cardActiveTab, setCardActiveTab] = useState<Record<string, "overview" | "tech" | "deliverables">>({});

  const allProjects = useMemo(() => Object.values(PROJECT_DETAILS), []);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All Solutions" ||
        project.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesTech =
        selectedTech === "All Tech" ||
        (project.techStack.frontend &&
          project.techStack.frontend.some((t) => t.toLowerCase().includes(selectedTech.toLowerCase()))) ||
        (project.techStack.backend &&
          project.techStack.backend.some((t) => t.toLowerCase().includes(selectedTech.toLowerCase())));

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q);

      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [allProjects, selectedCategory, selectedTech, searchQuery]);

  const activeProject = useMemo(() => {
    if (!activeModalSlug) return null;
    return PROJECT_DETAILS[activeModalSlug] || null;
  }, [activeModalSlug]);

  const parsePrices = (priceStr: string, origStr: string) => {
    const mP = priceStr.match(/^(.*?)(?:\s*\((PKR\s*[\d,]+)\))?$/i);
    const usd = mP ? mP[1].trim() : priceStr;
    const pkr = mP && mP[2] ? mP[2].trim() : null;

    const mO = origStr.match(/^(.*?)(?:\s*\((PKR\s*[\d,]+)\))?$/i);
    const origUsd = mO ? mO[1].trim() : origStr;
    const origPkr = mO && mO[2] ? mO[2].trim() : null;

    return { usd, pkr, origUsd, origPkr };
  };

  const getCardTab = (slug: string) => cardActiveTab[slug] || "overview";

  const setCardTab = (slug: string, tab: "overview" | "tech" | "deliverables") => {
    setCardActiveTab((prev) => ({ ...prev, [slug]: tab }));
  };

  const toggleBundleSelection = (slug: string) => {
    if (selectedBundleSlugs.includes(slug)) {
      setSelectedBundleSlugs(selectedBundleSlugs.filter((s) => s !== slug));
    } else {
      setSelectedBundleSlugs([...selectedBundleSlugs, slug]);
    }
  };

  // Calculate selected bundle total
  const bundleSummary = useMemo(() => {
    const selected = allProjects.filter((p) => selectedBundleSlugs.includes(p.slug));
    const totalUsd = selected.reduce((sum, p) => sum + p.priceNum, 0);
    const totalPkr = totalUsd * 280;
    return {
      count: selected.length,
      titles: selected.map((p) => p.title).join(" + "),
      totalUsd: `$${totalUsd.toLocaleString()}`,
      totalPkr: `PKR ${totalPkr.toLocaleString()}`,
    };
  }, [allProjects, selectedBundleSlugs]);

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden">
      {/* Background Animated Glowing Ambient Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#00dc82]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#00e5ff]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Hero Badge & Title */}
      <div className="text-center mb-10 relative z-10 w-full overflow-hidden">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(0,220,130,0.35)] bg-[rgba(0,220,130,0.08)] backdrop-blur-md text-[#00dc82] text-xs sm:text-sm font-extrabold mb-5 shadow-[0_0_20px_rgba(0,220,130,0.2)]">
          <AutoAwesomeIcon sx={{ fontSize: 16 }} className="text-[#00dc82] animate-spin" />
          Vemzo Software Ecosystem & Solution Hub
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Pre-Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00dc82] via-[#00f59b] to-[#00c675]">Digital Systems</span>
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
          Skip months of initial R&D. Deploy production-ready software suites complete with verified source code, database schemas, deployment scripts, and developer support.
        </p>

        {/* Action Header Buttons & Spec Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setShowComparisonModal(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00dc82]/20 to-[#00dc82]/5 border border-[#00dc82]/50 hover:border-[#00dc82] text-[#00dc82] font-extrabold text-xs flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(0,220,130,0.2)] hover:scale-105"
          >
            <CompareIcon sx={{ fontSize: 18 }} />
            Compare All Systems Specs Matrix
          </button>

          <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-transparent border border-[rgba(0,220,130,0.25)] text-xs font-semibold text-gray-300">
            <SecurityRoundedIcon sx={{ fontSize: 16 }} className="text-[#00dc82] shrink-0" />
            <span>100% Commercial Source Code</span>
          </div>

          <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-transparent border border-[rgba(0,220,130,0.25)] text-xs font-semibold text-gray-300">
            <SpeedRoundedIcon sx={{ fontSize: 16 }} className="text-[#00dc82] shrink-0" />
            <span>Production Timeline (3 - 21 Days)</span>
          </div>

          <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-transparent border border-[rgba(0,220,130,0.25)] text-xs font-semibold text-gray-300">
            <StorageRoundedIcon sx={{ fontSize: 16 }} className="text-[#00dc82] shrink-0" />
            <span>Zero Subscription Fees</span>
          </div>
        </div>
      </div>

      {/* Master Unified Glass Filter & Control Suite */}
      <div className="relative z-10 mb-10 w-full overflow-hidden bg-transparent border border-[rgba(0,220,130,0.25)] backdrop-blur-xl p-4 sm:p-5 rounded-3xl space-y-4 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
        {/* Top Row: Categories & Live Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto min-w-0 flex-1 py-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all duration-300 whitespace-nowrap shrink-0 ${
                    isActive
                      ? "bg-gradient-to-r from-[#00dc82] to-[#00c675] text-black shadow-[0_0_25px_rgba(0,220,130,0.5)] scale-105"
                      : "bg-transparent text-gray-400 hover:text-white hover:bg-[rgba(0,220,130,0.08)] border border-[rgba(255,255,255,0.1)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Live Search & Count Badge */}
          <div className="flex items-center gap-3 shrink-0 justify-between lg:justify-end">
            <span className="text-[11px] font-bold text-[#00dc82] bg-[rgba(0,220,130,0.1)] px-3.5 py-1.5 rounded-xl border border-[rgba(0,220,130,0.25)] whitespace-nowrap">
              {filteredProjects.length} Systems Ready
            </span>

            <div className="relative w-44 sm:w-56 md:w-64">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by React, CRM..."
                className="w-full pl-10 pr-4 py-2 bg-transparent border border-[rgba(0,220,130,0.2)] focus:border-[#00dc82] rounded-2xl text-xs text-white placeholder-gray-500 focus:outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Bottom Row: Wrapping Tech Chips */}
        <div className="border-t border-[rgba(0,220,130,0.15)] pt-3 flex flex-wrap items-center gap-2">
          <span className="text-xs text-gray-400 font-bold flex items-center gap-1 shrink-0 pr-2">
            <FilterListIcon sx={{ fontSize: 16 }} className="text-[#00dc82]" />
            Filter Tech:
          </span>

          <div className="flex flex-wrap items-center gap-2 flex-1">
            {TECH_FILTERS.map((tech) => {
              const isActive = selectedTech === tech;
              return (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-3 py-1 rounded-xl text-[11px] font-mono transition-all ${
                    isActive
                      ? "bg-[#00dc82] text-black font-extrabold border border-[#00dc82] shadow-[0_0_15px_rgba(0,220,130,0.4)]"
                      : "bg-transparent text-gray-400 hover:text-white border border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,220,130,0.3)]"
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* BUNDLE SELECTION FLOATING BAR */}
      {bundleSummary.count > 0 && (
        <div className="sticky top-4 z-40 mb-8 bg-black/90 border-2 border-[#00dc82] backdrop-blur-xl p-4 rounded-2xl shadow-[0_0_40px_rgba(0,220,130,0.3)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in slide-in-from-top-4">
          <div className="flex items-center gap-3">
            <ShoppingBagIcon className="text-[#00dc82]" />
            <div>
              <div className="text-xs font-black text-white">
                Multi-System Bundle Selected ({bundleSummary.count} Solutions)
              </div>
              <div className="text-[11px] text-gray-400 truncate max-w-[220px] sm:max-w-md">
                {bundleSummary.titles}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-between sm:justify-end">
            <div className="text-right">
              <div className="text-sm font-black text-[#00dc82]">{bundleSummary.totalUsd}</div>
              <div className="text-[10px] text-gray-400">{bundleSummary.totalPkr}</div>
            </div>

            <a
              href={`https://wa.me/923045421167?text=${encodeURIComponent(
                `Hi Vemzo Technologies! I want to order a custom bundle of (${bundleSummary.count} systems): ${bundleSummary.titles} for total ${bundleSummary.totalUsd} (${bundleSummary.totalPkr}). Please share bundle discount & payment instructions.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#00dc82] text-black font-black text-xs flex items-center gap-1.5 hover:scale-105 transition-all shadow-md"
            >
              <WhatsAppIcon sx={{ fontSize: 16 }} />
              Order Bundle via WhatsApp
            </a>

            <button
              onClick={() => setSelectedBundleSlugs([])}
              className="text-xs text-gray-400 hover:text-white underline ml-2"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {/* UNIFIED HIGH-IMPACT EQUAL SERVICES GRID */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 bg-transparent border border-[rgba(0,220,130,0.25)] rounded-3xl">
          <p className="text-gray-400 text-base">No software solutions match your search.</p>
          <button
            onClick={() => {
              setSelectedCategory("All Solutions");
              setSelectedTech("All Tech");
              setSearchQuery("");
            }}
            className="mt-4 px-5 py-2.5 rounded-xl bg-[#00dc82] text-black font-bold text-xs shadow-lg"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {filteredProjects.map((project) => {
            const Icon = ICON_MAP[project.slug] || CodeIcon;
            const { usd, pkr } = parsePrices(project.price, project.originalPrice);
            const currentTab = getCardTab(project.slug);
            const isSelectedInBundle = selectedBundleSlugs.includes(project.slug);

            return (
              <div
                key={project.slug}
                className="relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-[rgba(0,220,130,0.3)] bg-transparent backdrop-blur-md p-6 sm:p-7 transition-all duration-400 hover:-translate-y-2 hover:border-[#00dc82] hover:bg-[rgba(0,220,130,0.04)] hover:shadow-[0_15px_40px_rgba(0,220,130,0.2)] group"
              >
                <div>
                  {/* Top Bar with Icon & Dual-Currency Price Pill */}
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

                  {/* Project Title */}
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-[#00dc82] transition-colors leading-tight">
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

                  {/* Tab Contents */}
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

                  {/* Delivery & Bundle Bar */}
                  <div className="flex items-center justify-between gap-2 text-[11px] text-gray-400 mb-4 pt-2.5 border-t border-[rgba(0,220,130,0.2)]">
                    <div className="flex items-center gap-1.5">
                      <LocalShippingRoundedIcon sx={{ fontSize: 15 }} className="text-[#00dc82]" />
                      <span>Fulfillment: <strong className="text-white">{project.deliveryTime}</strong></span>
                    </div>

                    <button
                      onClick={() => toggleBundleSelection(project.slug)}
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-lg transition-all border ${
                        isSelectedInBundle
                          ? "bg-[#00dc82] text-black border-[#00dc82] font-extrabold"
                          : "text-gray-300 border-[rgba(0,220,130,0.3)] hover:text-[#00dc82] hover:border-[#00dc82]"
                      }`}
                    >
                      {isSelectedInBundle ? "✓ Bundled" : "+ Add Bundle"}
                    </button>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-3.5 border-t border-[rgba(0,220,130,0.2)] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalSlug(project.slug)}
                    className="text-xs text-gray-300 hover:text-[#00dc82] font-semibold underline underline-offset-4 transition-colors"
                  >
                    Quick Specs
                  </button>

                  <NextLink
                    href={`/services/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#00dc82] hover:translate-x-1 transition-transform"
                  >
                    System Details
                    <ArrowForwardIcon sx={{ fontSize: 14 }} />
                  </NextLink>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* SYSTEM COMPARISON MODAL */}
      {showComparisonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-black border-2 border-[rgba(0,220,130,0.5)] rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(0,220,130,0.3)]">
            <button
              onClick={() => setShowComparisonModal(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white flex items-center justify-center transition-colors border border-gray-800"
            >
              <CloseIcon sx={{ fontSize: 18 }} />
            </button>

            <div className="flex items-center gap-2 text-xs font-black text-[#00dc82] uppercase tracking-wider mb-2">
              <CompareIcon sx={{ fontSize: 18 }} />
              Software Solutions Specs Comparison Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">Compare Systems Side-by-Side</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-gray-800 text-[#00dc82] font-black uppercase">
                    <th className="p-3">Software System</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Price ($ / PKR)</th>
                    <th className="p-3">Production Fulfillment</th>
                    <th className="p-3">Core Stack</th>
                    <th className="p-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/80 text-gray-300">
                  {allProjects.map((p) => {
                    const { usd, pkr } = parsePrices(p.price, p.originalPrice);
                    return (
                      <tr key={p.slug} className="hover:bg-[rgba(0,220,130,0.05)] transition-colors">
                        <td className="p-3 font-bold text-white">{p.title}</td>
                        <td className="p-3 text-gray-400">{p.category}</td>
                        <td className="p-3 font-bold text-[#00dc82]">{usd} <span className="text-[10px] text-gray-500 block">{pkr}</span></td>
                        <td className="p-3">{p.deliveryTime}</td>
                        <td className="p-3 font-mono text-[10px] text-gray-400">
                          {p.techStack.frontend?.slice(0, 2).join(", ")}
                        </td>
                        <td className="p-3 text-right">
                          <NextLink
                            href={`/services/${p.slug}`}
                            onClick={() => setShowComparisonModal(false)}
                            className="px-3 py-1.5 rounded-lg bg-[#00dc82] text-black font-bold text-[11px] inline-block hover:scale-105 transition-all"
                          >
                            Details
                          </NextLink>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* QUICK SPEC MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-black border-2 border-[rgba(0,220,130,0.5)] rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,220,130,0.2)]">
            <button
              onClick={() => setActiveModalSlug(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white flex items-center justify-center transition-colors border border-gray-800"
            >
              <CloseIcon sx={{ fontSize: 18 }} />
            </button>

            <div className="flex items-center gap-2 text-xs font-black text-[#00dc82] uppercase tracking-wider mb-2">
              <AutoAwesomeIcon sx={{ fontSize: 16 }} />
              System Technical Specification Sheet
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-1">{activeProject.title}</h2>
            <p className="text-xs text-[#00dc82] font-semibold mb-5">{activeProject.subtitle}</p>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
              {activeProject.overview}
            </p>

            <div className="mb-6 p-4 rounded-2xl bg-black/80 border border-gray-800 grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] uppercase text-gray-500 font-bold block">Package Price</span>
                <span className="text-base font-black text-[#00dc82]">{activeProject.price}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-gray-500 font-bold block">Fulfillment Speed</span>
                <span className="text-xs font-bold text-white">{activeProject.deliveryTime}</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wider block">Key System Features:</span>
              {activeProject.features.slice(0, 4).map((f) => (
                <div key={f.title} className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircleRoundedIcon sx={{ fontSize: 16 }} className="text-[#00dc82] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">{f.title}: </span>
                    <span className="text-gray-400">{f.description}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-gray-800">
              <a
                href={`https://wa.me/923045421167?text=${encodeURIComponent(
                  `Hi Vemzo Technologies! I am interested in ordering "${activeProject.title}" for ${activeProject.price}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#00dc82] to-[#00c675] text-black font-black text-xs flex items-center justify-center gap-2 hover:scale-102 transition-all shadow-lg"
              >
                <WhatsAppIcon sx={{ fontSize: 18 }} />
                Order via WhatsApp
              </a>

              <NextLink
                href={`/services/${activeProject.slug}`}
                onClick={() => setActiveModalSlug(null)}
                className="w-full sm:flex-1 py-3.5 px-4 rounded-xl bg-transparent border border-gray-700 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[rgba(0,220,130,0.1)] transition-all"
              >
                Full Architecture & Specs Page
              </NextLink>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
