import { Flame, Snowflake } from "lucide-react";

export function StreakBadge({ streak, freezesLeft }: { streak: number; freezesLeft: number }) {
  return (
    <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-warm-soft px-3 py-2">
      <Flame className="h-4 w-4 text-warm" />
      <span className="font-display text-sm font-bold text-foreground">{streak}</span>
      <span className="mx-0.5 h-3.5 w-px bg-warm/30" />
      <Snowflake className="h-3.5 w-3.5 text-primary" />
      <span className="text-xs font-semibold text-muted-foreground">{freezesLeft} left</span>
    </div>
  );
}