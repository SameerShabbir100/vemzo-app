"use client";

import StorefrontIcon from "@mui/icons-material/Storefront";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const INDUSTRIES = [
  {
    icon: ShoppingBagIcon,
    title: "E-Commerce",
    description:
      "Scalable online stores, marketplaces, Shopify solutions, and custom commerce platforms.",
  },
  {
    icon: BusinessIcon,
    title: "SaaS",
    description:
      "Cloud-based platforms, dashboards, CRMs, HR systems, and business automation software.",
  },
  {
    icon: FavoriteIcon,
    title: "Healthcare",
    description:
      "Patient portals, appointment systems, telemedicine platforms, and healthcare solutions.",
  },
  {
    icon: SchoolIcon,
    title: "Education",
    description:
      "Learning management systems, online courses, student portals, and educational platforms.",
  },
  {
    icon: StorefrontIcon,
    title: "Retail",
    description:
      "Inventory management, POS systems, loyalty programs, and omnichannel retail experiences.",
  },
  {
    icon: LocalShippingIcon,
    title: "Logistics",
    description:
      "Fleet management, shipment tracking, warehouse solutions, and logistics dashboards.",
  },
  {
    icon: HomeWorkIcon,
    title: "Real Estate",
    description:
      "Property listing websites, CRM solutions, booking platforms, and management systems.",
  },
  {
    icon: AccountBalanceIcon,
    title: "Finance",
    description:
      "Secure fintech dashboards, payment systems, reporting tools, and financial applications.",
  },
];
export const Industries= () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,220,130,0.06),transparent_65%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-2 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-sm font-medium mb-5">
            Industries We Serve
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Building Solutions Across
            <span className="text-[#00dc82]"> Multiple Industries</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-lg">
             From startups to established businesses, we develop tailored digital
            products that solve real-world challenges across a wide range of industries.
          </p>
        </div>

        {/* Industries */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl border border-[rgba(0,220,130,0.15)] bg-[#000000] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(0,220,130,0.4)] group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[rgba(0,220,130,0.1)] border border-[rgba(0,220,130,0.2)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon sx={{ fontSize: 34 }} className="text-[#00dc82]" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {industry.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {industry.description}
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