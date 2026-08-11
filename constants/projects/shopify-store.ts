import { ProjectDetail } from "../types/project-details";

export const shopifyStoreDetail: ProjectDetail = {
  slug: "shopify-store-development",
  title: "Shopify Store Development",
  subtitle: "High-Converting Custom E-Commerce Store Built for Scale",
  category: "Shopify & E-Commerce",
  price: "$950 (PKR 266,000)",
  priceNum: 950,
  originalPrice: "$1,400 (PKR 392,000)",
  deliveryTime: "3 - 5 Days",
  heroBadge: "Complete E-Commerce Solution",
  description:
    "Get a fully customized, high-converting Shopify store engineered to maximize sales, deliver lightning-fast load speeds, and provide seamless mobile shopping experiences.",
  overview:
    "Our complete Shopify store solution comes pre-built with premium Liquid/React theme customization, optimized checkout flows, conversion-focused product pages, inventory management, and multi-currency support. Ideal for DTC brands, retail expansion, and dropshipping businesses looking for a professional store without high agency fees.",
  useCases: [
    "DTC Apparel & Fashion Brands",
    "Electronics & Gadgets Retailers",
    "Beauty, Cosmetics & Health Products",
    "International Dropshipping & Multi-Store Brands",
  ],
  techStack: {
    frontend: ["Shopify Liquid 2.0", "React.js", "Tailwind CSS", "JavaScript (ES6+)"],
    backend: ["Shopify Storefront API", "Node.js", "Webhooks Engine"],
    database: ["Shopify Cloud Engine", "GraphQL Data Layer"],
    cloud: ["Shopify Plus Edge CDN", "Cloudflare DNS", "SSL Security"],
    tools: ["Klaviyo", "Google Analytics 4", "Meta Pixel", "PageFly / Shogun Builder"],
  },
  addOnPackages: [
    { id: "ai-bot", title: "🤖 AI Customer Support Chatbot (GPT-4)", price: 70000, description: "Automated 24/7 AI shopping assistant & product recommender integrated into storefront.", badge: "Popular" },
    { id: "analytics", title: "📊 Advanced Sales Analytics & Charting Pack", price: 42000, description: "Interactive visual sales, profit margin & customer lifetime value dashboard." },
    { id: "reviews", title: "⭐ Photo & Video Product Reviews Import", price: 33600, description: "Bulk review importer from Amazon/AliExpress with photo popups & star badges." },
    { id: "klaviyo", title: "📧 Advanced Klaviyo Email Automation Pack", price: 56000, description: "5 Pre-built email flows (Welcome, Abandoned Cart, Win-Back, VIP, Cross-Sell)." },
    { id: "multi-currency", title: "🌐 Geo-IP Auto Currency & Multi-Language", price: 50400, description: "Automatic country detection with 15+ currency conversions & translations." },
    { id: "speed", title: "⚡ Extreme PageSpeed 95+ Boost Pack", price: 50400, description: "Advanced image WebP compression, critical CSS inline & lazy loading optimization." },
  ],
  features: [
    {
      title: "Custom Theme Architecture",
      description:
        "Unique, responsive storefront design tailored to your brand identity with mobile-first Liquid/React UI components.",
    },
    {
      title: "One-Click Cart Drawer & Upsells",
      description:
        "Slide-out Ajax cart drawer with free shipping progress bar, in-cart product upsells, and instant checkout flow.",
    },
    {
      title: "Multi-Currency & Geo-IP Switcher",
      description:
        "Automatic currency conversion and language localization based on customer country location.",
    },
    {
      title: "Payment Gateway Suite",
      description:
        "Pre-configured Shopify Payments, Stripe, PayPal, Apple Pay, Google Pay, and Cash on Delivery (COD).",
    },
    {
      title: "Inventory & Shipping Automation",
      description:
        "Automated stock tracking, real-time shipping rate calculators, and automated fulfillment tracking links.",
    },
    {
      title: "SEO & Page Speed Optimization",
      description:
        "Score 90+ on Google PageSpeed Insights with image webp lazy loading, JSON-LD schema markup, and meta tags.",
    },
  ],
  adminFeatures: [
    "Shopify Visual Drag-and-Drop Theme Editor with Custom Sections",
    "Full Product & Catalog Management (Variants, Color Swatches, Collections)",
    "Real-Time Sales, Average Order Value (AOV) & Conversion Analytics Dashboard",
    "Customer Order Processing, Fulfillment Labels & Refund Management",
    "Discount Code & Automatic Cart Promotion Rules Builder",
    "Abandoned Checkout Recovery Email & SMS Notification Automations",
    "Inventory Stock Level Tracking & Low Stock Threshold Email Alerts",
    "Staff Account Permission Controls & Store Activity Logs",
  ],
  userFeatures: [
    "Mobile-Optimized Touch Navigation & Fast Instant Search Bar",
    "Slide-Out Ajax Cart Drawer with Free Shipping Goal Tracker",
    "Variant Color/Image Swatches & Size Chart Modals",
    "Customer Account Portal with Order History & Live Tracking",
    "Product Review & Photo Rating Submission Form",
    "Wishlist Heart Saved Items & Social Sharing Buttons",
  ],
  databaseEntities: [
    "Products (Title, Description, Price, SKU, Variants, Options)",
    "Collections (Automated Rules, Manual Product Selections)",
    "Customers (Name, Email, Phone, Shipping Addresses, Order Count)",
    "Orders & Draft Orders (Line Items, Shipping, Tax, Status, Payment)",
    "Abandoned Checkouts (Recovered Status, Customer Payload)",
    "Discounts & Coupons (Percentage, Amount, Usage Limits)",
  ],
  integrations: [
    "Shopify Payments, Stripe & PayPal Express Checkout",
    "Klaviyo Email Marketing Flows (Welcome, Abandoned Cart, Post-Purchase)",
    "Meta (Facebook/Instagram) Pixel & Automated Product Catalog Sync",
    "Google Analytics 4 & Google Merchant Center Feed",
    "Judge.me / Loox Product Reviews & Star Ratings",
    "WhatsApp Chat Widget & Automated WhatsApp Order Receipts",
  ],
  securitySpecs: [
    "Level 1 PCI DSS Compliant Checkout Security",
    "256-Bit SSL Certificate Encryption Included",
    "Shopify Fraud Analysis & High-Risk Order Scoring Engine",
    "Automated Daily Cloud Database Backups",
  ],
  deliverySteps: [
    {
      step: "01",
      title: "Onboarding & Brand Intake",
      description: "Submit your brand logo, color preferences, product catalog details, and domain name via our quick intake form.",
    },
    {
      step: "02",
      title: "Custom Theme Build & Product Setup",
      description: "Our engineers configure theme structure, navigation menus, payment gateways, shipping rules, and top 10 products.",
    },
    {
      step: "03",
      title: "Tracking Pixels & Domain Connection",
      description: "We connect your custom domain, SSL certificates, Meta Pixel, Google Analytics 4, and email automation flows.",
    },
    {
      step: "04",
      title: "Handover & 30-Day Support",
      description: "Receive full Shopify admin ownership transfer, 1-on-1 video walkthrough tutorial, and 30 days of free developer support.",
    },
  ],
  deliverables: [
    "Full Customized Shopify Store Setup & Theme Configuration",
    "Premium Theme License & Installed Liquid/React Source Code",
    "Payment, Tax & Shipping Setup",
    "Top 10 Product Import & Catalog Setup Assistance",
    "Klaviyo / Email Marketing Flow Integration",
    "1-on-1 Admin Dashboard Training Video & Manual",
    "30 Days Post-Launch Technical Support & Maintenance",
  ],
  faqs: [
    {
      question: "Is the store ready to sell immediately after delivery?",
      answer:
        "Yes! Once delivered, your store is 100% configured with payment gateways, products, domain setup, and legal policies ready to accept customer orders.",
    },
    {
      question: "Can I customize the store myself later?",
      answer:
        "Absolutely. We build using Shopify's drag-and-drop theme editor so you can easily update banners, text, prices, and products without writing code.",
    },
    {
      question: "What is included in the $950 (PKR 266,000) package?",
      answer:
        "The package covers full custom design, theme setup, payment integration, responsive mobile optimization, product imports, domain connection, and 30 days of support.",
    },
    {
      question: "Are there any hidden monthly agency fees?",
      answer:
        "No hidden agency fees! You only pay your standard monthly Shopify plan subscription (approx. $29/mo) directly to Shopify.",
    },
    {
      question: "What if I need custom functionality added later?",
      answer:
        "Our team is available for custom feature additions, app integrations, or ongoing maintenance at discounted client rates.",
    },
  ],
};
