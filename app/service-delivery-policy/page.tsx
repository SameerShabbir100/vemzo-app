import { Metadata } from "next";
import { LegalHero } from "@/components/legal/legal-hero";
import { LegalContent } from "@/components/legal/legal-content";
import { CTASection } from "@/components/common/cta-section";
import type { LegalSection } from "@/components/legal/legal-content";

export const metadata: Metadata = {
  title: "Service Delivery Policy | Vemzo Technologies",
  description:
    "Learn about Vemzo Technologies' service delivery process, timelines, communication protocols, and quality assurance standards for all digital projects.",
};

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    content: [
      "At Vemzo Technologies, we follow a structured, transparent, and efficient service delivery process designed to ensure every project meets the highest standards of quality. This policy outlines how we manage projects from inception to deployment and beyond.",
      "Whether you are engaging us for web development, SaaS platform development, Shopify solutions, UI/UX design, AI implementation, or any other digital service, this policy applies to all engagements unless specifically modified in a project proposal or Statement of Work (SOW).",
    ],
  },
  {
    id: "project-phases",
    title: "Project Phases",
    content:
      "Every project at Vemzo Technologies follows a structured development lifecycle to ensure clarity, quality, and timely delivery:",
    subsections: [
      {
        title: "Discovery & Planning",
        content:
          "We begin each project with a thorough discovery phase. This includes understanding your business goals, target audience, technical requirements, and competitive landscape. The output of this phase is a detailed project plan, sitemap or system architecture, feature specification, and timeline estimate. This phase typically takes 3–7 business days depending on project complexity.",
      },
      {
        title: "UI/UX Design",
        content:
          "Our design team creates wireframes and high-fidelity mockups based on the approved specifications. We follow a mobile-first, user-centered design approach to ensure optimal experiences across all devices. Design deliverables are shared for review, and the agreed number of revision rounds is included in the project scope. Design typically takes 5–15 business days depending on the number of pages or screens.",
      },
      {
        title: "Development",
        content:
          "Once designs are approved, our engineering team begins development using modern technologies including Next.js, React, Vue.js, Node.js, and other tools best suited for your project. We follow best practices for clean code architecture, version control, and testing. Development timelines vary from 2–12 weeks depending on the scope and complexity of the project.",
      },
      {
        title: "Testing & Quality Assurance",
        content:
          "Every project undergoes thorough testing before delivery. This includes functionality testing across all features and user flows, responsive testing across multiple devices and screen sizes, browser compatibility testing, performance optimization and load speed analysis, and security audits for applications handling sensitive data. We address all identified issues before proceeding to deployment.",
      },
      {
        title: "Deployment",
        content:
          "Once the project passes quality assurance and receives Client approval, we deploy it to the production environment. We provide deployment support including server configuration, domain setup, SSL installation, and environment optimization. A post-deployment monitoring period ensures everything runs smoothly.",
      },
    ],
  },
  {
    id: "timelines",
    title: "Timelines & Milestones",
    content: [
      "Project timelines are established during the planning phase and documented in the project proposal or SOW. We break larger projects into milestones with specific deliverables and deadlines to ensure steady progress and transparency.",
      "While we make every effort to meet agreed deadlines, timelines may be adjusted due to scope changes requested by the Client, delays in receiving content, assets, or feedback, unforeseen technical challenges, or third-party dependencies outside our control. In all cases, we communicate timeline changes proactively and work with the Client to establish revised schedules.",
    ],
  },
  {
    id: "communication",
    title: "Communication & Reporting",
    content:
      "Clear and consistent communication is central to our service delivery approach. Each project is assigned a dedicated project manager who serves as your primary point of contact. We provide regular progress updates through email, messaging platforms, or project management tools as preferred by the Client. Milestone reviews and demo sessions are scheduled at key project phases. We respond to all client communications within one business day during standard working hours. Project documentation and deliverables are shared through secure, organized channels.",
  },
  {
    id: "revisions",
    title: "Revisions & Change Requests",
    content: [
      "Each project includes a defined number of revision rounds as specified in the SOW. Revisions refer to adjustments within the original scope — such as color changes, layout tweaks, or content updates. These are included in the project cost.",
      "Change requests that modify the original scope — such as adding new features, pages, or functionality — are handled through a formal change order process. We provide a cost and timeline estimate for the requested changes, and work proceeds only after written Client approval. This ensures transparency and prevents scope creep from affecting project quality or delivery.",
    ],
  },
  {
    id: "deliverables",
    title: "Deliverables & Handover",
    content:
      "Upon project completion, we provide a comprehensive handover package that includes all source code and design files, deployment access and credentials, technical documentation covering architecture, setup, and configuration, content management training (if applicable), and a summary of technologies, dependencies, and third-party services used. All deliverables are transferred to the Client upon receipt of final payment as outlined in the project agreement.",
  },
  {
    id: "acceptance",
    title: "Acceptance Criteria",
    content:
      "Each milestone or final delivery includes a review period — typically 5 business days — during which the Client is expected to review the deliverables and provide feedback. If no feedback or objections are received within the review period, the deliverables are considered accepted. Feedback provided after the acceptance period may be addressed as part of a new scope or maintenance agreement. Acceptance of each milestone enables the project to proceed to the next phase and triggers any associated milestone payments.",
  },
  {
    id: "post-delivery-support",
    title: "Post-Delivery Support",
    content: [
      "Vemzo Technologies provides a 30-day post-delivery support period at no additional charge. During this period, we address any bugs or technical issues in the code we delivered, provided the issues are not caused by Client modifications, third-party service changes, or hosting environment alterations.",
      "After the initial support period, ongoing maintenance, updates, and enhancements are available through our maintenance and retainer packages. These can include monthly technical support hours, security updates and patches, performance monitoring and optimization, feature additions and improvements, and hosting and infrastructure management.",
    ],
  },
  {
    id: "service-level",
    title: "Service Level Commitments",
    content:
      "We are committed to maintaining high standards of service throughout every engagement. Our service level commitments include responding to all client inquiries within one business day, providing weekly progress updates for active projects, delivering all milestones within agreed-upon timelines (or communicating adjustments proactively), maintaining a 99.9% uptime target for applications we host and manage, and resolving critical bugs within 24–48 hours during the post-delivery support period.",
  },
  {
    id: "changes-to-policy",
    title: "Changes to This Policy",
    content:
      "Vemzo Technologies may update this Service Delivery Policy from time to time. Any changes will be reflected on this page with an updated effective date. The policy in effect at the time of project engagement applies to that specific project.",
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content:
      "If you have questions about our service delivery process or would like to discuss how we can support your next project, please contact us at info@vemzo.io or visit our Contact page. We look forward to working with you.",
  },
];

export default function ServiceDeliveryPolicyPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <LegalHero
          badge="Quality Assurance"
          title="Service Delivery"
          highlight="Policy"
          description="Learn about our structured project delivery process, from initial discovery through deployment and ongoing support. We ensure transparency, quality, and timely delivery on every project."
          lastUpdated="July 31, 2026"
        />
        <LegalContent sections={sections} />
        <CTASection
          badge="Ready to Start?"
          title="Let's Build Your"
          highlight="Next Project"
          description="Now that you understand our delivery process, let's discuss how we can bring your vision to life with precision and quality."
          buttonText="Start Your Project"
          buttonLink="/contact"
        />
      </div>
    </main>
  );
}
