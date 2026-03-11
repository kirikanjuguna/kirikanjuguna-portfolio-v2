import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import Link from "next/link"
import ProjectHero from "@/components/ProjectHero"
import ProjectGallery from "@/components/ProjectGallery"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound()

  return (
    <main className="bg-[#0d0d11] text-white">

      {/* BACK LINK */}

      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-16">

      <Link
        href="/#projects"
        className="group inline-flex items-center gap-2 text-white/50 hover:text-yellow-400 text-sm tracking-wide transition-all duration-300"
      >
        <span className="transform transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>
        Back to Projects
      </Link>

      </div>


      {/* HERO */}

      <ProjectHero
        title={project.title}
        tagline={project.tagline}
        desktop={project.desktop}
        mobile={project.mobile}
      />


      {/* OVERVIEW */}

      {project.overview && (
        <section className="max-w-4xl mx-auto px-6 mb-24 md:mb-40">

          <h2 className="text-2xl md:text-3xl font-light mb-6 text-yellow-500">
            Project Overview
          </h2>

          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            {project.overview}
          </p>

        </section>
      )}


      {/* PROBLEM */}

      <section className="max-w-4xl mx-auto px-6 mb-24 md:mb-40">

        <h2 className="text-2xl md:text-3xl font-light mb-6 text-yellow-500">
          The Problem
        </h2>

        <p className="text-base md:text-lg text-white/70 leading-relaxed">
          {project.problem}
        </p>

      </section>


      {/* SOLUTION */}

      <section className="max-w-4xl mx-auto px-6 mb-24 md:mb-40">

        <h2 className="text-2xl md:text-3xl font-light mb-6 text-yellow-500">
          The Approach
        </h2>

        <p className="text-base md:text-lg text-white/70 leading-relaxed">
          {project.solution}
        </p>

      </section>


      {/* FEATURES */}

      {project.features && (
        <ProjectGallery features={project.features} />
      )}


      {/* ENGINEERING */}

      {project.engineering && (
        <section className="max-w-4xl mx-auto px-6 mb-24 md:mb-40">

          <h2 className="text-2xl md:text-3xl font-light mb-8 text-yellow-500">
            Engineering Highlights
          </h2>

          <ul className="space-y-4 text-white/70">

            {project.engineering.map((item: string) => (
              <li key={item} className="border-l border-yellow-500 pl-4">
                {item}
              </li>
            ))}

          </ul>

        </section>
      )}


      {/* CHALLENGES */}

      {project.challenges && (
        <section className="max-w-4xl mx-auto px-6 mb-24 md:mb-40">

          <h2 className="text-2xl md:text-3xl font-light mb-8 text-yellow-500">
            Challenges & Lessons
          </h2>

          <ul className="space-y-4 text-white/70">

            {project.challenges.map((item: string) => (
              <li key={item} className="border-l border-white/20 pl-4">
                {item}
              </li>
            ))}

          </ul>

        </section>
      )}


      {/* TECH STACK */}

      {project.stack && (
        <section className="max-w-4xl mx-auto px-6 mb-24 md:mb-40">

          <h2 className="text-2xl md:text-3xl font-light mb-8 text-yellow-500">
            Technology
          </h2>

          <div className="flex flex-wrap gap-4">

            {project.stack.map((tech: string) => (
              <span
                key={tech}
                className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-white/70 hover:border-yellow-500 transition"
              >
                {tech}
              </span>
            ))}

          </div>

        </section>
      )}


      {/* LINKS */}

      <section className="text-center pb-24 md:pb-40">

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-white hover:text-black transition"
          >
            Visit Live Site
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-white hover:text-black transition"
            >
              View Code
            </a>
          )}

        </div>

      </section>

    </main>
  )
}