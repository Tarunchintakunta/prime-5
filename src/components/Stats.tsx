import { Reveal } from "./Reveal";

const STATS = [
  { value: "250K+", label: "Active learners" },
  { value: "500+", label: "Expert-led courses" },
  { value: "12M", label: "Hours studied" },
  { value: "4.9", label: "Average rating", suffix: "★" },
];

export function Stats() {
  return (
    <section className="bg-foreground text-background py-20 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-background/50 mb-3">
            By the numbers
          </p>
          <h2 className="text-center font-display text-3xl md:text-4xl tracking-tight max-w-2xl mx-auto leading-tight">
            Built by a community that{" "}
            <span className="italic">actually ships</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="text-center md:text-left">
                <div className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none">
                  {s.value}
                  {s.suffix && (
                    <span className="text-accent ml-1">{s.suffix}</span>
                  )}
                </div>
                <div className="mt-3 text-sm text-background/60">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
