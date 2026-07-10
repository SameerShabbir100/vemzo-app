"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PROJECTS, PROJECT_CATEGORIES } from "@/constants";
import { ProjectCard } from "../sub/project-card";
import { ProjectModal } from "../sub/project-modal";

export const ProjectsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const categoryMatch =
        activeCategory === "All" || project.category === activeCategory;

      const searchMatch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory, search]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && visibleCount < filteredProjects.length) {
        setVisibleCount((prev) => prev + 3);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [visibleCount, filteredProjects.length]);

  return (
    <section className="w-full px-6">
      <div className="mx-auto max-w-7xl">
        {/* Search */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search Projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              max-w-xl
              rounded-xl
              border
              border-[rgba(0,220,130,0.15)]
              
              px-5
              py-4
              text-white
              outline-none
              transition-all
              placeholder:text-gray-500
              focus:border-[#00dc82]
            "
          />
        </div>

        {/* Sticky Filter */}
        <div className="sticky top-20 z-40 mb-14 border-b border-[#00dc821a] bg-[#00dc821a]/70 py-5 backdrop-blur-xl">
          <div className="flex flex-wrap justify-center gap-4">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  rounded-full
                  border
                  px-5
                  py-3
                  transition-all
                  duration-300

                  ${
                    activeCategory === category
                      ? "border-[#00dc82] bg-[#00dc82] text-black"
                      : "border-[rgba(0,220,130,0.2)] text-white hover:border-[#00dc82] hover:text-[#00dc82]"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.slice(0, visibleCount).map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              description={project.description}
              category={project.category}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Infinite Scroll */}
        <div ref={loaderRef} className="h-20" />

        {visibleCount < filteredProjects.length && (
          <div className="text-center font-medium text-[#00dc82]">
            Loading More...
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
