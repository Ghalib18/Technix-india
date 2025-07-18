import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import  './page.module.css';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BUZZTUBE - AI-Powered Thumbnails & Trend Detection",
  description:
    "Instantly generate and search thumbnails, automate content, detect outliers, and capture trending keywords with advanced AI technology.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>{children}</body>
    </html>
  )
}
