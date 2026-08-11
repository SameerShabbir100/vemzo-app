import { ProjectDetail } from "../types/project-details";

export const lmsPlatformsDetail: ProjectDetail = {
  slug: "lms-platforms",
  title: "LMS Platforms",
  subtitle: "Scalable E-Learning & Course Creation Portal with Video Streaming",
  category: "EdTech & Learning",
  price: "$1,900 (PKR 532,000)",
  priceNum: 1900,
  originalPrice: "$2,350 (PKR 658,000)",
  deliveryTime: "10 - 14 Days",
  heroBadge: "EdTech & Course Portal",
  description:
    "Launch your own online academy, training portal, or course marketplace equipped with video lessons, quizzes, progress tracking, and certificate generation.",
  overview:
    "Our LMS platform empowers educators, creators, and corporate trainers to upload courses, monetize video content, monitor student progress, conduct automated quizzes, and award custom completion certificates.",
  useCases: [
    "Online Educators & Content Creators",
    "Corporate Employee Training Academies",
    "Coaching Institutes & Skill Bootcamps",
    "Certification & Test Prep Centers",
  ],
  techStack: {
    frontend: ["Next.js 15", "React.js", "Tailwind CSS", "Video.js / HLS Player"],
    backend: ["Node.js", "Express.js", "AWS S3 / Mux API", "Stripe API"],
    database: ["PostgreSQL / MongoDB", "Prisma"],
    cloud: ["Vercel", "AWS CloudFront", "S3 Storage"],
    tools: ["PDFkit Certificate Engine", "Quizzes Engine", "Stripe Checkout"],
  },
  addOnPackages: [
    { id: "multi-instructor", title: "👨‍🏫 Multi-Instructor Marketplace & Commission Split", price: 112000, description: "Allow external teachers to sign up, create courses & earn sales commissions.", badge: "Popular" },
    { id: "live-zoom", title: "📹 Live Zoom / Google Meet Webinar Integration", price: 78400, description: "Schedule live interactive classes directly inside course lesson modules." },
    { id: "drip-content", title: "⏳ Drip Feed Lesson Release Scheduler", price: 56000, description: "Release lessons on a daily or weekly schedule after student enrollment date." },
    { id: "discussion-forum", title: "💬 Student Community Forum & Q&A Board", price: 70000, description: "In-lesson Q&A discussion board with instructor marked answers & upvotes." },
    { id: "custom-cert", title: "📜 Custom Designer PDF Certificate Builder", price: 50400, description: "Dynamic certificate designer with custom badges, QR verification code & signatures." },
  ],
  features: [
    {
      title: "Course Builder & Lesson Manager",
      description:
        "Organize content into modules, video lessons, downloadable PDFs, and text guides with ease.",
    },
    {
      title: "Secure Video Streaming",
      description:
        "Protected video playback with AWS S3 / CloudFront signed URLs to prevent unauthorized downloads.",
    },
    {
      title: "Student Progress & Analytics",
      description:
        "Track lesson completion percentages, quiz scores, and student activity timelines.",
    },
    {
      title: "Automated Quizzes & Grading",
      description:
        "Multiple-choice assessments with passing score logic, instant grading, and retake controls.",
    },
    {
      title: "Dynamic Certificate Generator",
      description:
        "Automatically issue branded, downloadable PDF completion certificates with unique verification IDs.",
    },
    {
      title: "Monetization & Stripe Checkout",
      description:
        "Sell individual courses or recurring monthly memberships via integrated Stripe payments.",
    },
  ],
  adminFeatures: [
    "Course Curriculum Builder (Drag-and-Drop Section Reordering)",
    "Instructor Management & Revenue Share Percentage Payouts",
    "Student Enrollment & Course Completion Analytics Dashboard",
    "Quiz Question Bank & Passing Threshold Settings",
    "Dynamic PDF Certificate Template Builder (Logo, Signature, Seal)",
    "Coupon Promotions & Discount Rules Management",
  ],
  userFeatures: [
    "Distraction-Free Video Course Player with Playback Speed Control",
    "Lesson Auto-Mark Completion & Progress Percentage Bar",
    "Interactive Multiple-Choice Quizzes with Instant Score Feedback",
    "1-Click Verifiable PDF Certificate Download upon 100% Completion",
    "Course Discussion Q&A Forum per Lesson",
  ],
  databaseEntities: [
    "Courses (Title, Slug, Price, Description, Thumbnail, Instructor ID)",
    "Modules & Lessons (Video URL, Attachment PDFs, Duration, Order)",
    "Users (Students, Instructors, Admins)",
    "Enrollments & Stripe Transactions",
    "Quizzes, Questions & Student Attempt Logs",
    "Certificates Issued (Unique Hash ID, Verification Link, Issue Date)",
  ],
  integrations: [
    "AWS S3 & CloudFront Signed Video URLs / Mux API",
    "Stripe Credit Card & Subscription Checkout",
    "PDFkit Certificate PDF Engine",
    "SendGrid Transactional Emails (Enrollments & Certificates)",
  ],
  securitySpecs: [
    "Encrypted Temporary Signed Video URLs (Prevents Direct Copying)",
    "Bcrypt Passwords & Protected Video Routes",
    "Strict Content Protection Headers",
  ],
  deliverySteps: [
    {
      step: "01",
      title: "Branding & Academy Setup",
      description: "Upload academy logo, custom color theme, and certificate template.",
    },
    {
      step: "02",
      title: "Cloud & Storage Configuration",
      description: "Connect AWS S3 video storage and Stripe payment checkout.",
    },
    {
      step: "03",
      title: "Demo Course Upload",
      description: "Upload initial course content, videos, and quizzes to verify system flow.",
    },
    {
      step: "04",
      title: "Handover & Go-Live",
      description: "Deploy to Vercel/AWS, transfer full code repository, and provide instructor guides.",
    },
  ],
  deliverables: [
    "Full LMS Platform Source Code (Next.js / Node.js)",
    "Database Schema & Media Upload Engine",
    "Dynamic Certificate Template Builder",
    "Stripe Payment Gateway Configuration",
    "Instructor & Admin Guide",
    "30 Days Free Technical Support",
  ],
  faqs: [
    {
      question: "How are course videos stored securely?",
      answer:
        "Videos are uploaded to cloud storage (AWS S3 or Mux) and streamed using secure signed URLs to prevent unauthorized direct copying.",
    },
    {
      question: "Can multiple instructors create courses?",
      answer:
        "Yes, the platform supports Multi-Instructor roles with individual dashboard permissions and sales reporting.",
    },
  ],
};
