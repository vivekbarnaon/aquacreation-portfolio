"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 bg-[#080605]">
      {/* 1. Ambient Volumetric Sunset Glows in Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Right Volumetric Ambient Dome */}
        <div className="absolute -top-10 -right-20 w-[400px] sm:w-[700px] lg:w-[900px] h-[400px] sm:h-[600px] lg:h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.22)_0%,rgba(234,88,12,0.14)_40%,transparent_70%)] blur-[70px] sm:blur-[90px] animate-glow-breathe" />
        
        {/* Subtle Bottom Horizon Warmth */}
        <div className="absolute -bottom-20 left-1/3 -translate-x-1/2 w-[500px] sm:w-[700px] h-[300px] sm:h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.16)_0%,transparent_70%)] blur-[80px] sm:blur-[100px]" />

        {/* Ambient Floating Dust Embers */}
        <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-amber-200 rounded-full shadow-[0_0_8px_#FDE68A] animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_12px_#FB923C] animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-amber-300 rounded-full shadow-[0_0_8px_#F59E0B]" />
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white/60 rounded-full shadow-[0_0_6px_#FFFFFF]" />
      </div>

      {/* 2. Flowing Animated Sunset Ribbon Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <svg
          viewBox="0 0 1600 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full object-cover animate-wave-float"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="heroRibbon1" x1="1600" y1="200" x2="0" y2="850" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#EA580C" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#FB923C" stopOpacity="0.75" />
              <stop offset="90%" stopColor="#EA580C" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7C2D12" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="heroRibbon2" x1="1600" y1="400" x2="0" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
              <stop offset="45%" stopColor="#EA580C" stopOpacity="0.5" />
              <stop offset="85%" stopColor="#C2410C" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#080605" stopOpacity="0" />
            </linearGradient>

            <filter id="ribbonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M 1600 280 C 1350 420, 1200 580, 1050 640 C 850 720, 600 750, 0 880 L 0 900 L 1600 900 Z"
            fill="url(#heroRibbon2)"
            opacity="0.12"
          />

          <path
            d="M 1600 360 C 1380 460, 1220 620, 1080 660 C 880 720, 650 760, 0 890"
            stroke="url(#heroRibbon2)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.45"
          />

          <path
            d="M 1600 240 C 1340 380, 1180 560, 1020 620 C 820 690, 520 740, 0 850"
            stroke="url(#heroRibbon1)"
            strokeWidth="3.2"
            filter="url(#ribbonGlow)"
            className="animate-ribbon-pulse"
          />

          <path
            d="M 1600 240 C 1340 380, 1180 560, 1020 620 C 820 690, 520 740, 0 850"
            stroke="#FDE68A"
            strokeWidth="1"
            opacity="0.85"
          />

          <path
            d="M 0 870 C 350 820, 700 810, 1100 860"
            stroke="#EA580C"
            strokeWidth="1.2"
            opacity="0.28"
          />
        </svg>
      </div>

      {/* 3. Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Category Kicker, Headline, Copy, CTAs, Bottom Metrics */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7">
            
            {/* Top Subtitle Kicker: VIDEO • PHOTO • CREATIVE • STORYTELLING */}
            <div className="text-[10px] sm:text-xs md:text-sm tracking-[0.16em] sm:tracking-[0.28em] md:tracking-[0.32em] uppercase text-stone-400 font-semibold select-none">
              VIDEO &nbsp;•&nbsp; PHOTO &nbsp;•&nbsp; CREATIVE &nbsp;•&nbsp; STORYTELLING
            </div>

            {/* Main Headline matching mockup */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05]">
              <span className="text-white block">Your Vision.</span>
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent block mt-1">
                Our Creativity.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-lg md:text-xl text-stone-300 max-w-xl font-normal leading-relaxed">
              Crafting cinematic visuals, powerful edits, and unforgettable creative experiences.
            </p>

            {/* Action Buttons: Responsive for Phone & Tablet */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1 sm:pt-2">
              {/* Primary CTA */}
              <Link
                href="#selected-work"
                className="group relative inline-flex items-center justify-center gap-3.5 pl-2.5 pr-6 py-2.5 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white font-semibold text-sm sm:text-base shadow-[0_0_35px_rgba(249,115,22,0.5)] hover:shadow-[0_0_50px_rgba(245,158,11,0.7)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 border border-amber-300/40 text-center"
              >
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/95 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform shadow-inner border border-amber-500/30 shrink-0">
                  <Play className="w-4 h-4 fill-amber-400 text-amber-400 translate-x-0.5" />
                </span>
                <span className="tracking-tight">Explore Our Work</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-full text-sm sm:text-base font-medium text-stone-200 hover:text-white bg-black/40 hover:bg-stone-900/70 border border-stone-700/80 hover:border-amber-500/60 transition-all duration-300 backdrop-blur-sm text-center"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Bottom 3 Columns Metrics with Responsive Grid */}
            <div className="pt-6 sm:pt-8 border-t border-stone-900/60 grid grid-cols-3 gap-2 sm:gap-6 max-w-xl">
              {/* Metric 1 */}
              <div className="space-y-0.5 sm:space-y-1">
                <div className="text-[9px] sm:text-xs tracking-wider uppercase text-stone-400 font-semibold truncate">
                  CREATIVE EDITS
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-none">
                  ∞
                </div>
                <div className="text-[8px] sm:text-[10px] md:text-xs tracking-wider uppercase text-stone-400 font-medium line-clamp-1">
                  ENDLESS POSSIBILITIES
                </div>
              </div>

              {/* Metric 2 */}
              <div className="space-y-0.5 sm:space-y-1 border-l border-stone-800/80 pl-2.5 sm:pl-6">
                <div className="text-[9px] sm:text-xs tracking-wider uppercase text-stone-400 font-semibold truncate">
                  CREATIVE
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-400 tracking-tight leading-none">
                  100%
                </div>
                <div className="text-[8px] sm:text-[10px] md:text-xs tracking-wider uppercase text-stone-400 font-medium line-clamp-1">
                  DEDICATION TO QUALITY
                </div>
              </div>

              {/* Metric 3 */}
              <div className="space-y-0.5 sm:space-y-1 border-l border-stone-800/80 pl-2.5 sm:pl-6">
                <div className="text-[9px] sm:text-xs tracking-wider uppercase text-stone-400 font-semibold truncate">
                  VISUAL
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent tracking-tight leading-none">
                  STORIES
                </div>
                <div className="text-[8px] sm:text-[10px] md:text-xs tracking-wider uppercase text-stone-400 font-medium line-clamp-1">
                  THAT MATTER
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Handwriting Calligraphy "Every Frame Tells a Story" */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end select-none relative pt-6 lg:pt-0">
            <div className="relative font-script text-amber-300/90 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl select-none leading-[1.08] drop-shadow-[0_0_28px_rgba(245,158,11,0.5)] -rotate-6 transform-gpu hover:rotate-[-2deg] transition-transform duration-500 text-center lg:text-right px-4 sm:px-6">
              <span className="block text-amber-200">Every</span>
              <span className="block text-amber-300 translate-x-1 sm:translate-x-2 lg:translate-x-0">Frame</span>
              <span className="block text-amber-400 translate-x-2 sm:translate-x-3 lg:translate-x-0">Tells a</span>
              <span className="block text-orange-400 translate-x-3 sm:translate-x-4 lg:translate-x-0">Story</span>
              
              {/* Golden Accent Underline Dash beneath "Story" */}
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 shadow-[0_0_10px_#F59E0B] mx-auto lg:ml-auto lg:mr-1" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
