import Link from "next/link";
import {
  Smartphone,
  Clapperboard,
  Video,
  Film,
  Sparkles,
  Sliders,
  Heart,
  Image as ImageIcon,
  Layers,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { YoutubeIcon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES_DATA } from "@/data/services";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Youtube: YoutubeIcon,
  Clapperboard,
  Video,
  Film,
  Sparkles,
  Sliders,
  Heart,
  Image: ImageIcon,
  Layers,
};

export default function ServicesOverview() {
  return (
    <section className="py-24 sm:py-32 relative bg-deep-black/60 border-t border-royal-purple/20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-royal-purple/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            align="left"
            badge="Studio Capabilities"
            title="Comprehensive"
            highlight="Creative Services"
            description="From high-impact commercial video post-production to bespoke bridal photo editing, explore our full spectrum of specialized offerings."
          />

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark-purple/70 border border-royal-purple/40 text-xs font-semibold text-soft-lavender hover:text-primary-white hover:border-electric-violet transition-colors w-fit"
          >
            <span>View All 10 Services</span>
            <ArrowRight className="w-3.5 h-3.5 text-electric-violet" />
          </Link>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || Film;
            return (
              <div
                key={service.id}
                className="group relative p-6 rounded-2xl bg-dark-purple/30 border border-royal-purple/25 hover:border-electric-violet/50 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/40 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-deep-black border border-royal-purple/40 flex items-center justify-center text-electric-violet group-hover:bg-royal-purple/20 group-hover:border-electric-violet transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-secondary-text/60">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-soft-lavender/80 block">
                      Category Field: {service.category.toUpperCase()}
                    </span>
                    <h3 className="text-base font-bold text-primary-white group-hover:text-soft-lavender transition-colors mt-0.5">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs text-secondary-text leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-royal-purple/15 flex items-center justify-between">
                  <span className="text-[11px] text-soft-lavender/70">
                    Tailored brief
                  </span>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-electric-violet hover:text-soft-lavender transition-colors"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
