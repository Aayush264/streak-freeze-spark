import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { studentPresets } from "@/data/mockData";

export type PresetKey = keyof typeof studentPresets;

type Ctx = {
  preset: PresetKey;
  setPreset: (p: PresetKey) => void;
  student: (typeof studentPresets)["active"];
  day12Done: boolean;
  completeDay12: () => void;
  resetDay12: () => void;
};

const AppStateContext = createContext<Ctx | null>(null);

const PRESET_KEY = "abtalks:preset";
const DAY12_KEY = "abtalks:day12";

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [preset, setPresetState] = useState<PresetKey>("active");
  const [day12Done, setDay12Done] = useState(false);

  useEffect(() => {
    const p = localStorage.getItem(PRESET_KEY) as PresetKey | null;
    if (p && p in studentPresets) setPresetState(p);
    setDay12Done(localStorage.getItem(DAY12_KEY) === "done");
  }, []);

  const value = useMemo<Ctx>(() => {
    const base = studentPresets[preset];
    const student = day12Done
      ? {
          ...base,
          streak: base.streak + 1,
          xp: base.xp + 120,
          completedDays: base.completedDays + 1,
        }
      : base;
    return {
      preset,
      setPreset: (p) => {
        localStorage.setItem(PRESET_KEY, p);
        setPresetState(p);
      },
      student,
      day12Done,
      completeDay12: () => {
        localStorage.setItem(DAY12_KEY, "done");
        setDay12Done(true);
      },
      resetDay12: () => {
        localStorage.removeItem(DAY12_KEY);
        setDay12Done(false);
      },
    };
  }, [preset, day12Done]);

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used inside AppStateProvider");
  return ctx;
}