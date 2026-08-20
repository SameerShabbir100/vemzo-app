'use client'

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ClipReveal({ children }) {
  const scope = useRef();

  useGSAP(
    () => {
      gsap.from(scope.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: scope.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope },
  );

  return (
    <div
      ref={scope}
      style={{
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}
