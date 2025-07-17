import { Suspense } from "react"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { AIToolsCarousel } from "@/components/ai-tools-carousel"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { UseCasesCarousel } from "@/components/use-cases-carousel"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { SkeletonLoader } from "@/components/skeleton-loader"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      <Suspense fallback={<SkeletonLoader />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<SkeletonLoader />}>
        <VideoSection />
      </Suspense>

      <Suspense fallback={<SkeletonLoader />}>
        <AIToolsCarousel />
      </Suspense>

      <Suspense fallback={<SkeletonLoader />}>
        <TestimonialsCarousel />
      </Suspense>

      <Suspense fallback={<SkeletonLoader />}>
        <UseCasesCarousel />
      </Suspense>

      <Suspense fallback={<SkeletonLoader />}>
        <FAQSection />
      </Suspense>

      <Footer />
    </main>
  )
}
