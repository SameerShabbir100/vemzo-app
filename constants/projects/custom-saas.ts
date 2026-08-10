import { ProjectDetail } from "../types/project-details";

export const customSaasDetail: ProjectDetail = {
  slug: "custom-saas-applications",
  title: "Custom SaaS Applications",
  subtitle: "Production-Ready Multi-Tenant SaaS Boilerplate & Product Build",
  category: "SaaS & Cloud Software",
  price: "$500",
  priceNum: 500,
  originalPrice: "$2,200",
  deliveryTime: "5 - 7 Days",
  heroBadge: "SaaS Foundation Product",
  description:
    "Turn your software idea into a scalable, revenue-generating SaaS product with multi-tenancy, subscription billing, user authentication, and admin dashboards.",
  overview:
    "Skip months of boilerplate development. Our custom SaaS package delivers a enterprise-grade foundation complete with Next.js 15, Stripe billing cycles, team workspaces, RBAC permissions, and API key management ready for your custom core business logic.",
  useCases: [
    "AI & Machine Learning SaaS Tools",
    "B2B Analytics & Automation Dashboards",
    "Productivity & Workflow Management Apps",
    "Micro-SaaS & Niche Business Tools",
  ],
  techStack: {
    frontend: ["Next.js 15 (App Router)", "React 19", "Tailwind CSS v4", "TypeScript"],
    backend: ["Node.js", "Express / Next API Routes", "Stripe SDK", "Resend API"],
    database: ["PostgreSQL", "Prisma ORM", "Redis Session Store"],
    cloud: ["Vercel", "AWS S3", "Supabase / Neon DB"],
    tools: ["Auth.js / Clerk", "Zod Validation", "Lucide Icons"],
  },
  addOnPackages: [
    { id: "ai-wrapper", title: "🤖 OpenAI / Claude API Wrapper Integration", price: 100, description: "Connect OpenAI/Claude API models with token usage tracking & prompt templates.", badge: "Popular" },
    { id: "usage-billing", title: "📊 Usage-Based Metered Billing Engine", price: 80, description: "Charge users based on API calls, AI tokens, or storage gigabytes via Stripe." },
    { id: "tenant-domain", title: "🌐 Custom Tenant Subdomain & CNAME Engine", price: 90, description: "Allow customers to map their own custom domain (e.g. app.client.com)." },
    { id: "analytics-chart", title: "📈 Chart.js & ApexCharts Analytics Suite", price: 70, description: "Interactive financial MRR/ARR charts & real-time tenant activity dashboards." },
    { id: "sso-saml", title: "🔒 SAML / Enterprise SSO Login Pack", price: 110, description: "Enable Okta, Azure AD & SAML 2.0 single sign-on for enterprise clients." },
  ],
  features: [
    {
      title: "Multi-Tenant Workspaces",
      description:
        "Allow users to create organizations, invite team members, and manage multi-seat accounts.",
    },
    {
      title: "Stripe Subscription Billing",
      description:
        "Pre-built pricing tiers (Free, Pro, Enterprise), monthly/annual billing, usage limits, and customer billing portal.",
    },
    {
      title: "Authentication & Security",
      description:
        "Email magic links, Google OAuth, 2FA support, and JWT session encryption.",
    },
    {
      title: "Super Admin Control Panel",
      description:
        "Manage users, view MRR/ARR financial stats, audit logs, and toggle tenant subscriptions.",
    },
    {
      title: "Developer API & Webhooks",
      description:
        "Generate tenant API keys with rate-limiting and incoming webhook processing.",
    },
    {
      title: "Dark / Light Mode Responsive UI",
      description:
        "Stunning modern UI built with Tailwind CSS, custom charts, and fluid responsive layouts.",
    },
  ],
  adminFeatures: [
    "Platform MRR, ARR, Churn Rate & Financial Analytics Overview",
    "Tenant Account Directory with Manual Plan Overrides & Upgrades",
    "Global System Announcement Banners & Feature Flag Toggles",
    "Audit Logs for Tenant Actions & Failed Webhook Inspector",
  ],
  userFeatures: [
    "Team Workspace Creation, Branding & Member Invites",
    "Stripe Self-Service Billing Portal (Invoices, Payment Methods)",
    "Developer API Keys Management with Permissions & Scopes",
    "Feature Usage Metering & Plan Quota Progress Bars",
  ],
  databaseEntities: [
    "Tenants / Organizations & Team Member Roles",
    "Users, OAuth Accounts & Sessions",
    "Subscriptions (Stripe Customer ID, Plan ID, Status, Period Ends)",
    "API Keys (Hashed Secret, Rate Limit, Last Used)",
    "Audit Logs & Tenant Feature Settings",
  ],
  integrations: [
    "Stripe Subscription Webhooks & Customer Portal",
    "Resend / Postmark Transactional Email API",
    "Google & GitHub OAuth Providers",
    "Vercel & Supabase Cloud Infrastructure",
  ],
  securitySpecs: [
    "Auth.js / NextAuth JWT Token Rotation",
    "Zod Schema Input Validation",
    "CSRF, CORS & Rate Limiting Protections",
    "Database Tenant Isolation Scoping",
  ],
  deliverySteps: [
    {
      step: "01",
      title: "Architecture & Data Model Definition",
      description: "Finalize your core SaaS features, subscription tiers, and pricing strategy.",
    },
    {
      step: "02",
      title: "SaaS Codebase & Stripe Integration",
      description: "Configure multi-tenant database, Stripe webhooks, team workspaces, and auth.",
    },
    {
      step: "03",
      title: "Deployment & Domain Linking",
      description: "Deploy to Vercel with Neon/Supabase PostgreSQL DB and connect your custom domain.",
    },
    {
      step: "04",
      title: "Code Handover & 30-Day Support",
      description: "Transfer complete GitHub repository, documentation, and provide 30 days of support.",
    },
  ],
  deliverables: [
    "Production-Ready SaaS Codebase (Next.js 15 / TypeScript)",
    "Stripe Webhooks & Billing Integration Code",
    "Complete DB Schema & Prisma Migration Files",
    "Environment Variables Setup Guide & Vercel Deploy Config",
    "Architecture Documentation & API Specs",
    "30 Days Free Technical Support",
  ],
  faqs: [
    {
      question: "Is this codebase ready to launch on Vercel immediately?",
      answer:
        "Yes! Simply configure your environment variables (Database URL, Stripe Keys, Auth Secrets) and deploy to Vercel with one click.",
    },
    {
      question: "Can you implement my custom business logic into this SaaS?",
      answer:
        "Yes, we provide 100% clean, modular code structured so you or our team can add any custom features effortlessly.",
    },
    {
      question: "Is multi-tenancy isolated securely?",
      answer:
        "Yes! Every database query is scoped by tenant ID ensuring absolute tenant isolation.",
    },
  ],
};
