"use client";

import Image from "next/image";

type ProjectModalProps = {
  project: {
    title: string;
    description: string;
    image: string;
    category: string;
    technologies?: string[];
    liveUrl?: string;
    githubUrl?: string;
  } | null;
  open: boolean;
  onClose: () => void;
};

export const ProjectModal = ({ project, open, onClose }: ProjectModalProps) => {
  if (!project || !open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8">
        <div
          className="
            w-full
            max-w-5xl
            max-h-[90vh]
            overflow-y-auto
            rounded-3xl
            border
            border-[rgba(0,220,130,0.15)]
            
            backdrop-blur-xl
          "
        >
          {/* Hero Image */}
          <div className="relative h-[250px] md:h-[400px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Category */}
            <div
              className="
                inline-flex
                rounded-full
                border
                border-[rgba(0,220,130,0.2)]
                bg-[rgba(0,220,130,0.1)]
                px-3
                py-1
                text-sm
                font-medium
                text-[#00dc82]
              "
            >
              {project.category}
            </div>

            {/* Title */}
            <h2 className="mt-5 text-4xl font-bold text-white">
              {project.title}
            </h2>

            {/* Description */}
            <p className="mt-6 leading-8 text-gray-400">
              {project.description}
            </p>

            {/* Tech Stack */}
            {project.technologies && (
              <>
                <h3 className="mt-10 mb-4 text-xl font-semibold text-white">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-[rgba(0,220,130,0.2)]
                        bg-[rgba(0,220,130,0.08)]
                        px-4
                        py-2
                        text-sm
                        text-[#00dc82]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-xl
                    bg-[#00dc82]
                    px-6
                    py-3
                    font-medium
                    text-black
                    transition-colors
                    duration-300
                    hover:bg-[#00c474]
                  "
                >
                  Live Demo
                </a>
              )}

              {/* {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-xl
                    border
                    border-[rgba(0,220,130,0.2)]
                    px-6
                    py-3
                    text-[#00dc82]
                    transition-colors
                    duration-300
                    hover:bg-[rgba(0,220,130,0.08)]
                  "
                >
                  Source Code
                </a>
              )} */}

              <button
                onClick={onClose}
                className="
                  rounded-xl
                  border
                  border-[rgba(0,220,130,0.2)]
                  px-6
                  py-3
                  text-[#00dc82]
                  transition-colors
                  duration-300
                  hover:bg-[rgba(0,220,130,0.08)]
                "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
