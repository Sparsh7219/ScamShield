"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const STAGES = ["Reading message…", "Checking language patterns…", "Scanning for red flags…", "Calculating risk…", "Generating explanation…"];

export default function LoadingState({ message }: { message: string }) {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((n) => Math.min(n + 1, STAGES.length - 1)), 420); return () => clearInterval(t); }, []);
  return (
    <div role="status" aria-live="polite" className="glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div className="relative mx-auto max-w-xl">
        <div className="relative overflow-hidden rounded-2xl border border-line p-5 text-[15px] leading-relaxed">
          <p className="line-clamp-5 text-muted [mask-image:linear-gradient(#000_55%,transparent)]">{message}</p>
          <motion.div aria-hidden className="absolute inset-x-0 h-16 will-change-transform" style={{ background: "linear-gradient(180deg, transparent, color-mix(in srgb, var(--accent) 35%, transparent), transparent)" }}
            initial={{ y: -64 }} animate={{ y: 190 }} transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }} />
          <motion.div aria-hidden className="absolute inset-x-0 h-px bg-accent shadow-[0_0_14px_var(--accent)]" initial={{ y: 0 }} animate={{ y: 190 }} transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }} />
        </div>
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2" aria-hidden>
            {[0, 1, 2].map((d) => <motion.span key={d} className="h-2.5 w-2.5 rounded-full bg-accent" animate={{ scale: [1, 1.7, 1], opacity: [.4, 1, .4], borderRadius: ["50%", "30%", "50%"] }} transition={{ duration: 1.1, repeat: Infinity, delay: d * .15 }} />)}
          </div>
          <div className="h-7 overflow-hidden text-center text-lg font-medium">
            <AnimatePresence mode="wait">
              <motion.p key={i} initial={{ opacity: 0, y: 12, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -12, filter: "blur(6px)" }} transition={{ duration: .25 }}>{STAGES[i]}</motion.p>
            </AnimatePresence>
          </div>
          <div className="h-1 w-56 overflow-hidden rounded-full bg-[var(--line)]">
            <motion.div className="h-full origin-left rounded-full bg-gradient-to-r from-accent to-accent2" initial={{ scaleX: .05 }} animate={{ scaleX: (i + 1) / STAGES.length }} transition={{ duration: .4 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
