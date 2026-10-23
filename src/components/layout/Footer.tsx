import Link from "next/link";
import { Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-royal-purple/20 bg-deep-black relative overflow-hidden">
      {/* Soft Ambient Light Leak */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-royal-purple/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-dark-purple border border-royal-purple/40 flex items-center justify-center">
                <span className="font-cinematic text-lg font-bold text-soft-lavender">A</span>
              </div>
              <span className="font-sans font-bold tracking-wider text-lg text-primary-white uppercase">
                Aqua<span className="text-electric-violet">Creation</span>
              </span>
            </Link>

            <p className="text-sm text-secondary-text leading-relaxed max-w-sm">
              Your Vision. Our Creativity. Dedicated to cinematic filmmaking, high-end video editing, bridal visual arts, and precision editorial photo retouching.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com/aquacreation18"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-purple/80 border border-royal-purple/30 text-xs text-soft-lavender hover:text-primary-white hover:border-electric-violet transition-colors"
                aria-label="AquaCreation on Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-electric-violet" />
                <span>@aquacreation18</span>
                <ArrowUpRight className="w-3 h-3 text-secondary-text" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-purple/80 border border-royal-purple/30 text-xs text-soft-lavender hover:text-primary-white hover:border-electric-violet transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-electric-violet" />
                <span>Direct Brief</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-soft-lavender">
              Explore Works
            </h4>
            <ul className="space-y-2 text-sm text-secondary-text">
              <li>
                <Link href="/work/videos" className="hover:text-primary-white transition-colors flex items-center gap-1">
                  <span>Video Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/work/photos" className="hover:text-primary-white transition-colors flex items-center gap-1">
                  <span>Photo Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/work/photos" className="hover:text-primary-white transition-colors">
                  <span>Before & After Edits</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-white transition-colors">
                  <span>Studio Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Disciplines */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-soft-lavender">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs text-secondary-text/80">
              <li>Reels & Shorts Editing</li>
              <li>Commercial Promo Videos</li>
              <li>YouTube Video Production</li>
              <li>Bridal & Wedding Edits</li>
              <li>High-End Photo Retouching</li>
              <li>Cinematic Color Grading</li>
            </ul>
          </div>

          {/* Contact / Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-soft-lavender">
              Inquiries
            </h4>
            <p className="text-xs text-secondary-text leading-relaxed">
              Open for selective commercial projects, recurring creator editing, and bridal/wedding collections.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs text-electric-violet hover:text-soft-lavender font-medium underline underline-offset-4 decoration-royal-purple/50"
            >
              <span>Submit Project Brief</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-royal-purple/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-text/70">
          <p>© {currentYear} AquaCreation Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-soft-lavender/80">
              <Sparkles className="w-3 h-3 text-electric-violet" />
              <span>Your Vision. Our Creativity.</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
