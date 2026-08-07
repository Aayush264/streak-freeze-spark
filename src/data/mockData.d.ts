export type Student = {
  name: string;
  streak: number;
  longestStreak: number;
  freezesLeft: number;
  xp: number;
  level: number;
  completedDays: number;
  totalDays: number;
  track: string;
  missedYesterday: boolean;
  profileComplete: boolean;
};

export type Day = {
  day: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  estTime: string;
  skills: string[];
  resources: { label: string; url: string }[];
  status: string;
};

export const student: Student;
export const studentPresets: Record<"new" | "active" | "missed" | "empty", Student>;
export const days: Day[];
export const dayDescription: { summary: string; build: string[] };
export const weeklyStrip: { label: string; state: "done" | "missed" | "today" | "upcoming" }[];
export const achievements: { id: string; label: string; icon: string; earned: boolean }[];
export const testimonials: { name: string; role: string; quote: string; rating: number }[];
export const faqs: { q: string; a: string }[];