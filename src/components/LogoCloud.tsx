import { Reveal } from "./Reveal";

const LOGOS = [
  { name: "Vercel", mark: "▲" },
  { name: "Linear", mark: "◇" },
  { name: "Notion", mark: "✦" },
  { name: "Stripe", mark: "≋" },
  { name: "Anthropic", mark: "△" },
  { name: "Figma", mark: "◯" },
];

export function LogoCloud() {
  return (
    <section className="border-y border-border bg-background py-14 px-6 md:px-12 lg:px-20">
      <Reveal>
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Learners from teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-foreground/40 hover:text-foreground/80 transition-colors"
            >
              <span className="text-lg">{logo.mark}</span>
              <span className="text-base font-semibold tracking-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
