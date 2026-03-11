"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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

    <section className="relative min-h-[80vh] md:min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      <div className="absolute w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-yellow-500/10 blur-[160px] md:blur-[180px] rounded-full"/>

      <motion.h1
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:.8 }}
        className="text-4xl md:text-7xl font-light mb-6 relative"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity:0, y:30 }}
        animate={{ opacity:1, y:0 }}
        transition={{ delay:.2, duration:.8 }}
        className="text-lg md:text-xl text-white/60 max-w-2xl relative mb-16 md:mb-20"
      >
        {tagline}
      </motion.p>

      <motion.div
        initial={{ opacity:0, scale:.95 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ duration:.8 }}
        className="relative"
      >

        <Image
          src={desktop}
          alt="desktop view"
          width={900}
          height={600}
          className="rounded-xl shadow-2xl w-[90vw] md:w-auto max-w-4xl"
        />

        <Image
          src={mobile}
          alt="mobile view"
          width={220}
          height={450}
          className="absolute -bottom-10 md:-bottom-12 -right-6 md:-right-20 rounded-2xl shadow-2xl border border-white/10 w-[120px] md:w-[220px]"
        />

      </motion.div>

    </section>
  )
}