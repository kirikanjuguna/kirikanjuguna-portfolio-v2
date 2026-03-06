"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const projects = [
  {
    id: "01",
    name: "Kenstar",
    statement: "A scalable digital presence for a multi-category manufacturer.",
    role: "Frontend & Architecture",
    focus: "Performance • Structure • Scalability",
    desktop: "/projects/kenstar-desktop.webp",
    mobile: "/projects/kenstar-mobile.webp",
    link: "https://new-kenstar-b.vercel.app",
  },
  {
    id: "02",
    name: "Raleigh Motorbikes",
    statement: "Modernizing a legacy brand for the digital era.",
    role: "Full Stack Developer",
    focus: "UX • Performance • SEO",
    desktop: "/projects/raleigh-desktop.webp",
    mobile: "/projects/raleigh-mobile.webp",
    link: "https://raleighmotorbikes.co.ke/",
  },
]

export default function Projects() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  return (
    <section
      ref={ref}
      className="relative  text-white overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[var(--gold)] opacity-[0.04] blur-[220px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Intro */}
        <div className="py-32 text-center">
          <h2 className="text-xs tracking-[0.4em] text-[var(--gold)] mb-6">
            SELECTED WORK
          </h2>

          <h3 className="text-4xl md:text-6xl font-light leading-tight">
            Crafted with precision.
            <br />
            Built for scale.
          </h3>
        </div>

        {projects.map((project, index) => {
          const start = index / projects.length
          const end = (index + 1) / projects.length

          const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
          const y = useTransform(scrollYProgress, [start, end], [120, 0])
          const scale = useTransform(scrollYProgress, [start, end], [0.92, 1])

          const desktopY = useTransform(scrollYProgress, [start, end], [80, -80])
          const mobileY = useTransform(scrollYProgress, [start, end], [120, -120])

          return (
            <motion.div
              key={project.id}
              style={{ opacity, y, scale }}
              className="min-h-screen flex items-center border-t border-white/5"
            >
              <div className="grid md:grid-cols-2 gap-24 items-center w-full">

                {/* LEFT CONTENT */}
                <div>

                  <span className="text-[var(--gold)] text-xs tracking-[0.4em]">
                    {project.id}
                  </span>

                  <h3 className="text-5xl md:text-6xl font-light mt-4 mb-6 tracking-tight">
                    {project.name}
                  </h3>

                  <p className="text-lg text-white/70 mb-10 max-w-md leading-relaxed">
                    {project.statement}
                  </p>

                  <div className="text-sm text-white/50 space-y-2 mb-10">
                    <p>{project.role}</p>
                    <p>{project.focus}</p>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-block border border-white/20 px-7 py-3 text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-500"
                  >
                    Visit Live Site →
                  </a>

                </div>


                {/* RIGHT VISUAL */}
                <div className="relative flex justify-center">

                  <motion.div
                    style={{ y: desktopY }}
                    className="relative"
                  >
                    <Image
                      src={project.desktop}
                      alt={`${project.name} desktop`}
                      width={900}
                      height={600}
                      className="rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                    />
                  </motion.div>

                  <motion.div
                    style={{ y: mobileY }}
                    className="absolute bottom-[-40px] right-[-40px]"
                  >
                    <Image
                      src={project.mobile}
                      alt={`${project.name} mobile`}
                      width={200}
                      height={420}
                      className="rounded-2xl border border-white/10 shadow-2xl"
                    />
                  </motion.div>

                </div>

              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}