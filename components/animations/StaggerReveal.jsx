'use client'

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function StaggerReveal({
  children,
  selector = ".stagger-item",
  y = 60,
  duration = 1,
  stagger = 0.15,
  start = "top 80%",
  once = true,
}) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".stagger-item", containerRef.current);

      gsap.from(items, {
        opacity: 0,
        y,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          once: true,
        },
      });
    },
    { scope: containerRef },
  );

  return <div ref={containerRef}>{children}</div>;
}
