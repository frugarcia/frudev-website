import { ArrowRight, Bell, Clock, Database, Search, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export type MockLabels = {
  revenue: string;
  orders: string;
  users: string;
  search: string;
  email: string;
  password: string;
  signIn: string;
  google: string;
  draft: string;
  review: string;
  approved: string;
  trigger: string;
  extract: string;
  transform: string;
  notify: string;
};

type MockProps = { labels: MockLabels };

const BARS = [38, 52, 45, 64, 58, 72, 66, 84, 78, 92, 86, 100];

function Line({ className }: { className?: string }) {
  return <span className={cn("bg-border-strong block h-2 rounded-full", className)} />;
}

export function DashboardMock({ labels }: MockProps) {
  const kpis = [
    { label: labels.revenue, value: "48.2k", delta: "+12%" },
    { label: labels.orders, value: "1,284", delta: "+8%" },
    { label: labels.users, value: "312", delta: "+21%" },
  ];
  return (
    <div aria-hidden className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="border-border bg-surface rounded-xl border p-2.5 sm:p-3">
            <span className="text-subtle block truncate text-xs">{kpi.label}</span>
            <span className="text-foreground block text-sm font-semibold tabular-nums sm:text-lg">
              {kpi.value}
            </span>
            <span className="text-success text-xs">{kpi.delta}</span>
          </div>
        ))}
      </div>
      <div className="border-border bg-surface flex h-32 items-end gap-1.5 rounded-xl border p-3 sm:h-40 sm:gap-2">
        {BARS.map((height, index) => (
          <span
            key={index}
            className="from-accent/30 to-accent flex-1 rounded-t-sm bg-linear-to-t"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function AuthMock({ labels }: MockProps) {
  return (
    <div aria-hidden className="border-border bg-surface mx-auto flex max-w-xs flex-col gap-3 rounded-xl border p-4">
      <div className="flex flex-col gap-1.5">
        <span className="text-subtle text-xs">{labels.email}</span>
        <div className="border-border bg-background h-8 rounded-lg border" />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-subtle text-xs">{labels.password}</span>
        <div className="border-border bg-background flex h-8 items-center gap-1 rounded-lg border px-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="bg-muted size-1.5 rounded-full" />
          ))}
        </div>
      </div>
      <div className="bg-accent text-accent-foreground flex h-8 items-center justify-center rounded-lg text-xs font-medium">
        {labels.signIn}
      </div>
      <div className="border-border text-muted flex h-8 items-center justify-center gap-2 rounded-lg border text-xs">
        <span className="size-3 rounded-full bg-linear-to-br from-red-400 via-amber-300 to-emerald-400" />
        {labels.google}
      </div>
    </div>
  );
}

export function DocumentsMock({ labels }: MockProps) {
  const docs = [
    { status: labels.approved, tone: "bg-success/15 text-success" },
    { status: labels.review, tone: "bg-amber-400/15 text-amber-300" },
    { status: labels.draft, tone: "bg-surface-2 text-muted" },
  ];
  return (
    <div aria-hidden className="flex flex-col gap-2">
      {docs.map((doc, index) => (
        <div
          key={doc.status}
          className="border-border bg-surface flex items-center gap-3 rounded-xl border p-3"
        >
          <span className="bg-accent/10 text-accent flex size-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <Line className="w-3/4" />
            <Line className="bg-border w-1/2" />
          </div>
          <span className={cn("shrink-0 rounded-full px-2 py-0.5 text-xs", doc.tone)}>{doc.status}</span>
        </div>
      ))}
    </div>
  );
}

export function TableMock({ labels }: MockProps) {
  const rows = [
    ["w-24", "w-16", "bg-success"],
    ["w-20", "w-12", "bg-amber-300"],
    ["w-28", "w-20", "bg-success"],
    ["w-16", "w-14", "bg-danger"],
    ["w-24", "w-10", "bg-success"],
  ] as const;
  return (
    <div aria-hidden className="border-border bg-surface overflow-hidden rounded-xl border">
      <div className="border-border flex items-center gap-2 border-b p-3">
        <div className="border-border bg-background text-subtle flex h-8 flex-1 items-center gap-2 rounded-lg border px-3 text-xs">
          <Search className="size-3.5" />
          {labels.search}
        </div>
        <span className="border-border bg-background hidden h-8 w-20 rounded-lg border min-[400px]:block" />
        <span className="border-border bg-background hidden h-8 w-20 rounded-lg border sm:block" />
      </div>
      <div className="divide-border divide-y">
        {rows.map(([a, b, dot], index) => (
          <div key={index} className="grid grid-cols-12 items-center gap-3 px-3 py-2.5">
            <span className="bg-border size-3.5 rounded col-span-1" />
            <Line className={cn("col-span-5", a)} />
            <Line className={cn("bg-border col-span-3", b)} />
            <span className="col-span-3 flex items-center justify-end gap-1.5">
              <span className={cn("size-2 rounded-full", dot)} />
              <Line className="bg-border w-8" />
            </span>
          </div>
        ))}
      </div>
      <div className="border-border flex items-center justify-end gap-1 border-t p-2.5">
        {[1, 2, 3].map((page) => (
          <span
            key={page}
            className={cn(
              "flex size-6 items-center justify-center rounded-md font-mono text-xs",
              page === 1 ? "bg-accent text-accent-foreground" : "text-subtle",
            )}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
}

export function AutomationMock({ labels }: MockProps) {
  const steps = [
    { label: labels.trigger, Icon: Clock },
    { label: labels.extract, Icon: Database },
    { label: labels.transform, Icon: Sparkles },
    { label: labels.notify, Icon: Bell },
  ];
  return (
    <div aria-hidden className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
      {steps.map(({ label, Icon }, index) => (
        <div key={label} className="flex flex-col items-center gap-2 sm:flex-1 sm:flex-row">
          <div className="border-border bg-surface flex w-full items-center gap-3 rounded-xl border p-3">
            <span className="bg-accent/10 text-accent flex size-8 shrink-0 items-center justify-center rounded-lg">
              <Icon className="size-4" />
            </span>
            <span className="text-foreground/90 truncate text-sm">{label}</span>
          </div>
          {index < steps.length - 1 && (
            <ArrowRight className="text-accent/60 size-4 shrink-0 rotate-90 sm:rotate-0" />
          )}
        </div>
      ))}
    </div>
  );
}
