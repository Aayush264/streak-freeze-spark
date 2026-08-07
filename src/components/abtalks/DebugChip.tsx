import { useState } from "react";
import { Wrench, X } from "lucide-react";
import { useAppState, type PresetKey } from "@/lib/app-state";

const presets: { key: PresetKey; label: string }[] = [
  { key: "new", label: "New" },
  { key: "active", label: "Active" },
  { key: "missed", label: "Missed" },
  { key: "empty", label: "No profile" },
];

export function DebugChip() {
  const { preset, setPreset } = useAppState();
  const [dismissed, setDismissed] = useState(false);
  const [open, setOpen] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-24 left-3 z-50 font-mono text-[11px]">
      {open && (
        <div className="mb-2 w-44 rounded-xl border border-dashed border-foreground/30 bg-foreground/95 p-2 text-background">
          <div className="mb-1.5 flex items-center justify-between px-1 opacity-60">
            <span>mock state</span>
            <button onClick={() => setDismissed(true)} aria-label="Hide dev tool">
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="grid gap-1">
            {presets.map((p) => (
              <button
                key={p.key}
                onClick={() => setPreset(p.key)}
                className={`min-h-[36px] rounded-lg px-2 text-left ${
                  preset === p.key ? "bg-background/20 font-bold" : "hover:bg-background/10"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex min-h-[36px] items-center gap-1.5 rounded-full border border-dashed border-foreground/40 bg-foreground/90 px-3 text-background"
      >
        <Wrench className="h-3.5 w-3.5" />
        dev: {preset}
      </button>
    </div>
  );
}