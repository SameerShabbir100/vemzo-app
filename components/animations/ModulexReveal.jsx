'use client'

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ModulexReveal({
  children,
  y = 80,
  duration = 1,
  delay = 0,
}) {
  const scope = useRef();

  useGSAP(
    () => {
      gsap.from(scope.current, {
        opacity: 0,
        y,
        duration,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: scope.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope },
  );

  return <div ref={scope}>{children}</div>;
}
