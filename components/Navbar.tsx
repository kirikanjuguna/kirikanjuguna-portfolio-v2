"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(link =>
        document.querySelector(link.href)
      );

      sections.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(navLinks[index].href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 flex justify-center pt-6">
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-[95%] max-w-6xl px-6 py-4 flex items-center justify-between rounded-2xl transition-all duration-500
          ${
            scrolled
              ? "bg-black/70 backdrop-blur-xl border border-white/10 shadow-xl"
              : "bg-transparent"
          }
        `}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl tracking-wide font-semibold relative"
        >
          <span className="text-white">Edwin</span>
          <span className="text-[var(--gold)] font-black">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 relative">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  active === link.href
                    ? "text-[var(--gold)]"
                    : "text-white/80 hover:text-yellow-400"
                }`}
              >
                {link.name}
              </Link>

              {/* Animated underline */}
              {active === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[var(--gold)] rounded-full"
                />
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-24 w-[95%] max-w-6xl bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl md:hidden p-6 space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-lg text-white/80 hover:text-[var(--gold)] transition"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
