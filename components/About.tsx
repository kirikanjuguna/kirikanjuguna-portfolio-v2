"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
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
          {/* LEFT SIDE */}
          <div>
            <motion.p
              variants={fadeUp}
              className="text-sm uppercase tracking-widest text-[var(--gold)] mb-6"
            >
              About
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold leading-tight mb-10"
            >
              I build digital products
              <span className="block text-[var(--gold)]">
                with precision & restraint.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Focused on clarity, performance, and scalable architecture —
              creating software that feels effortless to use and
              intentional in every detail.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3"
            >
              {[
                "Next.js",
                "TypeScript",
                "React",
                "Node.js",
                "MongoDB",
              ].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:border-[var(--gold)] transition"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE – PURE DESIGN PANEL */}
          <motion.div
            variants={fadeUp}
            className="relative h-[420px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
          >
            {/* Subtle gradient accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,var(--gold),transparent_60%)] opacity-10" />

            {/* Minimal center line accent */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-px h-32 bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent opacity-40" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}