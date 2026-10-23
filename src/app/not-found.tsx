import Link from "next/link";
import { ArrowLeft, Film } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 bg-obsidian text-center">
      <div className="space-y-6 max-w-md mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-dark-purple border border-royal-purple/40 flex items-center justify-center text-electric-violet mx-auto shadow-xl shadow-royal-purple/20">
          <Film className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-soft-lavender block">
            404 • Cut Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-primary-white">
            Lost in the Timeline
          </h1>
          <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
            The frame or sequence you are searching for does not exist or has been shifted in the edit.
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-royal-purple to-electric-violet text-primary-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-royal-purple/30 hover:scale-105 transition-transform"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
