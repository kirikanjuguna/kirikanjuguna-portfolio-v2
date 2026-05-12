"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiFigma,
  SiGit,
  SiGraphql,
} from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

type Project = {
  label: string;
  href: string;
  external?: boolean;
};

export default function Resume() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const scaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  // Traveler dot position
  const travelerY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="resume"
      ref={ref}
      className="relative py-32 px-6 text-white"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--gold)] opacity-[0.04] blur-3xl rounded-full" />
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Resume
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl">
            A journey of growth — from foundation to independence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Base line */}
          <div className="absolute left-4 top-0 w-[1px] h-full bg-gray-800" />

          {/* Active progress line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 top-0 w-[2px] h-full bg-[var(--gold)] origin-top"
          />

        {/* Traveler dot */}
        <motion.div
          style={{ top: travelerY }}
          className="absolute left-4 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--gold)] blur-[1px] shadow-[0_0_25px_var(--gold)]"
        />

          <div className="space-y-28 pl-16">
            <TimelineItem
              activateAt={0.15}
              progress={smoothProgress}
              date="Sep 2019 — Oct 2023"
              title="BSc Applied Computer Technology"
              company="United States International University - Africa"
              description="Built a strong foundation in software engineering, algorithms, system design, and collaborative development."
              projects={[
                { label: "USIU Health Center System", href: "/projects/usiu-health" },
                { label: "Agmercado", href: "/projects/agmercado" },
                { label: "Edd Petshop", href: "/projects/edd-petshop" },
              ]}
              tech={[<SiReact />, <SiNodedotjs />, <SiMongodb />, <SiGit />]}
            />

            <TimelineItem
              activateAt={0.35}
              progress={smoothProgress}
              date="Jan 2023 — July 2023"
              title="Software Engineering Intern"
              company="Real Biz Digital"
              description="Worked in agile remote teams building responsive UI systems and strengthening frontend architecture."
              tech={[<SiReact />, <SiFigma />, <SiGit />]}
            />

            <TimelineItem
              activateAt={0.6}
              progress={smoothProgress}
              date="Aug 2023 — Dec 2025"
              title="Software Engineer"
              company="Outliers Marketing Ltd"
              description="Evolved into a full-stack engineer building corporate platforms and e-commerce systems."
              projects={[
                { label: "Aquosys Website", href: "https://aquosys.co.ke/", external: true },
                { label: "Del Pro Website", href: "/projects/del-pro" },
                { label: "Raleigh Motorbikes", href: "https://raleighmotorbikes.co.ke/", external: true },
                { label: "Kenstar E-Commerce", href: "/projects/kenstar" },
              ]}
              tech={[
                <SiReact />,
                <SiNextdotjs />,
                <SiTailwindcss />,
                <SiTypescript />,
                <SiNodedotjs />,
                <SiMongodb />,
                <SiGraphql />,
              ]}
            />

            <TimelineItem
              activateAt={0.85}
              progress={smoothProgress}
              date="Jan 2026 — Present"
              title="Independent Software Engineer"
              company="Freelance & Product Development"
              description="Building high-performance platforms for clients while developing independent software products."
              projects={[
                {
                  label: "Newsong Chapel Website",
                  href: "https://www.newsongchapel.org/",
                  external: true,
                },
              ]}
              tech={[
                <SiNextdotjs />,
                <SiReact />,
                <SiTailwindcss />,
                <SiTypescript />,
                <SiNodedotjs />,
                <SiMongodb />,
              ]}
            />
          </div>
        </div>

        {/* CV Button */}
        <div className="mt-28">
          <a
            href="/docs/edwin_cv.pdf"
            className="inline-block border border-[var(--gold)] px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[var(--gold)] hover:text-black transition duration-300"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  date,
  title,
  company,
  description,
  projects,
  tech,
  progress,
  activateAt,
}: {
  date: string;
  title: string;
  company: string;
  description: string;
  projects?: Project[];
  tech?: React.ReactNode[];
  progress: MotionValue<number>;
  activateAt: number;
}) {
  const activation = useTransform(
    progress,
    [activateAt - 0.08, activateAt],
    [0, 1]
  );

  const opacity = useTransform(activation, [0, 1], [0.4, 1]);
  const y = useTransform(activation, [0, 1], [30, 0]);
  const scale = useTransform(activation, [0, 1], [0.8, 1.4]);

  return (
    <motion.div style={{ opacity, y }} className="relative">
      {/* Node */}
      <motion.div
        style={{ scale }}
        className="absolute -left-[36px] top-2 w-4 h-4 rounded-full bg-[var(--gold)] shadow-[0_0_20px_var(--gold)]"
      />

      <span className="text-sm text-gray-500">{date}</span>

      <h3 className="text-2xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-400">{company}</p>

      <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
        {description}
      </p>

      {projects && (
        <ul className="mt-4 space-y-3 text-gray-300">
          {projects.map((project, i) => (
            <li key={i} className="flex items-center gap-2 text-sm group">
              <FaGlobe className="text-[var(--gold)] text-xs" />

              {project.external ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block transition duration-300 group-hover:text-[var(--gold)]"
                >
                  {project.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  href={project.href}
                  className="relative inline-block transition duration-300 group-hover:text-[var(--gold)]"
                >
                  {project.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}

      {tech && (
        <div className="flex gap-5 mt-6 text-xl text-gray-500">
          {tech.map((Icon, i) => (
            <span key={i}>{Icon}</span>
          ))}
        </div>
      )}
    </motion.div>
  );
}