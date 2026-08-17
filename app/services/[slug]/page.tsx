import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { PROJECT_DETAILS } from "@/constants/project-details";
import { ProjectAddOnCalculator } from "@/components/services/project-addon-calculator";

import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import BuildIcon from "@mui/icons-material/Build";
import SpeedIcon from "@mui/icons-material/Speed";
import QuizIcon from "@mui/icons-material/Quiz";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";
import SecurityIcon from "@mui/icons-material/Security";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECT_DETAILS[slug];

  if (!project) {
    return {
      title: "Project Not Found | Vemzo Technologies",
    };
  }

  return {
    title: `${project.title} (${project.price} Complete Package) | Vemzo Technologies`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECT_DETAILS[slug];

  if (!project) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Hi Vemzo Technologies! I want to purchase the "${project.title}" package for ${project.price}. Please share payment & delivery instructions.`
  );

  const matchPrice = project.price.match(/^(.*?)(?:\s*\((PKR\s*[\d,]+)\))?$/i);
  const mainPriceUsd = matchPrice ? matchPrice[1].trim() : project.price;
  const mainPricePkr = matchPrice && matchPrice[2] ? matchPrice[2].trim() : null;

  const matchOrig = project.originalPrice.match(/^(.*?)(?:\s*\((PKR\s*[\d,]+)\))?$/i);
  const origPriceUsd = matchOrig ? matchOrig[1].trim() : project.originalPrice;
  const origPricePkr = matchOrig && matchOrig[2] ? matchOrig[2].trim() : null;

  const firstNumMatch = project.originalPrice.match(/\$?\s*([0-9,]+)/);
  const origPriceNum = firstNumMatch ? parseInt(firstNumMatch[1].replace(/,/g, ""), 10) : project.priceNum * 2;
  const discountPercentage = project.priceNum < origPriceNum
    ? Math.round(((origPriceNum - project.priceNum) / origPriceNum) * 100)
    : 0;

  return (
    <main className="min-h-screen bg-black text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00dc82] transition-colors text-xs sm:text-sm font-medium"
        >
          <ArrowBackIcon sx={{ fontSize: 16 }} />
          Back to All Solutions
        </Link>

        <span className="text-[11px] sm:text-xs text-gray-500 font-mono">
          SKU: VEMZO-{project.slug.toUpperCase()}
        </span>
      </div>

      {/* Header & Hero Section */}
      <section className="max-w-7xl mx-auto mb-12 sm:mb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[rgba(0,220,130,0.12)] text-[#00dc82] border border-[rgba(0,220,130,0.25)]">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-900 text-gray-300 border border-gray-800">
                {project.heroBadge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#00dc82]">
              {project.subtitle}
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {project.description}
            </p>

            {/* Quick Specs Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-2">
              <div className="px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
                <div className="text-[11px] sm:text-xs text-gray-500">Delivery Speed</div>
                <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{project.deliveryTime}</div>
              </div>
              <div className="px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
                <div className="text-[11px] sm:text-xs text-gray-500">Ownership</div>
                <div className="text-xs sm:text-sm font-bold text-white mt-0.5">100% Commercial Code</div>
              </div>
              <div className="px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
                <div className="text-[11px] sm:text-xs text-gray-500">Free Support</div>
                <div className="text-xs sm:text-sm font-bold text-[#00dc82] mt-0.5">30 Days Direct Dev</div>
              </div>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="lg:col-span-4 w-full">
            <div className="rounded-2xl sm:rounded-3xl border border-[rgba(0,220,130,0.4)] bg-[#09090b] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#00dc82] text-black font-extrabold text-[10px] sm:text-xs uppercase px-3 sm:px-4 py-1 rounded-bl-xl tracking-wider z-10">
                Complete Package
              </div>

              <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Fixed Package Price</div>

              {/* Clean Structured Pricing Block */}
              <div className="flex flex-col gap-2.5 mb-5">
                <div className="flex items-baseline flex-wrap gap-2.5">
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">{mainPriceUsd}</span>
                  <span className="text-sm sm:text-base text-gray-500 line-through font-medium">
                    {origPriceUsd}
                  </span>
                  {discountPercentage > 0 && (
                    <span className="text-[10px] sm:text-xs text-[#00dc82] font-bold bg-[rgba(0,220,130,0.15)] border border-[rgba(0,220,130,0.3)] px-2 py-0.5 rounded-md">
                      SAVE {discountPercentage}%
                    </span>
                  )}
                </div>

                {mainPricePkr && (
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-800/80">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-[rgba(0,220,130,0.12)] text-[#00dc82] border border-[rgba(0,220,130,0.25)]">
                      🇵🇰 {mainPricePkr}
                    </span>
                    {origPricePkr && (
                      <span className="text-xs text-gray-500 line-through">
                        {origPricePkr}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                No subscription trap. Pay once, receive complete verified source code, database scripts, deployment guide & 30 days support.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/923045421167?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 px-5 rounded-xl bg-[#00dc82] hover:bg-[#00c675] text-black font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-[0_0_25px_rgba(0,220,130,0.4)]"
                >
                  <WhatsAppIcon sx={{ fontSize: 20 }} />
                  Order Package ({mainPriceUsd})
                </a>

                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-transparent border border-[rgba(255,255,255,0.2)] hover:border-[#00dc82] hover:text-[#00dc82] text-white font-semibold text-xs sm:text-sm transition-all"
                >
                  Request Custom Add-Ons
                  <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </Link>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-800 space-y-2 text-xs text-gray-400">
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircleIcon sx={{ fontSize: 16 }} className="text-[#00dc82]" />
                  <span>Full Git Source Code Repository</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircleIcon sx={{ fontSize: 16 }} className="text-[#00dc82]" />
                  <span>Free 1-Click Deployment Assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Panel vs Client Portal Breakdown */}
      <section className="max-w-7xl mx-auto mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex px-3.5 py-1 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-xs sm:text-sm font-medium mb-3">
            System Dual Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Admin Panel & <span className="text-[#00dc82]">User Portal</span> Features
          </h2>
          <p className="text-gray-400 mt-2 sm:mt-3 max-w-2xl mx-auto text-xs sm:text-base px-2">
            Detailed breakdown of what administrators and end-users get out of the box.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Admin Capabilities */}
          <div className="rounded-2xl sm:rounded-3xl border border-[rgba(0,220,130,0.3)] bg-[#09090b] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[rgba(0,220,130,0.15)] flex items-center justify-center text-[#00dc82]">
                <AdminPanelSettingsIcon sx={{ fontSize: 24 }} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Administrator Control Panel</h3>
                <p className="text-[11px] sm:text-xs text-gray-400">Full management, security & analytical controls</p>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {project.adminFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-200">
                  <CheckCircleIcon sx={{ fontSize: 18 }} className="text-[#00dc82] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* User/Client Capabilities */}
          <div className="rounded-2xl sm:rounded-3xl border border-gray-800 bg-[#09090b] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[rgba(255,255,255,0.08)] flex items-center justify-center text-white">
                <PersonIcon sx={{ fontSize: 24 }} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">End-User / Client Interface</h3>
                <p className="text-[11px] sm:text-xs text-gray-400">Smooth, fast, and responsive user experience</p>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {project.userFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-200">
                  <CheckCircleOutlinedIcon sx={{ fontSize: 18 }} className="text-gray-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Customization & Add-On Calculator */}
      <section className="max-w-7xl mx-auto mb-16 sm:mb-20">
        <ProjectAddOnCalculator
          projectTitle={project.title}
          basePrice={project.priceNum}
          addOns={project.addOnPackages || []}
        />
      </section>

      {/* Tech Stack Details */}
      <section className="max-w-7xl mx-auto mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex px-3.5 py-1 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-xs sm:text-sm font-medium mb-3">
            Technology Stack
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Under The Hood: <span className="text-[#00dc82]">Tech Specifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="rounded-2xl border border-gray-800 bg-[#09090b] p-5 sm:p-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[rgba(0,220,130,0.1)] flex items-center justify-center text-[#00dc82] mb-4">
              <CodeIcon />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3">Frontend Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.frontend.map((item, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-300 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#09090b] p-5 sm:p-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[rgba(0,220,130,0.1)] flex items-center justify-center text-[#00dc82] mb-4">
              <SpeedIcon />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3">Backend APIs</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.backend.map((item, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-300 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#09090b] p-5 sm:p-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[rgba(0,220,130,0.1)] flex items-center justify-center text-[#00dc82] mb-4">
              <StorageIcon />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3">Database Layer</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.database.map((item, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-300 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#09090b] p-5 sm:p-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[rgba(0,220,130,0.1)] flex items-center justify-center text-[#00dc82] mb-4">
              <CloudQueueIcon />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3">Cloud Hosting & CDN</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.cloud.map((item, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-300 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#09090b] p-5 sm:p-6 lg:col-span-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[rgba(0,220,130,0.1)] flex items-center justify-center text-[#00dc82] mb-4">
              <BuildIcon />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3">Pre-Configured Integrations & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.tools.map((item, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-300 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="max-w-7xl mx-auto mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex px-3.5 py-1 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-xs sm:text-sm font-medium mb-3">
            Core Modules
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Built-In <span className="text-[#00dc82]">Features & Functions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {project.features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 bg-[#09090b] p-5 sm:p-6 transition-all hover:-translate-y-1 hover:border-[rgba(0,220,130,0.3)]"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[rgba(0,220,130,0.15)] text-[#00dc82] flex items-center justify-center font-bold text-sm sm:text-base mb-4">
                0{index + 1}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Database Models & Security Specs */}
      <section className="max-w-7xl mx-auto mb-16 sm:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* DB Schemas */}
        <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl border border-gray-800 bg-[#09090b] p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <StorageIcon className="text-[#00dc82]" sx={{ fontSize: 26 }} />
            <h3 className="text-lg sm:text-xl font-bold text-white">Database Schemas Included</h3>
          </div>

          <p className="text-xs text-gray-400 mb-4">
            Production-ready tables and collections with relationships, indexes, and migrations:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {project.databaseEntities.map((entity, i) => (
              <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-black border border-gray-800 text-[11px] sm:text-xs text-gray-300 font-mono">
                <span className="text-[#00dc82]">✓</span>
                <span className="break-words">{entity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Specs */}
        <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl border border-gray-800 bg-[#09090b] p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <SecurityIcon className="text-[#00dc82]" sx={{ fontSize: 26 }} />
            <h3 className="text-lg sm:text-xl font-bold text-white">Security & Encryption Standards</h3>
          </div>

          <p className="text-xs text-gray-400 mb-4">
            Enterprise-grade security protections implemented across every route and database model:
          </p>

          <ul className="space-y-3">
            {project.securitySpecs.map((spec, i) => (
              <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                <CheckCircleIcon sx={{ fontSize: 18 }} className="text-[#00dc82] shrink-0" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex px-3.5 py-1 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-xs sm:text-sm font-medium mb-3">
            Why Choose Vemzo
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Vemzo {project.price} Package vs. <span className="text-[#00dc82]">Traditional Options</span>
          </h2>
        </div>

        {/* Responsive Table Scroll Container */}
        <div className="overflow-x-auto rounded-2xl sm:rounded-3xl border border-gray-800 bg-[#09090b]">
          <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[640px]">
            <thead>
              <tr className="border-b border-gray-800 bg-[rgba(255,255,255,0.02)]">
                <th className="p-4 sm:p-5 font-bold text-white">Comparison Criteria</th>
                <th className="p-4 sm:p-5 font-bold text-[#00dc82] bg-[rgba(0,220,130,0.08)]">Vemzo Package ({project.price})</th>
                <th className="p-4 sm:p-5 font-bold text-gray-400">Agency Build</th>
                <th className="p-4 sm:p-5 font-bold text-gray-400">Freelancer Marketplace</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-gray-300">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-white">Total Cost</td>
                <td className="p-4 sm:p-5 font-bold text-[#00dc82] bg-[rgba(0,220,130,0.08)]">{project.price} Flat (One-Time)</td>
                <td className="p-4 sm:p-5 text-gray-400">$3,500 - $10,000+</td>
                <td className="p-4 sm:p-5 text-gray-400">$1,200 - $3,000</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-white">Delivery Speed</td>
                <td className="p-4 sm:p-5 font-bold text-[#00dc82] bg-[rgba(0,220,130,0.08)]">3 - 7 Days</td>
                <td className="p-4 sm:p-5 text-gray-400">6 - 12 Weeks</td>
                <td className="p-4 sm:p-5 text-gray-400">3 - 6 Weeks</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-white">Source Code Ownership</td>
                <td className="p-4 sm:p-5 font-bold text-[#00dc82] bg-[rgba(0,220,130,0.08)]">100% Full Ownership</td>
                <td className="p-4 sm:p-5 text-gray-400">Often Restricted</td>
                <td className="p-4 sm:p-5 text-gray-400">Varies</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-white">Setup & Deployment</td>
                <td className="p-4 sm:p-5 font-bold text-[#00dc82] bg-[rgba(0,220,130,0.08)]">Free Included</td>
                <td className="p-4 sm:p-5 text-gray-400">Extra Fee</td>
                <td className="p-4 sm:p-5 text-gray-400">Uncertain</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-white">Direct Developer Support</td>
                <td className="p-4 sm:p-5 font-bold text-[#00dc82] bg-[rgba(0,220,130,0.08)]">30 Days Free WhatsApp/Email</td>
                <td className="p-4 sm:p-5 text-gray-400">Expensive Retainer</td>
                <td className="p-4 sm:p-5 text-gray-400">No Post Support</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Step-by-Step Delivery Timeline */}
      <section className="max-w-7xl mx-auto mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex px-3.5 py-1 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-xs sm:text-sm font-medium mb-3">
            Fulfillment Process
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            What Happens After You <span className="text-[#00dc82]">Purchase ({project.price})</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {project.deliverySteps.map((step, index) => (
            <div key={index} className="rounded-2xl border border-gray-800 bg-[#09090b] p-5 sm:p-6 relative">
              <div className="text-3xl sm:text-4xl font-black text-[#00dc8240] mb-2 sm:mb-3">{step.step}</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables Box */}
      <section className="max-w-7xl mx-auto mb-16 sm:mb-20 rounded-2xl sm:rounded-3xl border border-[#00dc824d] bg-[radial-gradient(circle_at_top,#00dc8214,transparent_80%)] p-6 sm:p-10 md:p-12">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Complete Package Deliverables</h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Everything transferred to you upon purchasing the ${project.price} package:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {project.deliverables.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-black border border-gray-800 text-xs sm:text-sm text-gray-200">
              <CheckCircleIcon sx={{ fontSize: 18 }} className="text-[#00dc82] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex px-3.5 py-1 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-xs sm:text-sm font-medium mb-3">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Frequently Asked <span className="text-[#00dc82]">Questions</span>
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {project.faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-gray-800 bg-[#09090b] p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-start gap-2.5 mb-2">
                <QuizIcon sx={{ fontSize: 20 }} className="text-[#00dc82] mt-0.5 shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed pl-7 sm:pl-8">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-7xl mx-auto text-center rounded-2xl sm:rounded-3xl border border-[#00dc8266] bg-[radial-gradient(ellipse_at_center,#00dc822e,transparent_70%)] p-6 sm:p-12 md:p-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">
          Get Your Complete Package For <span className="text-[#00dc82]">{project.price}</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-xs sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
          Full production source code, setup guide, database schemas, 1-click deployment assistance, and 30 days of free developer support included.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a
            href={`https://wa.me/923045421167?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl bg-[#00dc82] hover:bg-[#00c675] text-black font-bold text-sm sm:text-lg transition-all shadow-lg hover:shadow-[0_0_30px_rgba(0,220,130,0.5)]"
          >
            <WhatsAppIcon sx={{ fontSize: 22 }} />
            Buy {project.title} ({project.price})
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl bg-transparent border border-[rgba(255,255,255,0.2)] hover:border-[#00dc82] hover:text-[#00dc82] text-white font-semibold text-sm sm:text-lg transition-all"
          >
            Talk to Our Developers
          </Link>
        </div>
      </section>
    </main>
  );
}
