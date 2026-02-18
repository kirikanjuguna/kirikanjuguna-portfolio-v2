"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-[var(--gold)] mb-4"
          >
            HELLO!
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            I'm <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Edwin Kirika Njuguna
            </span>
            A Software Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-400 max-w-lg mb-8 text-lg"
          >
            Software Engineer building modern & World class software with clean UI,
            performance, and scalable architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex gap-4"
          >
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
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 bg-[var(--gold)] rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="relative z-10 border border-gray-800 bg-[#111] rounded-2xl p-8 shadow-2xl">
            <p className="text-gray-400 text-sm mb-2">Currently Working On</p>
            <h3 className="text-xl font-semibold mb-4">
              Scalable SaaS & Full-Stack Systems
            </h3>

            <div className="space-y-3 text-sm text-gray-500">
              <p>⚡ Next.js & TypeScript</p>
              <p>⚡ Node.js & MongoDB</p>
              <p>⚡ Cloud Deployment & APIs</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
