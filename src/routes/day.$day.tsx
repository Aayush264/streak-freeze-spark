import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Clock, Star, PlayCircle, BookOpen, Github, Flame, Snowflake } from "lucide-react";
import { useAppState } from "@/lib/app-state";
import { days, dayDescription } from "@/data/mockData";

export const Route = createFileRoute("/day/$day")({
  head: () => ({
    meta: [
      { title: "Day 12: Weather Dashboard — ABTalks" },
      {
        name: "description",
        content:
          "Day 12 of the ABTalks 60-day challenge: build a mobile-first weather dashboard with a live REST API.",
      },
      { property: "og:title", content: "Day 12: Build a Weather Dashboard" },
      { property: "og:description", content: "Today's ABTalks challenge task, resources and submission." },
    ],
  }),
  component: DayPage,
});

const task = days.find((d) => d.day === 12)!;
const stars = { Easy: 1, Medium: 2, Hard: 3 } as const;
const resourceIcons = [PlayCircle, BookOpen, Github];

function DayPage() {
  const { student, day12Done, completeDay12, resetDay12 } = useAppState();
  const navigate = useNavigate();
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  return (
    <div className="mx-auto min-h-screen max-w-md px-5 pt-6 pb-28">
      <header className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
        <button
          onClick={() => navigate({ to: "/dashboard" })}
          aria-label="Back to dashboard"
          className="grid h-11 w-11 place-items-center rounded-full bg-card shadow-soft"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <span className="truncate text-sm font-semibold text-muted-foreground">
          Day {task.day} of 60
        </span>
      </header>

      <section className="card-soft mt-5 p-5">
        <h1 className="text-2xl font-bold leading-tight text-foreground">{task.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-1 rounded-full bg-warm-soft px-3 py-1.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < stars[task.difficulty] ? "fill-warm text-warm" : "text-border"
                }`}
              />
            ))}
            <span className="ml-1 text-[11px] font-bold text-foreground">{task.difficulty}</span>
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" /> {task.estTime}
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {task.skills.map((s) => (
            <span
              key={s}
              className="rounded-full bg-primary-soft px-3 py-1.5 text-[11px] font-semibold text-primary"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <p className="text-sm leading-relaxed text-muted-foreground">{dayDescription.summary}</p>
        <h2 className="mt-5 text-[15px] font-bold text-foreground">What to build</h2>
        <ul className="mt-3 space-y-2.5">
          {dayDescription.build.map((b) => (
            <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {b}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-[15px] font-bold text-foreground">Resources</h2>
        <div className="mt-3 space-y-2.5">
          {task.resources.map((r, i) => {
            const Icon = resourceIcons[i] ?? BookOpen;
            return (
              <a
                key={r.label}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[52px] items-center gap-3 rounded-full bg-card px-4 shadow-soft"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-soft">
                  <Icon className="h-4 w-4 text-primary" />
                </span>
                <span className="truncate text-sm font-semibold text-foreground">{r.label}</span>
              </a>
            );
          })}
        </div>
      </section>

      {day12Done ? (
        <section className="card-soft mt-6 p-6 text-center">
          <div className="text-4xl">🎉</div>
          <h2 className="mt-3 text-2xl font-bold text-foreground">Day 12 Completed</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Submitted and verified. See you tomorrow at 6 AM.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-warm-soft p-3">
              <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Flame className="h-3.5 w-3.5 text-warm" /> Streak
              </div>
              <div className="mt-1 font-display text-xl font-bold text-foreground">
                {student.streak} <span className="text-xs font-semibold text-success">+1</span>
              </div>
            </div>
            <div className="rounded-2xl bg-primary-soft p-3">
              <div className="text-xs text-muted-foreground">XP</div>
              <div className="mt-1 font-display text-xl font-bold text-foreground">
                {student.xp.toLocaleString("en-IN")}{" "}
                <span className="text-xs font-semibold text-success">+120</span>
              </div>
            </div>
          </div>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Snowflake className="h-3.5 w-3.5 text-primary" /> ❄️ {student.freezesLeft} freeze left
            this week
          </p>
          <Link
            to="/dashboard"
            className="mt-5 flex min-h-[52px] w-full items-center justify-center rounded-full bg-primary px-6 font-display text-base font-bold text-primary-foreground shadow-lift"
          >
            Back to Dashboard
          </Link>
          <button
            onClick={resetDay12}
            className="mt-3 text-[11px] text-muted-foreground underline"
          >
            reset submission (demo)
          </button>
        </section>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            completeDay12();
          }}
          className="card-soft mt-6 p-5"
        >
          <h2 className="text-[15px] font-bold text-foreground">Submit your work</h2>
          <label className="mt-4 block text-xs font-semibold text-muted-foreground">
            GitHub repo URL
          </label>
          <input
            required
            type="url"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="https://github.com/you/day-12"
            className="mt-1.5 min-h-[52px] w-full rounded-full bg-secondary px-5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
          />
          <label className="mt-4 block text-xs font-semibold text-muted-foreground">
            LinkedIn post URL
          </label>
          <input
            required
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://linkedin.com/posts/..."
            className="mt-1.5 min-h-[52px] w-full rounded-full bg-secondary px-5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="mt-5 flex min-h-[52px] w-full items-center justify-center rounded-full bg-primary px-6 font-display text-base font-bold text-primary-foreground shadow-lift"
          >
            Submit Day 12
          </button>
        </form>
      )}
    </div>
  );
}