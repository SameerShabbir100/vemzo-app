import { Metadata } from "next";
import { LegalHero } from "@/app/components/legal/legal-hero";
import { LegalContent } from "@/app/components/legal/legal-content";
import { CTASection } from "@/app/components/common/cta-section";
import type { LegalSection } from "@/app/components/legal/legal-content";

export const metadata: Metadata = {
  title: "Terms & Conditions | Vemzo Technologies",
  description:
    "Review the terms and conditions that govern the use of Vemzo Technologies' services including web development, SaaS platforms, Shopify development, and digital solutions.",
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      "These Terms and Conditions constitute a legally binding agreement between you (the \"Client\") and Vemzo Technologies (the \"Company\", \"we\", \"us\", or \"our\"). By engaging our services, submitting a project inquiry, or using our website, you acknowledge that you have read, understood, and agree to be bound by these terms.",
      "If you are entering into this agreement on behalf of a company or organization, you represent that you have the authority to bind that entity to these terms.",
    ],
  },
  {
    id: "scope-of-services",
    title: "Scope of Services",
    content: [
      "Vemzo Technologies provides professional digital services including but not limited to custom web application development, SaaS platform design and development, Shopify store and app development, UI/UX design and branding, mobile application development, API development and integration, AI solutions and automation, CRM, HRM, LMS, and POS system development, and ongoing maintenance and technical support.",
      "The specific scope, deliverables, timeline, and cost for each project will be defined in a separate project proposal or Statement of Work (SOW) agreed upon by both parties before work begins.",
    ],
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    content:
      "To ensure successful project delivery, the Client agrees to provide all necessary content, assets, credentials, and information required for the project in a timely manner. The Client is responsible for designating an authorized point of contact for project communication, reviewing and providing feedback on deliverables within agreed-upon timeframes, ensuring the accuracy and legality of all content provided to us, and maintaining backups of any existing systems or data before we begin work. Delays caused by the Client's failure to fulfill these responsibilities may result in adjusted timelines and additional costs.",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content:
      "Upon full payment of all agreed-upon fees, the Client receives full ownership of the final deliverables, including custom code, designs, and assets created specifically for the project. Vemzo Technologies retains ownership of any pre-existing frameworks, libraries, tools, or reusable components used in the project that were developed independently. We reserve the right to showcase completed projects in our portfolio and marketing materials unless a written confidentiality agreement states otherwise. Third-party licenses, plugins, themes, or tools used in the project remain subject to their respective license terms.",
  },
  {
    id: "payment-terms",
    title: "Payment Terms",
    content:
      "Payment terms are specified in the project proposal or SOW. Unless otherwise stated, an upfront deposit is required before work begins on any project. Milestone payments or progress-based billing may apply to larger projects. All invoices are due within the timeframe specified in the invoice. Late payments beyond 14 days may incur additional charges and may result in work being paused until the outstanding balance is settled. All fees are quoted in the currency specified in the proposal and are exclusive of applicable taxes unless stated otherwise.",
  },
  {
    id: "project-timeline",
    title: "Project Timeline & Revisions",
    content: [
      "Estimated project timelines are provided in good faith based on the agreed scope of work. While we make every effort to meet deadlines, timelines may be affected by factors outside our control, including delays in client feedback, scope changes, or third-party dependencies.",
      "Each project includes a specified number of revision rounds as outlined in the SOW. Additional revisions beyond the agreed scope may be billed at our standard hourly rate. Major changes to the project scope after work has begun will require a separate change order with revised timelines and costs.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content:
      "Both parties agree to maintain the confidentiality of proprietary and sensitive information shared during the course of the engagement. This includes business strategies, technical specifications, credentials, customer data, and any other information designated as confidential. Confidentiality obligations survive the termination of the agreement for a period of two years unless otherwise agreed in writing.",
  },
  {
    id: "warranties",
    title: "Warranties & Disclaimers",
    content: [
      "Vemzo Technologies warrants that all services will be performed in a professional and workmanlike manner consistent with industry standards. We provide a 30-day post-delivery bug-fix warranty covering defects in code we have written, provided the issue is not caused by client modifications, third-party services, or hosting environment changes.",
      "Beyond this warranty period, all services are provided \"as is\" without warranties of any kind, either express or implied. We do not guarantee specific business results, search engine rankings, sales figures, or revenue outcomes from any project.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, Vemzo Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to our services, including but not limited to loss of profits, data, business opportunities, or goodwill. Our total cumulative liability for any claim arising from or related to our services shall not exceed the total fees paid by the Client for the specific project giving rise to the claim.",
  },
  {
    id: "termination",
    title: "Termination",
    content:
      "Either party may terminate the engagement by providing written notice. If the Client terminates a project after work has begun, the Client is responsible for payment of all work completed up to the date of termination, including any expenses incurred. If Vemzo Technologies terminates the engagement, we will deliver all work completed to date and refund any prepaid fees for undelivered work. Termination does not affect any rights or obligations that have accrued prior to the termination date.",
  },
  {
    id: "force-majeure",
    title: "Force Majeure",
    content:
      "Neither party shall be held liable for delays or failure to perform obligations under these terms due to circumstances beyond reasonable control, including but not limited to natural disasters, pandemics, government actions, internet outages, cyberattacks, or other events that could not have been reasonably anticipated or prevented.",
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content:
      "These Terms and Conditions shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from or related to these terms shall be resolved through good-faith negotiation. If a resolution cannot be reached, disputes will be submitted to the exclusive jurisdiction of the courts in Lahore, Pakistan.",
  },
  {
    id: "changes-to-terms",
    title: "Changes to These Terms",
    content:
      "Vemzo Technologies reserves the right to update or modify these Terms and Conditions at any time. Changes become effective when posted on our website with an updated \"Last Updated\" date. Continued use of our services after changes are posted constitutes acceptance of the revised terms. We encourage clients to review these terms periodically.",
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content:
      "If you have any questions about these Terms and Conditions, please contact us at info@vemzo.io or visit our Contact page. We are happy to clarify any terms before you engage our services.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <LegalHero
          badge="Legal Agreement"
          title="Terms &"
          highlight="Conditions"
          description="Please review the terms that govern your engagement with Vemzo Technologies. These terms apply to all services we provide, including web development, SaaS platforms, and digital solutions."
          lastUpdated="July 31, 2026"
        />
        <LegalContent sections={sections} />
        <CTASection
          badge="Have Questions?"
          title="Get in Touch With"
          highlight="Our Team"
          description="If you need clarification on any of our terms before engaging our services, our team is ready to assist you."
          buttonText="Contact Us"
          buttonLink="/contact"
        />
      </div>
    </main>
  );
}
