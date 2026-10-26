"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowUpRight, Film, Camera, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoModal from "@/components/portfolio/VideoModal";
import PhotoLightbox from "@/components/portfolio/PhotoLightbox";
import { FEATURED_VIDEOS } from "@/data/videos";
import { PHOTO_ITEMS } from "@/data/photos";
import { VideoEntry, PhotoEntry } from "@/types/portfolio";
import { InstagramIcon } from "@/components/ui/Icons";

export default function SelectedWork() {
  const [activeVideo, setActiveVideo] = useState<VideoEntry | null>(null);
  const [activePhoto, setActivePhoto] = useState<PhotoEntry | null>(null);

  // Take real video projects
  const walkStyleVideo = FEATURED_VIDEOS.find((v) => v.id === "fashion-walk-style-motion-reel") || FEATURED_VIDEOS[0];
  const runwayVideo = FEATURED_VIDEOS.find((v) => v.id === "fashion-show-walk-reel") || FEATURED_VIDEOS[1];
  const promoVideo = FEATURED_VIDEOS.find((v) => v.id === "ryan-clinic-promotional-film") || FEATURED_VIDEOS[2];
  const ytVideo = FEATURED_VIDEOS.find((v) => v.id === "youtube-editing-sample-03") || FEATURED_VIDEOS[3];
  const autoVideo = FEATURED_VIDEOS.find((v) => v.id === "promotional-video-sample-02") || FEATURED_VIDEOS[4];

  // Take real photo retouch and brown retouch frames
  const realRetouchPhoto = PHOTO_ITEMS.find((p) => p.id === "real-photo-retouch-01") || PHOTO_ITEMS[0];
  const brownPhoto = PHOTO_ITEMS.find((p) => p.category === "brown") || PHOTO_ITEMS[1];
  const bridalPhoto = PHOTO_ITEMS.find((p) => p.category === "bridal") || PHOTO_ITEMS[2];

  return (
    <section id="selected-work" className="py-20 sm:py-28 relative bg-[#080605] border-t border-orange-950/40">
      {/* Subtle Ambient Radial Light */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-orange-950/40 pb-8">
          <SectionHeading
            align="left"
            badge="Curated Editorial Portfolio"
            title="Selected"
            highlight="Master Frames"
            description="Explore our specialized visual craft across vertical reels, commercial promotions, bridal edits, and high-end photo retouching."
          />

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/work/videos"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-amber-500/30 text-xs font-semibold text-stone-200 hover:text-white hover:border-amber-400 transition-all shadow-sm"
            >
              <Film className="w-3.5 h-3.5 text-amber-400" />
              <span>All Videos</span>
              <ArrowUpRight className="w-3 h-3 text-stone-400" />
            </Link>

            <Link
              href="/work/photos"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-amber-500/30 text-xs font-semibold text-stone-200 hover:text-white hover:border-amber-400 transition-all shadow-sm"
            >
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>All Photos</span>
              <ArrowUpRight className="w-3 h-3 text-stone-400" />
            </Link>
          </div>
        </div>

        {/* 1. FEATURED VIDEO FRAMES (Balanced Bento Grid with Natural Aspect Ratios) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#F59E0B]" />
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300">
                Featured Video Frames (With Field &amp; Category Specifications)
              </h3>
            </div>
            <span className="hidden sm:inline-block text-[11px] font-mono text-stone-400">
              9:16 Vertical Reels &bull; 16:9 Cinema Widescreen
            </span>
          </div>

          {/* Top Row: 3 High-Impact 9:16 Vertical Reels side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Box Frame 1: Fashion Walk — Slow Motion & Style Edit (Instagram Reel) */}
            <div
              onClick={() => setActiveVideo(walkStyleVideo)}
              className="group cursor-pointer relative aspect-[4/5] sm:aspect-[9/16] w-full rounded-2xl overflow-hidden bg-[#100C0A] border border-orange-950/60 hover:border-amber-400 transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(245,158,11,0.35)] hover:-translate-y-1 select-none flex flex-col justify-between p-3.5 sm:p-4"
            >
              {/* Background Full Bleed Poster Image */}
              <Image
                src={walkStyleVideo.posterUrl}
                alt={walkStyleVideo.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 360px"
              />

              {/* Atmospheric Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/40 group-hover:via-black/20 transition-colors pointer-events-none" />

              {/* Top Badges */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
                {walkStyleVideo.instagramUrl ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-pink-600/30 via-rose-500/25 to-amber-500/20 backdrop-blur-md border border-pink-500/50 text-pink-300 font-semibold tracking-wider text-[10px]">
                    <InstagramIcon className="w-3 h-3 text-pink-400" />
                    <span>INSTAGRAM REEL</span>
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-300 font-semibold tracking-wider uppercase">
                    {walkStyleVideo.categoryLabel}
                  </span>
                )}
                <span className="px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md border border-stone-800 text-stone-300 font-semibold">
                  RATIO 9:16
                </span>
              </div>

              {/* Center Glowing Play Button */}
              <div className="relative z-10 self-center flex items-center justify-center my-auto">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white flex items-center justify-center shadow-[0_0_25px_rgba(249,115,22,0.65)] group-hover:scale-115 transition-transform duration-300 border border-amber-200">
                  <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Frame Details */}
              <div className="relative z-10 space-y-1.5 pt-4">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                  Field: Fashion Walk &amp; Slow-Motion Edit
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors leading-tight">
                  {walkStyleVideo.title}
                </h4>
                <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                  {walkStyleVideo.description}
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px] font-semibold">
                  <span className="inline-flex items-center gap-1.5 text-pink-300 group-hover:text-pink-200 transition-colors">
                    <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                    <span>Watch Instagram Reel ▶</span>
                  </span>
                  <span className="font-mono text-stone-400 text-[10px]">{walkStyleVideo.duration}</span>
                </div>
              </div>
            </div>

            {/* Box Frame 2: Fashion Show Runway Walk (Instagram Reel) */}
            <div
              onClick={() => setActiveVideo(runwayVideo)}
              className="group cursor-pointer relative aspect-[4/5] sm:aspect-[9/16] w-full rounded-2xl overflow-hidden bg-[#100C0A] border border-orange-950/60 hover:border-amber-400 transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(245,158,11,0.35)] hover:-translate-y-1 select-none flex flex-col justify-between p-3.5 sm:p-4"
            >
              {/* Background Full Bleed Poster Image */}
              <Image
                src={runwayVideo.posterUrl}
                alt={runwayVideo.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 360px"
              />

              {/* Atmospheric Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/40 group-hover:via-black/20 transition-colors pointer-events-none" />

              {/* Top Badges */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
                {runwayVideo.instagramUrl ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-pink-600/30 via-rose-500/25 to-amber-500/20 backdrop-blur-md border border-pink-500/50 text-pink-300 font-semibold tracking-wider text-[10px]">
                    <InstagramIcon className="w-3 h-3 text-pink-400" />
                    <span>INSTAGRAM REEL</span>
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-300 font-semibold tracking-wider uppercase">
                    {runwayVideo.categoryLabel}
                  </span>
                )}
                <span className="px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md border border-stone-800 text-stone-300 font-semibold">
                  RATIO 9:16
                </span>
              </div>

              {/* Center Glowing Play Button */}
              <div className="relative z-10 self-center flex items-center justify-center my-auto">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white flex items-center justify-center shadow-[0_0_25px_rgba(249,115,22,0.65)] group-hover:scale-115 transition-transform duration-300 border border-amber-200">
                  <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Frame Details */}
              <div className="relative z-10 space-y-1.5 pt-4">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                  Field: Fashion Runway &amp; Model Walk
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors leading-tight">
                  {runwayVideo.title}
                </h4>
                <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                  {runwayVideo.description}
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px] font-semibold">
                  {runwayVideo.instagramUrl ? (
                    <span className="inline-flex items-center gap-1.5 text-pink-300 group-hover:text-pink-200 transition-colors">
                      <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                      <span>Watch Instagram Reel ▶</span>
                    </span>
                  ) : (
                    <span className="text-amber-400">Click to Play Reel</span>
                  )}
                  <span className="font-mono text-stone-400 text-[10px]">{runwayVideo.duration}</span>
                </div>
              </div>
            </div>

            {/* Box Frame 3: Ryan Clinic Commercial Promo (9:16 Vertical) */}
            <div
              onClick={() => setActiveVideo(promoVideo)}
              className="group cursor-pointer relative aspect-[4/5] sm:aspect-[9/16] w-full rounded-2xl overflow-hidden bg-[#100C0A] border border-orange-950/60 hover:border-amber-400 transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(245,158,11,0.35)] hover:-translate-y-1 select-none flex flex-col justify-between p-3.5 sm:p-4"
            >
              {/* Background Full Bleed Poster Image */}
              <Image
                src={promoVideo.posterUrl}
                alt={promoVideo.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 360px"
              />

              {/* Atmospheric Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/40 group-hover:via-black/20 transition-colors pointer-events-none" />

              {/* Top Badges */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
                <span className="px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-300 font-semibold tracking-wider uppercase">
                  {promoVideo.categoryLabel}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md border border-stone-800 text-stone-300 font-semibold">
                  RATIO 9:16
                </span>
              </div>

              {/* Center Glowing Play Button */}
              <div className="relative z-10 self-center flex items-center justify-center my-auto">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white flex items-center justify-center shadow-[0_0_25px_rgba(249,115,22,0.65)] group-hover:scale-115 transition-transform duration-300 border border-amber-200">
                  <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Frame Details */}
              <div className="relative z-10 space-y-1.5 pt-4">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                  Field: Commercial &amp; Healthcare Brand
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors leading-tight">
                  {promoVideo.title}
                </h4>
                <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                  {promoVideo.description}
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px] text-amber-400 font-semibold">
                  <span>Click to Play Reel</span>
                  <span className="font-mono text-stone-400 text-[10px]">{promoVideo.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 2 High-End 16:9 Widescreen Cinema Films side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Box Frame 4: YouTube Editing — Creator Suite (16:9 Widescreen) */}
            <div
              onClick={() => setActiveVideo(ytVideo)}
              className="group cursor-pointer relative aspect-video w-full rounded-2xl overflow-hidden bg-[#100C0A] border border-orange-950/60 hover:border-amber-400 transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(245,158,11,0.35)] hover:-translate-y-1 select-none flex flex-col justify-between p-4 sm:p-5"
            >
              <Image
                src={ytVideo.posterUrl}
                alt={ytVideo.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 640px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/40 group-hover:via-black/20 transition-colors pointer-events-none" />

              {/* Top Badges */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
                <span className="px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-300 font-semibold tracking-wider uppercase">
                  {ytVideo.categoryLabel}
                </span>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md border border-stone-800 text-stone-300">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{ytVideo.duration}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md border border-stone-800 text-amber-300 font-semibold">
                    RATIO 16:9
                  </span>
                </div>
              </div>

              {/* Center Glowing Play Button */}
              <div className="relative z-10 self-center flex items-center justify-center my-auto">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white flex items-center justify-center shadow-[0_0_25px_rgba(249,115,22,0.65)] group-hover:scale-115 transition-transform duration-300 border border-amber-200">
                  <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Frame Details */}
              <div className="relative z-10 space-y-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                  Field: YouTube Creator &amp; Retention Edit
                </span>
                <div className="flex items-center justify-between">
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {ytVideo.title}
                  </h4>
                  <span className="text-[11px] font-semibold text-amber-400 shrink-0 hidden sm:inline">
                    Click to Play ▶
                  </span>
                </div>
                <p className="text-xs text-stone-300 line-clamp-1">
                  {ytVideo.description}
                </p>
              </div>
            </div>

            {/* Box Frame 5: Automotive Cinema Commercial (16:9 Widescreen) */}
            <div
              onClick={() => setActiveVideo(autoVideo)}
              className="group cursor-pointer relative aspect-video w-full rounded-2xl overflow-hidden bg-[#100C0A] border border-orange-950/60 hover:border-amber-400 transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(245,158,11,0.35)] hover:-translate-y-1 select-none flex flex-col justify-between p-4 sm:p-5"
            >
              <Image
                src={autoVideo.posterUrl}
                alt={autoVideo.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 640px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/40 group-hover:via-black/20 transition-colors pointer-events-none" />

              {/* Top Badges */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
                <span className="px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-300 font-semibold tracking-wider uppercase">
                  {autoVideo.categoryLabel}
                </span>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md border border-stone-800 text-stone-300">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{autoVideo.duration}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md border border-stone-800 text-amber-300 font-semibold">
                    RATIO 16:9
                  </span>
                </div>
              </div>

              {/* Center Glowing Play Button */}
              <div className="relative z-10 self-center flex items-center justify-center my-auto">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white flex items-center justify-center shadow-[0_0_25px_rgba(249,115,22,0.65)] group-hover:scale-115 transition-transform duration-300 border border-amber-200">
                  <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Frame Details */}
              <div className="relative z-10 space-y-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                  Field: Automotive &amp; Commercial Cinema
                </span>
                <div className="flex items-center justify-between">
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {autoVideo.title}
                  </h4>
                  <span className="text-[11px] font-semibold text-amber-400 shrink-0 hidden sm:inline">
                    Click to Play ▶
                  </span>
                </div>
                <p className="text-xs text-stone-300 line-clamp-1">
                  {autoVideo.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. FEATURED PHOTO & RETOUCHING FRAMES */}
        <div className="space-y-6 pt-8 border-t border-orange-950/40">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#F59E0B]" />
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300">
              Featured Photo &amp; Retouching Frames (With Field &amp; Category Specifications)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Photo Box Frame 1: Real Studio Photo Retouch */}
            <div
              onClick={() => setActivePhoto(realRetouchPhoto)}
              className="group cursor-pointer relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#100C0A] border border-orange-950/60 hover:border-amber-400 transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(245,158,11,0.35)] hover:-translate-y-1 select-none flex flex-col justify-between p-3.5 sm:p-4"
            >
              <Image
                src={realRetouchPhoto.imageUrl}
                alt={realRetouchPhoto.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/30 group-hover:via-black/15 transition-colors pointer-events-none" />

              {/* Top Category Badge */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
                <span className="px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-300 font-semibold tracking-wider uppercase">
                  {realRetouchPhoto.categoryLabel}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md border border-stone-800 text-stone-300">
                  RATIO 3:4
                </span>
              </div>

              {/* Bottom Frame Details */}
              <div className="relative z-10 space-y-1 pt-4">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                  Field: Studio Photo Retouching
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                  {realRetouchPhoto.title}
                </h4>
                <p className="text-xs text-stone-300 line-clamp-1">
                  Non-destructive frequency separation &amp; organic pore preservation
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px] text-amber-400 font-semibold">
                  <span>View High-Res Master</span>
                  <span className="text-stone-400 text-[10px]">3264 × 2448</span>
                </div>
              </div>
            </div>

            {/* Photo Box Frame 2: Real Brown Retouch */}
            <div
              onClick={() => setActivePhoto(brownPhoto)}
              className="group cursor-pointer relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#100C0A] border border-orange-950/60 hover:border-amber-400 transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(245,158,11,0.35)] hover:-translate-y-1 select-none flex flex-col justify-between p-3.5 sm:p-4"
            >
              <Image
                src={brownPhoto.imageUrl}
                alt={brownPhoto.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/30 group-hover:via-black/15 transition-colors pointer-events-none" />

              {/* Top Category Badge */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
                <span className="px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-300 font-semibold tracking-wider uppercase">
                  {brownPhoto.categoryLabel}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md border border-stone-800 text-stone-300">
                  RATIO 3:4
                </span>
              </div>

              {/* Bottom Frame Details */}
              <div className="relative z-10 space-y-1 pt-4">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                  Field: Brown Retouch &amp; Warm Tones
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                  {brownPhoto.title}
                </h4>
                <p className="text-xs text-stone-300 line-clamp-1">
                  Earthy amber &amp; warm chocolate split-tone color grade
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px] text-amber-400 font-semibold">
                  <span>View High-Res Master</span>
                  <span className="text-stone-400 text-[10px]">Warm Aesthetic</span>
                </div>
              </div>
            </div>

            {/* Photo Box Frame 3: Cinematic Bridal Edits */}
            <div
              onClick={() => setActivePhoto(bridalPhoto)}
              className="group cursor-pointer relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#100C0A] border border-orange-950/60 hover:border-amber-400 transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(245,158,11,0.35)] hover:-translate-y-1 select-none flex flex-col justify-between p-3.5 sm:p-4"
            >
              <Image
                src={bridalPhoto.imageUrl}
                alt={bridalPhoto.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/30 group-hover:via-black/15 transition-colors pointer-events-none" />

              {/* Top Category Badge */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
                <span className="px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-300 font-semibold tracking-wider uppercase">
                  {bridalPhoto.categoryLabel}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md border border-stone-800 text-stone-300">
                  RATIO 3:4
                </span>
              </div>

              {/* Bottom Frame Details */}
              <div className="relative z-10 space-y-1 pt-4">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                  Field: Bridal &amp; Wedding Editorial
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                  {bridalPhoto.title}
                </h4>
                <p className="text-xs text-stone-300 line-clamp-1">
                  Intricate veil lace enhancement &amp; candlelight glow toning
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px] text-amber-400 font-semibold">
                  <span>View High-Res Master</span>
                  <span className="text-stone-400 text-[10px]">Bridal Fine Art</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Video Modal Preview */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />

      {/* Photo Lightbox */}
      <PhotoLightbox
        photo={activePhoto}
        onClose={() => setActivePhoto(null)}
        onNext={() => {}}
        onPrev={() => {}}
        hasNext={false}
        hasPrev={false}
      />
    </section>
  );
}
