"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { InstagramIcon, YoutubeIcon, XTwitterIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Video Works", href: "/work/videos" },
  { name: "Photo Works", href: "/work/photos" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-[#080605]/92 backdrop-blur-md border-b border-orange-950/40 shadow-lg shadow-black/70 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo: Stylized Chevron 'A' + AquaCreation CREATIVE STUDIO */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg py-1"
          >
            {/* Geometric Angled 'A' Logo Emblem */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 drop-shadow-[0_0_12px_rgba(245,158,11,0.5)] group-hover:scale-105 transition-transform"
                aria-hidden="true"
              >
                <path
                  d="M18 3L4 29L10 33L18 17L26 33L32 29L18 3Z"
                  fill="url(#logo_grad_1)"
                />
                <path
                  d="M18 10L9 28H15L18 22L21 28H27L18 10Z"
                  fill="#0B0807"
                />
                <path
                  d="M18 3L11 17L18 20L25 17L18 3Z"
                  fill="url(#logo_grad_2)"
                />
                <defs>
                  <linearGradient id="logo_grad_1" x1="4" y1="3" x2="32" y2="33" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F59E0B" />
                    <stop offset="0.5" stopColor="#EA580C" />
                    <stop offset="1" stopColor="#C2410C" />
                  </linearGradient>
                  <linearGradient id="logo_grad_2" x1="18" y1="3" x2="18" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FDE68A" />
                    <stop offset="1" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-sans font-bold tracking-tight text-lg text-white group-hover:text-amber-200 transition-colors leading-none">
                AquaCreation
              </span>
              <span className="text-[9px] tracking-[0.25em] text-stone-400 uppercase font-medium mt-1">
                CREATIVE STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : link.href.startsWith("/#")
                  ? false
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative py-1 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
                    isActive
                      ? "text-amber-300 font-semibold"
                      : "text-stone-300 hover:text-white"
                  )}
                >
                  {link.name}
                  {/* Glowing Sunset Point Flare Underline */}
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center w-8">
                      <span className="w-8 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                      <span className="absolute w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_#F59E0B,0_0_14px_#EA580C]" />
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action: Social Icons + 'Let's Work Together' Pill Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3 pr-2 text-stone-400">
              <a
                href="https://instagram.com/aquacreation18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-amber-400 transition-colors p-1"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-amber-400 transition-colors p-1"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="hover:text-amber-400 transition-colors p-1"
              >
                <XTwitterIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Let's Work Together Pill Button */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-black/60 hover:bg-stone-900 border border-amber-500/50 hover:border-amber-400 shadow-[0_0_18px_rgba(245,158,11,0.22)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-300"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-900 border border-stone-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-orange-950/40 bg-[#0B0807]/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : link.href.startsWith("/#")
                  ? false
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    isActive
                      ? "text-amber-300 bg-amber-500/10 border border-amber-500/30"
                      : "text-stone-300 hover:text-white hover:bg-stone-900"
                  )}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#F59E0B]" />
                  )}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-stone-800/80 flex flex-col gap-3">
              <div className="flex items-center justify-center gap-6 py-2 text-stone-400">
                <a
                  href="https://instagram.com/aquacreation18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 p-2"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 p-2"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 p-2"
                >
                  <XTwitterIcon className="w-4 h-4" />
                </a>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white font-semibold text-sm shadow-lg shadow-orange-600/30"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
