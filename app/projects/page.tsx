import { ProjectsHero } from "@/components/projects/projects-hero";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { ProjectsCTA } from "@/components/projects/projects-cta";

export default function ProjectsPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <ProjectsHero />
        <ProjectsGrid />
        <ProjectsCTA />
      </div>
    </main>
  );
}
