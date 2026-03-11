"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
{
  id: "01",
  slug: "kenstar",
  name: "Kenstar Plastics Web app",
  statement:
    "A full-stack product management platform built to manage a large manufacturing catalog with scalable architecture and secure admin tooling.",
  role: "Full-Stack Developer",
  focus: "Architecture • UI • Authentication • Product Systems",
  desktop: "/projects/kenstar-desktop.webp",
  mobile: "/projects/kenstar-mobile.webp",
  link: "https://new-kenstar-b.vercel.app",
},
  {
    id: "02",
    slug: "raleigh",
    name: "Raleigh Motorbikes",
    statement: "A high-performance digital showroom built to showcase motorcycle models and capture high-intent customer enquiries across East Africa.",
    role: "Full Stack Developer",
    focus: "UX • Performance • Product Systems",
    desktop: "/projects/raleigh-desktop.webp",
    mobile: "/projects/raleigh-mobile.webp",
    link: "https://raleighmotorbikes.co.ke/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0d0d11] text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* INTRO */}

        <div className="py-32 text-center">
          <h2 className="text-sm tracking-widest text-yellow-500 mb-6">
            SELECTED WORK
          </h2>

          <h3 className="text-4xl md:text-6xl font-light leading-tight">
            Crafted with precision. <br/> Built for scale.
          </h3>
        </div>

        {projects.map((project) => (
          <div
            key={project.id}
            className="min-h-screen flex flex-col justify-center py-24 border-t border-white/5"
          >

            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* LEFT */}

              <motion.div
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:.8 }}
                viewport={{ once:true }}
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

                <div className="flex gap-4">

                  <a
                    href={project.link}
                    target="_blank"
                    className="border border-white/20 px-6 py-3 text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-500"
                  >
                    Live Site
                  </a>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="border border-yellow-500 text-yellow-500 px-6 py-3 text-sm tracking-wide hover:bg-yellow-500 hover:text-black transition-all duration-500"
                  >
                    Case Study
                  </Link>

                </div>

              </motion.div>

              {/* RIGHT */}

              <motion.div
                initial={{ opacity:0, scale:.95 }}
                whileInView={{ opacity:1, scale:1 }}
                transition={{ duration:.8 }}
                viewport={{ once:true }}
                className="relative flex justify-center"
              >

                <motion.div
                  whileHover={{ y:-10 }}
                  transition={{ type:"spring", stiffness:200 }}
                  className="relative"
                >

                  <img
                    src={project.desktop}
                    alt={project.name}
                    className="rounded-xl shadow-2xl w-[600px]"
                  />

                  <img
                    src={project.mobile}
                    alt="mobile"
                    className="absolute -bottom-10 -right-24 w-[180px] rounded-2xl shadow-2xl border border-white/10"
                  />

                </motion.div>

              </motion.div>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}