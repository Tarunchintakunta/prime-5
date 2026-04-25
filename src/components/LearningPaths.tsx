import { Code2, Palette, BarChart3, ArrowRight, Check } from "lucide-react";
import { Reveal } from "./Reveal";

type Path = {
  icon: typeof Code2;
  name: string;
  meta: string;
  description: string;
  milestones: { title: string; done: boolean }[];
  progress: number;
  accent: string;
};

const PATHS: Path[] = [
  {
    icon: Code2,
    name: "Full-Stack Engineer",
    meta: "9 courses · 64 hrs",
    description:
      "From TypeScript fundamentals to shipping production systems with confidence.",
    milestones: [
      { title: "TypeScript Deep Dive", done: true },
      { title: "Advanced React Patterns", done: true },
      { title: "API Design with Node", done: false },
      { title: "Distributed Systems Primer", done: false },
    ],
    progress: 48,
    accent: "from-indigo-500 to-blue-600",
  },
  {
    icon: Palette,
    name: "Product Designer",
    meta: "7 courses · 42 hrs",
    description:
      "Master interaction design, design systems, and shipping with engineering teams.",
    milestones: [
      { title: "Visual Design Foundations", done: true },
      { title: "Design Systems Mastery", done: false },
      { title: "Prototyping in Figma", done: false },
      { title: "Designer/Engineer Handoff", done: false },
    ],
    progress: 22,
    accent: "from-rose-500 to-orange-500",
  },
  {
    icon: BarChart3,
    name: "AI Engineer",
    meta: "11 courses · 88 hrs",
    description:
      "Foundations to production — train, evaluate, and ship LLM-powered products.",
    milestones: [
      { title: "Linear Algebra for ML", done: false },
      { title: "Machine Learning Foundations", done: false },
      { title: "Building with LLMs", done: false },
      { title: "Evaluation & Deployment", done: false },
    ],
    progress: 0,
    accent: "from-violet-500 to-fuchsia-600",
  },
];

function PathCard({ path, delay }: { path: Path; delay: number }) {
  const Icon = path.icon;
  return (
    <Reveal delay={delay}>
      <div className="group rounded-2xl bg-background border border-border p-6 hover:border-foreground/20 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] h-full flex flex-col">
        <div
          className={`h-11 w-11 rounded-xl bg-gradient-to-br ${path.accent} grid place-items-center text-white shadow-sm`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-5 text-xl font-semibold tracking-tight">
          {path.name}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
          {path.meta}
        </p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {path.description}
        </p>

        <ul className="mt-6 space-y-2.5">
          {path.milestones.map((m) => (
            <li
              key={m.title}
              className="flex items-center gap-2.5 text-sm"
            >
              <span
                className={`h-4 w-4 shrink-0 rounded-full grid place-items-center ${
                  m.done
                    ? "bg-success text-white"
                    : "border border-border bg-background"
                }`}
              >
                {m.done && <Check className="h-2.5 w-2.5" />}
              </span>
              <span
                className={
                  m.done ? "text-foreground/60 line-through" : "text-foreground"
                }
              >
                {m.title}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-semibold tabular-nums">{path.progress}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${path.accent} rounded-full transition-all`}
              style={{ width: `${path.progress}%` }}
            />
          </div>
          <button className="mt-5 w-full inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-background py-2.5 text-sm font-medium group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-colors">
            {path.progress > 0 ? "Continue path" : "Start path"}
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </Reveal>
  );
}

export function LearningPaths() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground mb-5">
              Learning Paths
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-3xl mx-auto">
              A roadmap to <span className="italic">mastery —</span> not just
              another course list
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Sequenced courses, real projects, and check-ins with mentors that
              keep you on track from beginner to expert.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PATHS.map((p, i) => (
            <PathCard key={p.name} path={p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
