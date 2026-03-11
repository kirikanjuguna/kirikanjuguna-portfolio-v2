"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import Image from "next/image"

type Feature = {
  title: string
  description: string
  image: string
  type?: "desktop" | "mobile"
}

export default function ProjectGallery({ features }: { features: Feature[] }) {

  const containerRef = useRef(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {

    const section = 1 / features.length
    const index = Math.min(
      features.length - 1,
      Math.floor(latest / section)
    )

    setActive(index)

  })

  return (

    <section
      ref={containerRef}
      className="relative max-w-[1400px] mx-auto px-6 mb-32 md:mb-48"
    >

      {/* INTRO */}

      <div className="max-w-3xl mb-20 md:mb-32">

        <h2 className="text-sm tracking-widest text-yellow-500 mb-6">
          PRODUCT EXPERIENCE
        </h2>

        <h3 className="text-3xl md:text-5xl font-light leading-tight">
          Built to solve real operational challenges.
        </h3>

      </div>


      {/* MOBILE LAYOUT */}

      <div className="md:hidden space-y-20">

        {features.map((feature) => (

          <div key={feature.title} className="space-y-6">

            <h3 className="text-2xl font-light text-yellow-500">
              {feature.title}
            </h3>

            <p className="text-white/70 leading-relaxed">
              {feature.description}
            </p>

            {feature.type === "mobile" ? (

              <Image
                src={feature.image}
                alt="Mobile screenshot"
                width={320}
                height={640}
                className="rounded-3xl shadow-2xl border border-white/10 mx-auto"
              />

            ) : (

              <Image
                src={feature.image}
                alt="Desktop screenshot"
                width={1200}
                height={800}
                className="rounded-2xl shadow-2xl border border-white/10"
              />

            )}

          </div>

        ))}

      </div>


      {/* DESKTOP LAYOUT */}

      <div className="hidden md:grid lg:grid-cols-2 gap-24">

        {/* LEFT TEXT */}

        <div className="space-y-48">

          {features.map((feature, i) => {

            const isActive = active === i

            return (

              <div
                key={feature.title}
                className="min-h-[65vh] flex flex-col justify-center"
              >

                <motion.h3
                  animate={{ opacity: isActive ? 1 : 0.35 }}
                  transition={{ duration: .4 }}
                  className="text-3xl font-light text-yellow-500 mb-6"
                >
                  {feature.title}
                </motion.h3>

                <motion.p
                  animate={{ opacity: isActive ? 1 : 0.35 }}
                  transition={{ duration: .4 }}
                  className="text-lg text-white/70 max-w-md leading-relaxed"
                >
                  {feature.description}
                </motion.p>

              </div>

            )

          })}

        </div>


        {/* RIGHT IMAGE */}

        <div className="sticky top-28 h-fit">

          <div className="relative flex justify-center">

            <div className="absolute inset-0 bg-yellow-500/10 blur-[160px] rounded-full" />

            <motion.div
              key={features[active].image}
              initial={{ opacity:0, scale:.96 }}
              animate={{ opacity:1, scale:1 }}
              transition={{ duration:.5 }}
              className="relative"
            >

              {features[active].type === "mobile" ? (

                <Image
                  src={features[active].image}
                  alt="Mobile screenshot"
                  width={320}
                  height={640}
                  className="rounded-3xl shadow-2xl border border-white/10"
                />

              ) : (

                <Image
                  src={features[active].image}
                  alt="Desktop screenshot"
                  width={1800}
                  height={1100}
                  className="rounded-2xl shadow-2xl border border-white/10 w-[900px]"
                />

              )}

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  )
}