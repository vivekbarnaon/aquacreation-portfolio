import { Sparkles, Eye, Scissors, Palette, Layers } from "lucide-react";

export default function Philosophy() {
  const pillars = [
    {
      icon: Eye,
      title: "Visual Storytelling",
      desc: "Editing isn't just cutting clips together; it's guiding the audience's emotion, curiosity, and visual focus through intentional composition and rhythm.",
    },
    {
      icon: Scissors,
      title: "Thoughtful Pacing",
      desc: "Every cut is calibrated to the heartbeat of the narrative, whether it demands breathless rapid-fire momentum for social reels or lingering grace for wedding vows.",
    },
    {
      icon: Palette,
      title: "Atmospheric Color Grading",
      desc: "Color is the psychological soul of cinema. We craft custom tone curves, obsidian-purple contrast, and organic skin rendition that evoke unmistakable presence.",
    },
    {
      icon: Layers,
      title: "Meticulous Sound & Detail",
      desc: "From subtle atmospheric room tone and foley to dynamic whooshes and musical drops, we build immersive audio layers that make every frame come alive.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-obsidian border-t border-royal-purple/20 overflow-hidden">
      {/* Background Violet Flare */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-royal-purple/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-dark-purple/40 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-dark-purple/80 border border-royal-purple/40 text-soft-lavender shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-electric-violet" />
            <span>Creative Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-primary-white">
            “Every frame has a purpose.{" "}
            <span className="bg-gradient-to-r from-amber-200 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Every edit tells a story.”
            </span>
          </h2>

          <p className="text-base sm:text-lg text-secondary-text leading-relaxed">
            AquaCreation is rooted in the belief that great visual content requires both cinematic artistry and disciplined technical precision.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-deep-black/90 border border-royal-purple/20 hover:border-royal-purple/50 transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-dark-purple border border-royal-purple/40 flex items-center justify-center text-electric-violet">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-primary-white">
                  {pillar.title}
                </h3>
                <p className="text-xs text-secondary-text leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
