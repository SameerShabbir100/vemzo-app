import { ProjectDetail } from "../types/project-details";

export const crmSystemsDetail: ProjectDetail = {
  slug: "crm-systems",
  title: "Custom CRM Systems",
  subtitle: "Turnkey Customer Relationship & Lead Pipeline Management Platform",
  category: "Business Automation",
  price: "$1,800 (PKR 504,000)",
  priceNum: 1800,
  originalPrice: "$2,700 (PKR 756,000)",
  deliveryTime: "8 - 12 Days",
  heroBadge: "Sales & Lead Automation",
  description:
    "Empower your sales team with a custom CRM system designed to track leads, manage customer interactions, automate deal pipelines, and increase closing rates.",
  overview:
    "Replace expensive monthly SaaS subscriptions like Salesforce or HubSpot with your own fully owned, customizable CRM software. Includes drag-and-drop Kanban deal boards, customer activity timelines, automated email follow-ups, and analytics dashboards.",
  useCases: [
    "Real Estate Agencies & Property Brokers",
    "Digital Marketing & IT Service Agencies",
    "B2B Sales Teams & Consultancies",
    "Financial Services & Insurance Advisors",
  ],
  techStack: {
    frontend: ["React.js", "Next.js 15", "Tailwind CSS", "Recharts / Chart.js"],
    backend: ["Node.js", "Express.js", "Nodemailer", "JWT Auth"],
    database: ["MongoDB / PostgreSQL", "Prisma ORM"],
    cloud: ["Vercel", "AWS S3", "Cloudflare"],
    tools: ["Stripe Webhooks", "SendGrid Email API", "CSV Data Import/Export"],
  },
  addOnPackages: [
    { id: "email-drip", title: "📧 Automated Email Drip Sequence Engine", price: 70000, description: "Trigger multi-step follow-up email campaigns based on Kanban pipeline stage changes.", badge: "Recommended" },
    { id: "whatsapp-crm", title: "💬 WhatsApp Business API Lead Chat Sync", price: 89600, description: "Send & receive WhatsApp messages directly inside customer CRM contact profiles." },
    { id: "ai-lead-score", title: "🤖 AI Lead Scoring & Win Probability Pack", price: 81200, description: "Predict lead conversion probability using AI history & engagement behavior." },
    { id: "calendar-sync", title: "📅 Google Calendar & Zoom Meeting Integration", price: 50400, description: "Auto-schedule Zoom meetings & sync reminders with Google/Outlook calendars." },
    { id: "proposal-builder", title: "📄 PDF Quotation & Proposal Generator", price: 61600, description: "Generate & send branded PDF proposals with electronic signature capture." },
  ],
  features: [
    {
      title: "Kanban Lead Pipeline",
      description:
        "Drag-and-drop deal stages (New, Qualified, Proposal Sent, Won, Lost) with custom stage metrics.",
    },
    {
      title: "360-Degree Contact Profiles",
      description:
        "Centralized view of customer emails, call notes, attached files, order history, and meeting logs.",
    },
    {
      title: "Task & Meeting Scheduler",
      description:
        "Assign tasks to team members, set follow-up reminders, and sync with calendar feeds.",
    },
    {
      title: "Automated Email Sequences",
      description:
        "Trigger personalized follow-up emails when leads enter specific pipeline stages.",
    },
    {
      title: "Sales Forecast Analytics",
      description:
        "Visual charts showing revenue pipeline projections, conversion rates, and sales agent leaderboards.",
    },
    {
      title: "Role-Based Team Access",
      description:
        "Granular permissions for Admins, Managers, and Sales Representatives to safeguard client data.",
    },
  ],
  adminFeatures: [
    "Sales Representative Target vs Actual Commission Leaderboard",
    "Custom Pipeline Stage Definition & Win-Probability Multipliers",
    "Automatic Lead Round-Robin Allocation Rules",
    "Email Campaign Drip Sequence Builder & Automation Triggers",
    "Contact Import & Export with Duplicate Contact Merging",
    "System Audit Logs for Contact Exports & Lead Reassignments",
  ],
  userFeatures: [
    "Interactive Drag-and-Drop Deal Board (Kanban View)",
    "1-Click Call Log, Meeting Note & File Attachment to Contact Timeline",
    "Task Reminders with Browser & Email Notification Alerts",
    "Lead Source Tracking (Website Form, Meta Ads, Referral)",
    "Filter Deals by Value, Agent, Stage & Win Probability",
  ],
  databaseEntities: [
    "Contacts & Leads (Name, Email, Phone, Company, Status, Lead Score)",
    "Deals & Opportunities (Stage, Deal Value, Expected Close Date, Win Probability)",
    "Tasks & Activity Logs (Call Notes, Emails Sent, Meetings Scheduled)",
    "Pipelines & Custom Stages (Stage Order, Win Weight Percentage)",
    "Users & Sales Team Roles (Admin, Manager, Agent)",
  ],
  integrations: [
    "SendGrid & Nodemailer Email Engine",
    "Twilio SMS & WhatsApp Lead Alerts",
    "Google Calendar & Outlook Meeting Feed Sync",
    "Custom Website Contact Form Webhook Receiver",
    "CSV / Excel Contact Exporter & Importer",
  ],
  securitySpecs: [
    "Bcrypt Password Hashing (12 Rounds) & JWT Authentication",
    "Strict Role-Based Access Control (RBAC)",
    "Encrypted Customer Data at Rest & HTTPS in Transit",
    "Daily Automated Database Cloud Backups",
  ],
  deliverySteps: [
    {
      step: "01",
      title: "Pipeline & Form Customization",
      description: "Specify your custom deal stages, lead source tags, and required contact fields.",
    },
    {
      step: "02",
      title: "CRM Server & Database Setup",
      description: "Deploy Next.js/Node CRM to your cloud server (Vercel/AWS) with PostgreSQL/MongoDB database.",
    },
    {
      step: "03",
      title: "Lead Import & Email SMTP Setup",
      description: "Import your existing client spreadsheets and configure business email SMTP sending.",
    },
    {
      step: "04",
      title: "Handover & Admin Video Training",
      description: "Receive full admin credentials, Git repository, and training documentation.",
    },
  ],
  deliverables: [
    "Full Web App Source Code (React / Node / Postgres)",
    "Database Schema & Sample Data Seed Files",
    "Admin & User Management Panel",
    "Email SMTP Configuration Guide",
    "1-Click Cloud Deployment Script",
    "30 Days Free Technical Support",
  ],
  faqs: [
    {
      question: "Are there any monthly recurring user fees?",
      answer:
        "No! You purchase the full source code once for $1,800 (PKR 504,000) and host it on your own server with unlimited users.",
    },
    {
      question: "Can we import our existing customer spreadsheet?",
      answer:
        "Yes, the CRM includes built-in CSV/Excel import tools to instantly transfer your existing client lists.",
    },
  ],
};
