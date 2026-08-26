import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Clock, MapPin, ShieldCheck, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stars } from "@/components/site/Stars";
import { TourCard } from "@/components/site/TourCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { activeTours, getTour, getCategory } from "@/data/tours";
import { reviews } from "@/data/content";
import { site, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/experiences/$slug")({
  loader: ({ params }) => {
    const tour = getTour(params.slug);
    if (!tour) throw notFound();
    return { tour };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Experience not found — DuneAura Tourism" }, { name: "robots", content: "noindex" }],
      };
    }
    const { tour } = loaderData;
    return {
      meta: [
        { title: `${tour.name} — DuneAura Tourism` },
        { name: "description", content: tour.short },
        { property: "og:title", content: `${tour.name} — DuneAura Tourism` },
        { property: "og:description", content: tour.short },
      ],
    };
  },
  component: TourDetail,
  notFoundComponent: TourNotFound,
  errorComponent: TourNotFound,
});

function TourNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-28 text-center lg:px-8">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl">Experience not found</h1>
      <p className="mt-4 text-muted-foreground">
        This experience doesn't exist or is no longer running. Browse everything we currently
        operate below.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button asChild variant="espresso">
          <Link to="/experiences">All experiences</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}

function TourDetail() {
  const { tour } = Route.useLoaderData();
  const category = getCategory(tour.category);
  const related = activeTours.filter((t) => t.category === tour.category && t.slug !== tour.slug).slice(0, 3);
  const tourReviews = reviews.filter((r) => r.tour === tour.name).slice(0, 3);

  return (
    <article>
      <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden">
        <img
          src={tour.gallery[0]}
          alt={tour.name}
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-espresso/92 via-espresso/50 to-espresso/25" />
        <div className="mx-auto w-full max-w-7xl px-5 pt-28 pb-14 lg:px-8">
          <nav className="text-[0.7rem] uppercase tracking-[0.2em] text-espresso-foreground/70">
            <Link to="/" className="hover:text-gold">
              Home
            </Link>
            <span className="px-2">/</span>
            <Link to="/experiences" className="hover:text-gold">
              Experiences
            </Link>
            {category ? (
              <>
                <span className="px-2">/</span>
                <Link
                  to="/experiences"
                  search={{ category: category.slug }}
                  className="hover:text-gold"
                >
                  {category.name}
                </Link>
              </>
            ) : null}
          </nav>
          <h1 className="mt-5 max-w-3xl text-[2.2rem] leading-[1.05] text-espresso-foreground sm:text-5xl">
            {tour.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-espresso-foreground/80">
            <span className="flex items-center gap-2">
              <Stars rating={tour.rating} /> {tour.rating} · {tour.reviewCount} reviews
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} /> {tour.duration}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> {tour.location}
            </span>
            <span className="flex items-center gap-2">
              <Users size={14} /> up to {tour.maxGuests}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_22rem] lg:px-8 lg:py-24">
        <div>
          <p className="text-lg leading-relaxed">{tour.description}</p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {tour.gallery.slice(1).map((src, i) => (
              <img
                key={src + i}
                src={src}
                alt={`${tour.name} — photo ${i + 2}`}
                loading="lazy"
                width={1200}
                height={800}
                className="h-56 w-full rounded-lg object-cover"
              />
            ))}
          </div>

          <h2 className="mt-14 text-2xl">Highlights</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {tour.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed">
                <Check size={16} className="mt-0.5 shrink-0 text-clay" /> {h}
              </li>
            ))}
          </ul>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="text-2xl">What's included</h2>
              <ul className="mt-5 space-y-3">
                {tour.included.map((x) => (
                  <li key={x} className="flex gap-3 text-sm leading-relaxed">
                    <Check size={16} className="mt-0.5 shrink-0 text-clay" /> {x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl">Not included</h2>
              <ul className="mt-5 space-y-3">
                {tour.excluded.map((x) => (
                  <li key={x} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <X size={16} className="mt-0.5 shrink-0" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="text-2xl">Good to know</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {tour.requirements.map((x) => (
                  <li key={x}>· {x}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="flex items-center gap-2 text-2xl">
                <ShieldCheck size={20} className="text-clay" /> Safety
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {tour.safety.map((x) => (
                  <li key={x}>· {x}</li>
                ))}
              </ul>
            </div>
          </div>

          {tour.faqs.length ? (
            <>
              <h2 className="mt-14 text-2xl">Questions about this experience</h2>
              <Accordion type="single" collapsible className="mt-4">
                {tour.faqs.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </>
          ) : null}

          {tourReviews.length ? (
            <>
              <h2 className="mt-14 text-2xl">Guest reviews</h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {tourReviews.map((r) => (
                  <blockquote key={r.id} className="rounded-lg border border-border bg-card p-6">
                    <Stars rating={r.rating} />
                    <p className="mt-3 text-sm leading-relaxed">{r.text}</p>
                    <footer className="mt-4 text-xs text-muted-foreground">
                      {r.name} · {r.country}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </>
          ) : null}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-border bg-card p-6">
            <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              From
            </span>
            <p className="font-display text-4xl">
              {site.currency} {tour.price}
              <span className="ml-2 text-sm text-muted-foreground">{tour.priceType}</span>
            </p>
            <dl className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Duration</dt>
                <dd>{tour.duration}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Vehicle</dt>
                <dd className="text-right">{tour.vehicle}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Hotel pick-up</dt>
                <dd>{tour.pickup ? "Included" : "Not included"}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Max guests</dt>
                <dd>{tour.maxGuests}</dd>
              </div>
            </dl>
            <Button asChild variant="espresso" size="lg" className="mt-6 w-full">
              <Link to="/book" search={{ tour: tour.slug }}>
                Book this experience
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="mt-3 w-full">
              <a href={whatsappLink(`Hi, I'd like to ask about ${tour.name}.`)} target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </a>
            </Button>
          </div>
        </aside>
      </div>

      {related.length ? (
        <section className="border-t border-border bg-sand/45">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <h2 className="mb-8 text-3xl">You may also like</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
