import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatar: string;
  course?: string;
  highlight?: boolean;
  bgClass: string;
};

const avatar = (id: number) => `https://i.pravatar.cc/120?img=${id}`;

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The AI mentor catches the things I'd miss in a code review. It's like having Dan Abramov pair-programming at midnight.",
    name: "Maya Patel",
    role: "Software Engineer · Stripe",
    initials: "MP",
    avatar: avatar(47),
    course: "Advanced React Patterns",
    bgClass: "bg-background border border-border",
  },
  {
    quote:
      "Went from junior PM to leading a team of six in six months. The path doesn't waste a single hour.",
    name: "Jordan Lee",
    role: "Product Manager · Notion",
    initials: "JL",
    avatar: avatar(33),
    bgClass: "bg-foreground text-background",
    highlight: true,
  },
  {
    quote:
      "Brad's design systems course is worth the year of Pro by itself. We rebuilt our component library in a weekend.",
    name: "Sam Chen",
    role: "Senior Designer · Linear",
    initials: "SC",
    avatar: avatar(68),
    course: "Design Systems Mastery",
    bgClass: "bg-background border border-border",
  },
  {
    quote:
      "Finally — a platform that respects my time. No filler, no padding, just the next concept I actually need.",
    name: "Priya Nair",
    role: "Data Scientist · Spotify",
    initials: "PN",
    avatar: avatar(49),
    bgClass: "bg-secondary border border-border",
  },
  {
    quote:
      "We rolled out Prime Teams across 40 engineers. Onboarding time dropped from 6 weeks to 9 days.",
    name: "Alex Rivera",
    role: "Founder · Vellum",
    initials: "AR",
    avatar: avatar(12),
    bgClass: "bg-background border border-border",
  },
  {
    quote: "Andrew Ng's course is gold. Period.",
    name: "Kenji Tanaka",
    role: "ML Engineer · Anthropic",
    initials: "KT",
    avatar: avatar(3),
    course: "Machine Learning Foundations",
    bgClass: "bg-accent/10 border border-accent/30",
  },
];

function TestimonialCard({
  t,
  delay,
}: {
  t: Testimonial;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <figure
        className={`rounded-2xl p-6 md:p-7 break-inside-avoid mb-6 ${t.bgClass}`}
      >
        <Quote
          className={`h-6 w-6 mb-4 ${
            t.highlight ? "text-accent" : "text-foreground/30"
          }`}
        />
        <blockquote
          className={`text-base md:text-lg leading-relaxed ${
            t.highlight ? "" : ""
          }`}
        >
          {t.quote}
        </blockquote>
        {t.course && (
          <div
            className={`mt-4 inline-flex items-center gap-1.5 text-xs ${
              t.highlight ? "text-background/70" : "text-muted-foreground"
            }`}
          >
            <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
            {t.course}
          </div>
        )}
        <figcaption className="mt-5 flex items-center gap-3">
          <img
            src={t.avatar}
            alt={t.name}
            loading="lazy"
            className="h-10 w-10 rounded-full object-cover bg-secondary"
          />
          <div>
            <div className="text-sm font-semibold">{t.name}</div>
            <div
              className={`text-xs ${
                t.highlight ? "text-background/60" : "text-muted-foreground"
              }`}
            >
              {t.role}
            </div>
          </div>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground mb-5">
              Testimonials
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-3xl mx-auto">
              What learners are{" "}
              <span className="italic">actually saying</span>
            </h2>
          </Reveal>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
