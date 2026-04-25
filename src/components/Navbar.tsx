import { Button } from "./ui/Button";

const NAV_LINKS = ["Courses", "Paths", "For Teams", "Pricing"];

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 font-body relative z-20">
      <div className="text-xl font-semibold tracking-tight text-foreground">
        ✦ Prime Learning
      </div>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <Button className="rounded-full px-5 text-sm font-medium">
        Start learning
      </Button>
    </nav>
  );
}
