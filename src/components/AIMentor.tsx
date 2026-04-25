import { Sparkles, Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const FEATURES = [
  "Adapts in real time to how you learn — pace, depth, modality",
  "Explains tricky concepts with examples from your own code",
  "Reviews your projects line-by-line, not just multiple choice",
  "Surfaces the next thing to learn before you know you need it",
];

function ChatMock() {
  return (
    <div className="rounded-2xl bg-background border border-border shadow-[0_30px_80px_-30px_rgba(0,0,0,0.2)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="ml-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Sparkles className="h-3 w-3 text-accent" />
          Mentor — Advanced React Patterns
        </div>
      </div>

      <div className="p-5 space-y-4 text-sm">
        <div className="flex items-start gap-3">
          <div className="h-7 w-7 shrink-0 rounded-full bg-foreground text-background grid place-items-center text-[10px] font-semibold">
            TS
          </div>
          <div className="rounded-2xl rounded-tl-sm bg-secondary px-4 py-2.5 max-w-[85%]">
            Why is my <code className="text-xs font-mono">useEffect</code>{" "}
            running twice in dev?
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="h-7 w-7 shrink-0 rounded-full bg-accent text-accent-foreground grid place-items-center">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <div className="rounded-2xl rounded-tl-sm bg-foreground text-background px-4 py-3 max-w-[90%] space-y-3">
            <p className="leading-relaxed">
              That's <span className="italic font-display">StrictMode</span>{" "}
              double-invoking your effect to surface bugs. It only happens in
              development. Two patterns to handle it:
            </p>
            <pre className="rounded-lg bg-background/10 px-3 py-2.5 text-[11px] leading-relaxed font-mono overflow-x-auto">
              <span className="text-emerald-300">// 1. Cleanup pattern</span>
              {"\n"}useEffect(() {`=>`} {`{`}
              {"\n"}  const ctrl = new AbortController();
              {"\n"}  fetch(url, {`{ signal: ctrl.signal }`});
              {"\n"}  return () {`=>`} ctrl.abort();
              {"\n"}{`}`}, [url]);
            </pre>
            <p className="text-xs text-background/70">
              Want me to refactor your <code>useFetch</code> hook this way?
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <button className="rounded-full border border-border bg-background px-3 py-1.5 text-xs hover:bg-secondary">
            Yes, refactor it
          </button>
          <button className="rounded-full border border-border bg-background px-3 py-1.5 text-xs hover:bg-secondary">
            Show me both patterns
          </button>
        </div>
      </div>
    </div>
  );
}

export function AIMentor() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-secondary/40 overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-foreground/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground mb-5">
              <Sparkles className="h-3 w-3 text-accent" />
              AI Mentor
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Your personal <span className="italic">mentor —</span> available
              at 3 a.m.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
              Ask anything. Paste your code. Get unstuck in minutes — with
              guidance shaped by every course on Prime Learning.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-8 space-y-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-accent/15 text-accent grid place-items-center">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-foreground/85 leading-relaxed">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.4}>
            <button className="mt-9 inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors">
              Try the mentor free
              <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={32}>
          <ChatMock />
        </Reveal>
      </div>
    </section>
  );
}
