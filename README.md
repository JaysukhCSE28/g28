# G28 — GATE CSE 2028 Tracker & Roadmap

**G28** is an interactive, browser-based study tracker built for GATE CSE 2028 aspirants. Track your subject completion, organize video lectures by day, and monitor your daily progress — all saved directly in your browser with no sign-up required.

🌐 **Live:** [https://g28.vercel.app](https://g28.vercel.app)

---

## Features

- 📚 **13 GATE CSE Subjects** — Discrete Mathematics, Algorithms, OS, DBMS, CN, COA, and more
- 🎥 **Video Lecture Planner** — Curated YouTube playlists organized by topic
- 📅 **Day-by-Day Study Schedule** — Set your daily study hours and speed; the app groups videos into days automatically
- ✅ **Progress Tracking** — Check off videos as you complete them; progress is saved in your browser
- 🌙 **Dark Mode** — Clean dark UI with blue accents, built for long study sessions
- 🚫 **No Sign-Up Needed** — Fully local, no accounts, no database

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS + shadcn/ui |
| Animation | Framer Motion |
| Storage | Browser localStorage (no database) |
| Package Manager | pnpm |
| Deployment | Vercel |

---

## Running Locally

**Prerequisites:** Node.js 18+, pnpm installed

```bash
# 1. Clone the repository
git clone https://github.com/jaysukhsesham/g28.git
cd g28

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> No `.env` file is required — this app has no backend or database.

---

## Deployment

Deploy instantly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jaysukhsesham/g28)

No environment variables are needed for deployment.

---

## Author

**Jaysukh Sesham**
GitHub: [@jaysukhsesham](https://github.com/jaysukhsesham)
