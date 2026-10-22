"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleCheck,
  Cloud,
  Globe,
  LayoutDashboard,
  LoaderCircle,
  Plug,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState, useTransition } from "react";
import { useForm, type FieldError } from "react-hook-form";
import { sendQuote } from "@/actions/send-quote";
import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import {
  BUDGETS,
  PROJECT_TYPES,
  QUOTE_STEPS,
  TIMELINES,
  quoteSchema,
  type QuoteData,
  type QuoteErrorKey,
  type QuoteInput,
} from "@/lib/schemas";
import { cn } from "@/lib/utils";

const TYPE_ICONS = {
  management: LayoutDashboard,
  web: Globe,
  apis: Plug,
  automation: Workflow,
  cloud: Cloud,
  maintenance: Wrench,
  other: Sparkles,
} as const;

const DEFAULT_VALUES: QuoteInput = {
  projectTypes: [],
  budget: undefined as unknown as QuoteInput["budget"],
  timeline: undefined as unknown as QuoteInput["timeline"],
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
  privacy: false,
  website: "",
};

const inputClass =
  "border-border bg-background/70 text-foreground placeholder:text-subtle focus:border-accent/60 focus:ring-accent/20 block w-full rounded-xl border px-4 py-3 text-base transition-colors outline-none focus:ring-4 aria-invalid:border-danger/70";

export function QuoteForm() {
  const t = useTranslations("quote");
  const locale = useLocale();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submittedName, setSubmittedName] = useState("");
  const [pending, startTransition] = useTransition();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    reset,
    formState: { errors },
  } = useForm<QuoteInput, unknown, QuoteData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: DEFAULT_VALUES,
    mode: "onTouched",
  });

  const total = QUOTE_STEPS.length;
  const currentStep = QUOTE_STEPS[step] ?? QUOTE_STEPS[0];
  const selectedTypes = watch("projectTypes") ?? [];
  const budget = watch("budget");
  const timeline = watch("timeline");

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [step, status]);

  const errorText = (error?: FieldError | { message?: string }) => {
    const key = error?.message as QuoteErrorKey | undefined;
    return key ? t(`errors.${key}`) : undefined;
  };

  const goNext = async () => {
    const valid = await trigger([...currentStep.fields]);
    if (!valid) return;
    setDirection(1);
    setStep((value) => Math.min(value + 1, total - 1));
  };

  const goBack = () => {
    setDirection(-1);
    setStep((value) => Math.max(value - 1, 0));
  };

  const onSubmit = (data: QuoteData) => {
    setStatus("idle");
    startTransition(async () => {
      try {
        const result = await sendQuote(data, locale);
        if (result.ok) {
          setSubmittedName(data.name);
          setStatus("success");
          reset(DEFAULT_VALUES);
          setStep(0);
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    });
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-5 px-2 py-12 text-center sm:py-16"
        role="status"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
          className="bg-success/15 text-success flex size-16 items-center justify-center rounded-full"
        >
          <CircleCheck aria-hidden className="size-8" />
        </motion.span>
        <h3 ref={headingRef} tabIndex={-1} className="text-2xl font-semibold tracking-tight outline-none">
          {t("success.title")}
        </h3>
        <p className="text-muted max-w-md">{t("success.description", { name: submittedName })}</p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          {t("buttons.again")}
        </Button>
      </motion.div>
    );
  }

  const progress = ((step + 1) / total) * 100;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col">
      <div className="flex flex-col gap-3 px-5 pt-6 sm:px-8 sm:pt-8">
        <div className="flex items-center justify-between gap-4 text-xs">
          <span className="text-accent-soft font-mono tracking-wider uppercase">
            {t("stepLabel", { current: step + 1, total })}
          </span>
          <ol className="hidden items-center gap-4 sm:flex">
            {QUOTE_STEPS.map((item, index) => (
              <li
                key={item.key}
                className={cn(
                  "flex items-center gap-1.5 transition-colors",
                  index <= step ? "text-foreground" : "text-subtle",
                )}
                aria-current={index === step ? "step" : undefined}
              >
                <span
                  className={cn(
                    "flex size-5 items-center justify-center rounded-full border text-xs",
                    index < step
                      ? "border-accent bg-accent text-accent-foreground"
                      : index === step
                        ? "border-accent text-accent"
                        : "border-border",
                  )}
                >
                  {index < step ? <Check aria-hidden className="size-3" /> : index + 1}
                </span>
                {t(`steps.${item.key}`)}
              </li>
            ))}
          </ol>
        </div>
        <div
          className="bg-surface-2 h-1 overflow-hidden rounded-full"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          aria-label={t("stepLabel", { current: step + 1, total })}
        >
          <motion.div
            className="from-accent-strong to-accent-soft h-full rounded-full bg-linear-to-r"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.fieldset
            key={step}
            custom={direction}
            initial={{ opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -24 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col gap-6 px-5 py-6 sm:px-8 sm:py-8"
          >
            {step === 0 && (
              <>
                <legend className="contents">
                  <h3 ref={headingRef} tabIndex={-1} className="text-xl font-semibold tracking-tight outline-none">
                    {t("typeQuestion")}
                  </h3>
                </legend>
                <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 lg:grid-cols-3">
                  {PROJECT_TYPES.map((type) => {
                    const Icon = TYPE_ICONS[type];
                    const checked = selectedTypes.includes(type);
                    return (
                      <label
                        key={type}
                        className={cn(
                          "has-focus-visible:ring-accent/40 relative flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-sm transition-all has-focus-visible:ring-4",
                          checked
                            ? "border-accent/70 bg-accent/10 text-foreground"
                            : "border-border bg-background/50 text-foreground/85 hover:border-border-strong",
                        )}
                      >
                        <input
                          type="checkbox"
                          value={type}
                          className="sr-only"
                          {...register("projectTypes")}
                        />
                        <span
                          className={cn(
                            "flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                            checked ? "bg-accent text-accent-foreground" : "bg-surface-2 text-accent",
                          )}
                        >
                          <Icon aria-hidden className="size-4" />
                        </span>
                        <span className="font-medium">{t(`types.${type}`)}</span>
                        {checked && (
                          <Check aria-hidden className="text-accent absolute top-2 right-2 size-3.5" />
                        )}
                      </label>
                    );
                  })}
                </div>
                <FieldErrorText message={errorText(errors.projectTypes as FieldError | undefined)} />
              </>
            )}

            {step === 1 && (
              <>
                <legend className="sr-only">{t("steps.scope")}</legend>
                <div className="flex flex-col gap-3" role="radiogroup" aria-labelledby="budget-label">
                  <h3
                    id="budget-label"
                    ref={headingRef}
                    tabIndex={-1}
                    className="text-xl font-semibold tracking-tight outline-none"
                  >
                    {t("budgetQuestion")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((value) => (
                      <ChoicePill
                        key={value}
                        label={t(`budgets.${value}`)}
                        checked={budget === value}
                        inputProps={{ type: "radio", value, ...register("budget") }}
                      />
                    ))}
                  </div>
                  <FieldErrorText message={errorText(errors.budget)} />
                </div>
                <div className="flex flex-col gap-3" role="radiogroup" aria-labelledby="timeline-label">
                  <h3 id="timeline-label" className="text-xl font-semibold tracking-tight">
                    {t("timelineQuestion")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {TIMELINES.map((value) => (
                      <ChoicePill
                        key={value}
                        label={t(`timelines.${value}`)}
                        checked={timeline === value}
                        inputProps={{ type: "radio", value, ...register("timeline") }}
                      />
                    ))}
                  </div>
                  <FieldErrorText message={errorText(errors.timeline)} />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <legend className="contents">
                  <h3 ref={headingRef} tabIndex={-1} className="text-xl font-semibold tracking-tight outline-none">
                    {t("steps.contact")}
                  </h3>
                </legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="quote-name" label={t("fields.name")} required error={errorText(errors.name)}>
                    <input
                      id="quote-name"
                      type="text"
                      autoComplete="name"
                      placeholder={t("fields.namePlaceholder")}
                      className={inputClass}
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby={errors.name ? "quote-name-error" : undefined}
                      {...register("name")}
                    />
                  </Field>
                  <Field id="quote-email" label={t("fields.email")} required error={errorText(errors.email)}>
                    <input
                      id="quote-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      autoCapitalize="none"
                      spellCheck={false}
                      placeholder={t("fields.emailPlaceholder")}
                      className={inputClass}
                      aria-invalid={errors.email ? true : undefined}
                      aria-describedby={errors.email ? "quote-email-error" : undefined}
                      {...register("email")}
                    />
                  </Field>
                  <Field id="quote-company" label={t("fields.company")}>
                    <input
                      id="quote-company"
                      type="text"
                      autoComplete="organization"
                      placeholder={t("fields.companyPlaceholder")}
                      className={inputClass}
                      {...register("company")}
                    />
                  </Field>
                  <Field id="quote-phone" label={t("fields.phone")} error={errorText(errors.phone)}>
                    <input
                      id="quote-phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder={t("fields.phonePlaceholder")}
                      className={inputClass}
                      aria-invalid={errors.phone ? true : undefined}
                      aria-describedby={errors.phone ? "quote-phone-error" : undefined}
                      {...register("phone")}
                    />
                  </Field>
                  <Field
                    id="quote-message"
                    label={t("fields.message")}
                    required
                    error={errorText(errors.message)}
                    className="sm:col-span-2"
                  >
                    <textarea
                      id="quote-message"
                      rows={5}
                      placeholder={t("fields.messagePlaceholder")}
                      className={cn(inputClass, "min-h-32 resize-y")}
                      aria-invalid={errors.message ? true : undefined}
                      aria-describedby={errors.message ? "quote-message-error" : undefined}
                      {...register("message")}
                    />
                  </Field>
                </div>
                <div aria-hidden className="sr-only">
                  <label htmlFor="quote-website">{t("fields.website")}</label>
                  <input id="quote-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="flex min-h-11 cursor-pointer items-start gap-3 text-sm">
                    <input
                      type="checkbox"
                      className="accent-accent border-border mt-0.5 size-5 shrink-0 cursor-pointer rounded"
                      aria-invalid={errors.privacy ? true : undefined}
                      aria-describedby={errors.privacy ? "quote-privacy-error" : undefined}
                      {...register("privacy")}
                    />
                    <span className="text-muted leading-relaxed">
                      {t.rich("fields.privacy", {
                        link: (chunks) => (
                          <Link
                            href="/legal/privacidad"
                            target="_blank"
                            className="text-accent-soft underline underline-offset-4"
                          >
                            {chunks}
                          </Link>
                        ),
                      })}
                    </span>
                  </label>
                  <FieldErrorText id="quote-privacy-error" message={errorText(errors.privacy)} />
                </div>
              </>
            )}
          </motion.fieldset>
        </AnimatePresence>
      </div>

      {status === "error" && (
        <p role="alert" className="border-danger/30 bg-danger/10 text-danger mx-5 rounded-xl border px-4 py-3 text-sm sm:mx-8">
          {t("errors.generic")}
        </p>
      )}

      <div className="border-border bg-surface/95 sticky bottom-0 z-10 mt-2 flex items-center justify-between gap-3 rounded-b-2xl border-t px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur sm:static sm:px-8 sm:py-5">
        <Button
          type="button"
          variant="ghost"
          onClick={goBack}
          className={cn(step === 0 && "invisible")}
          aria-hidden={step === 0 ? true : undefined}
          tabIndex={step === 0 ? -1 : undefined}
        >
          <ArrowLeft aria-hidden />
          {t("buttons.back")}
        </Button>
        {step < total - 1 ? (
          <Button type="button" onClick={goNext} className="min-w-32">
            {t("buttons.next")}
            <ArrowRight aria-hidden />
          </Button>
        ) : (
          <Button type="submit" disabled={pending} className="min-w-40">
            {pending ? (
              <>
                <LoaderCircle aria-hidden className="animate-spin" />
                {t("buttons.sending")}
              </>
            ) : (
              <>
                {t("buttons.submit")}
                <ArrowRight aria-hidden />
              </>
            )}
          </Button>
        )}
      </div>
    </form>
  );
}

function FieldErrorText({ message, id }: { message?: string; id?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="text-danger text-sm">
      {message}
    </p>
  );
}

function Field({
  id,
  label,
  required,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-foreground/90 text-sm font-medium">
        {label}
        {required && (
          <span aria-hidden className="text-accent ml-0.5">
            *
          </span>
        )}
      </label>
      {children}
      <FieldErrorText id={`${id}-error`} message={error} />
    </div>
  );
}

function ChoicePill({
  label,
  checked,
  inputProps,
}: {
  label: string;
  checked: boolean;
  inputProps: React.InputHTMLAttributes<HTMLInputElement> & { ref?: React.Ref<HTMLInputElement> };
}) {
  return (
    <label
      className={cn(
        "has-focus-visible:ring-accent/40 flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all has-focus-visible:ring-4",
        checked
          ? "border-accent/70 bg-accent/10 text-foreground"
          : "border-border bg-background/50 text-foreground/80 hover:border-border-strong",
      )}
    >
      <input className="sr-only" {...inputProps} />
      <span
        aria-hidden
        className={cn(
          "flex size-4 items-center justify-center rounded-full border transition-colors",
          checked ? "border-accent bg-accent" : "border-border-strong",
        )}
      >
        {checked && <span className="bg-accent-foreground size-1.5 rounded-full" />}
      </span>
      {label}
    </label>
  );
}
