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
- **Contact** — Form that sends messages to your email
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

The contact form sends submissions to your email using [Formspree](https://formspree.io) (no backend needed).

### One-time setup

1. Go to [formspree.io](https://formspree.io) and sign up (free).
2. Click **New form**.
3. Set the form email to the address where you want to receive submissions.
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
