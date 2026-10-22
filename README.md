# frudev technologies

Web corporativa bilingüe (ES/EN) de **frudev technologies**, orientada a captar clientes mediante un formulario de presupuesto multipaso.

## Stack

- Next.js 15 (App Router), React 19 y TypeScript estricto
- Tailwind CSS 4, primitivas Radix y `lucide-react`
- `next-intl` para rutas `/es` y `/en`, metadatos y `hreflang` por idioma
- `motion` para animaciones y `lenis` para scroll suave (desactivado en táctil y con `prefers-reduced-motion`)
- `react-hook-form` + `zod` (esquema compartido cliente/servidor) y Server Action con Resend

## Puesta en marcha

```bash
npm install
cp .env.example .env.local
npm run dev
```

| Script              | Descripción                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Servidor de desarrollo (Turbopack) |
| `npm run build`     | Build de producción                |
| `npm run start`     | Servir el build                    |
| `npm run lint`      | ESLint                             |
| `npm run typecheck` | `tsc --noEmit`                     |
| `npm run format`    | Prettier (con orden de clases)     |

## Variables de entorno

Ver [`.env.example`](.env.example). En Vercel hay que añadirlas en _Settings > Environment Variables_.

- `RESEND_API_KEY`: sin ella el formulario funciona en modo mock y solo registra la solicitud en el log del servidor.
- `CONTACT_TO_EMAIL`: buzón que recibe las solicitudes (obligatoria si hay API key).
- `CONTACT_FROM_EMAIL`: remitente verificado en Resend. Por defecto `onboarding@resend.dev`, que solo entrega a la cuenta propietaria; el email de confirmación al cliente requiere un dominio verificado.
- `NEXT_PUBLIC_SITE_URL`: URL pública para canonical, sitemap y Open Graph.
- `NEXT_PUBLIC_CONTACT_EMAIL`: email de contacto público opcional (footer, legales, JSON-LD).

## Contenido editable

- `src/config/site.ts`: `EXPERIENCE_START_YEAR` (años de experiencia calculados), estadísticas de la barra de confianza, enlaces y datos legales (titular, NIF, dirección).
- `src/config/stack.ts`: tecnologías mostradas.
- `messages/es.json` y `messages/en.json`: todos los textos de la web.

## Estructura

```
src/
  app/[locale]/          layout, home, legal/[slug], opengraph-image, not-found
  app/sitemap.ts, robots.ts
  actions/send-quote.ts  Server Action del formulario
  components/layout/     Header, MobileMenu, Footer, LanguageSwitcher, Logo
  components/sections/   Hero, TrustBar, Services, WhatWeBuild, Process, WhyUs, Stack, Faq, Cta, QuoteForm
  components/motion/     Reveal, Stagger, Counter, SmoothScroll
  components/ui/         Button, Card, Section, SectionHeading, Accordion
  config/  i18n/  lib/
messages/es.json, en.json
```
