import { Metadata } from "next";
import { LegalHero } from "@/app/components/legal/legal-hero";
import { LegalContent } from "@/app/components/legal/legal-content";
import { CTASection } from "@/app/components/common/cta-section";
import type { LegalSection } from "@/app/components/legal/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy | Vemzo Technologies",
  description:
    "Learn how Vemzo Technologies collects, uses, and protects your personal data. We are committed to safeguarding your privacy across all our digital services.",
};

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      "At Vemzo Technologies, we are committed to protecting the privacy and personal data of our clients, website visitors, and users. This Privacy Policy explains how we collect, use, store, and share your information when you interact with our website, services, and digital platforms.",
      "By using our website or engaging our services — including web development, SaaS platforms, Shopify development, UI/UX design, AI solutions, and branding services — you agree to the terms outlined in this policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content:
      "We collect different types of information depending on how you interact with Vemzo Technologies:",
    subsections: [
      {
        title: "Personal Information",
        content:
          "When you contact us, request a quote, or engage our services, we may collect your full name, email address, phone number, company name, and project details. This information is provided directly by you through contact forms, emails, or during project onboarding.",
      },
      {
        title: "Technical Information",
        content:
          "When you visit our website, we may automatically collect technical data such as your IP address, browser type, device information, operating system, referring URLs, and pages visited. This data helps us improve website performance and user experience.",
      },
      {
        title: "Project-Related Data",
        content:
          "During the course of delivering our services, clients may share business data, content, credentials, design assets, or other materials necessary for project completion. We treat all project-related data as confidential.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    content: [
      "We use the information we collect to provide, maintain, and improve our services. Specifically, we use your data to respond to inquiries and communicate about potential or ongoing projects, deliver contracted services including web development, design, and digital solutions, send project updates, invoices, and relevant correspondence, and improve our website functionality, content, and user experience.",
      "We may also use aggregated, anonymized data for internal analytics and business development purposes. We will never sell your personal information to third parties.",
    ],
  },
  {
    id: "data-sharing",
    title: "Data Sharing & Third Parties",
    content: [
      "We do not sell, rent, or trade your personal information. We may share data with trusted third-party services only when necessary to deliver our services — such as hosting providers, analytics platforms, payment processors, and communication tools.",
      "All third-party providers we work with are contractually obligated to protect your data and use it only for the purposes we specify. We may also disclose information if required by law, court order, or to protect the rights and safety of Vemzo Technologies and its clients.",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    content: [
      "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encrypted communications (SSL/TLS), secure server infrastructure, access controls, and regular security reviews.",
      "While we strive to protect your data, no method of electronic transmission or storage is completely secure. We encourage clients to also take appropriate measures to protect sensitive credentials and materials shared during projects.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content:
      "We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Project-related data is retained for the duration of the engagement and a reasonable period afterward for record-keeping and support purposes. You may request deletion of your personal data at any time by contacting us.",
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: [
      "Depending on your jurisdiction, you may have the right to access, correct, or delete the personal information we hold about you. You may also have the right to restrict or object to certain processing activities, request a copy of your data in a portable format, and withdraw consent where processing is based on consent.",
      "To exercise any of these rights, please contact us at info@vemzo.io. We will respond to your request within a reasonable timeframe in accordance with applicable data protection laws.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    content:
      "Our services are not directed at individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected data from a minor, we will take steps to delete it promptly.",
  },
  {
    id: "changes-to-policy",
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. When we make significant changes, we will update the \"Last Updated\" date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information.",
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content:
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to us at info@vemzo.io or through our Contact page. We are committed to resolving any privacy-related concerns promptly and transparently.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <LegalHero
          badge="Your Privacy Matters"
          title="Privacy"
          highlight="Policy"
          description="We are committed to protecting your personal data and being transparent about how we collect, use, and safeguard your information across all our digital services."
          lastUpdated="July 31, 2026"
        />
        <LegalContent sections={sections} />
        <CTASection
          badge="Have Questions?"
          title="Get in Touch With"
          highlight="Our Team"
          description="If you have any questions about our privacy practices or need further information, our team is here to help."
          buttonText="Contact Us"
          buttonLink="/contact"
        />
      </div>
    </main>
  );
}
