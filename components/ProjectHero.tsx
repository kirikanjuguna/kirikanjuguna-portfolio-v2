"use client"

import { motion } from "framer-motion"

export default function ProjectHero({
  title,
  tagline,
  desktop,
  mobile
}:{
  title:string
  tagline:string
  desktop:string
  mobile:string
}){

  return(

    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      <div className="absolute w-[600px] h-[600px] bg-yellow-500/10 blur-[160px] rounded-full"/>

      <motion.h1
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:.8 }}
        className="text-5xl md:text-7xl font-light mb-6 relative"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity:0, y:30 }}
        animate={{ opacity:1, y:0 }}
        transition={{ delay:.2, duration:.8 }}
        className="text-xl text-white/60 max-w-2xl relative mb-20"
      >
        {tagline}
      </motion.p>

      <motion.div
        initial={{ opacity:0, scale:.95 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ duration:.8 }}
        className="relative"
      >

        <img
          src={desktop}
          className="rounded-xl shadow-2xl w-[900px]"
        />

        <img
          src={mobile}
          className="absolute -bottom-12 -right-20 w-[220px] rounded-2xl shadow-2xl border border-white/10"
        />

      </motion.div>

    </section>

  )
}