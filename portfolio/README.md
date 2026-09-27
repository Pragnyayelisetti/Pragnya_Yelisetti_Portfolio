# Pragnya Yelisetti — Portfolio

A premium, interactive developer portfolio built with React, TypeScript, Vite, Tailwind CSS,
and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`) in your browser.

## Build for production

```bash
npm run build
npm run preview
```

The production build is emitted to `dist/`. Deploy that folder to Vercel, Netlify, GitHub Pages,
or any static host.

## Project structure

```
src/
  data/portfolio.ts     ← all resume content lives here — edit this file to update the site
  components/
    Navbar.tsx           ← includes a resume download link
    Hero.tsx             ← interactive terminal + animated hero + resume download button
    SpaceBackground.tsx  ← interactive starfield / nebula / aurora backdrop
    About.tsx
    Skills.tsx
    Projects.tsx         ← cover image + problem statement per card, full breakdown modal
    Experience.tsx
    Achievements.tsx     ← animated stat counters
    Education.tsx
    Contact.tsx          ← contact form that emails you directly (see EmailJS setup below)
    ScrollProgress.tsx   ← top progress bar
    CustomCursor.tsx     ← desktop-only cursor interaction
    AnimatedCounter.tsx
  App.tsx
  index.css
public/
  Pragnya_Yelisetti_Resume.pdf   ← served for the "Download Resume" buttons
  images/projects/*.svg          ← cover illustrations for each project card
```

## Customizing

- **Content**: edit `src/data/portfolio.ts` only — every section reads from it (including each
  project's `problem` statement and `image` cover art path).
- **Colors / type scale**: edit `tailwind.config.ts` under `theme.extend`.
- **Sections order**: reorder the component list in `src/App.tsx`.
- **Resume file**: replace `public/Pragnya_Yelisetti_Resume.pdf` with an updated PDF any time —
  keep the same filename, or update the `href`/`download` attributes in `Hero.tsx` and
  `Navbar.tsx` if you rename it.
- **Project cover art**: swap any `public/images/projects/*.svg` for your own image (PNG/JPG/SVG)
  and update the matching `image` path in `src/data/portfolio.ts`. The current covers are custom
  vector illustrations styled to each project's theme (not photos) — drop in real screenshots or
  AI-generated art whenever you have them.

## Contact form → direct email delivery (EmailJS)

The contact form works out of the box with **zero setup**: if no EmailJS keys are configured, it
falls back to opening the visitor's own email app with the message pre-filled. To make messages
land straight in your inbox with no email app involved:

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Add an **Email Service** (Gmail works well) → note the **Service ID**.
3. Create an **Email Template** with the variables `from_name`, `from_email`, `message`, `to_email`
   → note the **Template ID**.
4. Copy your **Public Key** from Account → General.
5. Copy `.env.example` to `.env` and fill in the three values:
   ```
   VITE_EMAILJS_SERVICE_ID=...
   VITE_EMAILJS_TEMPLATE_ID=...
   VITE_EMAILJS_PUBLIC_KEY=...
   ```
6. Restart `npm run dev` (or redeploy) — the form now sends silently via EmailJS.

`.env` is already git-ignored, so your keys won't be committed.

## Notes

- Respects `prefers-reduced-motion` throughout, including the space background.
- Custom cursor auto-disables on touch devices.
- All external links (GitHub, certifications, achievements) open in a new tab.


## Latest visual update
- Added the three supplied AI project visuals to the Projects section.
- Project cards use compact image panels and distinct violet/cyan/amber accents.
- The cosmic galaxy field is centered across the full page background rather than confined to the sides.
