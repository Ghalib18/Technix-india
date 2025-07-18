"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

export function VideoSection() {
  const [isMuted, setIsMuted] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Ensure YouTube iframe API is enabled
  useEffect(() => {
    const tag = document.createElement('script')
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName('script')[0]
    if (firstScriptTag && !document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }
  }, [])

  const toggleMute = () => {
    if (iframeRef.current?.contentWindow) {
      const command = isMuted ? 'unMute' : 'mute'
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      )
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">See AI Tools in Action</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Watch how our AI-powered tools can transform your content creation process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            <iframe
              ref={iframeRef}
              src="https://www.youtube.com/embed/P7fFfwUvD1A?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=P7fFfwUvD1A&controls=0&modestbranding=1"
              title="AI Tools Explainer Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? '🔇' : '🔊'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
