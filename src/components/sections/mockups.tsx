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
  return <span className={cn("block h-2 rounded-full bg-border-strong", className)} />;
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
          <div key={kpi.label} className="rounded-xl border border-border bg-surface p-2.5 sm:p-3">
            <span className="block truncate text-xs text-subtle">{kpi.label}</span>
            <span className="block text-sm font-semibold text-foreground tabular-nums sm:text-lg">
              {kpi.value}
            </span>
            <span className="text-xs text-success">{kpi.delta}</span>
          </div>
        ))}
      </div>
      <div className="flex h-32 items-end gap-1.5 rounded-xl border border-border bg-surface p-3 sm:h-40 sm:gap-2">
        {BARS.map((height, index) => (
          <span
            key={index}
            className="flex-1 rounded-t-sm bg-linear-to-t from-accent/30 to-accent"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function AuthMock({ labels }: MockProps) {
  return (
    <div
      aria-hidden
      className="mx-auto flex max-w-xs flex-col gap-3 rounded-xl border border-border bg-surface p-4"
    >
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-subtle">{labels.email}</span>
        <div className="h-8 rounded-lg border border-border bg-background" />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-subtle">{labels.password}</span>
        <div className="flex h-8 items-center gap-1 rounded-lg border border-border bg-background px-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="size-1.5 rounded-full bg-muted" />
          ))}
        </div>
      </div>
      <div className="flex h-8 items-center justify-center rounded-lg bg-accent text-xs font-medium text-accent-foreground">
        {labels.signIn}
      </div>
      <div className="flex h-8 items-center justify-center gap-2 rounded-lg border border-border text-xs text-muted">
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
          className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 font-mono text-xs text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <Line className="w-3/4" />
            <Line className="w-1/2 bg-border" />
          </div>
          <span className={cn("shrink-0 rounded-full px-2 py-0.5 text-xs", doc.tone)}>
            {doc.status}
          </span>
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
    <div aria-hidden className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border p-3">
        <div className="flex h-8 flex-1 items-center gap-2 rounded-lg border border-border bg-background px-3 text-xs text-subtle">
          <Search className="size-3.5" />
          {labels.search}
        </div>
        <span className="hidden h-8 w-20 rounded-lg border border-border bg-background min-[400px]:block" />
        <span className="hidden h-8 w-20 rounded-lg border border-border bg-background sm:block" />
      </div>
      <div className="divide-y divide-border">
        {rows.map(([a, b, dot], index) => (
          <div key={index} className="grid grid-cols-12 items-center gap-3 px-3 py-2.5">
            <span className="col-span-1 size-3.5 rounded bg-border" />
            <Line className={cn("col-span-5", a)} />
            <Line className={cn("col-span-3 bg-border", b)} />
            <span className="col-span-3 flex items-center justify-end gap-1.5">
              <span className={cn("size-2 rounded-full", dot)} />
              <Line className="w-8 bg-border" />
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-1 border-t border-border p-2.5">
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
          <div className="flex w-full items-center gap-3 rounded-xl border border-border bg-surface p-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Icon className="size-4" />
            </span>
            <span className="truncate text-sm text-foreground/90">{label}</span>
          </div>
          {index < steps.length - 1 && (
            <ArrowRight className="size-4 shrink-0 rotate-90 text-accent/60 sm:rotate-0" />
          )}
        </div>
      ))}
    </div>
  );
}
