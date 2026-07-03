import { HeroSection } from "./components/common/hero-section";

import { Statistics } from "./components/home/statistics";
import { WhyChoose } from "./components/home/why-choose";
import { ServicesGrid } from "./components/home/services-grid";
import { Skills } from "./components/home/skills";
import { Workflow } from "./components/home/workflow";
import { Encryption } from "./components/home/encryption";
import { Industries } from "./components/home/industries";
import { Reviews } from "./components/home/reviews";
import { FAQ } from "./components/home/faq";
import { Projects } from "./components/home/projects";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Statistics />
      <WhyChoose />
       <ServicesGrid />
       <Skills />
       {/* <Projects /> */}
       <Workflow />
       <Encryption />
       <Industries />
       <Reviews />
       <FAQ />
    </>
  );
}
