import { HeroSection } from "./components/common/hero-section";

import { ServicesGrid } from "./components/home/services-grid";
import { Skills } from "./components/home/skills";
import { Workflow } from "./components/home/workflow";
import { Encryption } from "./components/home/encryption";
import { Industries } from "./components/home/industries";
import { Reviews } from "./components/home/reviews";
import { FAQ } from "./components/home/faq";
import { Projects } from "./components/home/projects";
import StatsSection from "./components/home/stats-sections";
import AboutAgency from "./components/home/about-agency";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutAgency />
      <ServicesGrid />
      <Skills />
      <StatsSection />
      <Projects />
      <Workflow />
      <Encryption />
      <Industries />
      <Reviews />
      <FAQ />
    </>
  );
}
