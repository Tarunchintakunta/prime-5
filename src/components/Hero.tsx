import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "./ui/Button";
import { Dashboard } from "./Dashboard";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4";

export function Hero() {
  return (
    <section className="relative flex-1 w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="relative z-10 flex flex-col items-center w-full px-6 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground font-body mb-6"
        >
          New: AI-powered learning paths ✨
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-display text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-tight text-foreground max-w-xl"
        >
          Learn anything,{" "}
          <span className="italic font-display">Master</span> everything
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-center text-base md:text-lg text-muted-foreground max-w-[650px] leading-relaxed font-body"
        >
          Personalized courses from world-class instructors, hands-on projects,
          and AI mentorship that adapts to how you learn—at a pace that fits
          your life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 flex items-center gap-3"
        >
          <Button className="rounded-full px-6 py-5 text-sm font-medium font-body">
            Start learning free
          </Button>
          <Button
            variant="ghost"
            className="h-11 w-11 rounded-full border-0 bg-background shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-background/80 p-0"
          >
            <Play className="h-4 w-4 fill-foreground text-foreground" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 w-full max-w-5xl"
        >
          <div
            className="rounded-2xl overflow-hidden p-3 md:p-4"
            style={{
              background: "rgba(255, 255, 255, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              boxShadow: "var(--shadow-dashboard)",
            }}
          >
            <Dashboard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
