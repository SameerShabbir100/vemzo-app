import { Metadata } from "next";
import { LegalHero } from "@/app/components/legal/legal-hero";
import { LegalContent } from "@/app/components/legal/legal-content";
import { CTASection } from "@/app/components/common/cta-section";
import type { LegalSection } from "@/app/components/legal/legal-content";

export const metadata: Metadata = {
  title: "Refund Policy | Vemzo Technologies",
  description:
    "Understand Vemzo Technologies' refund policy for digital services including web development, SaaS platforms, Shopify development, and custom software projects.",
};

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    content: [
      "At Vemzo Technologies, client satisfaction is our top priority. We are committed to delivering high-quality digital services and maintaining transparent, fair business practices. This Refund Policy outlines the conditions under which refunds may be issued for our services.",
      "As a digital services agency specializing in web development, SaaS platforms, Shopify development, UI/UX design, AI solutions, and custom software, our deliverables are intangible and require significant investment of time, expertise, and resources. This policy reflects the nature of our work.",
    ],
  },
  {
    id: "eligibility",
    title: "Refund Eligibility",
    content:
      "Refund eligibility depends on the stage of the project and the circumstances under which the request is made. Each refund request is evaluated on a case-by-case basis with consideration for the work completed, resources allocated, and the terms agreed upon in the project proposal or Statement of Work (SOW).",
    subsections: [
      {
        title: "Before Work Begins",
        content:
          "If you cancel a project before any work has commenced and within 48 hours of making payment, you are eligible for a full refund of the deposit or payment made. Cancellations made after 48 hours but before work begins may be subject to an administrative fee of up to 10% of the deposit amount.",
      },
      {
        title: "During Active Development",
        content:
          "Once work has begun, refunds are calculated on a pro-rata basis. You will be charged for all work completed up to the date of cancellation, including design concepts, code development, integrations, and any third-party services procured on your behalf. The remaining balance, if any, will be refunded.",
      },
      {
        title: "After Delivery & Approval",
        content:
          "Once a project or milestone has been delivered and approved by the Client (either through explicit written approval or by the absence of objection within the agreed review period), it is considered accepted, and no refund will be issued for that portion of the work.",
      },
    ],
  },
  {
    id: "non-refundable",
    title: "Non-Refundable Scenarios",
    content: [
      "Refunds will not be issued in the following circumstances: when the Client fails to provide required content, assets, feedback, or approvals within agreed timelines, causing project delays or abandonment; when the project scope changes significantly from the original agreement due to Client-initiated modifications; when third-party services, licenses, plugins, themes, hosting, or domain registrations have been purchased on behalf of the Client, as these costs are non-recoverable.",
      "Additionally, refunds are not available when dissatisfaction is based on subjective design preferences after the agreed number of revision rounds has been completed, when the Client's business circumstances change (such as company closure, change of direction, or budget reallocation) after work has been delivered, or when the project has been completed and delivered in accordance with the agreed specifications.",
    ],
  },
  {
    id: "partial-refunds",
    title: "Partial Refunds",
    content:
      "In situations where a project is cancelled mid-development, we calculate partial refunds based on the percentage of work completed as documented through progress reports, design files, code repositories, and milestone tracking. We provide a transparent breakdown of completed work and associated costs. Any third-party expenses already incurred are deducted from the refund amount. Partial refunds are processed using the original payment method.",
  },
  {
    id: "dispute-resolution",
    title: "Dispute Resolution",
    content:
      "If you disagree with a refund decision, we encourage you to contact us to discuss the matter. Our goal is always to reach a fair and mutually agreeable resolution. We will review the project documentation, communications, and deliverables to reassess the situation. If a resolution cannot be reached through direct communication, both parties agree to pursue mediation before any legal action.",
  },
  {
    id: "refund-process",
    title: "Refund Process",
    content: [
      "To request a refund, please contact us at info@vemzo.io with your project details, the reason for the refund request, and any supporting documentation. Please include your full name, project name, and invoice or reference number.",
      "Our team will acknowledge your request within 2 business days and provide a detailed response within 5 business days. Once a refund is approved, processing typically takes 7–14 business days depending on the payment method and financial institution involved.",
    ],
  },
  {
    id: "subscription-services",
    title: "Subscription & Maintenance Services",
    content:
      "For ongoing subscription or maintenance agreements, cancellation must be submitted at least 15 days before the next billing cycle. Refunds for the current billing period are not available once the period has started. Any unused portion of a prepaid maintenance package may be refunded on a pro-rata basis, less any administrative fees. Custom support hours or retainer agreements are subject to the terms specified in their respective contracts.",
  },
  {
    id: "changes-to-policy",
    title: "Changes to This Policy",
    content:
      "Vemzo Technologies reserves the right to update this Refund Policy at any time. Changes will be posted on our website with an updated effective date. The policy in effect at the time of your purchase or engagement governs your refund rights for that specific transaction.",
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content:
      "For refund requests or questions about this policy, please reach out to us at info@vemzo.io or through our Contact page. We are committed to handling all refund inquiries fairly, transparently, and as quickly as possible.",
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <LegalHero
          badge="Fair & Transparent"
          title="Refund"
          highlight="Policy"
          description="We believe in fair and transparent business practices. Review our refund policy to understand how we handle cancellations and refund requests for our digital services."
          lastUpdated="July 31, 2026"
        />
        <LegalContent sections={sections} />
        <CTASection
          badge="Need Assistance?"
          title="Talk to Our"
          highlight="Team"
          description="If you have questions about our refund policy or need to discuss a specific situation, we're here to help."
          buttonText="Contact Us"
          buttonLink="/contact"
        />
      </div>
    </main>
  );
}
