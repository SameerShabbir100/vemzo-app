import { ProjectDetail } from "../types/project-details";

export const mevnStackDetail: ProjectDetail = {
  slug: "mevn-stack-development",
  title: "MEVN Stack Development",
  subtitle:
    "Modern Full-Stack Apps Built with Vue.js, Nuxt.js, Node.js, Express.js & MongoDB",
  category: "Full-Stack Web Apps",
  price: "$1,200 (PKR 336,000)",
  priceNum: 1200,
  originalPrice: "$1,500 (PKR 420,000)",
  deliveryTime: "7 - 10 Days",
  heroBadge: "Vue.js & Nuxt.js Web Solution",
  description:
    "Develop ultra-fast, SEO-optimized web applications with Vue.js 3, Nuxt.js, Node.js, Express.js and MongoDB engineered for smooth transitions and rich user interfaces.",
  overview:
    "Ideal for businesses that prefer Vue's intuitive reactivity and Nuxt's server-side rendering (SSR). We build full-stack web applications featuring elegant Vue Pinia state management, Express backends, and responsive styling.",
  useCases: [
    "SEO-Driven Web Applications",
    "Interactive Analytics Portals",
    "Custom Content Publishing Systems",
    "Interactive Customer Dashboards",
  ],
  techStack: {
    frontend: ["Vue.js 3", "Nuxt.js", "Pinia State Management", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "JWT Auth"],
    database: ["MongoDB", "Mongoose"],
    cloud: ["Vercel / Netlify", "MongoDB Atlas"],
    tools: ["TypeScript", "Vite", "Nuxt Modules"],
  },
  addOnPackages: [
    {
      id: "nuxt-seo",
      title: "🚀 Nuxt 3 Extreme SEO & OpenGraph Image Suite",
      price: 61600,
      description:
        "Automated dynamic meta tags, XML sitemaps, robots.txt & og:image generators.",
      badge: "Recommended",
    },
    {
      id: "pinia-store",
      title: "📦 Pinia Store Persistence & Multi-Tab Sync",
      price: 50400,
      description:
        "Persist user session, dark mode & cart state across browser tabs & page reloads.",
    },
    {
      id: "vue-charts",
      title: "📊 Vue-ChartJS Interactive Dashboard Widgets",
      price: 70000,
      description:
        "Real-time Vue data charts, statistics progress circles & analytical cards.",
    },
    {
      id: "pwa-module",
      title: "📱 Nuxt PWA Mobile Installation Module",
      price: 53200,
      description:
        "Convert Nuxt app to downloadable mobile PWA with offline caching capabilities.",
    },
  ],
  features: [
    {
      title: "Nuxt SSR & Static Generation",
      description:
        "Server-side rendering (SSR) for maximum SEO rankings and instantaneous initial page load speeds.",
    },
    {
      title: "Vue 3 Composition API",
      description:
        "Clean, maintainable reactive logic powered by Vue 3, Script Setup, and Pinia stores.",
    },
    {
      title: "Express & Node Backend",
      description:
        "Modular Express API endpoints with structured controllers, validation, and database connectors.",
    },
    {
      title: "Tailwind CSS Aesthetics",
      description:
        "Sleek dark/light mode layouts, dynamic transitions, and modern responsive components.",
    },
    {
      title: "Role-Based Access Control",
      description:
        "Secure user authentication, protected routes, and session persistence.",
    },
    {
      title: "Data Visualization & Analytics",
      description:
        "Interactive charts, progress bars, and statistical cards for data insights.",
    },
  ],
  adminFeatures: [
    "Nuxt Admin Dashboard with Real-Time Data Counters",
    "Content & User Entity Management",
    "Site SEO Meta Tag & OpenGraph Image Editor",
    "User Role & Permissions Management Panel",
  ],
  userFeatures: [
    "Instant Nuxt SSR Page Loads & Smooth Vue Transitions",
    "Pinia Reactive State Management",
    "Responsive Dark/Light Mode Theme Toggle",
    "Interactive Data Tables with Sorting & Exporting",
  ],
  databaseEntities: [
    "Users & User Credentials",
    "Application Content / Product Schemas",
    "Dynamic SEO Metadata & Slugs",
    "Audit Logs & System Activity",
  ],
  integrations: [
    "Nuxt.js 3 SSR Framework",
    "Express REST API",
    "MongoDB Atlas Database",
    "Vercel / Netlify Edge Deployment",
  ],
  securitySpecs: [
    "JWT Session Tokens",
    "Helmet HTTP Headers Security",
    "Input Validation Middleware",
  ],
  deliverySteps: [
    {
      step: "01",
      title: "Nuxt & API Specification",
      description:
        "Define Vue components, SSR pages, Express endpoints, and MongoDB models.",
    },
    {
      step: "02",
      title: "Development & SSR Optimization",
      description:
        "Build Vue 3 frontend, Pinia stores, Express backend, and optimize SSR SEO tags.",
    },
    {
      step: "03",
      title: "Cloud Deployment",
      description:
        "Deploy to Vercel/Netlify with MongoDB Atlas and custom SSL domain setup.",
    },
    {
      step: "04",
      title: "Handover & 30-Day Support",
      description:
        "Provide complete Git codebase, documentation, and 30 days free developer support.",
    },
  ],
  deliverables: [
    "Complete MEVN / Nuxt.js Source Code",
    "MongoDB Database Models & Seed Scripts",
    "Environment Setup & Deployment Specs",
    "API Documentation & Integration Specs",
    "30 Days Free Technical Support",
  ],
  faqs: [
    {
      question: "Why choose MEVN (Vue/Nuxt) over MERN (React)?",
      answer:
        "Vue/Nuxt offers exceptional developer ergonomics, smaller bundle sizes, built-in SSR optimization for search engines, and elegant reactivity.",
    },
    {
      question: "Is the app responsive on mobile devices?",
      answer:
        "Yes, every application we build is designed mobile-first and tested across all screen resolutions.",
    },
  ],
};
