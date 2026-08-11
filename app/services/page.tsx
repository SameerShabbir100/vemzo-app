import { Metadata } from "next";
import { ServicesHero } from "@/app/components/services-1/services-hero";
import { BentoServicesGrid } from "@/app/components/services/bento-services-grid";
import { DeliveryProcess } from "@/app/components/services/delivery-process";
import { QualityGuarantee } from "@/app/components/services/quality-guarantee";
import { ClientTestimonials } from "@/app/components/services/client-testimonials";
import { ServicesFAQ } from "@/app/components/services/services-faq";
import { CTASection } from "@/app/components/common/cta-section";

export const metadata: Metadata = {
  title: "Software Products & Turn-Key Digital Solutions | Vemzo Technologies",
  description:
    "Explore Vemzo Technologies pre-engineered software products including Custom POS Systems, CRM Platforms, HRM Software, LMS Academies, SaaS Applications, and Full-Stack Web Apps.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white py-10 overflow-x-hidden">
      <div className="flex flex-col gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesHero />
        <BentoServicesGrid />
        <DeliveryProcess />
        <QualityGuarantee />
        <ClientTestimonials />
        <ServicesFAQ />

        <CTASection
          badge="Ready to Get Started?"
          title="Let's Build Your"
          highlight="Next Digital Product"
          description="Whether you need a custom Shopify Store, Shopify App, POS system, CRM, HRM platform, LMS academy, SaaS application, or full-stack web app, our team is ready to transform your vision into high-performance software."
          buttonText="Start Your Project"
          buttonLink="/contact"
        />
      </div>
    </main>
  );
}
