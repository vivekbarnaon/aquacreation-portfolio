import type { Metadata } from "next";
import { Inter, Cinzel, Caveat } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinematic",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AquaCreation — Premium Cinematic Filmmaker & Visual Studio",
    template: "%s | AquaCreation",
  },
  description:
    "Your Vision. Our Creativity. AquaCreation is a premium filmmaking and post-production studio specializing in cinematic video editing, reels, YouTube content, commercial promo films, bridal edits, and high-end photo retouching.",
  keywords: [
    "AquaCreation",
    "Video Editor Portfolio",
    "Cinematic Filmmaker",
    "Reels Video Editing",
    "YouTube Editor",
    "Bridal Photo Editing",
    "High-End Photo Retouching",
    "Commercial Video Production",
    "Color Grading",
  ],
  authors: [{ name: "AquaCreation Studio", url: "https://instagram.com/aquacreation18" }],
  creator: "AquaCreation",
  metadataBase: new URL("https://aquacreation.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aquacreation.vercel.app",
    title: "AquaCreation — Premium Cinematic Filmmaker Portfolio",
    description: "Your Vision. Our Creativity. Cinematic video editing, bridal visual arts, and editorial photo retouching.",
    siteName: "AquaCreation",
    images: [
      {
        url: "/images/hero-cinematic.jpg",
        width: 1920,
        height: 1080,
        alt: "AquaCreation Cinematic Studio Set",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AquaCreation — Cinematic Filmmaking & Editorial Studio",
    description: "Your Vision. Our Creativity. Crafting cinematic visuals, powerful edits, and unforgettable creative experiences.",
    images: ["/images/hero-cinematic.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} ${caveat.variable} dark antialiased overflow-x-hidden max-w-full`}>
      <body className="bg-obsidian text-primary-white min-h-screen flex flex-col film-grain selection:bg-amber-500 selection:text-black overflow-x-hidden w-full max-w-full relative">
        {/* Subtle Ambient Radial Light Overlays */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full max-w-full">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />
          <div className="absolute top-[35%] -left-60 w-[600px] h-[600px] bg-orange-600/10 blur-[160px] rounded-full" />
          <div className="absolute top-[70%] -right-60 w-[600px] h-[600px] bg-amber-500/8 blur-[160px] rounded-full" />
        </div>

        <Navbar />

        <main className="flex-1 relative w-full max-w-full overflow-x-hidden">{children}</main>


        <Footer />
      </body>
    </html>
  );
}
