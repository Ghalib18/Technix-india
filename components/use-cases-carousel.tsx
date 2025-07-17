"use client"

import { motion } from "framer-motion"
import { Youtube, Instagram, Twitter, Linkedin, TrendingUp, Users } from "lucide-react"

const useCases = [
  {
    id: 1,
    title: "YouTube Creators",
    description:
      "Optimize thumbnails, find trending topics, and create engaging content that drives views and subscribers.",
    icon: Youtube,
    color: "bg-red-500",
    stats: "2M+ creators",
    features: ["Thumbnail A/B testing", "Trend analysis", "Content optimization"],
  },
  {
    id: 2,
    title: "Instagram Influencers",
    description: "Create scroll-stopping visuals and discover hashtags that boost your reach and engagement.",
    icon: Instagram,
    color: "bg-pink-500",
    stats: "500K+ influencers",
    features: ["Visual content creation", "Hashtag research", "Engagement optimization"],
  },
  {
    id: 3,
    title: "Twitter Marketers",
    description: "Craft viral tweets, identify trending topics, and optimize your content for maximum engagement.",
    icon: Twitter,
    color: "bg-blue-500",
    stats: "100K+ marketers",
    features: ["Tweet optimization", "Trend detection", "Engagement tracking"],
  },
  {
    id: 4,
    title: "LinkedIn Professionals",
    description: "Create professional content that builds authority and drives business growth.",
    icon: Linkedin,
    color: "bg-blue-600",
    stats: "250K+ professionals",
    features: ["Professional content", "Industry insights", "Network growth"],
  },
  {
    id: 5,
    title: "Digital Agencies",
    description: "Scale content creation for multiple clients with AI-powered tools and insights.",
    icon: TrendingUp,
    color: "bg-green-500",
    stats: "10K+ agencies",
    features: ["Multi-client management", "Scalable workflows", "Performance analytics"],
  },
  {
    id: 6,
    title: "Small Businesses",
    description: "Compete with larger brands by creating professional content without a big budget.",
    icon: Users,
    color: "bg-purple-500",
    stats: "50K+ businesses",
    features: ["Budget-friendly tools", "Professional results", "Easy-to-use interface"],
  },
]

export function UseCasesCarousel() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Perfect for Every Creator
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Whether you're a solo creator or managing multiple brands, our tools adapt to your needs
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -100 * useCases.length],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ width: `${useCases.length * 200}%` }}
        >
          {[...useCases, ...useCases].map((useCase, index) => (
            <motion.div
              key={`${useCase.id}-${index}`}
              className="flex-shrink-0 w-96 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${useCase.color} rounded-xl flex items-center justify-center`}>
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{useCase.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{useCase.stats}</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>

              <ul className="space-y-2">
                {useCase.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
