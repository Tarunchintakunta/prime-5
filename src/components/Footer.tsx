const COLUMNS = [
  {
    title: "Learn",
    links: [
      "Browse Courses",
      "Learning Paths",
      "Live Classes",
      "Certificates",
      "AI Mentor",
    ],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact", "Blog"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Community", "Become an Instructor", "Partners", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookie Policy", "Accessibility"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <div className="text-xl font-semibold tracking-tight">
              ✦ Prime Learning
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Personalized, expert-led learning that adapts to how you grow —
              one skill at a time.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              All systems operational
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Prime Learning. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <span>Pricing in AED</span>
            <span>·</span>
            <span>Made for curious people</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
