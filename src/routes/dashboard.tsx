import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Snowflake, Trophy, ArrowRight, Clock, Sparkles, UserPlus, Check } from "lucide-react";
import { useAppState } from "@/lib/app-state";
import { days, achievements, weeklyStrip } from "@/data/mockData";
import { StreakBadge } from "@/components/abtalks/StreakBadge";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Your Dashboard — ABTalks 60-Day Challenge" },
      {
        name: "description",
        content: "Track your streak, today's task, weekly progress and badges in the ABTalks 60-day challenge.",
      },
      { property: "og:title", content: "Your ABTalks Dashboard" },
      { property: "og:description", content: "Streak, today's task and progress at a glance." },
    ],
  }),
  component: Dashboard,
});

const today = days.find((d) => d.day === 12)!;

function Dashboard() {
  const { student } = useAppState();
  const pct = Math.round((student.completedDays / student.totalDays) * 100);

  return (
    <div className="mx-auto min-h-screen max-w-md px-5 pt-6 pb-28 md:max-w-3xl lg:max-w-6xl">
      <header>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <p className="truncate text-xs font-semibold text-muted-foreground">
            {student.track} track
          </p>
          <StreakBadge streak={student.streak} freezesLeft={student.freezesLeft} />
        </div>
        <h1 className="mt-1.5 text-[26px] leading-tight font-bold text-foreground">
          Welcome back, {student.name.split(" ")[0]}
        </h1>
      </header>

      {!student.profileComplete && (
        <section className="card-soft mt-5 p-5 transition-transform md:hover:-translate-y-0.5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-soft">
              <UserPlus className="h-5 w-5 text-primary" />
            </span>
            <h2 className="text-[15px] font-bold text-foreground">Finish your profile</h2>
          </div>
          <ul className="mt-3 space-y-2">
            {["Add a photo", "Write a short bio", "Confirm your track"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-border">
                  <Check className="h-3 w-3 text-border" />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <button className="mt-4 min-h-11 w-full rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground transition-colors transition-transform hover:bg-primary/90 active:scale-95">
            Complete profile
          </button>
        </section>
      )}

      {student.missedYesterday && (
        <div className="mt-5 flex items-start gap-3 rounded-[28px] bg-missed-soft p-4">
          <Snowflake className="mt-0.5 h-5 w-5 shrink-0 text-missed" />
          <p className="text-sm leading-relaxed text-foreground">
            You missed a day — one skip won't break your streak. We used a{" "}
            <span className="font-semibold">Streak Freeze</span> to keep it alive.
          </p>
        </div>
      )}

      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-6">
        <div>
      {/* Streak card */}
      {student.streak === 0 ? (
        <section className="card-soft mt-5 p-6 transition-transform md:hover:-translate-y-0.5">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-warm-soft">
            <Sparkles className="h-6 w-6 text-warm" />
          </span>
          <h2 className="mt-4 text-xl font-bold text-foreground">Welcome! Start Day 1 today</h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Your first build takes about 45 minutes. Finish it and your streak begins tonight.
          </p>
        </section>
      ) : (
        <section className="card-soft mt-5 p-6 transition-transform md:hover:-translate-y-0.5">
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-warm-soft">
              <Flame className="flame-pulse h-7 w-7 text-warm" />
            </span>
            <div className="min-w-0">
              <div className="font-display text-4xl font-bold leading-none text-foreground">
                {student.streak}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">day streak</div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-secondary p-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Trophy className="h-3.5 w-3.5" /> Longest
              </div>
              <div className="mt-0.5 font-display text-lg font-bold text-foreground">
                {student.longestStreak} days
              </div>
            </div>
            <div className="rounded-2xl bg-primary-soft p-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Snowflake className="h-3.5 w-3.5 text-primary" /> Freezes
              </div>
              <div className="mt-0.5 font-display text-lg font-bold text-foreground">
                ❄️ {student.freezesLeft} left
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Today's task */}
      <section className="card-soft mt-4 p-5 transition-transform md:hover:-translate-y-0.5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-primary-foreground">
            Day {today.day}
          </span>
          <span className="rounded-full bg-warm-soft px-3 py-1 text-[11px] font-bold text-foreground">
            {today.difficulty}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <Clock className="h-3.5 w-3.5" /> {today.estTime}
          </span>
        </div>
        <h2 className="mt-3 text-xl font-bold text-foreground">{today.title}</h2>
        <Link
          to="/day/$day"
          params={{ day: "12" }}
          className="mt-4 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-primary px-6 font-display text-base font-bold text-primary-foreground shadow-lift transition-colors transition-transform hover:bg-primary/90 active:scale-95"
        >
          Continue Challenge <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
        </div>

        <div>
      {/* Progress */}
      <section className="card-soft mt-4 p-5 transition-transform md:hover:-translate-y-0.5 lg:mt-5">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
          <h2 className="truncate text-[15px] font-bold text-foreground">
            {student.completedDays}/{student.totalDays} days
          </h2>
          <span className="shrink-0 font-display text-sm font-bold text-primary">{pct}%</span>
        </div>
        <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          {student.xp.toLocaleString("en-IN")} XP · Level {student.level}
        </p>
      </section>

      {/* Weekly strip */}
      <section className="mt-6">
        <h2 className="text-[15px] font-bold text-foreground">This week</h2>
        <div className="mt-3 flex justify-between gap-1.5">
          {weeklyStrip.map((d) => {
            const cls =
              d.state === "done"
                ? "bg-success-soft text-foreground"
                : d.state === "missed"
                  ? "bg-missed-soft text-foreground"
                  : d.state === "today"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground";
            return (
              <div
                key={d.label}
                className={`flex h-14 w-11 shrink-0 flex-col items-center justify-center gap-1 rounded-full ${cls}`}
              >
                <span className="text-[10px] font-semibold">{d.label}</span>
                <span className="text-xs">
                  {d.state === "done" ? "✓" : d.state === "missed" ? "❄️" : d.state === "today" ? "•" : "–"}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Achievements */}
      <section className="mt-6">
        <h2 className="text-[15px] font-bold text-foreground">Badges</h2>
        <div className="no-scrollbar -mx-5 mt-3 flex gap-3 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-wrap lg:px-0">
          {achievements.map((a) => (
            <div
              key={a.id}
              className={`card-soft flex w-24 shrink-0 flex-col items-center gap-2 p-3 text-center transition-transform md:hover:-translate-y-0.5 ${
                a.earned ? "" : "opacity-40"
              }`}
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-xl">
                {a.icon}
              </span>
              <span className="text-[11px] font-semibold leading-tight text-foreground">
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </section>
        </div>
      </div>
    </div>
  );
}