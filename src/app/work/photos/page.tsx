"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { CheckCircle2, Maximize2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import PhotoLightbox from "@/components/portfolio/PhotoLightbox";
import BeforeAfterSlider from "@/components/portfolio/BeforeAfterSlider";
import { PHOTO_ITEMS, PHOTO_CATEGORIES } from "@/data/photos";
import { PhotoCategory } from "@/types/portfolio";
import { cn } from "@/lib/utils";

export default function PhotosPage() {
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory>("all");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === "all") return PHOTO_ITEMS;
    return PHOTO_ITEMS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const activePhoto =
    activePhotoIndex !== null && filteredPhotos[activePhotoIndex]
      ? filteredPhotos[activePhotoIndex]
      : null;

  const handleNextPhoto = () => {
    if (activePhotoIndex !== null && activePhotoIndex < filteredPhotos.length - 1) {
      setActivePhotoIndex(activePhotoIndex + 1);
    }
  };

  const handlePrevPhoto = () => {
    if (activePhotoIndex !== null && activePhotoIndex > 0) {
      setActivePhotoIndex(activePhotoIndex - 1);
    }
  };

  // Find before/after item for interactive slider section
  const comparisonItem = PHOTO_ITEMS.find((p) => p.beforeUrl);

  return (
    <div className="pt-28 pb-24 sm:pb-32 min-h-screen bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <SectionHeading
          badge="Photo Portfolio"
          title="Editorial & Bridal"
          highlight="Visual Mastery"
          description="High-end frequency separation retouching, bridal attire enhancement, and filmic color grading crafted for discerning creators and wedding clients."
        />

        {/* Interactive Before & After Comparison Frame Section */}
        {comparisonItem && comparisonItem.beforeUrl && (
          <div className="p-6 sm:p-8 rounded-3xl bg-deep-black border border-royal-purple/40 shadow-2xl shadow-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-royal-purple/10 blur-[130px] pointer-events-none" />

            <div className="mb-6 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-electric-violet" />
                <span className="text-xs font-semibold uppercase tracking-wider text-soft-lavender">
                  Featured Interactive Frame — Category Field: Photo Retouching
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary-white">
                Skin Micro-Texture & Tone Transformation
              </h3>
              <p className="text-xs sm:text-sm text-secondary-text max-w-2xl">
                Observe the preservation of authentic pore texture, delicate violet studio lighting sculpt, and natural blemish clearing without artificial airbrushing.
              </p>
            </div>

            <BeforeAfterSlider
              beforeImage={comparisonItem.beforeUrl}
              afterImage={comparisonItem.imageUrl}
              title={comparisonItem.title}
              categoryLabel={comparisonItem.categoryLabel}
              aspectRatio="3:4"
            />
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-soft-lavender">
              Browse Gallery Frames by Category Field
            </h3>
            <span className="text-xs text-secondary-text/70">
              Showing {filteredPhotos.length} {filteredPhotos.length === 1 ? "frame" : "frames"}
            </span>
          </div>

          <div className="flex items-center justify-start overflow-x-auto pb-2 scrollbar-none gap-2">
            {PHOTO_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id as PhotoCategory)}
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
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => {
            const isWide = photo.aspectRatio === "16:9";
            return (
              <div
                key={photo.id}
                onClick={() => setActivePhotoIndex(index)}
                className={cn(
                  "group cursor-pointer rounded-2xl overflow-hidden bg-deep-black border border-royal-purple/30 hover:border-electric-violet/60 transition-all duration-300 shadow-xl shadow-black/80 flex flex-col justify-between",
                  isWide ? "sm:col-span-2 lg:col-span-2" : ""
                )}
              >
                {/* Media Container */}
                <div
                  className={cn(
                    "relative w-full overflow-hidden bg-obsidian",
                    isWide ? "aspect-video" : "aspect-[3/4]"
                  )}
                >
                  <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <Badge variant="violet" size="sm">
                      Category: {photo.categoryLabel}
                    </Badge>
                    <span className="p-1.5 rounded-lg bg-obsidian/80 border border-royal-purple/30 text-soft-lavender group-hover:text-primary-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute bottom-3 right-3">
                    <Badge variant="obsidian" size="sm">
                      {photo.status.toUpperCase()} FRAME
                    </Badge>
                  </div>
                </div>

                {/* Metadata & Field Specifications */}
                <div className="p-5 space-y-3 bg-deep-black">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-electric-violet block">
                      Field: {photo.categoryLabel}
                    </span>
                    <h4 className="text-base font-bold text-primary-white group-hover:text-soft-lavender transition-colors mt-0.5">
                      {photo.title}
                    </h4>
                  </div>

                  <p className="text-xs text-secondary-text leading-relaxed line-clamp-2">
                    {photo.description}
                  </p>

                  {/* Field Highlights */}
                  {photo.fieldHighlights && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {photo.fieldHighlights.slice(0, 2).map((hl, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-dark-purple/50 text-soft-lavender/90 border border-royal-purple/20"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-electric-violet" />
                          <span>{hl}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="pt-2 border-t border-royal-purple/15 flex items-center justify-between text-[11px] text-secondary-text">
                    <span>{photo.cameraOrGear || "Studio Optics"}</span>
                    <span className="text-electric-violet font-semibold">
                      Open Lightbox →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Photo Lightbox */}
        <PhotoLightbox
          photo={activePhoto}
          onClose={() => setActivePhotoIndex(null)}
          onNext={handleNextPhoto}
          onPrev={handlePrevPhoto}
          hasNext={activePhotoIndex !== null && activePhotoIndex < filteredPhotos.length - 1}
          hasPrev={activePhotoIndex !== null && activePhotoIndex > 0}
        />
      </div>
    </div>
  );
}
