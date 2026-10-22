"use client";

import { motion } from "motion/react";
import { Activity, CloudUpload, Gauge } from "lucide-react";

type Token = { text: string; tone?: "kw" | "fn" | "str" | "type" | "muted" | "num" };

const CODE: Token[][] = [
  [{ text: "export async function ", tone: "kw" }, { text: "launch", tone: "fn" }, { text: "(project: " }, { text: "Project", tone: "type" }, { text: ") {" }],
  [{ text: "  const app = " }, { text: "await ", tone: "kw" }, { text: "build", tone: "fn" }, { text: "(project, {" }],
  [{ text: "    stack: [" }, { text: '"next"', tone: "str" }, { text: ", " }, { text: '"typescript"', tone: "str" }, { text: "]," }],
  [{ text: "    tests: " }, { text: "true", tone: "kw" }, { text: ", a11y: " }, { text: "true", tone: "kw" }, { text: "," }],
  [{ text: "  });" }],
  [{ text: "  " }, { text: "// docker + cloud run, zero downtime", tone: "muted" }],
  [{ text: "  " }, { text: "await ", tone: "kw" }, { text: "deploy", tone: "fn" }, { text: "(app, { region: " }, { text: '"europe-west1"', tone: "str" }, { text: " });" }],
  [{ text: "  " }, { text: "return ", tone: "kw" }, { text: "app." }, { text: "grow", tone: "fn" }, { text: "(" }, { text: "24", tone: "num" }, { text: " * " }, { text: "7", tone: "num" }, { text: ");" }],
  [{ text: "}" }],
];

const TONE: Record<NonNullable<Token["tone"]>, string> = {
  kw: "text-violet-300",
  fn: "text-accent-soft",
  str: "text-emerald-300",
  type: "text-amber-200",
  muted: "text-subtle",
  num: "text-orange-300",
};

export function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div className="from-accent/30 absolute -inset-px rounded-2xl bg-linear-to-b to-transparent opacity-60" />
      <div className="border-border bg-surface/90 relative overflow-hidden rounded-2xl border shadow-2xl shadow-black/50 backdrop-blur">
        <div className="border-border flex items-center gap-2 border-b px-4 py-3">
          <span className="size-2.5 rounded-full bg-red-400/70" />
          <span className="size-2.5 rounded-full bg-amber-400/70" />
          <span className="size-2.5 rounded-full bg-emerald-400/70" />
          <span className="text-subtle ml-3 font-mono text-xs">launch.ts</span>
        </div>
        <pre className="overflow-hidden p-4 font-mono text-xs leading-6 sm:p-5 sm:text-sm sm:leading-7">
          {CODE.map((line, i) => (
            <motion.div
              key={i}
              className="flex whitespace-pre"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.35 }}
            >
              <span className="text-subtle/60 mr-4 inline-block w-4 text-right select-none">{i + 1}</span>
              <span className="min-w-0 truncate">
                {line.map((token, j) => (
                  <span key={j} className={token.tone ? TONE[token.tone] : "text-foreground/90"}>
                    {token.text}
                  </span>
                ))}
              </span>
            </motion.div>
          ))}
          <motion.span
            className="bg-accent ml-8 inline-block h-4 w-2 align-middle"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.1 }}
          />
        </pre>
      </div>

      <motion.div
        className="border-border bg-surface-2/95 absolute -bottom-6 -left-2 flex items-center gap-3 rounded-xl border px-4 py-3 shadow-xl backdrop-blur sm:-left-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.5 }}
      >
        <span className="flex size-9 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
          <CloudUpload className="size-4" />
        </span>
        <span className="flex flex-col">
          <span className="text-foreground text-sm font-medium">Deploy OK</span>
          <span className="text-subtle font-mono text-xs">cloud run · 42s</span>
        </span>
      </motion.div>

      <motion.div
        className="border-border bg-surface-2/95 absolute -top-5 -right-2 hidden items-center gap-3 rounded-xl border px-4 py-3 shadow-xl backdrop-blur min-[420px]:flex sm:-right-6"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.5 }}
      >
        <span className="bg-accent/15 text-accent flex size-9 items-center justify-center rounded-lg">
          <Gauge className="size-4" />
        </span>
        <span className="flex flex-col">
          <span className="text-foreground text-sm font-medium">Lighthouse 100</span>
          <span className="text-subtle flex items-center gap-1 font-mono text-xs">
            <Activity className="size-3" /> LCP 0.8s
          </span>
        </span>
      </motion.div>
    </div>
  );
}
