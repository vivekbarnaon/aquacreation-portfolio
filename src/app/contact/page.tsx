import { Suspense } from "react";
import { Clock, ShieldCheck, Sparkles, Film } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact & Project Enquiries",
  description:
    "Start your project with AquaCreation. Submit your video editing, promotional film, bridal edit, or photo retouching requirements.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 sm:pb-32 min-h-screen bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <SectionHeading
          badge="Direct Project Enquiries"
          title="Initiate"
          highlight="Your Creative Brief"
          description="Submit your project details below to discuss video editing, commercial promos, bridal collections, or editorial photo retouching."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Form (Suspense-wrapped) */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="p-12 text-center text-secondary-text rounded-3xl bg-deep-black border border-royal-purple/30">
                  Loading brief form...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>

          {/* Right Column: Studio Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Instagram Studio Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-deep-black border border-royal-purple/40 shadow-xl shadow-black space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-royal-purple/20 border border-royal-purple/40 flex items-center justify-center text-electric-violet">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-soft-lavender block">
                    Direct Social Channel
                  </span>
                  <h3 className="text-base font-bold text-primary-white">
                    Instagram Showcase
                  </h3>
                </div>
              </div>

              <p className="text-xs text-secondary-text leading-relaxed">
                Prefer a quick DM or want to see behind-the-scenes editing reels and daily visual updates?
              </p>

              <a
                href="https://instagram.com/aquacreation18"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-dark-purple/80 hover:bg-dark-purple border border-royal-purple/40 text-soft-lavender hover:text-primary-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-electric-violet" />
                <span>Follow @aquacreation18</span>
              </a>
            </div>

            {/* Studio Standards & Workflow Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-purple/20 border border-royal-purple/30 space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-soft-lavender flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-electric-violet" />
                <span>What to Expect Next</span>
              </h4>

              <div className="space-y-4 text-xs text-secondary-text">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-electric-violet shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary-white block mb-0.5">Prompt Brief Review</strong>
                    <span>We examine your footage requirements, delivery aspect ratios, and narrative goals.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Film className="w-4 h-4 text-electric-violet shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary-white block mb-0.5">Tailored Project Proposal</strong>
                    <span>Receive a clear breakdown of milestones, file delivery methods, and timeline.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-electric-violet shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary-white block mb-0.5">Creative Confidentiality</strong>
                    <span>Your unreleased footage, personal memories, and brand assets are treated with utmost privacy.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
