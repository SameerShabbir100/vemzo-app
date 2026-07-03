import { ServicesHero } from "@/app/components/services/services-hero";
// import { ServicesGrid } from "@/components/main/services-grid";
// import { Workflow } from "@/components/main/workflow";
import { CTASection } from "@/app/components/common/cta-section";

export default function ServicesPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <ServicesHero />
        {/* <ServicesGrid />
        <Workflow />
         */}
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