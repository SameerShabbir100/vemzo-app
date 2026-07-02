import { HeroSection } from "./components/common/hero-section";

import { Statistics } from "./components/home/statistics";
import { WhyChoose } from "./components/home/why-choose";
import { ServicesGrid } from "./components/home/services-grid";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Statistics />
      <WhyChoose />
       <ServicesGrid />
    </>
  );
}
