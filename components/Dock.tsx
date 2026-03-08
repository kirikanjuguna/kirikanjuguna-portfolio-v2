"use client"

import { motion } from "framer-motion"
import { Home, User, Folder, Mail } from "lucide-react"
import { useEffect, useState } from "react"

const items = [
  { icon: Home, label: "Home", link: "#hero" },
  { icon: User, label: "About", link: "#about" },
  { icon: Folder, label: "Projects", link: "#projects" },
  { icon: Mail, label: "Contact", link: "#contact" },
]

export default function Dock() {

  const [active, setActive] = useState("")

  useEffect(() => {

    const handleScroll = () => {

      items.forEach((item) => {

        const section = document.querySelector(item.link)

        if (!section) return

        const rect = section.getBoundingClientRect()

        if (rect.top <= 200 && rect.bottom >= 200) {
          setActive(item.link)
        }

      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">

      <div className="flex gap-6 bg-black/50 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl">

        {items.map((item, i) => {

          const Icon = item.icon

          return (

            <motion.a
              key={i}
              href={item.link}
              whileHover={{ scale: 1.4 }}
              className="relative flex flex-col items-center text-white/70 hover:text-yellow-500 transition"
            >

              {/* Icon */}
              <Icon size={24} />

              {/* Tooltip */}
              <span className="absolute -top-8 text-xs opacity-0 group-hover:opacity-100">
                {item.label}
              </span>

              {/* Active indicator */}
              {active === item.link && (
                <motion.div
                  layoutId="dockIndicator"
                  className="absolute -bottom-3 w-1.5 h-1.5 bg-yellow-500 rounded-full"
                />
              )}

            </motion.a>

          )
        })}

      </div>

    </div>
  )
}