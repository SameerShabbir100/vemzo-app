import { ProjectDetail } from "../types/project-details";

export const shopifyAppDetail: ProjectDetail = {
  slug: "shopify-app-development",
  title: "Shopify App Development",
  subtitle: "Custom Public or Private Apps to Scale Shopify Functionality",
  category: "Shopify & Extensions",
  price: "$1,600 (PKR 448,000)",
  priceNum: 1600,
  originalPrice: "$2,900 (PKR 812,000)",
  deliveryTime: "8 - 12 Days",
  heroBadge: "Custom Shopify Extension",
  description:
    "Build high-performance embedded or standalone Shopify apps using Node.js, Remix/Next.js, and GraphQL to automate merchant workflows or monetize on the Shopify App Store.",
  overview:
    "Extend native Shopify functionality with custom merchant dashboards, Webhooks listeners, automated order routing, custom discount rules, and third-party API integrations built according to official Shopify App CLI and Polaris UI standards.",
  useCases: [
    "Custom Order & Inventory Sync Apps",
    "Private Enterprise ERP/CRM Connectors",
    "Public Shopify App Store Products",
    "Custom Discount & Promotion Engine Apps",
  ],
  techStack: {
    frontend: ["React.js", "Shopify Polaris UI 12", "Remix.run", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "Shopify Admin GraphQL API", "Webhooks Engine"],
    database: ["PostgreSQL", "Prisma ORM", "Redis Cache"],
    cloud: ["Vercel / Render", "AWS S3", "Docker"],
    tools: ["Shopify CLI 3.0", "App Bridge v3", "OAuth 2.0 Auth"],
  },
  addOnPackages: [
    { id: "app-store-submission", title: "🚀 Official Shopify App Store Submission Assistance", price: 98000, description: "Complete App Store listing setup, privacy policy compliance & review submission guidance.", badge: "Recommended" },
    { id: "billing-tiers", title: "💳 Multi-Tier Subscription Billing Engine", price: 78400, description: "Add Free, Starter, Pro & Enterprise recurring monthly app billing plans." },
    { id: "webhook-queue", title: "⚡ Redis & BullMQ High-Speed Webhook Queue", price: 70000, description: "Process up to 10,000 order webhooks per minute with zero rate-limiting drops." },
    { id: "ai-assistant", title: "🤖 AI Smart Merchant Assistant", price: 89600, description: "AI-generated product descriptions & automated merchant recommendation engine." },
    { id: "multi-store", title: "🏪 Multi-Store Single Sign-On (SSO)", price: 81200, description: "Allow enterprise merchants to sync multiple Shopify stores under one app account." },
  ],
  features: [
    {
      title: "Shopify OAuth Authentication",
      description:
        "Seamless merchant login, offline access tokens, token encryption, and multi-store session management.",
    },
    {
      title: "Shopify Polaris Design System",
      description:
        "Native admin UI components that match Shopify's exact look and feel for intuitive merchant experience.",
    },
    {
      title: "Real-time Webhook Engine",
      description:
        "Event-driven architecture listening to order creation, product updates, and inventory changes.",
    },
    {
      title: "Billing & Subscription API",
      description:
        "Integrated Shopify Recurring Billing API for monthly/annual subscriptions or one-time app charges.",
    },
    {
      title: "Custom Merchant Dashboard",
      description:
        "Interactive analytics, configuration settings, and data export features embedded inside Shopify Admin.",
    },
    {
      title: "High Performance & Caching",
      description:
        "Redis caching and optimized GraphQL queries to ensure instant load speeds and zero API throttling.",
    },
  ],
  adminFeatures: [
    "Super-Admin Multi-Merchant Management Panel",
    "App Usage & Active Installation Metrics",
    "Webhook Event Queue & Failed Retry Logs Inspector",
    "App Subscription MRR & Revenue Analytics",
    "Merchant API Key & Secret Token Rotation",
    "Global Merchant Broadcast & In-App Announcement Banners",
  ],
  userFeatures: [
    "Embedded Shopify Admin UI Panel (App Bridge v3)",
    "1-Click App Installation & Auto OAuth Scope Authorization",
    "Customizable Merchant Settings & App Feature Toggles",
    "Real-time Webhook Event Status & Sync Logs",
    "In-App Support Ticket Modal & Documentation Link",
  ],
  databaseEntities: [
    "Shops (Shop Domain, Access Token, Scope, Install Date, Plan)",
    "Sessions (Online & Offline Session Tokens, Expiry)",
    "Webhooks (Topic, Payload, Status, Attempt Count, Error Log)",
    "Charges (Shopify Charge ID, Plan Name, Price, Status, Billing Date)",
    "AppSettings (Merchant Configurations & Feature Toggles)",
  ],
  integrations: [
    "Shopify Admin GraphQL & REST APIs",
    "Shopify Recurring Application Charges API",
    "Shopify App Bridge v3 SDK",
    "PostgreSQL Database via Prisma ORM",
    "Redis Cache & BullMQ Job Queue",
    "Resend / SendGrid Merchant Email Notifications",
  ],
  securitySpecs: [
    "OAuth 2.0 Token Hashing & AES-256 Encryption",
    "HMAC Signature Verification on all Webhook Payloads",
    "Strict Content Security Policy (CSP) Headers for iFrame Embeds",
    "Shopify App Bridge Session Token JWT Verification",
  ],
  deliverySteps: [
    {
      step: "01",
      title: "Scope & Specification Review",
      description: "Define app features, merchant workflow, API endpoints, and database models.",
    },
    {
      step: "02",
      title: "App Backend & Polaris UI Development",
      description: "Build Node/Remix app backend, GraphQL connectors, and native Polaris admin interface.",
    },
    {
      step: "03",
      title: "Webhook & Billing API Integration",
      description: "Implement real-time Webhook listeners, data sync, and Shopify recurring billing API.",
    },
    {
      step: "04",
      title: "Source Code & Deployment Handover",
      description: "Deploy app to Vercel/Render, transfer full Git repository, and provide App Store submission docs.",
    },
  ],
  deliverables: [
    "Complete App Source Code (Node.js/Remix/React)",
    "Shopify App Store Submission Ready Build",
    "Database Migrations & Prisma Schema Files",
    "Environment Setup & Deployment Guide",
    "Merchant User Guide & Documentation",
    "30 Days Free Bug Fixes & API Maintenance",
  ],
  faqs: [
    {
      question: "Can this app be published on the official Shopify App Store?",
      answer:
        "Yes, we build strictly following Shopify's App Store submission guidelines, App Bridge protocols, and OAuth security specs.",
    },
    {
      question: "Do you build private apps for single stores?",
      answer:
        "Yes! We build both private custom apps for single merchant stores and public apps for the Shopify App Store.",
    },
    {
      question: "Who owns the app source code?",
      answer:
        "You own 100% of the source code with zero royalties or restrictions.",
    },
  ],
};
