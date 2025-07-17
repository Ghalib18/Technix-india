"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Content Creator",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "These AI tools have completely transformed my content creation process. I can now generate thumbnails in minutes instead of hours!",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "YouTube Creator",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The trending keywords tool helped me discover untapped niches. My views increased by 300% in just two months!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Digital Marketer",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Incredible suite of tools! The outlier detection feature gave me insights I never would have found manually.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Social Media Manager",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The content generator saves me hours every week. The quality is consistently high and matches our brand voice perfectly.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Blogger",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Amazing tools that actually work! The thumbnail search feature helped me understand what makes designs successful.",
  },
]

export function TestimonialsCarousel() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of creators who have transformed their workflow with our AI tools
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -100 * testimonials.length],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{ width: `${testimonials.length * 200}%` }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-80 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              animate={{
                y: [0, -5, 0],
              }}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.1,
                    }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
