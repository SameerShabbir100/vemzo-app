import { PROJECTS } from "@/constants";
import { ProjectCard } from "../sub/project-card";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center mb-24 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05),transparent_60%)]" />

      <h1 className="text-[44px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 my-10">
        Our Recent Projects
      </h1>

      <div className="w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard
          key={project.title}
          src={project.image}
          title={project.title}
          description={project.description}
          category={project.category}
/>
        ))}
      </div>

      <button className="py-4 px-4 button-primary mt-4 text-center text-white cursor-pointer rounded-lg">
        Explore More Projects
      </button>
    </section>
  );
};