"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity:0, y:50 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.8 }}
      className="py-20 text-center text-sm text-white/40 border-t border-white/5"
    >
      © {new Date().getFullYear()} Kirika Njuguna  
      <br />
      Built with Next.js
    </motion.footer>
  )
}