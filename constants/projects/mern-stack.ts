import { ProjectDetail } from "../types/project-details";

export const mernStackDetail: ProjectDetail = {
  slug: "mern-stack-development",
  title: "MERN Stack Development",
  subtitle: "Custom Full-Stack Web Application (MongoDB, Express, React, Node)",
  category: "Full-Stack Web Apps",
  price: "$1,100 (PKR 308,000)",
  priceNum: 1100,
  originalPrice: "$1,800 (PKR 504,000)",
  deliveryTime: "7 - 10 Days",
  heroBadge: "Full-Stack Custom App",
  description:
    "Build fast, scalable, and dynamic web applications tailored precisely to your business specification using the proven MERN stack ecosystem.",
  overview:
    "Get a custom full-stack web application designed from scratch. We combine React.js interactive frontends with robust Node.js/Express REST APIs and flexible MongoDB databases to deliver high-performance solutions for any digital service.",
  useCases: [
    "Custom Marketplace & Booking Portals",
    "Community Forums & Social Platforms",
    "Real-Time Chat & Notification Apps",
    "On-Demand Service Platforms",
  ],
  techStack: {
    frontend: ["React 19", "Redux Toolkit / Context", "Tailwind CSS", "Axios"],
    backend: ["Node.js", "Express.js", "Socket.io", "JWT"],
    database: ["MongoDB", "Mongoose ODM"],
    cloud: ["Render", "MongoDB Atlas", "AWS S3"],
    tools: ["Postman API Specs", "ESLint", "Prettier"],
  },
  addOnPackages: [
    { id: "realtime-chat", title: "💬 Socket.io Real-Time Live Chat & Rooms", price: 78400, description: "Instant 1-on-1 & group messaging with online presence status & typing indicators.", badge: "Popular" },
    { id: "redux-state", title: "📦 Redux Toolkit Global State & Caching Suite", price: 50400, description: "Pre-configured Redux store with RTK Query for automated cache invalidation." },
    { id: "chart-analytics", title: "📊 Interactive Chart.js Analytics Dashboard", price: 61600, description: "Visual data reporting, line graphs, bar charts & CSV export features." },
    { id: "cloud-upload", title: "☁️ AWS S3 / Cloudinary Image & Video Uploader", price: 53200, description: "Direct drag-and-drop cloud file upload engine with auto-resizing." },
    { id: "payment-gateways", title: "💳 Stripe & PayPal Multi-Payment Suite", price: 70000, description: "Secure card payments, subscription recurring billing & refund webhooks." },
  ],
  features: [
    {
      title: "RESTful API Architecture",
      description:
        "Clean controller-service API design with input validation, error handling middleware, and route security.",
    },
    {
      title: "Real-Time Sockets Support",
      description:
        "Integrated Socket.io engine for instant messaging, live notifications, and real-time status updates.",
    },
    {
      title: "Secure JWT Authentication",
      description:
        "Password hashing with bcrypt, access/refresh token rotation, and protected API middleware.",
    },
    {
      title: "MongoDB Atlas Cloud Data",
      description:
        "Optimized Mongoose schemas, indexing, and aggregations for lightning-fast queries.",
    },
    {
      title: "Responsive React UI",
      description:
        "Component-driven frontend built with custom hooks, reusable UI cards, modals, and forms.",
    },
    {
      title: "Cloud File Uploads",
      description:
        "Direct image/document uploads to AWS S3 or Cloudinary with automatic optimization.",
    },
  ],
  adminFeatures: [
    "User Account & Content Moderation Panel",
    "System Analytics & Platform Usage Charts",
    "Role & Permission Assignment Controls",
    "API Route Audit Logs & Database Collection Counters",
  ],
  userFeatures: [
    "Dynamic Single-Page Application (SPA) Experience",
    "User Profile & Account Settings Management",
    "Real-Time Notifications & Socket Events",
    "Advanced Search, Filtering & Pagination",
  ],
  databaseEntities: [
    "Users (Email, Password Hash, Role, Profile Details)",
    "App Specific Data Collections & Relations",
    "Media Upload Metadata",
    "Refresh Tokens & Active Sessions",
  ],
  integrations: [
    "Express REST API Engine",
    "MongoDB Atlas Database",
    "AWS S3 / Cloudinary Storage",
    "Stripe / PayPal Gateway Options",
  ],
  securitySpecs: [
    "Bcrypt Password Hashing (12 rounds)",
    "JWT Access & Refresh Tokens",
    "Express Rate Limiting & Helmet Security Headers",
    "CORS Restrictions & Sanitized Inputs",
  ],
  deliverySteps: [
    {
      step: "01",
      title: "Requirement Analysis & API Design",
      description: "Outline frontend pages, backend endpoints, and database models.",
    },
    {
      step: "02",
      title: "Backend API & Database Development",
      description: "Build Express API endpoints, authentication, and MongoDB Atlas database schemas.",
    },
    {
      step: "03",
      title: "React Frontend Integration",
      description: "Develop responsive React components, connect state management, and integrate APIs.",
    },
    {
      step: "04",
      title: "Deployment & Full Source Code Handover",
      description: "Deploy to Render/Vercel, provide Postman API collection, and transfer source code.",
    },
  ],
  deliverables: [
    "Complete Frontend & Backend Source Code Repositories",
    "MongoDB Database Schemas & Initial Seed Files",
    "Postman API Collection & Endpoint Documentation",
    "Deployment Scripts for Render / Heroku / AWS",
    "30 Days Free Technical Support",
  ],
  faqs: [
    {
      question: "Do I get full ownership of the source code?",
      answer:
        "Yes, you receive 100% full ownership of the entire source code repository with full commercial usage rights.",
    },
    {
      question: "Can this app handle high traffic scale?",
      answer:
        "Yes, the MERN stack is famous for non-blocking asynchronous I/O and horizontal scaling across cloud servers.",
    },
  ],
};
