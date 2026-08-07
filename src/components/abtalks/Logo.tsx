export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary font-display text-base font-bold text-primary-foreground">
        AB
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        ABTalks
      </span>
    </span>
  );
}