# AbTalks Streak Builder

ROLE Redesign the visual layer of ABTalks — a 60-day coding-challenge platform for Indian college students (mock data only, no auth/backend, no recruiter/admin panel). Build exactly 3 routes: /, /dashboard, /day/12. Mobile-first at 390px width — desktop is secondary. React + Vite + Tailwind + React Router.

DESIGN SYSTEM Soft, warm, bold — pill shapes everywhere, floating large-radius cards, one dominant accent.

Colors: bg #F6F5F2, surface #FFFFFF, text #171620, muted #6E6C7C, primary accent (brand/CTA/links/progress) #6D4CFF, warm accent (streak/XP/energy) #FF7A3D, success #22C55E, missed #F4576B

Type: Space Grotesk for headings (bold, tight, rounded terminals), Inter for body

Shape: 28px radius on cards, full-pill (999px) on buttons/search/tabs/chips

Shadow: soft and large — 0 16px 40px rgba(20,15,50,0.08), no hard borders

Components: pill tab bar with underline active state · stat cards with a soft color-blob behind the icon · full-width pill CTA buttons · dot pagination on carousels · icon-only bottom nav with a filled accent circle behind the active icon

Keep the ABTalks wordmark/logo, restyled for a light background

PRIORITY — judges auto-screenshot each route at 390px on default load (no interaction). Get hero/cards/nav pixel-complete in their default state first. Treat drawer/hover/scroll animations as secondary polish.

MOCK DATA (src/data/mockData.js) — one exported object per shape below, realistic values:

student = { name, streak, longestStreak, freezesLeft, xp, level, completedDays, totalDays: 60, track, missedYesterday: bool, profileComplete: bool }
days = [{ day, title, difficulty ("Easy"|"Medium"|"Hard"), estTime, skills: [], resources: [{label, url}], status }]
achievements = [{ id, label, icon, earned: bool }]
testimonials = [{ name, role, quote, rating }]


ROUTE / — Landing

Nav: logo, hamburger, "Sign in" pill

Hero: bold 2-line headline + 1-line subhead (what it is, free, for beginners) + primary CTA pill "Start the Challenge →"

Trust stats row: 10,000+ members / 500+ projects / 100+ hiring partners

4 feature cards: Daily Coding, Build Streak, Impress Recruiters, Certificates

How it works: numbered 5-step flow — Choose Track → Build Daily → Submit GitHub → Share LinkedIn → Complete 60 Days

3 testimonial cards, swipeable, dot pagination

FAQ accordion, 3 items: Is it free? / Can beginners join? / What if I miss a day?

Minimal footer

ROUTE /dashboard — Student Dashboard

Header: "Welcome back, {name}" + streak flame badge

Streak card: flame icon on color blob, streak count, longest-streak substat

Today's task card: title, difficulty, est. time, "Continue Challenge →" → /day/12

Progress: pill progress bar "{completedDays}/60 days" + overall completion %

Weekly calendar strip: Mon–Sun chips, done/missed/today states

Achievements: horizontal scroll of badges, unearned ones dimmed

Edge states driven by mock data flags (no real state machine needed):

streak === 0 → replace streak card with "Welcome! Start Day 1 today" (encouraging, not a bare "0")

missedYesterday === true → soft banner: "You missed a day — one skip won't break your streak" (ties to Streak Freeze below), not a guilt message

profileComplete === false → checklist banner above the fold: add photo / bio / track

ROUTE /day/12 — Challenge Day

Back button + "Day 12 of 60" label

Task card: title, star-rating difficulty, est. time, skill chips

2–3 line description + "what to build" bullets

3 resource pills: video / docs / starter code

Submission form: GitHub URL + LinkedIn URL inputs (both required), pill submit button

On submit: swap form for a celebration state — "Day 12 Completed 🎉", streak/XP increment shown, "Back to Dashboard" pill button. Persist to localStorage so the completed state survives a refresh.

SIGNATURE FEATURE — Streak Freeze Each student gets 1 free freeze per week. A missed day burns a freeze instead of resetting the streak to 0 — shown as a small "❄️ {freezesLeft} left" next to the flame everywhere streak appears. This is the one idea that should feel considered — make it visible and legible, not just a data field.

EDGE-CASE TESTING Add a small low-key debug chip (bottom-left, dismissible) that swaps student between 4 preset states — New (streak 0) / Active / Missed-day / Empty-profile — so every edge case is reachable without auth. Style it as an obvious dev tool, not a real feature.

CONSTRAINTS No login flow, no database, no recruiter/admin views. All 3 routes must render fully populated (no lorem ipsum) on first load. No horizontal scroll at 390px, tap targets ≥44px.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ff9c0b0d-409b-4039-ac04-ab0556ad8c90).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
