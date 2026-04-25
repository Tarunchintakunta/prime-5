import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-hidden bg-foreground text-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.18),transparent_60%)] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            Stop scrolling.{" "}
            <span className="italic">Start mastering</span> today.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 text-base md:text-lg text-background/70 max-w-xl mx-auto leading-relaxed">
            Your first lesson is on us. No card. No commitment. Just the next
            skill, waiting.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-sm font-medium hover:bg-accent/90 transition-colors">
              Start learning free
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="rounded-full border border-background/20 bg-background/5 backdrop-blur px-7 py-3.5 text-sm font-medium hover:bg-background/10 transition-colors">
              Talk to our team
            </button>
          </div>
        </Reveal>
        <Reveal delay={0.45}>
          <p className="mt-8 text-xs text-background/40">
            Trusted by learners in 120+ countries · Pricing in AED
          </p>
        </Reveal>
      </div>
    </section>
  );
}
