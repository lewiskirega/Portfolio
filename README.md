# Lewis Kirega — Portfolio

Personal portfolio for **Lewis Kirega**, front-end and back-end developer and cybersecurity expert based in Nairobi, Kenya.

---

## What’s in this repo

- **Hero** — Intro, location, and links to GitHub, LinkedIn, X, and email
- **About** — Bio, photo, and timeline
- **Skills** — Front-end, back-end, cybersecurity, databases, and tools
- **Projects** — Featured work with links to GitHub (Portfolio, HybridGuard, OpenVAS, Lily Period Tracker, Phishing Detector, and more)
- **Services** — What you offer
- **Metrics** — Highlights
- **Contact** — Form that sends messages to your email (lewismk744@gmail.com)
- **Footer** — Links and quick nav

Tech: **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Motion**, **Radix UI**, **Lucide** icons.

---

## Run locally

```bash
npm install
npm run dev
```

Open the URL in the terminal (e.g. http://localhost:5173).

---

## Contact form (emails to you)

The contact form sends submissions to **lewismk744@gmail.com** using [Formspree](https://formspree.io) (no backend needed).

### One-time setup

1. Go to [formspree.io](https://formspree.io) and sign up (free).
2. Click **New form**.
3. Set the form email to **lewismk744@gmail.com** (or the address you want).
4. After saving, copy your **form ID** from the form URL:`https://formspree.io/f/XXXXXXXX` → the ID is `XXXXXXXX`.
5. In the project root, create a file named `.env`:
   ```bash
   cp .env.example .env
   ```
6. Open `.env` and set:
   ```env
   VITE_FORMSPREE_ID=XXXXXXXX
   ```

   (Replace `XXXXXXXX` with your form ID.)
7. Restart the dev server (`npm run dev`).

After this, every submitted message (name, email, subject, message) is sent to your Formspree inbox and forwarded to your email. You can also view and manage submissions in the Formspree dashboard.

---

## Deploy to production

Run `npm run build` (output is in `dist/`). Set `VITE_FORMSPREE_ID` in your host environment so the contact form works in production.

### Option 1: Vercel (recommended)

1. Push your code to GitHub (e.g. [lewiskirega/Portfolio](https://github.com/lewiskirega/Portfolio)).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New…** → **Project** and import your portfolio repo.
4. Leave **Framework Preset** as Vite, **Build Command** as `npm run build`, **Output Directory** as `dist`.
5. Under **Environment Variables**, add: **Name** `VITE_FORMSPREE_ID`, **Value** `mjgeopyk`.
6. Click **Deploy**. You get a URL (e.g. `portfolio-xxx.vercel.app`). Optional: add a custom domain in **Project → Settings → Domains**.

Every push to `main` will auto-deploy.

### Option 2: Netlify

1. Push your code to GitHub.
2. Go to [netlify.com](https://netlify.com) and sign in with GitHub.
3. **Add new site** → **Import an existing project** → choose your repo.
4. **Build command:** `npm run build`, **Publish directory:** `dist`.
5. **Site settings** → **Environment variables** → add `VITE_FORMSPREE_ID` = `mjgeopyk`.
6. Deploy. Optional: **Domain settings** for a custom domain.

### Option 3: GitHub Pages

1. In `package.json` add: `"homepage": "https://lewiskirega.github.io/Portfolio/"`.
2. Install: `npm install -D gh-pages`.
3. In `package.json` scripts add: `"predeploy": "npm run build"` and `"deploy": "gh-pages -d dist"`.
4. On GitHub: **Settings** → **Pages** → **Source**: deploy from branch **gh-pages**.
5. Run `npm run deploy`.

For GitHub Pages, set `VITE_FORMSPREE_ID` in the build environment (e.g. GitHub Actions secrets or repo variables) so the contact form works.

### After deploying

Test the contact form on the live URL; submissions should go to lewismk744@gmail.com. If it fails, confirm `VITE_FORMSPREE_ID` is set and you redeployed after adding it.


---

## Project structure

```
├── index.html
├── package.json
├── vite.config.ts
├── .env.example          # Copy to .env and add VITE_FORMSPREE_ID
├── public/
│   └── lewis.png         # About section photo
└── src/
    ├── main.tsx
    ├── styles/
    └── app/
        ├── App.tsx
        └── components/
            ├── hero.tsx
            ├── about.tsx
            ├── skills.tsx
            ├── projects.tsx
            ├── services.tsx
            ├── metrics.tsx
            ├── contact.tsx   # Form wired to Formspree
            ├── footer.tsx
            └── ...
```

---

## Links

- **GitHub:** [github.com/lewiskirega](https://github.com/lewiskirega)
- **Email:** lewismk744@gmail.com
- **LinkedIn:** [Lewis Kirega](https://linkedin.com/in/Lewis-Kirega)
- **X:** [@Mk_Expertwriter](https://x.com/Mk_Expertwriter)
