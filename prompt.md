# ABTalks Streak Builder — Design & Build Prompt

## Overview
Redesign the visual layer of ABTalks — a 60-day coding-challenge platform for
Indian college students (mock data only, no auth/backend, no recruiter/admin
panel). Build exactly 3 routes: `/`, `/dashboard`, `/day/12`. Mobile-first at
390px width — desktop is secondary. React + Vite + Tailwind + TanStack Router.

## Design System
Soft, warm, bold — pill shapes everywhere, floating large-radius cards, one
dominant accent.

### Colors
| Token | Value | Use |
|---|---|---|
| bg | `#F6F5F2` | page background |
| surface | `#FFFFFF` | cards |
| text | `#171620` | headings/body |
| muted | `#6E6C7C` | secondary text |
| primary accent | `#6D4CFF` | brand, CTA, links, progress |
| warm accent | `#FF7A3D` | streak, XP, energy |
| success | `#22C55E` | completed states |
| missed | `#F4576B` | missed-day states |

### Type
- **Space Grotesk** — headings (bold, tight, rounded terminals)
- **Inter** — body

### Shape
- 28px radius on cards
- full-pill (999px) on buttons / search / tabs / chips

### Shadow
Soft and large — `0 16px 40px rgba(20,15,50,0.08)`, no hard borders.

### Components
- Pill tab bar with underline active state
- Stat cards with a soft color-blob behind the icon
- Full-width pill CTA buttons
- Dot pagination on carousels
- Icon-only bottom nav with a filled accent circle behind the active icon

Keep the ABTalks wordmark/logo, restyled for a light background. Support a
dark mode with a visible theme toggle in the nav bar (persists via
localStorage, pre-paint script prevents flash).

### Priority
Judges auto-screenshot each route at 390px on default load (no interaction).
Get hero/cards/nav pixel-complete in their default state first. Treat
drawer/hover/scroll animations as secondary polish.

## Mock Data
`src/data/mockData.js` — one exported object per shape below, realistic
values:

```ts
student = {
  name, streak, longestStreak, freezesLeft, xp, level,
  completedDays, totalDays: 60, track,
  missedYesterday: bool, profileComplete: bool
}

days = [{
  day, title, difficulty ("Easy"|"Medium"|"Hard"), estTime,
  skills: [],
  resources: [{ label, url, type: "video"|"docs"|"code" }],
  status
}]

achievements = [{ id, label, icon, earned: bool }]
testimonials = [{ name, role, quote, rating }]
faqs = [{ q, a }]
```

Four student presets drive the debug chip: **New** (streak 0), **Active**,
**Missed-day**, **Empty-profile**.

## Routes

### `/` — Landing
- Nav: logo, hamburger (opens full-screen drawer with Home / Dashboard /
  Today's Challenge / Sign in), theme toggle, "Sign in" pill
- Hero: bold 2-line headline + 1-line subhead (what it is, free, for
  beginners) + primary CTA pill "Start the Challenge →"
- Trust stats row: 10,000+ members / 500+ projects / 100+ hiring partners
- 4 feature cards: Daily Coding · Build Streak · Impress Recruiters ·
  Certificates
- How it works: numbered 5-step flow — Choose Track → Build Daily → Submit
  GitHub → Share LinkedIn → Complete 60 Days
- 3 testimonial cards, swipeable with dot pagination on mobile, static 3-up
  grid on desktop
- FAQ accordion, 3 items: Is it free? / Can beginners join? / What if I miss
  a day?
- Minimal footer

### `/dashboard` — Student Dashboard
- Header: "Welcome back, {name}" + streak flame badge (with ❄️ freeze counter)
- Streak card: flame icon on color blob, streak count, longest-streak substat
- Today's task card: title, difficulty, est. time, "Continue Challenge →"
  → `/day/12`
- Progress: pill progress bar "{completedDays}/60 days" + overall completion %
- Weekly calendar strip: Mon–Sun chips, done/missed/today states
- Achievements: horizontal scroll of badges, unearned ones dimmed
- Edge states driven by mock data flags:
  - `streak === 0` → replace streak card with "Welcome! Start Day 1 today"
  - `missedYesterday === true` → soft banner using `bg-missed-soft` /
    `text-missed`: "You missed a day — one skip won't break your streak"
  - `profileComplete === false` → checklist banner above the fold: add photo
    / bio / track

### `/day/12` — Challenge Day
- Back button + "Day 12 of 60" label
- Task card: title, star-rating difficulty, est. time, skill chips
- 2–3 line description + "what to build" bullets
- 3 resource pills: video / docs / starter code (icon looked up by `type`)
- Submission form: GitHub URL + LinkedIn URL inputs (both required), pill
  submit button
- On submit: swap form for a celebration state — "Day 12 Completed 🎉",
  streak/XP increment shown, "Back to Dashboard" pill button. Persist to
  localStorage so the completed state survives a refresh.
- Reads the `$day` route param; renders any matching day from mock data and a
  friendly "Day X isn't ready yet" card for unknown days.

## Signature Feature — Streak Freeze
Each student gets 1 free freeze per week. A missed day burns a freeze
instead of resetting the streak to 0 — shown as a small "❄️ {freezesLeft} left"
next to the flame everywhere streak appears. Make it visible and legible, not
just a data field.

## Edge-Case Testing
A small low-key debug chip (bottom-left, dismissible) swaps the student
between 4 preset states — New / Active / Missed-day / Empty-profile — so
every edge case is reachable without auth. Style it as an obvious dev tool,
not a real feature.

## Desktop Responsive
Keep the existing mobile layout untouched below `md`. Add `md:`/`lg:`
variants only — don't rebuild from scratch.

- **Global container** (all 3 routes): `max-w-md md:max-w-3xl lg:max-w-6xl`
- **Landing** (`/`): hero becomes 2-column at `lg:` (headline/CTA/stats left,
  visual block right); feature cards `grid-cols-2 md:grid-cols-4`;
  testimonials static 3-up grid at `md:`+ (keep horizontal-scroll + dots for
  mobile only); FAQ single column, narrower/centered on desktop
- **Dashboard** (`/dashboard`): 2-column at `lg:` — streak card + today's
  task in the left column, progress / weekly-strip / achievements in the
  right column
- **Day page** (`/day/12`): task details + resources in the left column,
  submission form sticky in the right column at `lg:`
- **BottomNav**: mobile-only pattern — return `null` on `/` and hide at `md:`
  and above; use the header/hamburger nav (or simple text links) for desktop

## Animations & Transitions
Use the already-installed `tw-animate-css` utilities + plain CSS transitions,
no new dependency. Keep everything under ~300ms — this is a late-night study
tool, not a game.

- Landing sections (features, how-it-works, testimonials, FAQ):
  fade+slide-up on scroll into view via `animate-in fade-in slide-in-from-bottom-4`
- Route changes: quick 150–200ms fade instead of an instant cut
- Buttons/pills: `active:scale-95` on press, `transition-colors` on hover
- Cards: subtle lift on hover, desktop only —
  `md:hover:-translate-y-0.5 transition-transform`
- Dashboard streak flame icon: soft pulse/glow loop, subtle
- Day-12 success state: the 🎉 scales+fades in rather than appearing instantly
- Respect `prefers-reduced-motion`

## Constraints
- No login flow, no database, no recruiter/admin views.
- All 3 routes must render fully populated (no lorem ipsum) on first load.
- No horizontal scroll at 390px, tap targets ≥ 44px.

## Stack
- React + Vite + Tailwind CSS v4 + TanStack Router (TanStack Start v1)
- State via React context + localStorage; all data mocked in
  `src/data/mockData.js`
