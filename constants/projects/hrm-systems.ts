import { ProjectDetail } from "../types/project-details";

export const hrmSystemsDetail: ProjectDetail = {
  slug: "hrm-systems",
  title: "HRM Systems",
  subtitle: "Complete Human Resource, Payroll & Attendance Management",
  category: "Enterprise Systems",
  price: "$1,400 (PKR 392,000)",
  priceNum: 1400,
  originalPrice: "$2,000 (PKR 560,000)",
  deliveryTime: "10 - 14 Days",
  heroBadge: "Workforce Management",
  description:
    "Streamline workforce management, employee records, attendance tracking, leave applications, and automated payroll calculations with our all-in-one HRM software.",
  overview:
    "Designed to simplify HR administrative tasks for companies of 10 to 500+ employees. Includes employee self-service portals, leave approval workflows, payroll slip generation, performance reviews, and department management.",
  useCases: [
    "IT Companies & Software Houses",
    "Corporate Offices & Enterprises",
    "Healthcare & Hospital Staffing",
    "Manufacturing & Field Staff Teams",
  ],
  techStack: {
    frontend: ["Next.js 15", "React", "Material UI / Tailwind", "TypeScript"],
    backend: ["Node.js", "Express.js", "PDFkit (Payslip Generator)"],
    database: ["PostgreSQL", "Prisma ORM"],
    cloud: ["AWS / DigitalOcean", "Docker Container"],
    tools: ["Biometric Device API", "Excel Exporter", "SMTP Alerts"],
  },
  addOnPackages: [
    { id: "biometric", title: "🖐️ Biometric Fingerprint Hardware Sync API", price: 106400, description: "Connect ZKTeco / Hikvision biometric attendance devices directly to cloud HRM.", badge: "Popular" },
    { id: "geo-attendance", title: "📍 GPS Mobile Geo-Fencing Attendance Pack", price: 70000, description: "Allow remote & field staff to clock-in only when inside approved GPS coordinates." },
    { id: "tax-calc", title: "💰 Multi-Country Tax & Overtime Formula Engine", price: 78400, description: "Customizable local tax brackets, provident fund & overtime multiplier calculations." },
    { id: "performance", title: "🎯 KPI & Quarterly Performance Appraisal Pack", price: 72800, description: "Employee goal tracking, manager review scores & annual appraisal reports." },
    { id: "bank-file", title: "🏦 Direct Bank Bulk Salary Payment File Exporter", price: 61600, description: "Generate bank-specific CSV/TXT files for 1-click batch payroll disbursement." },
  ],
  features: [
    {
      title: "Employee Directory & Portal",
      description:
        "Secure portal for employees to view paystubs, apply for leaves, log hours, and update profiles.",
    },
    {
      title: "Attendance & Clock-In/Out",
      description:
        "Log attendance via web browser, mobile geo-tagging, or biometric device API integration.",
    },
    {
      title: "Leave Management System",
      description:
        "Custom leave types (Casual, Sick, Paid), automated balance tracking, and manager approval flows.",
    },
    {
      title: "Automated Payroll Engine",
      description:
        "Calculate base salaries, overtime, tax deductions, bonuses, and generate downloadable PDF payslips.",
    },
    {
      title: "Document Vault & Verification",
      description:
        "Store employee contracts, ID cards, certifications, and compliance documents safely.",
    },
    {
      title: "Department & Organizational Chart",
      description:
        "Visualize company structure, reporting hierarchies, and departmental head assignments.",
    },
  ],
  adminFeatures: [
    "Company-wide Payroll Processing & Bulk PDF Payslip Generation",
    "Leave Request Approval / Rejection Dashboard with Balance Check",
    "Department & Designation Tree Structure Setup",
    "Biometric & Geo-location Attendance Log Verification",
    "Employee Performance Review & Goal Tracking Dashboard",
    "Employee Onboarding & Offboarding Document Checklists",
  ],
  userFeatures: [
    "Employee Self-Service Dashboard",
    "1-Click Clock-In / Clock-Out Button with Time Logs & IP Tracking",
    "Leave Application Submission & Remaining Balance Counter",
    "Downloadable Monthly PDF Salary Slips for Any Month",
    "Employee Profile Info & Emergency Contact Updates",
  ],
  databaseEntities: [
    "Employees (Staff ID, Personal Info, Designation, Department, Base Salary, Bank Info)",
    "Attendance Logs (Check-In Time, Check-Out Time, Late Minutes, Overtime Hours, Status)",
    "Leave Requests (Type, Start Date, End Date, Status, Reason, Manager Note)",
    "Payroll Records (Gross Pay, Allowances, Tax Deductions, Net Pay, PDF Link)",
    "Departments & Job Titles (Department Name, Head of Department)",
  ],
  integrations: [
    "Biometric Fingerprint / Facial Recognition Terminal API",
    "PDFkit Dynamic Payslip Generator",
    "Nodemailer Email Notification Engine",
    "Excel / CSV Employee Report Exporter",
  ],
  securitySpecs: [
    "Encrypted Passwords & Sensitive Bank Account Data Encryption",
    "Role-Based Access Control (Admin, HR Manager, Employee)",
    "Audit Trail for Salary Adjustments & Document Modifications",
  ],
  deliverySteps: [
    {
      step: "01",
      title: "Company Hierarchy Definition",
      description: "Configure departments, designations, salary structures, and leave policies.",
    },
    {
      step: "02",
      title: "Server & Database Setup",
      description: "Deploy HRM codebase and database to your hosting server with SSL certificates.",
    },
    {
      step: "03",
      title: "Employee Batch Import",
      description: "Bulk import your existing staff list and generate initial login credentials.",
    },
    {
      step: "04",
      title: "Training & Handover",
      description: "Provide HR manager training walkthrough and full source code handover.",
    },
  ],
  deliverables: [
    "Complete HRM Source Code (Next.js / Node / PostgreSQL)",
    "Database Migrations & Setup Scripts",
    "PDF Payslip Template Engine",
    "User Roles & HR Administrator Guide",
    "30 Days Free Technical Support",
  ],
  faqs: [
    {
      question: "Can employees access their own portal securely?",
      answer:
        "Yes, every employee gets secure credentials to view their own attendance, pay slips, and submit leave requests.",
    },
    {
      question: "Can payroll rules be customized according to local laws?",
      answer:
        "Yes, tax rates, allowances, deductions, and overtime multipliers are fully configurable in the settings panel.",
    },
  ],
};
