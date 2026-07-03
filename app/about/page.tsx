import { AboutHero } from "@/app/components/about/aboutHero";
import { Team } from "@/app/components/about/team";
import { CTASection } from "@/app/components/common/cta-section";
import AboutAgency from "@/app/components/home/about-agency";
import { Box } from "@mui/material";
export default function AboutPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col ">
        <AboutHero />
        <Box sx={{ py: { sm: 8, md: 15 } }}>
          <AboutAgency />
        </Box>
        <Team />
        <CTASection
          badge="Let's Build Together"
          title="Ready to Work With"
          highlight="VEMZO?"
          description="We're passionate about helping startups, growing businesses, and enterprises turn ideas into powerful digital solutions. Whether you're planning a new project or looking to modernize an existing one, our team is ready to help you every step of the way."
          buttonText="Let's Talk"
          buttonLink="/contact"
        />
      </div>
    </main>
  );
}
