"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera, CheckCircle2 } from "lucide-react";
import { PhotoEntry } from "@/types/portfolio";

interface PhotoLightboxProps {
  photo: PhotoEntry | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export default function PhotoLightbox({
  photo,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: PhotoLightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasNext) onNext();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
    };

    if (photo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [photo, onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!photo || !mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-photo-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#0D0A08] border border-amber-500/40 rounded-2xl shadow-2xl shadow-black overflow-hidden max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-amber-500/20 bg-[#140E0B]">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 shadow-sm">
              <Camera className="w-4 h-4" />
            </span>
            <div>
              <span className="text-[11px] font-semibold tracking-wider text-amber-300 uppercase block">
                Category Field: {photo.categoryLabel}
              </span>
              <h3 id="lightbox-photo-title" className="text-base sm:text-lg font-bold text-white">
                {photo.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close photo view"
              className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-900 border border-stone-800 hover:border-amber-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Photo Display Area — Fixed explicit responsive height so Image fill never collapses */}
        <div className="relative w-full h-[56vh] sm:h-[64vh] min-h-[380px] max-h-[700px] bg-[#070504] flex items-center justify-center overflow-hidden p-3 sm:p-5 select-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 1200px) 100vw, 1100px"
              priority
            />
          </div>

          {/* Prev Navigation Arrow */}
          {hasPrev && (
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/85 border border-amber-500/40 text-amber-200 hover:text-white hover:bg-amber-500/30 transition-all shadow-xl backdrop-blur-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Navigation Arrow */}
          {hasNext && (
            <button
              type="button"
              onClick={onNext}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/85 border border-amber-500/40 text-amber-200 hover:text-white hover:bg-amber-500/30 transition-all shadow-xl backdrop-blur-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom Details & Field Specifications */}
        <div className="p-4 sm:p-5 border-t border-amber-500/20 bg-[#120D0A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="space-y-1.5 max-w-xl">
            <p className="text-stone-300 leading-relaxed text-xs sm:text-sm">
              {photo.description}
            </p>
            {photo.fieldHighlights && (
              <div className="flex flex-wrap gap-2 pt-1">
                {photo.fieldHighlights.map((hl, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-[11px] text-amber-200/90 bg-black/80 px-2.5 py-0.5 rounded-full border border-amber-500/30 font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>{hl}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 shrink-0 text-stone-400">
            {photo.cameraOrGear && (
              <span className="font-mono text-[11px] text-amber-300">
                {photo.cameraOrGear}
              </span>
            )}
            {photo.technique && (
              <span className="text-[11px] text-stone-300">
                {photo.technique}
              </span>
            )}
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-[10px] font-bold uppercase tracking-wider text-amber-300">
              STATUS: {photo.status.toUpperCase()} MASTER FRAME
            </span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
