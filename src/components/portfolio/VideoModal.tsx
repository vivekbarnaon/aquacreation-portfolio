"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, Play, Clock, CheckCircle2, Film, ExternalLink } from "lucide-react";
import { VideoEntry } from "@/types/portfolio";
import { InstagramIcon } from "@/components/ui/Icons";

interface VideoModalProps {
  video: VideoEntry | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (video) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [video, onClose]);

  if (!video || !mounted) return null;

  const isVertical = video.aspectRatio === "9:16";

  const getInstagramEmbedUrl = (url: string) => {
    const cleanUrl = url.split("?")[0].replace(/\/$/, "");
    return `${cleanUrl}/embed`;
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0D0A08] border border-amber-500/40 rounded-2xl shadow-2xl shadow-black overflow-hidden max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-amber-500/20 bg-[#140E0B]">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="p-2 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0">
              <Film className="w-4 h-4" />
            </span>
            <div className="min-w-0">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-amber-300 uppercase block truncate">
                Category: {video.categoryLabel}
              </span>
              <h3 id="video-modal-title" className="text-sm sm:text-lg font-bold text-white truncate">
                {video.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {video.instagramUrl && (
              <a
                href={video.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-600/20 via-rose-500/20 to-amber-500/20 hover:from-pink-600/40 hover:to-amber-500/40 border border-pink-500/40 text-pink-300 hover:text-white text-xs font-medium transition-all"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span className="hidden sm:inline">Instagram Reel</span>
                <ExternalLink className="w-3 h-3 text-stone-300" />
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-900 border border-stone-800 hover:border-amber-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-5 sm:space-y-6">
          {/* Media Frame Section */}
          <div className="relative rounded-xl overflow-hidden bg-black border border-amber-500/25 shadow-inner flex items-center justify-center">
            {video.instagramUrl ? (
              <div className="w-full flex flex-col items-center justify-center py-3 bg-[#0A0705]">
                <div className="w-full max-w-[340px] sm:max-w-[380px] h-[520px] sm:h-[600px] rounded-xl overflow-hidden shadow-2xl border border-amber-500/30 bg-black">
                  <iframe
                    src={getInstagramEmbedUrl(video.instagramUrl)}
                    className="w-full h-full border-0"
                    allowFullScreen
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title={video.title}
                  />
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={video.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:from-pink-500 hover:to-amber-400 text-white text-xs font-semibold shadow-lg shadow-pink-600/30 hover:scale-105 transition-all"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Watch &amp; Follow on Instagram ↗</span>
                  </a>
                </div>
              </div>
            ) : video.videoUrl ? (
              <video
                src={video.videoUrl}
                poster={video.posterUrl}
                controls
                autoPlay
                className={`w-full max-h-[48vh] sm:max-h-[58vh] object-contain ${isVertical ? "max-w-[280px] sm:max-w-xs mx-auto" : ""}`}
              />
            ) : (
              <div className={`relative w-full ${isVertical ? "aspect-[9/16] max-w-[280px] sm:max-w-xs mx-auto" : "aspect-video"}`}>
                <Image
                  src={video.posterUrl}
                  alt={video.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />

                {/* Atmospheric Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Designed 'Sample Preview' State */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-orange-600/50 mb-3 border border-amber-200">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5" />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold mb-2">
                    Sample Showcase Frame
                  </span>

                  <p className="text-xs text-stone-300 max-w-sm">
                    Full video master available upon portfolio review or consultation.
                  </p>
                </div>

                {/* Aspect Ratio & Duration Tags */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="px-2 py-0.5 rounded-md bg-black/85 text-amber-300 border border-amber-500/30 font-mono text-[10px]">
                    Ratio: {video.aspectRatio}
                  </span>
                  {video.duration && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/85 text-stone-300 border border-stone-800 text-[10px]">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{video.duration}</span>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Details & Field Category Specification */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <div className="md:col-span-2 space-y-4">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1">
                  Project Narrative &amp; Execution
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {video.description}
                </p>
              </div>

              {/* Field Highlights */}
              {video.fieldHighlights && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-2">
                    Discipline &amp; Field Breakdown
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {video.fieldHighlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-[#140E0B] border border-amber-500/20 text-xs text-stone-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>


            {/* Sidebar Metadata */}
            <div className="p-4 rounded-xl bg-[#140E0B] border border-amber-500/20 space-y-3.5 h-fit text-xs">
              <div>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">
                  Category Field
                </span>
                <span className="text-sm font-semibold text-white">
                  {video.categoryLabel}
                </span>
              </div>

              {video.client && (
                <div>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">
                    Project Type
                  </span>
                  <span className="text-xs font-medium text-amber-300">{video.client}</span>
                </div>
              )}

              {video.toolsUsed && (
                <div>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block mb-1.5">
                    Studio Pipeline
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {video.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] px-2 py-0.5 rounded bg-black/80 border border-stone-800 text-stone-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
