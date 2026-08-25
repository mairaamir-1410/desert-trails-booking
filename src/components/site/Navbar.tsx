import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { site } from "@/data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/experiences", label: "Experiences" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link to="/" aria-label={site.name}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[0.82rem] uppercase tracking-[0.14em] transition-colors hover:text-clay ${
                pathname === l.to ? "text-clay" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-[0.82rem] text-muted-foreground transition-colors hover:text-foreground md:flex"
          >
            <Phone size={14} />
            {site.phone}
          </a>
          <Button asChild variant="espresso" size="sm" className="hidden sm:inline-flex">
            <Link to="/book">Book now</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm bg-background">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mt-2 mb-8">
                <Logo />
              </div>
              <nav className="flex flex-col">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="border-b border-border/70 py-4 font-display text-2xl"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <Button asChild variant="gold" size="lg" className="mt-8 w-full">
                <Link to="/book" onClick={() => setOpen(false)}>
                  Book now
                </Link>
              </Button>
              <a
                href={site.phoneHref}
                className="mt-4 block text-center text-sm text-muted-foreground"
              >
                {site.phone}
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
