import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

export default function CtaSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-deep-black border-t border-royal-purple/20">
      {/* Cinematic Violet Radial Gradient Lighting */}
      <div className="absolute inset-0 bg-radial-purple-glow opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-royal-purple/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-purple/80 border border-royal-purple/40 text-xs font-semibold tracking-widest uppercase text-soft-lavender shadow-md shadow-royal-purple/20">
          <Sparkles className="w-3.5 h-3.5 text-electric-violet" />
          <span>Collaboration & Enquiries</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-primary-white uppercase">
            Have a Story{" "}
            <span className="bg-gradient-to-r from-amber-200 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              to Tell?
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-secondary-text leading-relaxed">
            Let’s turn your idea into something unforgettable. Submit your project requirements to discuss video editing, bridal visual arts, or editorial retouching.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-royal-purple to-electric-violet text-primary-white font-semibold text-sm uppercase tracking-wider shadow-xl shadow-royal-purple/30 hover:shadow-electric-violet/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://instagram.com/aquacreation18"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-dark-purple/60 hover:bg-dark-purple border border-royal-purple/40 text-soft-lavender hover:text-primary-white font-semibold text-xs uppercase tracking-wider transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-electric-violet" />
            <span>DM @aquacreation18</span>
          </a>
        </div>
      </div>
    </section>
  );
}
