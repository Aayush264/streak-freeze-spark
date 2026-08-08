import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  Code2,
  Flame,
  Briefcase,
  Award,
  Star,
  ChevronDown,
  Snowflake,
  ArrowRight,
  X,
} from "lucide-react";
import { Logo } from "@/components/abtalks/Logo";
import { ThemeToggle } from "@/components/abtalks/ThemeToggle";
import { testimonials, faqs } from "@/data/mockData";
import { Reveal } from "@/components/abtalks/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABTalks — Free 60-Day Coding Challenge for Students" },
      {
        name: "description",
        content:
          "Build one small project every day for 60 days. Free, beginner-friendly, and built to fill your GitHub before placement season.",
      },
      { property: "og:title", content: "ABTalks — Free 60-Day Coding Challenge" },
      {
        property: "og:description",
        content: "Daily tasks, streaks and certificates for Indian college students. Free forever.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  { Icon: Code2, title: "Daily Coding", body: "One focused task a day, 45–90 minutes.", tone: "primary" },
  { Icon: Flame, title: "Build Streak", body: "Momentum beats motivation. Keep the flame.", tone: "warm" },
  { Icon: Briefcase, title: "Impress Recruiters", body: "A public GitHub trail hiring teams can read.", tone: "primary" },
  { Icon: Award, title: "Certificates", body: "Verified proof at Day 30 and Day 60.", tone: "warm" },
] as const;

const steps = [
  { title: "Choose Track", body: "Web, Data or DSA — pick one and commit." },
  { title: "Build Daily", body: "A new task unlocks every morning at 6 AM." },
  { title: "Submit GitHub", body: "Push your code, drop the repo link." },
  { title: "Share LinkedIn", body: "One post a day. Recruiters notice consistency." },
  { title: "Complete 60 Days", body: "Certificate, portfolio and a real habit." },
];

function Landing() {
  const [slide, setSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen pb-28">
      <header className="sticky top-0 z-30 bg-background/90 px-5 py-3 backdrop-blur">
        <div className="mx-auto grid max-w-md grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:max-w-3xl lg:max-w-6xl">
          <Logo />
          <div className="flex shrink-0 items-center gap-2">
            <nav className="mr-2 hidden items-center gap-5 md:flex">
              <Link to="/dashboard" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">Dashboard</Link>
              <Link to="/day/$day" params={{ day: "12" }} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">Today's Challenge</Link>
            </nav>
            <ThemeToggle />
            <button className="min-h-11 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors transition-transform hover:bg-primary/90 active:scale-95">
              Sign in
            </button>
            <button
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full bg-card shadow-soft transition-transform active:scale-95 md:hidden"
            >
              <Menu className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50">
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
          />
          <div className="absolute inset-x-0 top-0 mx-auto max-w-md rounded-b-[28px] bg-card p-5 shadow-lift">
            <div className="flex items-center justify-between">
              <Logo />
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full bg-background"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
            </div>
            <nav className="mt-4 grid gap-2">
              {[
                { to: "/", label: "Home", params: undefined },
                { to: "/dashboard", label: "Dashboard", params: undefined },
                { to: "/day/$day", label: "Today's Challenge", params: { day: "12" } },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  params={item.params as never}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[52px] items-center rounded-full bg-background px-5 text-[15px] font-semibold text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[52px] items-center justify-center rounded-full bg-primary px-5 font-display text-base font-bold text-primary-foreground"
              >
                Sign in
              </button>
            </nav>
          </div>
        </div>
      )}

      <main className="mx-auto max-w-md px-5 md:max-w-3xl lg:max-w-6xl">
        {/* Hero */}
        <section className="pt-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:pt-14">
          <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-warm-soft px-3 py-1.5 text-xs font-semibold text-foreground">
            <Flame className="h-3.5 w-3.5 text-warm" /> Batch 09 starts Monday
          </span>
          <h1 className="mt-4 font-display text-[2.6rem] leading-[1.05] font-bold text-foreground">
            60 days.
            <br />
            60 projects shipped.
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            A free daily coding challenge for Indian college students — start from zero, finish with
            a portfolio.
          </p>
          <Link
            to="/dashboard"
            className="mt-6 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-primary px-6 font-display text-base font-bold text-primary-foreground shadow-lift transition-colors transition-transform hover:bg-primary/90 active:scale-95 lg:w-auto lg:self-start lg:px-10"
          >
            Start the Challenge <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="card-soft mt-6 grid grid-cols-3 divide-x divide-border px-2 py-4 text-center">
            {[
              ["10,000+", "members"],
              ["500+", "projects"],
              ["100+", "hiring partners"],
            ].map(([n, l]) => (
              <div key={l} className="px-1">
                <div className="font-display text-lg font-bold text-foreground">{n}</div>
                <div className="text-[11px] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
          </div>

          <div className="hidden lg:block">
            <div className="card-soft relative overflow-hidden p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-soft" />
              <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-warm-soft" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-warm-soft">
                    <Flame className="flame-pulse h-7 w-7 text-warm" />
                  </span>
                  <div>
                    <div className="font-display text-4xl font-bold leading-none text-foreground">12</div>
                    <div className="mt-1 text-sm text-muted-foreground">day streak</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-7 gap-2">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <div
                      key={i}
                      className={`grid h-12 place-items-center rounded-full text-xs font-semibold ${
                        i < 4
                          ? "bg-success-soft text-foreground"
                          : i === 4
                            ? "bg-missed-soft text-foreground"
                            : i === 5
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {d}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 rounded-full bg-card px-4 py-3 shadow-soft">
                  <Snowflake className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">❄️ 1 freeze left</span> this week
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <Reveal>
        <section className="pt-10">
          <h2 className="text-2xl font-bold text-foreground">Why it works</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {features.map(({ Icon, title, body, tone }) => (
              <div key={title} className="card-soft p-4 transition-transform md:hover:-translate-y-0.5">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-full ${
                    tone === "warm" ? "bg-warm-soft" : "bg-primary-soft"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${tone === "warm" ? "text-warm" : "text-primary"}`} />
                </span>
                <h3 className="mt-3 text-[15px] font-bold text-foreground">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>
        </Reveal>

        {/* Streak freeze highlight */}
        <section className="pt-10">
          <div className="card-soft flex items-start gap-3 bg-primary-soft p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-card">
              <Snowflake className="h-5 w-5 text-primary" />
            </span>
            <div className="min-w-0">
              <h3 className="text-[15px] font-bold text-foreground">Streak Freeze, every week</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Miss a day? One free freeze per week protects your streak instead of resetting it to
                zero. Life happens.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <Reveal>
        <section className="pt-10">
          <h2 className="text-2xl font-bold text-foreground">How it works</h2>
          <ol className="mt-4 space-y-3 md:grid md:grid-cols-2 md:gap-3 md:space-y-0 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="card-soft flex items-center gap-4 p-4 transition-transform md:hover:-translate-y-0.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-soft font-display text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-bold text-foreground">{s.title}</h3>
                  <p className="text-xs text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        </Reveal>

        {/* Testimonials */}
        <Reveal>
        <section className="pt-10">
          <h2 className="text-2xl font-bold text-foreground">From the batch</h2>
          <div
            className="no-scrollbar mt-4 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0"
            onScroll={(e) => {
              const el = e.currentTarget;
              setSlide(Math.round(el.scrollLeft / (el.clientWidth * 0.82)));
            }}
          >
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="card-soft w-[82%] shrink-0 snap-center p-5 transition-transform md:w-auto md:hover:-translate-y-0.5"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${i < t.rating ? "fill-warm text-warm" : "text-border"}`}
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground">“{t.quote}”</p>
                <div className="mt-4 flex items-center gap-2.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-soft font-display text-xs font-bold text-primary">
                    {t.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="truncate text-[11px] text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-3 flex justify-center gap-1.5 md:hidden">
            {testimonials.map((t, i) => (
              <span
                key={t.name}
                className={`h-1.5 rounded-full transition-all ${
                  i === slide ? "w-5 bg-primary" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
        </section>
        </Reveal>

        {/* FAQ */}
        <Reveal>
        <section className="pt-10">
          <h2 className="text-2xl font-bold text-foreground">Questions</h2>
          <div className="mt-4 space-y-3 md:mx-auto md:max-w-2xl">
            {faqs.map((f, i) => (
              <div key={f.q} className="card-soft overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex min-h-[56px] w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors hover:bg-secondary/40"
                >
                  <span className="text-[15px] font-semibold text-foreground">{f.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>
        </Reveal>

        <footer className="mt-12 border-t border-border pt-6 pb-4 text-center">
          <Logo className="justify-center" />
          <p className="mt-3 text-xs text-muted-foreground">
            Free forever for students · Made in India
          </p>
          <p className="mt-1 text-[11px] text-muted-foreground">© 2026 ABTalks</p>
        </footer>
      </main>
    </div>
  );
}
