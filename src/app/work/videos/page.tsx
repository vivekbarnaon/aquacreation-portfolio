"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Play, Clock, CheckCircle2, Film } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import VideoModal from "@/components/portfolio/VideoModal";
import { FEATURED_VIDEOS, VIDEO_CATEGORIES } from "@/data/videos";
import { VideoEntry, VideoCategory } from "@/types/portfolio";
import { InstagramIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>("all");
  const [activeVideo, setActiveVideo] = useState<VideoEntry | null>(null);

  const filteredVideos = useMemo(() => {
    if (selectedCategory === "all") return FEATURED_VIDEOS;
    return FEATURED_VIDEOS.filter((video) => video.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="pt-28 pb-24 sm:pb-32 min-h-screen bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <SectionHeading
            badge="Video Portfolio"
            title="Cinematic"
            highlight="Motion Showcase"
            description="Explore our specialized video post-production across high-impact vertical reels, commercial promotional films, and narrative YouTube content."
          />
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-none gap-2">
          {VIDEO_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as VideoCategory)}
                className={cn(
                  "whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all border",
                  isSelected
                    ? "bg-royal-purple text-primary-white border-electric-violet shadow-lg shadow-royal-purple/30"
                    : "bg-dark-purple/40 text-secondary-text border-royal-purple/20 hover:text-primary-white hover:bg-dark-purple/80"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Video Frames Showcase */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => {
              const isVertical = video.aspectRatio === "9:16";
              return (
                <div
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-deep-black border border-royal-purple/30 hover:border-electric-violet/60 transition-all duration-300 shadow-xl shadow-black/80 flex flex-col justify-between"
                >
                  {/* Media Frame Section */}
                  <div
                    className={cn(
                      "relative w-full overflow-hidden bg-obsidian",
                      isVertical ? "aspect-[9/16] max-h-[520px]" : "aspect-video"
                    )}
                  >
                    <Image
                      src={video.posterUrl}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/30 to-transparent" />

                    {/* Frame Category Badge & Aspect Tag */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <Badge variant="violet" size="sm">
                        Category: {video.categoryLabel}
                      </Badge>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian/90 text-soft-lavender border border-royal-purple/40">
                        {video.aspectRatio}
                      </span>
                    </div>

                    {/* Play Button Trigger */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-royal-purple/80 border border-electric-violet text-primary-white flex items-center justify-center shadow-lg shadow-royal-purple/50 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-primary-white translate-x-0.5" />
                      </div>
                    </div>

                    {/* Status & Duration */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px]">
                      {video.instagramUrl ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-pink-600/30 to-amber-500/20 border border-pink-500/40 text-pink-300 font-semibold text-[10px]">
                          <InstagramIcon className="w-3 h-3 text-pink-400" />
                          <span>Instagram Reel</span>
                        </span>
                      ) : (
                        <Badge variant="obsidian" size="sm">
                          {video.status === "published" ? "Published Work" : "Sample Frame"}
                        </Badge>
                      )}
                      {video.duration && (
                        <span className="inline-flex items-center gap-1 text-secondary-text bg-obsidian/80 px-2 py-0.5 rounded border border-royal-purple/20">
                          <Clock className="w-3 h-3 text-electric-violet" />
                          <span>{video.duration}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Frame Metadata & Field Specification */}
                  <div className="p-6 space-y-4 bg-deep-black">
                    <div>
                      {/* Explicit Category & Field Name Mentions */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-violet" />
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-soft-lavender">
                          Category Field: {video.categoryLabel}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-primary-white group-hover:text-soft-lavender transition-colors">
                        {video.title}
                      </h3>
                    </div>

                    <p className="text-xs text-secondary-text leading-relaxed line-clamp-3">
                      {video.description}
                    </p>

                    {/* Field Highlights */}
                    {video.fieldHighlights && (
                      <div className="space-y-1.5 pt-2 border-t border-royal-purple/15">
                        {video.fieldHighlights.slice(0, 2).map((hl, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1.5 text-[11px] text-secondary-text/90"
                          >
                            <CheckCircle2 className="w-3 h-3 text-electric-violet shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Action */}
                    <div className="pt-3 flex items-center justify-between text-xs border-t border-royal-purple/15">
                      <span className="text-secondary-text/70 font-mono text-[11px]">
                        ID: {video.id}
                      </span>
                      <span className="font-semibold text-electric-violet group-hover:text-soft-lavender transition-colors">
                        Click to Inspect Frame →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Graceful Empty State for non-featured categories */
          <div className="text-center py-20 px-4 rounded-2xl bg-dark-purple/20 border border-royal-purple/20 space-y-4 max-w-xl mx-auto">
            <Film className="w-10 h-10 text-electric-violet mx-auto" />
            <h3 className="text-lg font-bold text-primary-white">
              Sample Coming Soon
            </h3>
            <p className="text-xs text-secondary-text leading-relaxed">
              New production samples for this specific category are currently being prepared. In the meantime, you can review our featured samples or request a custom showcase.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className="px-5 py-2 rounded-full bg-royal-purple/40 text-soft-lavender border border-royal-purple/60 hover:bg-royal-purple text-xs font-semibold transition-colors"
            >
              View All Featured Samples
            </button>
          </div>
        )}

        {/* Video Preview Modal */}
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      </div>
    </div>
  );
}
