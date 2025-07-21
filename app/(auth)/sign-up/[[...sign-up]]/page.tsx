"use client"

import styles from './page.module.css';
import dynamic from 'next/dynamic';
import { Suspense, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

// Dynamically import Clerk's SignUp to leverage built-in toggle functionality
const SignUp = dynamic(
  () => import('@clerk/nextjs').then((mod) => mod.SignUp),
  { ssr: false }
);

export default function AuthPage() {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleMute = () => {
    if (!iframeRef.current) return;
    const iframe = iframeRef.current;
    iframe.src = isMuted
      ? iframe.src.replace('&mute=1', '&mute=0')
      : iframe.src.replace('&mute=0', '&mute=1');
    setIsMuted(!isMuted);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className="min-h-screen flex flex-col lg:flex-row w-full">
        {/* Video + Feature Cards Panel */}
        <div className="flex flex-col w-full lg:w-1/2 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 p-6 md:p-8 xl:p-12">
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              AI‑Powered{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Thumbnails & Trend Detection
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
              Instantly generate and search thumbnails, automate content, detect outliers, and capture trending keywords with our advanced AI technology.
            </p>

            {/* Video */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black group">
              <iframe
                ref={iframeRef}
                src="https://www.youtube.com/embed/P7fFfwUvD1A?autoplay=1&mute=1&loop=1&playlist=P7fFfwUvD1A&controls=0&modestbranding=1"
                title="AI Thumbnails Demo"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              />
              <button
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                className="absolute bottom-4 left-4 bg-black/70 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <img src="/thumbnail.svg" alt="Thumbnail Generator" className="w-10 h-10 mb-2" />
                <span className="text-sm font-medium text-gray-700">Thumbnail Generator</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <img src="/search.svg" alt="Smart Search" className="w-10 h-10 mb-2" />
                <span className="text-sm font-medium text-gray-700">Smart Search</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <img src="/trend.svg" alt="Trend Detection" className="w-10 h-10 mb-2" />
                <span className="text-sm font-medium text-gray-700">Trend Detection</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <img src="/content.svg" alt="Content AI" className="w-10 h-10 mb-2" />
                <span className="text-sm font-medium text-gray-700">Content AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Auth Panel */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-6 bg-gray-50">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/buzztube-logo.png"
              alt="BuzzTube Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl shadow-lg"
            />
          </div>

          {/* Clerk Auth Form */}
          <div className="w-full max-w-md">
            <Suspense fallback={<div className="text-center text-gray-500">Loading...</div>}>
              <SignUp afterSignUpUrl="/dashboard" />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
