'use client'
import React, { useState } from "react"
import Image from "next/image"
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <nav className="w-full absolute top-0 md:top-5 lg:top-0 left-0 z-50 bg-transparent">
      <div className="max-w-[95%] mx-auto flex items-start justify-between px-5 py-6">
        <button
          className="relative w-10 h-10 flex justify-center items-center z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {/* Top Line */}
          <span
            className={`absolute w-8 md:w-12 h-0.5 transition-transform duration-300 origin-center 
      ${menuOpen ? "rotate-45 top-1/2 bg-white" : "top-2 bg-white shadow-lg"}`}
          />

          {/* Middle Line */}
          <span
            className={`absolute w-8 md:w-12 h-0.5 transition-opacity duration-300 origin-center 
      ${menuOpen ? "opacity-0 bg-white" : "top-1/2 bg-white shadow-lg"}`}
          />

          {/* Bottom Line */}
          <span
            className={`absolute w-8 md:w-12 h-0.5 transition-transform duration-300 origin-center 
      ${menuOpen ? "-rotate-45 top-1/2 bg-white" : "top-[2rem] bg-white shadow-lg"}`}
          />
        </button>


        {/* Center Logo */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={100}
            className="ml-12"
          />
        </div>

        {/* Contact Button */}
        <div className="flex justify-end z-50">
          <a
            href="#contact"
            className={`px-4 text-xs md:text-base py-2 rounded  transition ${menuOpen ? "backdrop-blur-lg bg-white text-[#9B177E] hover:bg-[#9B177E] hover:text-black rounded-3xl" : "backdrop-blur-lg bg-white/10 border border-white/30 rounded-3xl z-50 shadow-lg text-white hover:bg-[#9B177E]"}`}
          >
            Contact me
          </a>
        </div>
      </div>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 backdrop-blur-lg bg-[#9B177E]/60 border border-white/30 shadow-lg text-white flex flex-col justify-center items-center space-y-6 text-4xl md:text-6xl z-40"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Link href="/#" onClick={toggleMenu} className="hover:text-[black] anton-font">{'Home'}</Link>
            <Link href="/#products" onClick={toggleMenu} className="hover:text-[black] anton-font">{'Products'}</Link>
            <Link href="/#events" onClick={toggleMenu} className="hover:text-[black] anton-font">{'Events'}</Link>
            <Link href="/#contact" onClick={toggleMenu} className="hover:text-[black] anton-font">{'Contact'}</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
