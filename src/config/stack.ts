export const STACK = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "TanStack",
    "Tailwind CSS",
    "Radix / shadcn",
    "Zod",
    "Framer Motion",
  ],
  backend: ["Node.js", "Express", "APIs REST", "PHP", "SQL"],
  cloud: ["Docker", "Nginx", "Google Cloud Run", "Vercel", "CI/CD"],
} as const;

export const MARQUEE_TECH = [
  ...STACK.frontend,
  ...STACK.backend,
  ...STACK.cloud,
  "Firebase",
  "Contentful",
  "Redux",
  "Vite",
] as const;
