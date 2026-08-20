"use client";

import Link from "next/link";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ExtensionIcon from "@mui/icons-material/Extension";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import GroupsIcon from "@mui/icons-material/Groups";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";
import CloudIcon from "@mui/icons-material/Cloud";
import CodeIcon from "@mui/icons-material/Code";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SERVICES = [
  {
    slug: "shopify-store-development",
    icon: StorefrontIcon,
    title: "Shopify Store Development",
    price: "$500",
    description:
      "Build high-converting Shopify stores with custom themes, responsive layouts, payment gateways, and seamless third-party integrations.",
  },
  {
    slug: "shopify-app-development",
    icon: ExtensionIcon,
    title: "Shopify App Development",
    price: "$500",
    description:
      "Develop custom Shopify apps to automate workflows, extend store functionality, and integrate external services effortlessly.",
  },
  {
    slug: "pos-systems",
    icon: PointOfSaleIcon,
    title: "POS Systems",
    price: "$500",
    description:
      "Modern Point of Sale solutions with inventory management, invoicing, reporting, barcode support, and offline functionality.",
  },
  {
    slug: "crm-systems",
    icon: GroupsIcon,
    title: "CRM Systems",
    price: "$500",
    description:
      "Custom CRM platforms for lead management, sales pipelines, customer engagement, and business process automation.",
  },
  {
    slug: "hrm-systems",
    icon: BadgeIcon,
    title: "HRM Systems",
    price: "$500",
    description:
      "Complete HR management software featuring attendance, payroll, leave management, employee records, and performance tracking.",
  },
  {
    slug: "lms-platforms",
    icon: SchoolIcon,
    title: "LMS Platforms",
    price: "$500",
    description:
      "Scalable Learning Management Systems with course creation, student portals, quizzes, certificates, and progress tracking.",
  },
  {
    slug: "custom-saas-applications",
    icon: CloudIcon,
    title: "Custom SaaS Applications",
    price: "$500",
    description:
      "Secure cloud-based SaaS platforms with authentication, subscriptions, APIs, dashboards, and scalable architecture.",
  },
  {
    slug: "mern-stack-development",
    icon: CodeIcon,
    title: "MERN Stack Development",
    price: "$500",
    description:
      "Build scalable full-stack web applications using MongoDB, Express.js, React, and Node.js with modern architecture, REST APIs, authentication, and responsive user interfaces.",
  },
  {
    slug: "mevn-stack-development",
    icon: CodeIcon,
    title: "MEVN Stack Development",
    price: "$500",
    description:
      "Develop fast, SEO-friendly web applications using MongoDB, Express.js, Vue.js, Nuxt.js, and Node.js, delivering high-performance solutions with exceptional user experiences.",
  },
];

export const ServicesGrid = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,220,130,0.06),transparent_65%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-2 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-sm font-medium mb-5">
            Our Ready Solutions ($500 Each)
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Digital Products & Solutions For
            <span className="text-[#00dc82]"> Every Business</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-lg">
            Explore our pre-engineered, turn-key solutions. Each package is priced flat at $500 and includes complete production source code, setup guide, database schemas, and 30 days of support.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[rgba(0,220,130,0.15)] bg-[#000000] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(0,220,130,0.4)] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[rgba(0,220,130,0.1)] border border-[rgba(0,220,130,0.2)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon sx={{ fontSize: 30 }} className="text-[#00dc82]" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[rgba(0,220,130,0.15)] border border-[rgba(0,220,130,0.3)] text-[#00dc82] font-extrabold text-sm">
                      {service.price}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm mb-6">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="relative z-20 inline-flex items-center justify-between w-full py-3 px-5 rounded-xl border border-[rgba(0,220,130,0.3)] bg-[rgba(0,220,130,0.08)] hover:bg-[#00dc82] text-white hover:text-black font-semibold text-sm transition-all"
                >
                  <span>View Tech Specs & Details</span>
                  <ArrowForwardIcon sx={{ fontSize: 18 }} />
                </Link>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(0,220,130,0.08),transparent_70%)] pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};