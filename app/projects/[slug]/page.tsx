import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import Image from "next/image"

export default function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) return notFound()

  return (
    <main className="min-h-screen px-6 py-32 max-w-5xl mx-auto">

      <h1 className="text-5xl font-light mb-6">
        {project.title}
      </h1>

      <p className="text-white/60 mb-12">
        {project.description}
      </p>

      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={700}
        className="rounded-xl mb-16"
      />

      <section className="mb-16">
        <h2 className="text-2xl mb-4">Problem</h2>
        <p className="text-white/70">{project.problem}</p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl mb-4">Solution</h2>
        <p className="text-white/70">{project.solution}</p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl mb-4">Tech Stack</h2>

        <div className="flex gap-4 flex-wrap">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border border-white/10 px-4 py-2 rounded-lg text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <div className="flex gap-6">

        <a
          href={project.live}
          target="_blank"
          className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
        >
          Live Site
        </a>

        <a
          href={project.github}
          target="_blank"
          className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
        >
          GitHub
        </a>

      </div>

    </main>
  )
}