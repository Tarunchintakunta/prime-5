import { Check, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

type Plan = {
  name: string;
  price: string;
  period: string;
  blurb: string;
  cta: string;
  features: string[];
  highlight?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    blurb: "Dip your toes in. No credit card required.",
    cta: "Start free",
    features: [
      "50+ free courses",
      "Basic AI mentor (10 questions/day)",
      "Community access",
      "Mobile + web apps",
    ],
  },
  {
    name: "Pro",
    price: "AED 69",
    period: "per month",
    blurb: "Everything serious learners need to master a craft.",
    cta: "Go Pro",
    highlight: true,
    features: [
      "Every course on Prime Learning",
      "Unlimited AI mentor with code review",
      "Verified certificates",
      "Hands-on projects + 1:1 office hours",
      "Offline downloads",
      "Cancel anytime",
    ],
  },
  {
    name: "Teams",
    price: "AED 179",
    period: "per seat / month",
    blurb: "Roll out structured learning across your org.",
    cta: "Talk to sales",
    features: [
      "Everything in Pro",
      "Admin dashboard + reporting",
      "SSO / SAML",
      "Custom learning paths",
      "Dedicated success manager",
      "Volume billing in AED",
    ],
  },
];

function PlanCard({ plan, delay }: { plan: Plan; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div
        className={`relative rounded-2xl p-7 md:p-8 h-full flex flex-col ${
          plan.highlight
            ? "bg-foreground text-background border border-foreground shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]"
            : "bg-background border border-border"
        }`}
      >
        {plan.highlight && (
          <div className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-accent text-accent-foreground px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
            <Sparkles className="h-2.5 w-2.5" />
            Most popular
          </div>
        )}

        <h3 className="text-xl font-semibold tracking-tight">{plan.name}</h3>
        <p
          className={`mt-1 text-sm ${
            plan.highlight ? "text-background/60" : "text-muted-foreground"
          }`}
        >
          {plan.blurb}
        </p>

        <div className="mt-6 flex items-baseline gap-2">
          <span className="font-display text-5xl tracking-tight">
            {plan.price}
          </span>
          <span
            className={`text-sm ${
              plan.highlight ? "text-background/60" : "text-muted-foreground"
            }`}
          >
            {plan.period}
          </span>
        </div>

        <ul className="mt-7 space-y-3 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm">
              <span
                className={`mt-0.5 h-4 w-4 shrink-0 rounded-full grid place-items-center ${
                  plan.highlight
                    ? "bg-accent/20 text-accent"
                    : "bg-success/15 text-success"
                }`}
              >
                <Check className="h-2.5 w-2.5" />
              </span>
              <span className="leading-snug">{f}</span>
            </li>
          ))}
        </ul>

        <button
          className={`mt-8 w-full rounded-full py-3 text-sm font-medium transition-colors ${
            plan.highlight
              ? "bg-accent text-accent-foreground hover:bg-accent/90"
              : "bg-foreground text-background hover:bg-foreground/90"
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </Reveal>
  );
}

export function Pricing() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground mb-5">
              Pricing
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-3xl mx-auto">
              Simple pricing — <span className="italic">honest value</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              All prices in AED. No hidden fees. Cancel any time.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((p, i) => (
            <PlanCard key={p.name} plan={p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
