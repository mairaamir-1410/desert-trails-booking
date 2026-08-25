import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { site, whatsappLink } from "@/data/site";
import { categories } from "@/data/tours";

export function Footer() {
  return (
    <footer className="mt-24 bg-espresso text-espresso-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-espresso-foreground/70">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-[0.7rem] uppercase tracking-[0.22em] text-gold">Experiences</h3>
          <ul className="space-y-2.5 text-sm text-espresso-foreground/75">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/experiences"
                  search={{ category: c.slug }}
                  className="transition-colors hover:text-gold"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[0.7rem] uppercase tracking-[0.22em] text-gold">Company</h3>
          <ul className="space-y-2.5 text-sm text-espresso-foreground/75">
            <li>
              <Link to="/about" className="transition-colors hover:text-gold">
                About us
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="transition-colors hover:text-gold">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/faq" className="transition-colors hover:text-gold">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-gold">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/book" className="transition-colors hover:text-gold">
                Book an experience
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[0.7rem] uppercase tracking-[0.22em] text-gold">Get in touch</h3>
          <ul className="space-y-2.5 text-sm text-espresso-foreground/75">
            <li>
              <a href={site.phoneHref} className="hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-gold">
                WhatsApp us
              </a>
            </li>
            <li className="pt-1 leading-relaxed">{site.address}</li>
            <li>{site.hours}</li>
          </ul>
          <div className="mt-5 flex gap-4 text-sm">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-espresso-foreground/70 transition-colors hover:text-gold"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-espresso-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-espresso-foreground/55 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.footerNote}</p>
        </div>
      </div>
    </footer>
  );
}
