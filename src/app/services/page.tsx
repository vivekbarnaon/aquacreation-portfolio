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
  CheckCircle2,
  ArrowRight,
  HelpCircle,
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

export const metadata = {
  title: "Services & Capabilities",
  description:
    "Comprehensive post-production and creative visual services by AquaCreation. Video editing, bridal visual arts, YouTube production, and high-end photo retouching.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24 sm:pb-32 min-h-screen bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <SectionHeading
          badge="Creative Offerings"
          title="Production"
          highlight="& Post Capabilities"
          description="Every service is executed with filmmaker craftsmanship, tailored to the specific medium, audience, and narrative purpose."
        />

        {/* Pricing & Production Workflow Notice */}
        <div className="p-6 sm:p-8 rounded-2xl bg-dark-purple/30 border border-royal-purple/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-royal-purple/20 text-electric-violet mt-0.5">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-bold text-primary-white">
                Bespoke Scope & Transparent Proposals
              </h3>
              <p className="text-xs text-secondary-text max-w-2xl leading-relaxed">
                Project scopes vary according to footage complexity, delivery timelines, and revision rounds. We provide customized quotes tailored to your project requirements upon brief review.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-royal-purple to-electric-violet text-primary-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-royal-purple/30 hover:scale-[1.02] transition-transform"
          >
            Request Custom Quote
          </Link>
        </div>

        {/* 10 Services List */}
        <div className="space-y-12">
          {SERVICES_DATA.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Film;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="p-8 sm:p-10 rounded-3xl bg-deep-black border border-royal-purple/30 hover:border-electric-violet/50 transition-all duration-300 shadow-xl shadow-black/60 relative overflow-hidden"
              >
                {/* Subtle Ambient Radial Highlight */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-royal-purple/10 blur-[120px] pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                  {/* Left Column: Number, Title, Description */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-dark-purple border border-royal-purple/50 flex items-center justify-center text-electric-violet">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-soft-lavender uppercase tracking-widest block">
                          Service 0{index + 1} • {service.category.toUpperCase()}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-primary-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-secondary-text leading-relaxed pt-2">
                      {service.fullDesc}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-royal-purple/30 hover:bg-royal-purple border border-royal-purple/50 text-soft-lavender hover:text-primary-white text-xs font-semibold tracking-wider uppercase transition-colors"
                      >
                        <span>Enquire About {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & Ideal For Breakdown */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-dark-purple/20 p-6 rounded-2xl border border-royal-purple/20">
                    {/* Deliverables */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-soft-lavender flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-electric-violet" />
                        <span>Included Deliverables</span>
                      </h4>
                      <ul className="space-y-2 text-xs text-secondary-text">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-electric-violet shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For & Turnaround */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-soft-lavender mb-2">
                          Ideal For
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {service.idealFor.map((audience, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] px-2.5 py-1 rounded bg-deep-black text-secondary-text border border-royal-purple/30"
                            >
                              {audience}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-royal-purple/20">
                        <span className="text-[10px] uppercase tracking-wider text-secondary-text/70 block">
                          Production Timeline
                        </span>
                        <p className="text-xs text-soft-lavender/90 mt-0.5">
                          {service.turnaroundNote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
