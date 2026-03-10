"use client"

import { useState } from "react"
import Image from "next/image"

export default function ProjectGallery({ images }: { images:string[] }) {

  const [active,setActive] = useState(images[0])

  return (

    <section className="max-w-7xl mx-auto px-6 mb-40">

      <h2 className="text-3xl font-light text-yellow-500 mb-12">
        Product Screens
      </h2>

      <div className="mb-10">

        <Image
          src={active}
          alt="Screenshot"
          width={1600}
          height={900}
          className="rounded-xl shadow-2xl"
        />

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {images.map((img)=>(
          <button
            key={img}
            onClick={()=>setActive(img)}
            className="opacity-70 hover:opacity-100 transition"
          >

            <Image
              src={img}
              alt="Screenshot"
              width={400}
              height={250}
              className="rounded-lg"
            />

          </button>
        ))}

      </div>

    </section>

  )
}