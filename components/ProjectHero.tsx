"use client"

import { motion } from "framer-motion"

export default function ProjectHero({
  title,
  tagline,
}: {
  title: string
  tagline: string
}) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-light mb-6"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-xl text-white/60 max-w-2xl"
      >
        {tagline}
      </motion.p>

    </section>
  )
}