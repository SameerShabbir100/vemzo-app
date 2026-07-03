import { AboutHero } from "@/app/components/about/aboutHero";
import { Team } from "@/app/components/about/team";
// import { AboutStory } from "@/components/main/about-story";
// import { AboutStats } from "@/components/main/about-stats";
// import { AboutValues } from "@/components/main/about-values";
// import { Workflow } from "@/components/main/workflow";
// import { AboutCTA } from "@/components/main/about-cta";
import { CTASection } from "@/app/components/common/cta-section";

export default function AboutPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col ">
        <AboutHero />
        <Team />
        <CTASection
        badge="Let's Build Together"
        title="Ready to Work With"
        highlight="VEMZO?"
        description="We're passionate about helping startups, growing businesses, and enterprises turn ideas into powerful digital solutions. Whether you're planning a new project or looking to modernize an existing one, our team is ready to help you every step of the way."
        buttonText="Let's Talk"
        buttonLink="/contact"
        />
        {/* <AboutStory />
        <AboutStats />
        <AboutValues />
        <Workflow />
        <AboutCTA /> */}
      </div>
    </main>
  );
}