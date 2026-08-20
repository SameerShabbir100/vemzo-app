'use client'

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ParallaxImage({ children }) {
  const scope = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        scope.current,
        {
          scale: 1.1,
        },
        {
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scope.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    },
    { scope },
  );

  return <div ref={scope}>{children}</div>;
}
