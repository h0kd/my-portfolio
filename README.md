Here’s a starter **README.md** for your full-stack Next.js + Tailwind portfolio, including i18n, theming, and everything we’ve built:

# Leonardo Del Pino • Portfolio

My personal portfolio built with Next.js (App Router), Tailwind CSS, next-intl for i18n, and shadcn/ui.  
Supports English (`/en/...`) and Spanish (`/es/...`), dark/light mode, analytics, CV download, projects listing & detail pages, contact form, and more.

---

## 🚀 Features

- **Next.js 15 (App Router)** with server & client components
- **Tailwind CSS** + custom theme tokens via CSS variables
- **Internationalization** with [next-intl] prefix routing (`/en`, `/es`)
- **Dark / Light Mode** toggle (with system-preference fallback)
- **Analytics** (Vercel Analytics or GA4)
- **CV Download** button (served from `/public/files`)
- **Projects** section:
  - Grid of project cards
  - Dynamic detail pages (`/[locale]/projects/[slug]`)
- **Contact Form** with API route integration & toast feedback
- **SEO**: metadata, OpenGraph, Twitter Card
- **Performance**: image optimizations, Lighthouse scoring, lazy loading

---

## 📁 Repository Structure

my-portfolio/
├── public/
│ ├── files/Leonardo_DelPino_CV.pdf
│ └── images/… # project thumbnails, profile, noise textures…
├── messages/
│ ├── en.json # all English translations
│ └── es.json # all Spanish translations
├── src/
│ ├── app/
│ │ ├── layout.tsx # root HTML wrapper, metadata & global CSS
│ │ ├── page.tsx # fallback homepage redirect to /en or /es
│ │ ├── \[locale]/
│ │ │ ├── layout.tsx # i18n wrapper, NextIntlClientProvider
│ │ │ ├── page.tsx # localized Hero
│ │ │ ├── projects/
│ │ │ │ ├── page.tsx # `/[locale]/projects`
│ │ │ │ └── \[slug]/page.tsx # project detail
│ │ │ ├── about/page.tsx
│ │ │ └── contact/page.tsx
│ ├── components/ # shared UI (Navbar, ProjectCard, Button, etc.)
│ ├── i18n/ # next-intl routing & middleware
│ └── utils/
│ └── projects.ts # static project data
├── tailwind.config.js
├── next.config.ts
├── next-intl.config.ts
├── middleware.ts
└── package.json

---

## 🛠 Setup & Development

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run locally**

   ```bash
   npm run dev
   ```

   - [http://localhost:3000](http://localhost:3000) → redirects to your default locale `en`
   - [http://localhost:3000/es](http://localhost:3000/es) → Spanish version

3. **Build & Preview**

   ```bash
   npm run build
   npm run start
   ```

---

## 📐 Tailwind & Styling

- Global CSS in `src/app/globals.css` includes custom CSS variables, grain-noise utilities, animations, and shadcn/ui theming.
- Dark mode is toggled via `useTheme` in `ThemeProvider` + `<ModeToggle />`.

---

## 🌐 Internationalization

- Translations stored in `messages/en.json` and `messages/es.json`.
- `next-intl` plugin in `next.config.ts` automatically wires up the i18n middleware and rewrites.
- Dynamic segment `[locale]` under `src/app` scopes every route.

---

## 📦 Deployment

- Deploy on **Vercel** for zero-config Next.js support.
- Ensure `NEXT_PUBLIC_DEFAULT_LOCALE` is set (if you use env-based default locale).
- Analytics automatically enabled if you add your Vercel Analytics ID or GA4 snippet in `_app` or `layout.tsx`.

---

## 🤝 Contributing

This is my personal portfolio—pull requests are unlikely, but feel free to fork! If you spot typos, bugs or design tweaks, open an issue or PR.

---

### License

```text
MIT © Leonardo Del Pino
```

---

**Made with ❤️ & Next.js**

```



```
