"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-wide">
          <span className="text-white">Edwin</span>
          <span className="text-[var(--gold)] font-black">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#about" className="hover:text-[var(--gold)] transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-[var(--gold)] transition">
            Projects
          </Link>
          <Link href="#blog" className="hover:text-[var(--gold)] transition">
            Blog
          </Link>
          <Link href="#contact" className="hover:text-[var(--gold)] transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md px-6 pb-6 space-y-4">
          <Link href="#about" className="block hover:text-[var(--gold)]">
            About
          </Link>
          <Link href="#projects" className="block hover:text-[var(--gold)]">
            Projects
          </Link>
          <Link href="#blog" className="block hover:text-[var(--gold)]">
            Blog
          </Link>
          <Link href="#contact" className="block hover:text-[var(--gold)]">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
