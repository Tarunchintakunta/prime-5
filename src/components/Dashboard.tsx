import {
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  Home,
  BookOpen,
  Compass,
  Route,
  Award,
  Bookmark,
  Users,
  StickyNote,
  Dumbbell,
  Target,
  Settings,
  Plus,
  MoreHorizontal,
  Check,
} from "lucide-react";

const SIDEBAR_MAIN = [
  { icon: Home, label: "Home", active: true },
  { icon: BookOpen, label: "My Learning", badge: "4" },
  { icon: Compass, label: "Browse Courses" },
  { icon: Route, label: "Learning Paths", chevron: true },
  { icon: Award, label: "Certificates" },
  { icon: Bookmark, label: "Bookmarks" },
  { icon: Users, label: "Community", chevron: true },
];

const SIDEBAR_TOOLS = [
  { icon: StickyNote, label: "Notes" },
  { icon: Dumbbell, label: "Practice" },
  { icon: Target, label: "Goals" },
  { icon: Settings, label: "Settings" },
];

const ACTION_BUTTONS = [
  { label: "Continue", primary: true },
  { label: "Browse" },
  { label: "Paths" },
  { label: "Live Classes" },
  { label: "Practice" },
  { label: "My Notes" },
];

const SKILLS = [
  { name: "TypeScript", value: 87 },
  { name: "System Design", value: 64 },
  { name: "GraphQL", value: 42 },
];

const COURSES = [
  {
    title: "Machine Learning Foundations",
    instructor: "Andrew Ng",
    duration: "8 weeks",
    level: "Beginner",
    levelClass: "bg-success/15 text-success",
  },
  {
    title: "Design Systems Mastery",
    instructor: "Brad Frost",
    duration: "4 weeks",
    level: "Intermediate",
    levelClass: "bg-amber-500/15 text-amber-600",
  },
  {
    title: "Rust for Backend Engineers",
    instructor: "Jon Gjengset",
    duration: "12 weeks",
    level: "Advanced",
    levelClass: "bg-red-500/15 text-red-600",
  },
  {
    title: "Product Strategy 101",
    instructor: "Marty Cagan",
    duration: "6 weeks",
    level: "Beginner",
    levelClass: "bg-success/15 text-success",
  },
];

function StudyChart() {
  // Smooth cubic-Bezier path for weekly study hours
  // viewBox 0 0 280 80 → 7 weekly points
  const linePath =
    "M 0 55 C 20 50, 30 35, 50 38 C 70 41, 80 22, 100 24 C 120 26, 130 45, 150 42 C 170 39, 180 18, 200 14 C 220 10, 235 30, 255 26 C 268 23, 275 15, 280 12";
  const fillPath = `${linePath} L 280 80 L 0 80 Z`;

  return (
    <svg
      className="h-20 w-full"
      viewBox="0 0 280 80"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.15" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fillPath} fill="url(#chartFill)" />
      <path
        d={linePath}
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Dashboard() {
  return (
    <div className="rounded-xl bg-background overflow-hidden text-[11px] select-none pointer-events-none border border-border/60">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-3 py-2 border-b border-border/60">
        <div className="flex items-center gap-1.5">
          <div className="h-5 w-5 rounded-md bg-foreground text-background grid place-items-center text-[10px] font-semibold">
            P
          </div>
          <span className="font-semibold">Prime</span>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </div>

        <div className="flex-1 flex items-center gap-2 rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 max-w-md mx-auto">
          <Search className="h-3 w-3 text-muted-foreground" />
          <span className="text-muted-foreground flex-1 truncate">
            Search courses, instructors, skills...
          </span>
          <span className="text-[9px] text-muted-foreground border border-border rounded px-1 bg-background">
            ⌘K
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-accent/10 text-accent px-2 py-0.5 text-[10px] font-medium">
            Upgrade
          </span>
          <Bell className="h-3.5 w-3.5 text-muted-foreground" />
          <div className="h-6 w-6 rounded-full bg-foreground text-background grid place-items-center text-[9px] font-semibold">
            TS
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-40 shrink-0 border-r border-border/60 p-2 space-y-3">
          <div className="space-y-0.5">
            {SIDEBAR_MAIN.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${
                    item.active
                      ? "bg-secondary text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  <Icon className="h-3 w-3 shrink-0" />
                  <span className="flex-1 truncate">{item.label}</span>
                  {item.badge && (
                    <span className="rounded-full bg-accent text-accent-foreground px-1.5 text-[9px] font-medium">
                      {item.badge}
                    </span>
                  )}
                  {item.chevron && (
                    <ChevronRight className="h-3 w-3 text-muted-foreground" />
                  )}
                </div>
              );
            })}
          </div>

          <div>
            <div className="px-2 mb-1 text-[9px] uppercase tracking-wider text-muted-foreground">
              Tools
            </div>
            <div className="space-y-0.5">
              {SIDEBAR_TOOLS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-foreground"
                  >
                    <Icon className="h-3 w-3 shrink-0" />
                    <span className="flex-1 truncate">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 bg-secondary/30 p-3 space-y-3">
          {/* Greeting */}
          <div>
            <div className="text-sm font-semibold">Welcome back, Tarun</div>
            <div className="text-xs text-muted-foreground">
              You're on a 12-day streak 🔥
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {ACTION_BUTTONS.map((btn) => (
              <span
                key={btn.label}
                className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                  btn.primary
                    ? "bg-accent text-accent-foreground"
                    : "bg-background border border-border/80 text-foreground"
                }`}
              >
                {btn.label}
              </span>
            ))}
            <span className="text-[10px] text-muted-foreground ml-1">
              Customize
            </span>
          </div>

          {/* Two cards */}
          <div className="flex gap-3">
            {/* Continue Learning */}
            <div className="flex-1 basis-0 rounded-lg bg-background border border-border/60 p-3 space-y-2">
              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <Check className="h-3 w-3 text-success" />
                Currently Enrolled
              </div>
              <div>
                <div className="text-sm font-semibold">
                  Advanced React Patterns
                </div>
                <div className="text-xs text-muted-foreground">
                  Dan Abramov
                </div>
              </div>
              <div className="flex items-center gap-3 text-[10px]">
                <div>
                  <div className="text-muted-foreground">Completed</div>
                  <div className="font-semibold">14/22 lessons</div>
                </div>
                <div>
                  <div className="text-muted-foreground">This week</div>
                  <div className="font-semibold text-success">+6 hrs</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Remaining</div>
                  <div className="font-semibold text-amber-600">8 hrs left</div>
                </div>
              </div>
              <StudyChart />
            </div>

            {/* Skill Progress */}
            <div className="flex-1 basis-0 rounded-lg bg-background border border-border/60 p-3">
              <div className="flex items-center justify-between mb-1">
                <div className="text-xs font-semibold">Skills</div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Plus className="h-3 w-3" />
                  <MoreHorizontal className="h-3 w-3" />
                </div>
              </div>
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between gap-3 py-3 text-xs"
                >
                  <span className="w-24 truncate">{skill.name}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                  <span className="text-muted-foreground tabular-nums w-8 text-right">
                    {skill.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Course Catalog */}
          <div className="rounded-lg bg-background border border-border/60 p-3">
            <div className="text-xs font-semibold mb-2">Recommended for you</div>
            <table className="w-full text-[11px]">
              <thead>
                <tr className="text-left text-muted-foreground">
                  <th className="font-normal pb-1.5">Course</th>
                  <th className="font-normal pb-1.5">Instructor</th>
                  <th className="font-normal pb-1.5">Duration</th>
                  <th className="font-normal pb-1.5">Level</th>
                </tr>
              </thead>
              <tbody>
                {COURSES.map((c) => (
                  <tr key={c.title} className="border-t border-border/60">
                    <td className="py-2 font-medium">{c.title}</td>
                    <td className="py-2 text-muted-foreground">
                      {c.instructor}
                    </td>
                    <td className="py-2 text-muted-foreground">{c.duration}</td>
                    <td className="py-2">
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${c.levelClass}`}
                      >
                        {c.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
