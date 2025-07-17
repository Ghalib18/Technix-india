"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "How do the AI tools work?",
    answer:
      "Our AI tools use advanced machine learning algorithms trained on millions of high-performing content pieces. They analyze patterns, trends, and user behavior to provide data-driven recommendations for your content creation process.",
  },
  {
    id: 2,
    question: "Can I use these tools for multiple platforms?",
    answer:
      "Our tools are designed to work across all major platforms including YouTube, Instagram, Twitter, LinkedIn, and more. Each tool automatically adjusts recommendations based on platform-specific requirements and best practices.",
  },
  {
    id: 3,
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all our AI tools. No credit card required to start. You can explore all features and see the impact on your content performance before committing to a paid plan.",
  },
  {
    id: 4,
    question: "How accurate are the trending keyword predictions?",
    answer:
      "Our keyword predictions have a 92% accuracy rate based on historical data analysis. We use real-time data from multiple sources and advanced predictive modeling to identify trends before they peak, giving you a competitive advantage.",
  },
  {
    id: 5,
    question: "Can I integrate these tools with my existing workflow?",
    answer:
      "Yes! We offer API access and integrations with popular tools like Canva, Adobe Creative Suite, Hootsuite, and more. Our tools are designed to seamlessly fit into your existing content creation and publishing workflow.",
  },
  {
    id: 6,
    question: "What kind of support do you provide?",
    answer:
      "We provide 24/7 customer support through live chat, email, and phone. Plus, we offer comprehensive tutorials, webinars, and a community forum where you can connect with other creators and share best practices.",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our AI tools and how they can help you
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                duration: 0.6,
                delay: faq.id * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden group"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</h3>
                <motion.div
                  animate={{
                    rotate: openItems.includes(faq.id) ? 180 : 0,
                    scale: openItems.includes(faq.id) ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openItems.includes(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
