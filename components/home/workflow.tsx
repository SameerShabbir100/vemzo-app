"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { WorkflowCard } from "../common/workflow-card";

export const WORKFLOW = [
  {
    step: "01",
    title: "Requirement Gathering",
    description:
      "We analyze your idea, business goals, and technical needs to define a clear roadmap.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    description:
      "We design modern, user-friendly interfaces focused on performance and experience.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "We build scalable applications using modern technologies like Next.js, Vue, and Node.js.",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description:
      "We test every feature and optimize performance, speed, and responsiveness.",
  },
  {
    step: "05",
    title: "Deployment",
    description:
      "We deploy your project on secure and scalable cloud infrastructure.",
  },
];

export const Workflow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          threshold: 0.6,
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <Box
      id="workflow"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 10,
      }}
    >
      {/* Background glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(0,220,130,0.05), transparent 60%)",
        }}
      />

      <div className="text-center mb-16">
        <span className="inline-flex px-4 py-2 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-sm font-medium mb-5">
          Our Process
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          From Idea to
          <span className="text-[#00dc82]"> Product Launch</span>
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-lg">
          Every successful digital product starts with a clear strategy. We
          follow a transparent, collaborative development process—from discovery
          and UI/UX design to development, testing, deployment, and continuous
          improvement—to ensure exceptional results for every client.
        </p>
      </div>

      {/* Timeline container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          px: 3,
        }}
      >
        {/* Base line */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            transform: "translateX(-50%)",
            bgcolor: "rgba(0,220,130,0.15)",
          }}
        />

        {/* Progress line */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: "2px",
            transform: "translateX(-50%)",
            bgcolor: "#00dc82",
            transition: "height 0.3s ease",
            height: `${((activeIndex + 1) / WORKFLOW.length) * 100}%`,
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: "7rem" }}>
          {WORKFLOW.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isActive = index === activeIndex;

            return (
              <Box
                key={item.step}
                ref={(el: HTMLDivElement | null) => {
                  refs.current[index] = el;
                }}
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                }}
              >
                {/* Center dot */}
                {/* <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    border: "2px solid",
                    transition: "all 0.3s ease",
                    ...(isActive
                      ? {
                          bgcolor: "#00dc82",
                          borderColor: "#00dc82",
                          boxShadow: "0 0 20px rgba(0,220,130,0.6)",
                          transform: "translateX(-50%) scale(1.25)",
                        }
                      : {
                          bgcolor: "#090d1f",
                          borderColor: "rgba(0,220,130,0.3)",
                        }),
                  }}
                /> */}
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    border: "2px solid",
                    transition: "all 0.3s ease",

                    transform: isActive
                      ? "translateX(-50%) scale(1.25)"
                      : "translateX(-50%)",

                    bgcolor: isActive ? "#00dc82" : "#090d1f",

                    borderColor: isActive ? "#00dc82" : "rgba(0,220,130,0.3)",

                    boxShadow: isActive
                      ? "0 0 20px rgba(0,220,130,0.6)"
                      : "none",
                  }}
                />

                {/* Card */}
                <Box
                  sx={{
                    width: { xs: "100%", md: "45%" },
                    transition: "all 0.5s ease",
                    opacity: isActive ? 1 : 0.4,
                    transform: isActive ? "scale(1)" : "scale(0.95)",
                  }}
                >
                  <WorkflowCard
                    step={item.step}
                    title={item.title}
                    description={item.description}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
