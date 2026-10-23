"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { SlidersHorizontal, Sparkles } from "lucide-react";
import Badge from "@/components/ui/Badge";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  categoryLabel?: string;
  aspectRatio?: "3:4" | "16:9" | "1:1";
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  categoryLabel = "Photo Retouching",
  aspectRatio = "3:4",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  const ratioClass =
    aspectRatio === "3:4"
      ? "aspect-[3/4]"
      : aspectRatio === "16:9"
      ? "aspect-video"
      : "aspect-square";

  return (
    <div className="space-y-3">
      {/* Frame Header with Field and Category Name */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-soft-lavender block">
            Category Field: {categoryLabel}
          </span>
          <h4 className="text-sm sm:text-base font-bold text-primary-white">
            {title}
          </h4>
        </div>
        <Badge variant="violet" size="sm">
          <Sparkles className="w-3 h-3" />
          <span>Interactive Slider</span>
        </Badge>
      </div>

      {/* Slider Frame */}
      <div
        ref={containerRef}
        className={`relative w-full ${ratioClass} max-w-xl mx-auto rounded-xl overflow-hidden select-none cursor-ew-resize border border-royal-purple/40 shadow-xl shadow-black/80`}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Full background) */}
        <Image
          src={afterImage}
          alt={`${title} - After Retouching`}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 768px) 100vw, 600px"
        />

        {/* AFTER Label Tag */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-royal-purple/90 text-primary-white border border-electric-violet/50 shadow-md">
            After Retouch
          </span>
        </div>

        {/* BEFORE Image with GPU-accelerated clipPath */}
        <div
          className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={`${title} - Before Retouching`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />

          {/* BEFORE Label Tag */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-obsidian/90 text-secondary-text border border-royal-purple/30 shadow-md">
              Raw Before
            </span>
          </div>
        </div>

        {/* Drag Divider Bar */}
        <div
          className="absolute top-0 bottom-0 z-30 w-0.5 bg-electric-violet pointer-events-none shadow-[0_0_10px_#8B5CF6]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-deep-black border-2 border-electric-violet text-primary-white flex items-center justify-center shadow-lg shadow-royal-purple/50">
            <SlidersHorizontal className="w-4 h-4 text-soft-lavender" />
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-secondary-text/80">
        Drag slider left or right to inspect non-destructive skin texture and lighting enhancement.
      </p>
    </div>
  );
}
