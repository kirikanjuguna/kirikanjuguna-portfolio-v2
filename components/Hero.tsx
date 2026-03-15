"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 200, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 200, damping: 25 });

useEffect(() => {
  let idleTimeout: NodeJS.Timeout;

  const moveEyes = (clientX: number, clientY: number) => {
    const { innerWidth, innerHeight } = window;

    const moveX = (clientX / innerWidth - 0.5) * 5;
    const moveY = (clientY / innerHeight - 0.5) * 5;

    x.set(moveX);
    y.set(moveY);
  };

  // 🖥️ Mouse tracking
  const handleMouseMove = (e: MouseEvent) => {
    moveEyes(e.clientX, e.clientY);
    resetIdle();
  };

  // 📱 Touch tracking
  const handleTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];
    moveEyes(touch.clientX, touch.clientY);
    resetIdle();
  };

  // 🌙 Idle animation
  const startIdle = () => {
    idleTimeout = setInterval(() => {
      const randomX = (Math.random() - 0.5) * 3;
      const randomY = (Math.random() - 0.5) * 3;

      x.set(randomX);
      y.set(randomY);
    }, 2000); // move every 2 seconds
  };

  const resetIdle = () => {
    clearInterval(idleTimeout);
    startIdle();
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("touchmove", handleTouchMove);

  startIdle();

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("touchmove", handleTouchMove);
    clearInterval(idleTimeout);
  };
}, [x, y]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-[var(--gold)] mb-4">
            HELLO!
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            I'm{" "}
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Edwin Kirika Njuguna
            </span>
            A Software Engineer
          </h1>

          <p className="text-gray-400 max-w-lg mb-8 text-lg">
            Building modern & World class software with clean UI,
            performance, and scalable architecture.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-[var(--gold)] text-black font-semibold rounded-lg hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 rounded-lg hover:border-[var(--gold)] hover:text-[var(--gold)] transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT AVATAR */}
        <div className="relative flex items-center justify-center order-first md:order-none mb-10 md:mb-0">

          {/* Glow */}
          <div className="absolute w-[420px] h-[420px] bg-[var(--gold)] rounded-full blur-3xl opacity-20" />

          <div className="relative z-10">

            {/* Avatar */}
            <Image
              src="/avatar.png"
              alt="Edwin Kirika Avatar"
              width={350}
              height={350}
              priority
              className="drop-shadow-2xl"
            />

            {/* LEFT PUPIL */}
            <motion.div
              className="absolute w-5 h-5 bg-black rounded-full"
              style={{
                top: "48.1%",     // 🔥 lowered from 39%
                left: "38%",    // 🔥 adjusted horizontally
                x: smoothX,
                y: smoothY,
              }}
            >
              <div className="w-2 h-2 bg-white rounded-full absolute top-[3px] left-[3px]" />
            </motion.div>

            {/* RIGHT PUPIL */}
            <motion.div
              className="absolute w-5 h-5 bg-black rounded-full"
              style={{
                top: "48%",
                left: "57.5%",
                x: smoothX,
                y: smoothY,
              }}
            >
              <div className="w-2 h-2 bg-white rounded-full absolute top-[3px] left-[3px]" />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
