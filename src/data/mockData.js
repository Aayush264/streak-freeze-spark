export const student = {
  name: "Ananya Sharma",
  streak: 12,
  longestStreak: 18,
  freezesLeft: 1,
  xp: 2340,
  level: 5,
  completedDays: 11,
  totalDays: 60,
  track: "Full-Stack Web",
  missedYesterday: false,
  profileComplete: true,
};

export const studentPresets = {
  new: {
    ...student,
    name: "Rahul Verma",
    streak: 0,
    longestStreak: 0,
    freezesLeft: 1,
    xp: 0,
    level: 1,
    completedDays: 0,
    missedYesterday: false,
    profileComplete: true,
  },
  active: student,
  missed: {
    ...student,
    streak: 12,
    freezesLeft: 0,
    missedYesterday: true,
  },
  empty: {
    ...student,
    name: "Sneha Iyer",
    streak: 3,
    longestStreak: 3,
    xp: 480,
    level: 2,
    completedDays: 3,
    profileComplete: false,
  },
};

export const days = [
  {
    day: 10,
    title: "Responsive Pricing Page",
    difficulty: "Easy",
    estTime: "45 min",
    skills: ["HTML", "CSS Grid"],
    resources: [
      { label: "Watch walkthrough", url: "https://youtube.com" , type: "video" },
      { label: "MDN CSS Grid docs", url: "https://developer.mozilla.org" , type: "docs" },
      { label: "Starter code", url: "https://github.com" , type: "code" },
    ],
    status: "done",
  },
  {
    day: 11,
    title: "Debounced Search Bar",
    difficulty: "Medium",
    estTime: "1 hr",
    skills: ["JavaScript", "React Hooks"],
    resources: [
      { label: "Watch walkthrough", url: "https://youtube.com" , type: "video" },
      { label: "React docs: useEffect", url: "https://react.dev" , type: "docs" },
      { label: "Starter code", url: "https://github.com" , type: "code" },
    ],
    status: "done",
  },
  {
    day: 12,
    title: "Build a Weather Dashboard",
    difficulty: "Medium",
    estTime: "1 hr 30 min",
    skills: ["React", "REST APIs", "Async JS", "Tailwind"],
    resources: [
      { label: "Watch walkthrough", url: "https://youtube.com" , type: "video" },
      { label: "OpenWeather API docs", url: "https://openweathermap.org/api" , type: "docs" },
      { label: "Starter code repo", url: "https://github.com" , type: "code" },
    ],
    status: "today",
  },
  {
    day: 13,
    title: "Kanban Board with Drag & Drop",
    difficulty: "Hard",
    estTime: "2 hr",
    skills: ["React", "State Design"],
    resources: [
      { label: "Watch walkthrough", url: "https://youtube.com" , type: "video" },
      { label: "DnD guide", url: "https://developer.mozilla.org" , type: "docs" },
      { label: "Starter code", url: "https://github.com" , type: "code" },
    ],
    status: "locked",
  },
];

export const dayDescription = {
  summary:
    "Pull live weather for any Indian city and render it in a clean, mobile-first dashboard. You'll fetch from a public REST API, handle loading and error states, and format the response into readable cards.",
  build: [
    "A search input that fetches weather by city name",
    "Current temperature, condition and humidity card",
    "A 5-day forecast strip with icons",
    "Loading skeleton and a friendly error state",
  ],
};

export const weeklyStrip = [
  { label: "Mon", state: "done" },
  { label: "Tue", state: "done" },
  { label: "Wed", state: "done" },
  { label: "Thu", state: "missed" },
  { label: "Fri", state: "done" },
  { label: "Sat", state: "today" },
  { label: "Sun", state: "upcoming" },
];

export const achievements = [
  { id: "a1", label: "First Commit", icon: "🚀", earned: true },
  { id: "a2", label: "7-Day Streak", icon: "🔥", earned: true },
  { id: "a3", label: "Night Owl", icon: "🦉", earned: true },
  { id: "a4", label: "API Wrangler", icon: "🔌", earned: true },
  { id: "a5", label: "30-Day Streak", icon: "🏅", earned: false },
  { id: "a6", label: "Recruiter Ready", icon: "💼", earned: false },
  { id: "a7", label: "60-Day Finisher", icon: "🏆", earned: false },
];

export const testimonials = [
  {
    name: "Priya Nair",
    role: "3rd year CSE, NIT Trichy",
    quote:
      "I went from zero projects to a GitHub full of them. Two interviews came straight from my Day 45 build.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "B.Tech IT, VIT Vellore",
    quote:
      "The daily tasks are small enough to actually finish after class. The streak is what kept me honest.",
    rating: 5,
  },
  {
    name: "Fatima Khan",
    role: "BCA final year, Pune",
    quote:
      "Posting each day on LinkedIn felt awkward at first. By week three recruiters were in my DMs.",
    rating: 4,
  },
];

export const faqs = [
  {
    q: "Is ABTalks free?",
    a: "Completely free. Every daily task, resource and certificate is open to all Indian college students — no card, no trial.",
  },
  {
    q: "Can beginners join?",
    a: "Yes. Day 1 starts with plain HTML and CSS, and difficulty ramps gently. If you can open a code editor, you can start.",
  },
  {
    q: "What if I miss a day?",
    a: "You get one free Streak Freeze every week. A missed day burns the freeze instead of resetting your streak to zero.",
  },
];