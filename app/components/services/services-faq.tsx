"use client";

import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

const REAL_LIFE_FAQS = [
  {
    question: "Why are prices listed in both USD ($) and PKR?",
    answer:
      "We serve both local businesses in Pakistan and international clients globally. Prices are fixed in clean USD figures (e.g., $950, $1,100, $1,800) and transparently converted to Pakistani Rupees (PKR) at a standard rate so local merchants know their exact upfront cost without exchange rate surprises.",
  },
  {
    question: "Are there any hidden monthly fees or recurring software subscriptions?",
    answer:
      "No! Unlike conventional SaaS providers like Salesforce, HubSpot, or Shopify apps that charge expensive monthly subscription fees forever, Vemzo Technologies provides 100% full commercial source code ownership. You pay once and own your system completely.",
  },
  {
    question: "What payment methods do you accept for Pakistan and global clients?",
    answer:
      "For Pakistan-based clients, we accept Direct Bank Transfer (IBAN), JazzCash, EasyPaisa, and local debit/credit card payments via PayFast/1LINK gateway. For international clients, we accept Stripe, Credit/Debit Cards, Wire Transfer, and Wise.",
  },
  {
    question: "Where will our software system be hosted?",
    answer:
      "We deploy your software system directly onto your own cloud infrastructure — such as AWS, Vercel, Hostinger VPS, DigitalOcean, or your dedicated Linux server. You retain 100% control over server admin credentials and database access.",
  },
  {
    question: "Can we request custom features, integrations, or database changes?",
    answer:
      "Yes, absolutely. Every pre-engineered solution serves as a production-ready foundation. Our core engineering team can customize business workflows, UI themes, database fields, WhatsApp API notifications, or third-party payment gateways prior to deployment.",
  },
  {
    question: "Do you offer bundle discounts if we order multiple systems together?",
    answer:
      "Yes! If you order two or more software systems together (e.g., POS + CRM + Shopify Store), you can use our built-in Multi-System Bundle Estimator on this page or contact us directly on WhatsApp for an exclusive package bundle discount.",
  },
  {
    question: "What technical support do we receive after project delivery?",
    answer:
      "Every software product comes with 30 days of direct developer support. This includes bug fixes, server performance optimization, SSL setup, and direct developer Q&A assistance via WhatsApp and email.",
  },
  {
    question: "How long does actual fulfillment and handover take?",
    answer:
      "Fulfillment times depend on the complexity of the product — ranging from 3 - 5 days for custom Shopify Store setups, 8 - 12 days for CRM and POS systems, up to 14 - 21 days for full multi-tenant SaaS platforms. We provide live status updates throughout the sprint.",
  },
];

export const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[rgba(0,220,130,0.2)]">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[rgba(0,220,130,0.3)] bg-[rgba(0,220,130,0.08)] text-[#00dc82] text-xs font-bold mb-3">
          <HelpOutlineRoundedIcon sx={{ fontSize: 16 }} />
          Client Knowledge & Purchasing Guide
        </span>

        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Frequently Asked <span className="text-[#00dc82]">Questions</span>
        </h2>
        <p className="max-w-xl mx-auto mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
          Everything you need to know about our turn-key software products, commercial code rights, dual currency pricing, and deployment.
        </p>
      </div>

      <div className="space-y-4 relative z-10">
        {REAL_LIFE_FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.question}
              className="border border-[rgba(0,220,130,0.25)] rounded-2xl overflow-hidden transition-all bg-transparent backdrop-blur-md hover:border-[#00dc82]"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-extrabold text-white hover:text-[#00dc82] transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#00dc82] shrink-0" />
                  {faq.question}
                </span>
                <ExpandMoreIcon
                  className={`text-[#00dc82] shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-white" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-[rgba(0,220,130,0.15)] pt-4 animate-in fade-in pl-10">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
