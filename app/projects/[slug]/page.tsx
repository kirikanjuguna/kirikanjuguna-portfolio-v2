import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import Image from "next/image"
import ProjectHero from "@/components/ProjectHero"

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

      {/* HERO */}
      <ProjectHero
        title={project.title}
        tagline={project.tagline}
      />

      {/* HERO IMAGE */}
      <section className="max-w-7xl mx-auto px-6 mb-40">

        <Image
          src={project.hero}
          alt={project.title}
          width={1600}
          height={900}
          className="rounded-2xl shadow-2xl"
        />

      </section>

      {/* PROBLEM */}
      <section className="max-w-4xl mx-auto px-6 mb-40">

        <h2 className="text-3xl font-light mb-6 text-yellow-500">
          The Problem
        </h2>

        <p className="text-lg text-white/70 leading-relaxed">
          {project.problem}
        </p>

      </section>

      {/* SOLUTION */}
      <section className="max-w-4xl mx-auto px-6 mb-40">

        <h2 className="text-3xl font-light mb-6 text-yellow-500">
          The Approach
        </h2>

        <p className="text-lg text-white/70 leading-relaxed">
          {project.solution}
        </p>

      </section>

      {/* SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6 mb-40">

        <Image
          src={project.image}
          alt={project.title}
          width={1600}
          height={900}
          className="rounded-xl shadow-2xl"
        />

      </section>

    </main>
  )
}