'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Get device width
    const width = window.innerWidth

    // Set duration based on device type
    let duration = 2 // default for desktop

    if (width < 640) {
      // Mobile
      duration = 0
    } else if (width >= 640 && width < 1024) {
      // Tablet
      duration = 3
    } else {
      // Desktop
      duration = 2
    }

    const lenis = new Lenis({
      duration,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Disable middle-click auto-scroll
    const disableAutoScroll = (e: MouseEvent) => {
      if (e.button === 1) {
        e.preventDefault()
      }
    }

    document.addEventListener('mousedown', disableAutoScroll)

    return () => {
      lenis.destroy()
      document.removeEventListener('mousedown', disableAutoScroll)
    }
  }, [])

  return <>{children}</>
}
