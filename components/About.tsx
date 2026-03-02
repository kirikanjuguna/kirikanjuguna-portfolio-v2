"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-32"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-20 items-center"
        >
          {/* LEFT CONTENT */}
          <div>
            <motion.p
              variants={fadeUp}
              className="text-sm uppercase tracking-widest text-[var(--gold)] mb-6"
            >
              About
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold leading-tight mb-8"
            >
              I design & engineer
              <span className="block text-[var(--gold)]">
                scalable digital systems.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg leading-relaxed mb-6"
            >
              I'm not just focused on writing code — I build structured,
              high-performance applications that are designed to scale,
              convert, and last.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg leading-relaxed mb-10"
            >
              From frontend architecture to backend logic, I approach
              software as a system — optimizing for clarity, performance,
              maintainability, and business impact.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3"
            >
              {[
                "Next.js Architecture",
                "TypeScript Systems",
                "Performance Optimization",
                "Scalable APIs",
                "UI Engineering",
                "Clean Code Principles",
              ].map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:border-[var(--gold)] transition"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT AUTHORITY CARD */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 overflow-hidden"
          >
            {/* Subtle gold gradient accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--gold),transparent_60%)] opacity-10" />

            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Engineering Philosophy
                </h3>
                <p className="text-gray-400">
                  Build less. Build better. Build for scale.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold mb-2">
                  What I Optimize For
                </h3>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• Performance & Speed</li>
                  <li>• Clean Architecture</li>
                  <li>• Scalable Structure</li>
                  <li>• Business Impact</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold mb-2">
                  Focus
                </h3>
                <p className="text-gray-400 text-sm">
                  Revenue-driven web platforms, SaaS systems, and
                  conversion-focused digital experiences.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}