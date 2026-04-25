import { useState } from "react";
import { ArrowUpRight, Clock, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const CATEGORIES = ["All", "Engineering", "Design", "AI", "Product", "Data"];

type Course = {
  title: string;
  instructor: string;
  category: string;
  duration: string;
  level: string;
  price: number;
  rating: number;
  gradient: string;
  glyph: string;
  image: string;
};

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=75`;

const COURSES: Course[] = [
  {
    title: "Advanced React Patterns",
    instructor: "Dan Abramov",
    category: "Engineering",
    duration: "8 hrs",
    level: "Advanced",
    price: 249,
    rating: 4.9,
    gradient: "from-indigo-500 via-blue-500 to-slate-700",
    glyph: "{ }",
    image: UNSPLASH("photo-1555066931-4365d14bab8c"),
  },
  {
    title: "Design Systems Mastery",
    instructor: "Brad Frost",
    category: "Design",
    duration: "12 hrs",
    level: "Intermediate",
    price: 199,
    rating: 4.8,
    gradient: "from-rose-400 via-orange-400 to-amber-500",
    glyph: "◇",
    image: UNSPLASH("photo-1581291518857-4e27b48ff24e"),
  },
  {
    title: "Machine Learning Foundations",
    instructor: "Andrew Ng",
    category: "AI",
    duration: "24 hrs",
    level: "Beginner",
    price: 299,
    rating: 4.9,
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    glyph: "∑",
    image: UNSPLASH("photo-1620712943543-bcc4688e7485"),
  },
  {
    title: "Product Strategy 101",
    instructor: "Marty Cagan",
    category: "Product",
    duration: "6 hrs",
    level: "Beginner",
    price: 179,
    rating: 4.7,
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    glyph: "◎",
    image: UNSPLASH("photo-1552664730-d307ca884978"),
  },
  {
    title: "Rust for Backend Engineers",
    instructor: "Jon Gjengset",
    category: "Engineering",
    duration: "14 hrs",
    level: "Advanced",
    price: 269,
    rating: 4.8,
    gradient: "from-zinc-700 via-orange-600 to-red-600",
    glyph: "⚙",
    image: UNSPLASH("photo-1558494949-ef010cbdcc31"),
  },
  {
    title: "Data Storytelling",
    instructor: "Cole Knaflic",
    category: "Data",
    duration: "5 hrs",
    level: "Intermediate",
    price: 159,
    rating: 4.8,
    gradient: "from-amber-300 via-yellow-500 to-rose-500",
    glyph: "◔",
    image: UNSPLASH("photo-1551288049-bebda4e38f71"),
  },
];

function CourseCard({ course, delay }: { course: Course; delay: number }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <Reveal delay={delay}>
      <div className="group rounded-2xl bg-background border border-border overflow-hidden hover:border-foreground/20 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] h-full flex flex-col">
        <div
          className={`relative aspect-[16/10] bg-gradient-to-br ${course.gradient} flex items-center justify-center overflow-hidden`}
        >
          {imgOk && (
            <img
              src={course.image}
              alt={course.title}
              loading="lazy"
              onError={() => setImgOk(false)}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          {!imgOk && (
            <span className="relative text-7xl font-display italic text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
              {course.glyph}
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase text-foreground">
            {course.category}
          </div>
          <div className="absolute top-3 right-3 rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[10px] font-semibold flex items-center gap-1 text-foreground">
            <Star className="h-2.5 w-2.5 fill-amber-500 text-amber-500" />
            {course.rating}
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-semibold tracking-tight leading-snug">
            {course.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            with {course.instructor}
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> {course.duration}
            </span>
            <span className="inline-flex items-center gap-1">
              · {course.level}
            </span>
          </div>
          <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                AED
              </span>{" "}
              <span className="text-xl font-display tracking-tight">
                {course.price}
              </span>
            </div>
            <button className="inline-flex items-center gap-1 rounded-full bg-foreground text-background px-3.5 py-1.5 text-xs font-medium group-hover:bg-accent transition-colors">
              Enroll
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function FeaturedCourses() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? COURSES : COURSES.filter((c) => c.category === active);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground mb-5">
              Featured catalog
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-3xl mx-auto">
              Courses curated by{" "}
              <span className="italic">world-class</span> experts
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Hand-picked instructors. Production-ready projects. Skills you can
              ship to your team next Monday.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    active === cat
                      ? "bg-foreground text-background"
                      : "bg-secondary text-foreground hover:bg-secondary/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course, i) => (
            <CourseCard key={course.title} course={course} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
