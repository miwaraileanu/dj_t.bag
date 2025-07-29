'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return

    // Parallax for background
    gsap.to(containerRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    // Parallax for text in opposite direction
    gsap.to(textRef.current, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <div className="relative min-h-[100vh] overflow-hidden bg-black">
      {/* Mask gradient for top and bottom */}
      <div
        style={{
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, transparent 20%, transparent 80%, black 100%)',
          maskImage:
            'linear-gradient(to bottom, black 0%, transparent 20%, transparent 80%, black 100%)',
        }}
        className="absolute inset-0 z-30 pointer-events-none bg-black"
      />

      {/* Background image */}
      <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/bgPics/HeroBg1.png"
          alt="Galaxy Layer"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Foreground content */}
      <div
        
        className="relative z-10 flex flex-col justify-center items-center min-h-screen overflow-hidden"
      >
        <div
          ref={textRef}
          className="absolute top-[35%] md:top-[20%] md:w-[90%] md:h-[90%] lg:w-[80%] lg:h-[80%] flex flex-col justify-center items-center text-center px-6 py-[3%]"
        >
          <h1 className="text-[6vh] font-bold md:text-[8vh] lg:text-[13vh] text-white uppercase drop-shadow-lg">
            Sound Equipment Hire
          </h1>
          <h2 className="text-[3vh] md:text-[5vh] lg:text-[6vh] text-white uppercase font-bold drop-shadow-lg mb-6">
            Audio / Visual Hire Specialists
          </h2>
          <div className="flex gap-4 flex-wrap mt-[5%] md:mt-[2%]">
            <Link href="/#products">
              <button className="text-[2vh] md:text-[3vh] px-6 py-2 rounded-3xl border backdrop-blur-lg bg-[#9B177E] hover:textblack text-white block text-center">
                Find More
              </button>
            </Link>
            <Link href="/#contact">
              <button className="text-[2vh] md:text-[3vh] px-6 py-2 hover:textblack hover:text-white block text-center backdrop-blur-lg bg-white/10 border border-white/30 rounded-3xl z-50 shadow-lg text-white hover:bg-[#9B177E]">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
