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
          className="grid md:grid-cols-2 gap-16 items-center"
        >

          {/* LEFT TEXT */}
          <div>
            <motion.p
              variants={fadeUp}
              className="text-sm uppercase tracking-widest text-[var(--gold)] mb-6"
            >
              About Me
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Crafting digital experiences that feel
              <span className="block text-[var(--gold)]">
                intentional & powerful.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              I'm a software engineer focused on building modern,
              scalable applications with beautiful user interfaces and
              strong architecture. I care deeply about performance,
              experience, and precision.
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
                "UI/UX Engineering",
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

          {/* RIGHT VISUAL */}
          <motion.div
            variants={fadeUp}
            className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--gold),transparent_60%)] opacity-20"
            />

            <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
              01
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
