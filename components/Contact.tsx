"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MessageCircle
} from "lucide-react"

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e:any) => {

    e.preventDefault()

    setSending(true)

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    })

    setSending(false)
    setSent(true)

    setForm({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <section
      data-theme="255, 140, 0"
      className="relative py-40 px-6 overflow-hidden"
    >

      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}

        <motion.h2
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
          className="text-4xl md:text-6xl font-light leading-tight mb-8"
        >
          Let’s build something <br />
          <span className="text-yellow-500">exceptional together.</span>
        </motion.h2>


        {/* Subtext */}

        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:0.2 }}
          viewport={{ once:true }}
          className="text-white/60 mb-16 max-w-xl mx-auto"
        >
          Have a project, idea, or opportunity? Send a message and I'll get back to you.
        </motion.p>


        {/* Contact Form */}

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
          className="space-y-6 mb-20"
        >

          <input
            required
            value={form.name}
            onChange={(e)=>setForm({...form,name:e.target.value})}
            type="text"
            placeholder="Your name"
            className="w-full bg-transparent border border-white/10 rounded-lg px-5 py-4 focus:outline-none focus:border-yellow-500 transition"
          />

          <input
            required
            value={form.email}
            onChange={(e)=>setForm({...form,email:e.target.value})}
            type="email"
            placeholder="Your email"
            className="w-full bg-transparent border border-white/10 rounded-lg px-5 py-4 focus:outline-none focus:border-yellow-500 transition"
          />

          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e)=>setForm({...form,message:e.target.value})}
            placeholder="Your message"
            className="w-full bg-transparent border border-white/10 rounded-lg px-5 py-4 focus:outline-none focus:border-yellow-500 transition"
          />

          <button
            type="submit"
            className="border border-white/20 px-8 py-4 rounded-lg text-sm tracking-wide hover:bg-yellow-500 hover:text-black transition-all duration-500"
          >
            {sending ? "Sending..." : sent ? "Message Sent ✓" : "Send Message"}
          </button>

        </motion.form>


        {/* Social Icons */}

        <div className="flex justify-center gap-10">

          <MagneticIcon link="https://github.com/kirikanjuguna">
            <Github size={28}/>
          </MagneticIcon>

          <MagneticIcon link="https://linkedin.com/in/edwin-k-njuguna">
            <Linkedin size={28}/>
          </MagneticIcon>

          <MagneticIcon link="https://instagram.com/nk._.edd">
            <Instagram size={28}/>
          </MagneticIcon>

          <MagneticIcon link="mailto:njugunakirika@gmail.com">
            <Mail size={28}/>
          </MagneticIcon>

          <MagneticIcon link="https://wa.me/254725043588">
            <MessageCircle size={28}/>
          </MagneticIcon>

        </div>

      </div>
    </section>
  )
}



function MagneticIcon({ children, link }: any) {

  const [position,setPosition] = useState({x:0,y:0})

  const handleMouseMove = (e:any)=>{
    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width/2
    const y = e.clientY - rect.top - rect.height/2

    setPosition({x:x*0.3,y:y*0.3})
  }

  const handleMouseLeave = ()=>{
    setPosition({x:0,y:0})
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{x:position.x,y:position.y}}
      className="text-white/70 hover:text-yellow-500 transition text-2xl"
    >
      {children}
    </motion.a>
  )
}