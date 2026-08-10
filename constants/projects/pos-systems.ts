import { ProjectDetail } from "../types/project-details";

export const posSystemsDetail: ProjectDetail = {
  slug: "pos-systems",
  title: "POS Systems for Retail",
  subtitle: "Modern Point of Sale & Multi-Store Inventory Management System",
  category: "Enterprise Systems",
  price: "$500",
  priceNum: 500,
  originalPrice: "$2,000",
  deliveryTime: "5 - 7 Days",
  heroBadge: "Retail & Commerce POS",
  description:
    "Streamline checkout operations, barcode scanning, stock tracking, and sales analytics across physical retail stores and online channels with our cloud-based POS software.",
  overview:
    "Engineered for retail stores, supermarkets, fashion outlets, and hardware shops. Features offline checkout capability, thermal receipt printing, barcode label generation, staff access control, and multi-location inventory syncing in real time.",
  useCases: [
    "Retail Supermarkets & Grocery Stores",
    "Apparel, Clothing & Shoe Boutiques",
    "Electronics & Accessories Outlets",
    "Wholesale & Distribution Outlets",
  ],
  techStack: {
    frontend: ["React.js", "Next.js", "Tailwind CSS", "PWA (Offline Service Worker)"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "WebSocket Realtime"],
    database: ["PostgreSQL", "IndexedDB (Offline Cache)", "Prisma ORM"],
    cloud: ["Docker", "AWS EC2 / DigitalOcean", "Nginx Reverse Proxy"],
    tools: ["ESC/POS Thermal Printing", "Barcode Reader Web API", "Export PDF/Excel"],
  },
  addOnPackages: [
    { id: "pwa-app", title: "📱 iOS & Android Mobile PWA POS App Pack", price: 90, description: "Downloadable mobile POS app for sales reps & floor staff with Bluetooth printer support.", badge: "Popular" },
    { id: "loyalty", title: "🎁 Customer Loyalty Points & Store Credit System", price: 70, description: "Reward customers with points per purchase, gift cards & store credit redemption." },
    { id: "whatsapp-receipts", title: "💬 WhatsApp Digital E-Receipt Bot", price: 60, description: "Automatically send branded invoice PDF & receipt links directly to customer WhatsApp." },
    { id: "multi-branch", title: "🏬 Multi-Branch Stock Transfer & Sync Engine", price: 80, description: "Transfer inventory between branches with real-time stock availability updates." },
    { id: "hardware-pack", title: "🖨️ Thermal Printer & Barcode Scanner Integration Pack", price: 50, description: "Custom ESC/POS printer layout styling, cash drawer trigger & barcode printer setup." },
  ],
  features: [
    {
      title: "Fast Touch & Barcode Checkout",
      description:
        "Instant product search, barcode scanner integration, and quick touch-grid checkout.",
    },
    {
      title: "Offline Transaction Sync",
      description:
        "Continue ringing sales even when internet connection drops; automatically syncs when back online.",
    },
    {
      title: "Multi-Store Inventory Control",
      description:
        "Track stock transfers, low stock alerts, reorder points, and supplier purchase orders.",
    },
    {
      title: "Receipt Printing & E-Receipts",
      description:
        "Supports ESC/POS thermal printers, USB receipt printers, PDF invoices, and WhatsApp/Email receipts.",
    },
    {
      title: "Staff Roles & Shift Register",
      description:
        "Manage cashier shifts, register cash drawers, track sales commissions, and restrict admin actions.",
    },
    {
      title: "Comprehensive Business Reports",
      description:
        "Daily profit/loss reports, best-selling product charts, tax reports, and sales breakdown by cashier.",
    },
  ],
  adminFeatures: [
    "Centralized Multi-Store Inventory & Warehouse Stock Transfers",
    "Cashier Shift Reconciliation & Cash Drawer Variance Audits",
    "Supplier Purchase Order Management & Low Stock Reorder Thresholds",
    "Profit & Loss Reports by Branch, Cashier, Category & Payment Method",
    "Custom Tax Rules, Discount Approval Limits & Staff Pin Access Controls",
    "Customer Loyalty Points Rate & Store Credit Ledger Management",
  ],
  userFeatures: [
    "Rapid Touch-Grid Item Selection & Barcode Scanner Beep Confirmation",
    "Hold Cart & Resume Later for Waiting Customers",
    "Split Payment Methods (Cash + Credit Card + Store Credit)",
    "Discount & Promo Code Application per Line Item or Whole Cart",
    "Instant ESC/POS Thermal Receipt Printing & Digital WhatsApp Receipt Link",
    "Cashier Clock-In/Out & Till Opening Cash Drawer Balancing",
  ],
  databaseEntities: [
    "Products (SKU, Barcode, Title, Cost Price, Retail Price, Tax Rate, Stock)",
    "Sales Transactions & Line Items (Cart Items, Discount, Payment Method, Total)",
    "Cashier Shifts (Cashier ID, Opening Cash, Closing Cash, Cash Variance, Status)",
    "Stores & Warehouse Locations (Branch Name, Address, Manager)",
    "Purchase Orders & Suppliers (Supplier Name, Items Ordered, Delivery Status)",
    "Customers & Loyalty Ledger (Customer Name, Phone, Points Earned, Balance)",
  ],
  integrations: [
    "ESC/POS Thermal Receipt Printers (USB, Bluetooth, LAN - 80mm & 58mm)",
    "USB & Bluetooth Barcode Scanners (1D & 2D QR Code Readers)",
    "Stripe Terminal / Card Payment Gateways",
    "WhatsApp Cloud API for Instant E-Receipts",
    "PDF Invoicing & Excel Inventory Exporter",
  ],
  securitySpecs: [
    "IndexedDB Encrypted Offline Storage Engine",
    "JWT Session Tokens & PIN Cashier Authentication",
    "Audit Logs for Discounts, Refunds, Price Overrides & Voided Items",
    "Daily Automated Cloud Database Backups",
  ],
  deliverySteps: [
    {
      step: "01",
      title: "Hardware & Setup Assessment",
      description: "Specify your store layout, receipt printer model, and product category catalog.",
    },
    {
      step: "02",
      title: "System Deployment & DB Configuration",
      description: "We deploy POS cloud server, set up PostgreSQL DB, and configure thermal printer drivers.",
    },
    {
      step: "03",
      title: "Catalog Import & Staff Training",
      description: "Import your product inventory via Excel/CSV and train your cashiers with video guides.",
    },
    {
      step: "04",
      title: "Go-Live & 30-Day Support",
      description: "Launch your retail POS with live monitoring and 30 days free technical support.",
    },
  ],
  deliverables: [
    "Complete Full-Stack Source Code (Next.js / Node.js / PostgreSQL)",
    "PWA Mobile/Desktop App Installer",
    "Hardware Integration Setup Guide (Thermal Printer & Scanner)",
    "Database Import / Export Scripts",
    "User Roles & Admin Setup Documentation",
    "30 Days Free Technical Support",
  ],
  faqs: [
    {
      question: "Does it support hardware like barcode scanners and thermal printers?",
      answer:
        "Yes! It supports standard USB & Bluetooth barcode scanners, cash drawers, and ESC/POS thermal receipt printers.",
    },
    {
      question: "Can I run it offline without internet?",
      answer:
        "Yes, our POS utilizes Progressive Web App (PWA) and IndexedDB caching so checkout continues uninterrupted offline.",
    },
    {
      question: "How many retail locations can I connect?",
      answer:
        "Unlimited! The system is built for multi-branch inventory tracking with single centralized admin control.",
    },
  ],
};
