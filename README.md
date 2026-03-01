# Engineer's Workbench Portfolio

A single-page interactive portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## Stack
- **Next.js 14** (App Router)
- **Tailwind CSS** — brushed metal theme, custom animations
- **Framer Motion** — spring physics, click-to-zoom modals
- **IBM Plex Mono** + **Bebas Neue** + **DM Sans** fonts

## Local Dev

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard
1. Push to GitHub:
```bash
git init
git add .
git commit -m "init: engineer workbench portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Click **Deploy** — done in ~60 seconds

## Customization

Update your real links in these files:
- `components/TopBar.tsx` — GitHub URL
- `components/modals/AboutModal.tsx` — LinkedIn, email, GitHub
- `app/layout.tsx` — meta title/description

## Structure
```
app/
  layout.tsx          # fonts, metadata
  page.tsx            # root: boot screen + modals
  globals.css         # metal textures, CRT, cursor

components/
  WorkbenchScene.tsx  # desk layout + object positioning
  TopBar.tsx          # fixed nav
  CustomCursor.tsx    # amber dot cursor
  objects/
    RoboticArm.tsx    # → Robotics modal
    Oscilloscope.tsx  # → Embedded modal
    Laptop.tsx        # → Software/AI modal
    CoffeeMug.tsx     # → About modal
    Diploma.tsx       # → Education modal
    Trophy.tsx        # → Awards modal
  modals/
    ModalBase.tsx     # shared panel wrapper
    RoboticsModal.tsx
    EmbeddedModal.tsx
    SoftwareModal.tsx
    AboutModal.tsx
    EducationModal.tsx
    AwardsModal.tsx
```
# portfolio
