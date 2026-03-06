"use client"

import { motion } from "framer-motion"

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
  return (
    <section className="bg-[#0d0d11] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Intro */}
        <div className="py-32 text-center">
          <h2 className="text-sm tracking-widest text-yellow-500 mb-6">
            SELECTED WORK
          </h2>
          <h3 className="text-4xl md:text-6xl font-light leading-tight">
            Crafted with precision. <br /> Built for scale.
          </h3>
        </div>

        {projects.map((project) => (
          <div
            key={project.id}
            className="min-h-screen flex flex-col justify-center py-24 border-t border-white/5"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* LEFT CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-yellow-500 text-sm tracking-widest">
                  {project.id}
                </span>

                <h3 className="text-5xl md:text-6xl font-light mt-4 mb-6">
                  {project.name}
                </h3>

                <p className="text-lg text-white/70 mb-8 max-w-md">
                  {project.statement}
                </p>

                <div className="text-sm text-white/50 space-y-2 mb-8">
                  <p>{project.role}</p>
                  <p>{project.focus}</p>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block border border-white/20 px-6 py-3 text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-500"
                >
                  Visit Live Site →
                </a>
              </motion.div>

              {/* RIGHT VISUAL */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative flex justify-center"
              >
                <div className="relative">

                  {/* Desktop Mockup */}
                  <img
                    src={project.desktop}
                    alt={`${project.name} desktop view`}
                    className="rounded-xl shadow-2xl w-[600px]"
                  />

                  {/* Mobile Floating */}
                  <img
                    src={project.mobile}
                    alt={`${project.name} mobile view`}
                    className="absolute -bottom-10 -right-35 w-[180px] rounded-2xl shadow-2xl border border-white/10"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}