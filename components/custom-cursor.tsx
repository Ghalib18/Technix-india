"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  // Use motion values for smoother animation
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const cursorXDelayed = useMotionValue(0)
  const cursorYDelayed = useMotionValue(0)

  // Spring configurations for ultra-smooth movement
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
  const springConfigDelayed = { damping: 30, stiffness: 200, mass: 0.8 }

  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)
  const xDelayed = useSpring(cursorXDelayed, springConfigDelayed)
  const yDelayed = useSpring(cursorYDelayed, springConfigDelayed)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const newX = e.clientX
      const newY = e.clientY

      setMousePosition({ x: newX, y: newY })
      cursorX.set(newX - 6)
      cursorY.set(newY - 6)
      cursorXDelayed.set(newX - 20)
      cursorYDelayed.set(newY - 20)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea')
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [cursorX, cursorY, cursorXDelayed, cursorYDelayed])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x,
          y,
        }}
      >
        <motion.div
          className="w-3 h-3 bg-white rounded-full"
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
            opacity: isClicking ? 0.8 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      </motion.div>

      {/* Trailing cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: xDelayed,
          y: yDelayed,
        }}
      >
        <motion.div
          className="w-10 h-10 border-2 border-red-500/60 rounded-full"
          animate={{
            scale: isClicking ? 0.6 : isHovering ? 2.5 : 1,
            opacity: isClicking ? 0.4 : isHovering ? 0.8 : 0.6,
            borderColor: isHovering ? "rgba(239, 68, 68, 0.8)" : "rgba(239, 68, 68, 0.4)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        />
      </motion.div>

      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: xDelayed,
          y: yDelayed,
        }}
      >
        <motion.div
          className="w-16 h-16 border border-red-400/20 rounded-full"
          animate={{
            scale: isClicking ? 0.4 : isHovering ? 3 : 1.2,
            opacity: isClicking ? 0.2 : isHovering ? 0.4 : 0.2,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30,
          }}
        />
      </motion.div>
    </>
  )
}
