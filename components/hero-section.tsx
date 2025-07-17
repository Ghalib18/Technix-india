"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)

  // Track scroll progress for the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Transform scroll progress into 3D rotation values
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 75])
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -15])
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 5])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.8, 0.3])
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* 3D Tilting Container */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          rotateX,
          rotateY,
          rotateZ,
          scale,
          opacity,
          y,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
      >
        {/* Enhanced Hero Background with 3D Tilting Effect */}
        <div className="absolute inset-0 z-0" style={{ perspective: "800px" }}>
          {/* Main Background Image with Enhanced 3D Tilt and Parallax */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/hero-bg.jpeg')",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
            animate={{
              rotateX: [0, 8, -4, 2, 0],
              rotateY: [0, -6, 8, -3, 0],
              rotateZ: [0, 1, -1, 0.5, 0],
              scale: [1.05, 1.15, 1.08, 1.12, 1.05],
              x: [0, -25, 15, -10, 0],
              y: [0, -15, 10, -5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Additional 3D Layer for Enhanced Depth */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20"
            style={{
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateX: [0, -4, 6, -2, 0],
              rotateY: [0, 4, -5, 2, 0],
              scale: [1, 1.02, 0.98, 1.01, 1],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Animated Morphing Overlay */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(0,0,0,0.4) 0%, rgba(88,28,135,0.6) 30%, rgba(127,29,29,0.8) 70%, rgba(0,0,0,0.9) 100%)",
                "radial-gradient(circle at 80% 20%, rgba(0,0,0,0.3) 0%, rgba(147,51,234,0.5) 25%, rgba(220,38,38,0.7) 60%, rgba(0,0,0,0.8) 100%)",
                "radial-gradient(circle at 40% 80%, rgba(0,0,0,0.5) 0%, rgba(168,85,247,0.4) 35%, rgba(239,68,68,0.6) 65%, rgba(0,0,0,0.9) 100%)",
                "radial-gradient(circle at 20% 50%, rgba(0,0,0,0.4) 0%, rgba(88,28,135,0.6) 30%, rgba(127,29,29,0.8) 70%, rgba(0,0,0,0.9) 100%)",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Dynamic Light Rays */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(239,68,68,0.3) 45deg, transparent 90deg, rgba(168,85,247,0.2) 135deg, transparent 180deg, rgba(34,197,94,0.2) 225deg, transparent 270deg, rgba(239,68,68,0.3) 315deg, transparent 360deg)",
                "conic-gradient(from 90deg at 50% 50%, transparent 0deg, rgba(239,68,68,0.3) 45deg, transparent 90deg, rgba(168,85,247,0.2) 135deg, transparent 180deg, rgba(34,197,94,0.2) 225deg, transparent 270deg, rgba(239,68,68,0.3) 315deg, transparent 360deg)",
                "conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(239,68,68,0.3) 45deg, transparent 90deg, rgba(168,85,247,0.2) 135deg, transparent 180deg, rgba(34,197,94,0.2) 225deg, transparent 270deg, rgba(239,68,68,0.3) 315deg, transparent 360deg)",
                "conic-gradient(from 270deg at 50% 50%, transparent 0deg, rgba(239,68,68,0.3) 45deg, transparent 90deg, rgba(168,85,247,0.2) 135deg, transparent 180deg, rgba(34,197,94,0.2) 225deg, transparent 270deg, rgba(239,68,68,0.3) 315deg, transparent 360deg)",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Enhanced Floating Particles with Different Sizes */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 ? "w-2 h-2 bg-red-400" : i % 3 === 1 ? "w-1 h-1 bg-pink-300" : "w-1.5 h-1.5 bg-purple-400"
              } opacity-60`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50 - Math.random() * 30, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.5, 0.5],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Pulsing Energy Waves */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(239,68,68,0.4) 0%, transparent 30%)",
                "radial-gradient(circle at 50% 50%, rgba(239,68,68,0.2) 0%, transparent 60%)",
                "radial-gradient(circle at 50% 50%, rgba(239,68,68,0.1) 0%, transparent 80%)",
                "radial-gradient(circle at 50% 50%, rgba(239,68,68,0.4) 0%, transparent 30%)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content with Refined Typography */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              className="w-28 h-28 bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl relative"
              animate={{
                boxShadow: [
                  "0 0 40px rgba(239, 68, 68, 0.6), 0 0 80px rgba(239, 68, 68, 0.3)",
                  "0 0 60px rgba(239, 68, 68, 0.8), 0 0 120px rgba(239, 68, 68, 0.4)",
                  "0 0 40px rgba(239, 68, 68, 0.6), 0 0 80px rgba(239, 68, 68, 0.3)",
                ],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY },
              }}
            >
              <motion.span
                className="text-white font-black text-4xl drop-shadow-2xl"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.8)",
                    "0 0 40px rgba(255,255,255,1)",
                    "0 0 20px rgba(255,255,255,0.8)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                AI
              </motion.span>

              {/* Enhanced Orbiting Elements */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="absolute -top-3 -right-3 w-6 h-6 text-yellow-300 drop-shadow-lg" />
                <Zap className="absolute -bottom-3 -left-3 w-6 h-6 text-cyan-300 drop-shadow-lg" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Refined Typography - More Elegant Approach */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight"
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            <motion.span
              className="block text-white mb-4"
              style={{
                textShadow: "0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)",
              }}
              animate={{
                textShadow: [
                  "0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)",
                  "0 6px 16px rgba(0,0,0,0.9), 0 3px 6px rgba(0,0,0,0.7)",
                  "0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              Create Amazing Content
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-red-400 via-pink-500 via-red-500 to-pink-600 bg-clip-text text-transparent font-extrabold"
              style={{
                backgroundSize: "300% 100%",
                filter: "drop-shadow(0 4px 8px rgba(239, 68, 68, 0.3))",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              with AI Power
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
            style={{
              textShadow: "0 2px 8px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)",
            }}
          >
            Transform your creative workflow with our suite of powerful AI tools. Generate thumbnails, detect trends,
            and create engaging content effortlessly.
          </motion.p>

          {/* Enhanced Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <Link href="/dashboard">
              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 via-pink-600 to-red-700 hover:from-red-700 hover:via-pink-700 hover:to-red-800 text-white px-12 py-8 text-2xl font-black rounded-2xl shadow-2xl relative overflow-hidden group border-2 border-white/20"
                  style={{
                    boxShadow: "0 0 40px rgba(239, 68, 68, 0.5), 0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  <span className="relative z-10 flex items-center drop-shadow-lg">
                    Get Started
                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="ml-4 h-7 w-7" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
            </Link>

            <motion.div
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="px-12 py-8 text-2xl font-black rounded-2xl border-3 border-white/40 text-white hover:bg-white/15 backdrop-blur-md transition-all duration-300 group relative overflow-hidden bg-white/5"
                style={{
                  textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                  boxShadow: "0 0 30px rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-pink-500/30"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative z-10 flex items-center drop-shadow-lg">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Play className="mr-4 h-7 w-7" />
                  </motion.div>
                  Watch Demo
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-wrap justify-center gap-12 mt-20"
          >
            {[
              { label: "Active Users", value: "50K+" },
              { label: "Content Created", value: "1M+" },
              { label: "Time Saved", value: "10K hrs" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.15, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-black text-white mb-2"
                  style={{
                    textShadow: "0 0 20px rgba(239, 68, 68, 0.8), 0 4px 8px rgba(0,0,0,0.6)",
                  }}
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(239, 68, 68, 0.6), 0 4px 8px rgba(0,0,0,0.6)",
                      "0 0 30px rgba(239, 68, 68, 1), 0 4px 8px rgba(0,0,0,0.6)",
                      "0 0 20px rgba(239, 68, 68, 0.6), 0 4px 8px rgba(0,0,0,0.6)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.7 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/80 text-lg font-semibold drop-shadow-md">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-10 h-16 border-3 border-white/60 rounded-full flex justify-center relative backdrop-blur-sm"
            style={{
              boxShadow: "0 0 20px rgba(255,255,255,0.3)",
            }}
          >
            <motion.div
              className="w-3 h-6 bg-gradient-to-b from-red-400 to-pink-500 rounded-full mt-3"
              animate={{
                y: [0, 20, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
          <motion.p
            className="text-white/80 text-lg mt-4 font-bold drop-shadow-lg"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
          >
            Scroll to explore
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
