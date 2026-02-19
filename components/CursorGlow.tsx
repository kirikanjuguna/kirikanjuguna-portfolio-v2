"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 30 });

  const [color, setColor] = useState("255, 215, 0"); // default gold

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 350);
      mouseY.set(e.clientY - 350);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // SECTION COLOR DETECTION
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute("data-theme");
            if (theme) setColor(theme);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`
    radial-gradient(circle, rgba(${color}, 0.15) 0%, rgba(${color}, 0.08) 40%, transparent 70%)
  `;

  return (
    <>
      {/* Glow */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          background,
        }}
        className="fixed top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none z-0 blur-[120px]"
      />

      {/* Grain Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
          backgroundRepeat: "repeat",
        }}
      />
    </>
  );
}
