"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Sparkles, Search, TrendingUp, FileText, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AI_TOOL_GIFS } from "@/lib/gif-urls"

const aiTools = [
  {
    id: 1,
    title: "Thumbnail Generator",
    description:
      "Create eye-catching thumbnails that boost your click-through rates with AI-powered design suggestions.",
    icon: ImageIcon,
    color: "from-blue-500 to-purple-600",
    gif: AI_TOOL_GIFS.thumbnailGenerator,
    features: ["Auto-resize for platforms", "Brand consistency", "A/B testing"],
  },
  {
    id: 2,
    title: "Thumbnail Search",
    description: "Find the perfect thumbnail inspiration from millions of high-performing designs across platforms.",
    icon: Search,
    color: "from-green-500 to-teal-600",
    gif: AI_TOOL_GIFS.thumbnailSearch,
    features: ["Smart search filters", "Performance metrics", "Trend analysis"],
  },
  {
    id: 3,
    title: "Outlier Detection",
    description: "Identify content opportunities by detecting outliers and gaps in your niche market.",
    icon: TrendingUp,
    color: "from-orange-500 to-red-600",
    gif: AI_TOOL_GIFS.outlierDetection,
    features: ["Market gap analysis", "Competitor insights", "Opportunity scoring"],
  },
  {
    id: 4,
    title: "Content Generator",
    description: "Generate engaging content ideas, scripts, and descriptions tailored to your audience.",
    icon: FileText,
    color: "from-purple-500 to-pink-600",
    gif: AI_TOOL_GIFS.contentGenerator,
    features: ["Multi-format content", "SEO optimization", "Brand voice matching"],
  },
  {
    id: 5,
    title: "Trending Keywords",
    description: "Discover trending keywords and hashtags to maximize your content reach and engagement.",
    icon: Sparkles,
    color: "from-cyan-500 to-blue-600",
    gif: AI_TOOL_GIFS.trendingKeywords,
    features: ["Real-time trends", "Keyword difficulty", "Search volume data"],
  },
]

export function AIToolsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aiTools.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % aiTools.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + aiTools.length) % aiTools.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const CurrentIcon = aiTools[currentIndex].icon
  const CurrentTitle = aiTools[currentIndex].title
  const CurrentDescription = aiTools[currentIndex].description
  const CurrentFeatures = aiTools[currentIndex].features
  const CurrentGif = aiTools[currentIndex].gif || "/placeholder.svg"

  return (
    <section id="tools" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Powerful AI Tools</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our suite of AI-powered tools designed to supercharge your content creation
          </p>
        </motion.div>

        <div
          className="relative max-w-6xl mx-auto group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300, rotateY: 45 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -300, rotateY: -45 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className={`bg-gradient-to-br ${aiTools[currentIndex].color} p-8 md:p-12 text-white min-h-[500px] flex flex-col md:flex-row items-center gap-8`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <CurrentIcon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-3xl md:text-4xl font-bold">{CurrentTitle}</h3>
                  </div>

                  <p className="text-lg md:text-xl opacity-90 leading-relaxed">{CurrentDescription}</p>

                  <ul className="space-y-2">
                    {CurrentFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/90">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10">Learn More →</span>
                    </Button>
                  </motion.div>
                </div>

                <div className="flex-1 max-w-md">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm">
                    <img
                      src={aiTools[currentIndex].gif || "/placeholder.svg"}
                      alt={`${aiTools[currentIndex].title} demo`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg hover:bg-white dark:hover:bg-gray-800 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg hover:bg-white dark:hover:bg-gray-800 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {aiTools.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-red-600 w-8"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
