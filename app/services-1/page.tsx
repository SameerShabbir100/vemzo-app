import { ServicesHero } from "@/app/components/services-1/services-hero";
import { ServicesGrid } from "@/app/components/home/old-services-grid";
import { CTASection } from "@/app/components/common/cta-section";

export default function ServicesOnePage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <ServicesHero />
        <ServicesGrid />

        <CTASection
          badge="Ready to Get Started?"
          title="Let's Build Your"
          highlight="Next Digital Product"
          description="Whether you need a business website, SaaS platform, CRM, ERP, POS system, mobile app, or enterprise solution, our team is ready to transform your ideas into high-performance digital products."
          buttonText="Start Your Project"
          buttonLink="/contact"
        />
      </div>
    </main>
  );
}
