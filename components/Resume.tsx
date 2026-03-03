"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiFigma,
  SiGit,
  SiGithub,
  SiGraphql,
} from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

export default function Resume() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="resume" className="relative py-32 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Resume
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl">
            A journey from student to software engineer — now building independently.
          </p>
        </motion.div>

        {/* Timeline Wrapper */}
        <div className="relative border-l border-[var(--gold)] pl-10 space-y-24">

          {/* FREELANCE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm text-gray-500">Jan 2026 — Present</span>
            <h3 className="text-2xl font-semibold mt-2">
              Freelance Software Engineer
            </h3>
            <p className="text-gray-400 mt-4 leading-relaxed max-w-2xl">
              Building high-performance web platforms for clients while
              developing independent software products focused on recurring
              revenue.
            </p>

            <div className="mt-4 flex items-center gap-3 text-gray-400 text-sm">
              <FaGlobe />
              <a
                href="https://www.newsongchapel.org/"
                target="_blank"
                className="hover:text-[var(--gold)] transition"
              >
                Newsong Chapel Website
              </a>
            </div>

            <div className="flex gap-5 mt-6 text-xl text-gray-400">
              <SiNextdotjs />
              <SiReact />
              <SiTailwindcss />
              <SiTypescript />
              <SiNodedotjs />
              <SiMongodb />
              <SiGit />
              <SiGithub />
            </div>
          </motion.div>

          {/* OUTLIERS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm text-gray-500">Aug 2023 — Dec 2025</span>
            <h3 className="text-2xl font-semibold mt-2">
              Software Engineer — Outliers Marketing Ltd
            </h3>
            <p className="text-gray-400 mt-4 leading-relaxed max-w-2xl">
              Joined as a frontend developer and evolved into a full-stack
              engineer. Built corporate websites, e-commerce platforms, and
              managed backend systems while contributing to design and digital
              marketing initiatives.
            </p>

            <div className="flex gap-5 mt-6 text-xl text-gray-400">
              <SiReact />
              <SiNextdotjs />
              <SiTailwindcss />
              <SiTypescript />
              <SiNodedotjs />
              <SiMongodb />
              <SiGraphql />
              <SiFigma />
            </div>
          </motion.div>

          {/* REAL BIZ */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm text-gray-500">Jan 2023 — July 2023</span>
            <h3 className="text-2xl font-semibold mt-2">
              Software Engineering Intern — Real Biz Digital
            </h3>
            <p className="text-gray-400 mt-4 leading-relaxed max-w-2xl">
              Designed and developed responsive web interfaces, collaborated in
              agile workflows, and strengthened UI/UX and version control
              expertise in a remote environment.
            </p>

            <div className="flex gap-5 mt-6 text-xl text-gray-400">
              <SiReact />
              <SiFigma />
              <SiGit />
              <SiGithub />
            </div>
          </motion.div>

          {/* USIU */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm text-gray-500">Sep 2019 — Oct 2023</span>
            <h3 className="text-2xl font-semibold mt-2">
              BSc Applied Computer Technology
            </h3>
            <p className="text-gray-400 mt-4 leading-relaxed max-w-2xl">
              Built a strong foundation in computer science and software
              engineering. Specialized in frontend development, algorithms,
              system design, and collaborative software development.
            </p>

            <div className="flex gap-5 mt-6 text-xl text-gray-400">
              <SiReact />
              <SiNodedotjs />
              <SiMongodb />
              <SiGit />
              <SiFigma />
            </div>
          </motion.div>
        </div>

        {/* CV Button */}
        <div className="mt-24">
          <a
            href="/Docs/Edwin cv.pdf"
            className="inline-block border border-[var(--gold)] px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[var(--gold)] hover:text-black transition duration-300"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
}