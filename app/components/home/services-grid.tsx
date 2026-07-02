"use client";

import StorefrontIcon from "@mui/icons-material/Storefront";
import ExtensionIcon from "@mui/icons-material/Extension";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import GroupsIcon from "@mui/icons-material/Groups";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";
import CloudIcon from "@mui/icons-material/Cloud";
import CodeIcon from "@mui/icons-material/Code";

const SERVICES = [
  {
    icon: StorefrontIcon,
    title: "Shopify Store Development",
    description:
      "Build high-converting Shopify stores with custom themes, responsive layouts, payment gateways, and seamless third-party integrations.",
  },
  {
    icon: ExtensionIcon,
    title: "Shopify App Development",
    description:
      "Develop custom Shopify apps to automate workflows, extend store functionality, and integrate external services effortlessly.",
  },
  {
    icon: PointOfSaleIcon,
    title: "POS Systems",
    description:
      "Modern Point of Sale solutions with inventory management, invoicing, reporting, barcode support, and offline functionality.",
  },
  {
    icon: GroupsIcon,
    title: "CRM Systems",
    description:
      "Custom CRM platforms for lead management, sales pipelines, customer engagement, and business process automation.",
  },
  {
    icon: BadgeIcon,
    title: "HRM Systems",
    description:
      "Complete HR management software featuring attendance, payroll, leave management, employee records, and performance tracking.",
  },
  {
    icon: SchoolIcon,
    title: "LMS Platforms",
    description:
      "Scalable Learning Management Systems with course creation, student portals, quizzes, certificates, and progress tracking.",
  },
  {
    icon: CloudIcon,
    title: "Custom SaaS Applications",
    description:
      "Secure cloud-based SaaS platforms with authentication, subscriptions, APIs, dashboards, and scalable architecture.",
  },
 {
  icon: CodeIcon,
  title: "MERN Stack Development",
  description:
    "Build scalable full-stack web applications using MongoDB, Express.js, React, and Node.js with modern architecture, REST APIs, authentication, and responsive user interfaces.",
},
{
  icon: CodeIcon,
  title: "MEVN Stack Development",
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
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Digital Solutions For
            <span className="text-[#00dc82]"> Every Business</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-lg">
            We design and develop scalable digital products that help
            startups, SMEs, and enterprises streamline operations, improve
            customer experiences, and accelerate business growth.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl border border-[rgba(0,220,130,0.15)] bg-[#000000] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(0,220,130,0.4)] group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[rgba(0,220,130,0.1)] border border-[rgba(0,220,130,0.2)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon sx={{ fontSize: 34 }} className="text-[#00dc82]" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {service.description}
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