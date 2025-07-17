import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ErrorBoundary } from "@/components/error-boundary"
import { CustomCursor } from "@/components/custom-cursor"
import { ClerkProvider } from '@clerk/nextjs'
import Provider from "./provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const inter = Inter({ 
  subsets: ["latin"] 
})

export const metadata: Metadata = {
  title: "AI Tools Hub - Create Amazing Content with AI",
  description:
    "Discover powerful AI tools for content creation, thumbnail generation, and more. Transform your creative workflow with cutting-edge AI technology.",
  keywords: "AI tools, content creation, thumbnail generator, AI video, trending keywords",
  openGraph: {
    title: "AI Tools Hub - Create Amazing Content with AI",
    description: "Discover powerful AI tools for content creation, thumbnail generation, and more.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
        >
          <Provider>
            <ThemeProvider 
              attribute="class" 
              defaultTheme="light" 
              enableSystem 
              disableTransitionOnChange
            >
              <ErrorBoundary>
                <CustomCursor />
                {children}
              </ErrorBoundary>
            </ThemeProvider>
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  )
}

