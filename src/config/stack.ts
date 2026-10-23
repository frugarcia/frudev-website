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
  backend: ["Node.js", "Python", "Go", "Java", "PHP", "SQL", "Express", "APIs REST"],
  cloud: ["Docker", "Nginx", "AWS", "Google Cloud Platform", "Cloudflare", "Vercel", "CI/CD"],
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
