import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Users } from "lucide-react";
import type { Tour } from "@/data/tours";
import { site } from "@/data/site";
import { Stars } from "./Stars";
import { Button } from "@/components/ui/button";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lift">
      <Link
        to="/experiences/$slug"
        params={{ slug: tour.slug }}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <img
          src={tour.gallery[0]}
          alt={tour.name}
          loading="lazy"
          width={1200}
          height={800}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-sm bg-background/90 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.16em]">
          {tour.duration}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <Stars rating={tour.rating} />
          <span className="text-xs text-muted-foreground">
            {tour.rating} · {tour.reviewCount} reviews
          </span>
        </div>

        <h3 className="mt-3 text-xl leading-snug">
          <Link to="/experiences/$slug" params={{ slug: tour.slug }} className="hover:text-clay">
            {tour.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tour.short}</p>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
          <li className="flex items-center gap-1.5">
            <MapPin size={13} /> {tour.location}
          </li>
          <li className="flex items-center gap-1.5">
            <Clock size={13} /> {tour.duration}
          </li>
          <li className="flex items-center gap-1.5">
            <Users size={13} /> up to {tour.maxGuests}
          </li>
        </ul>

        <div className="mt-5 flex items-end justify-between gap-3 border-t border-border pt-4">
          <div>
            <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              From
            </span>
            <span className="font-display text-2xl">
              {site.currency} {tour.price}
            </span>
            <span className="ml-1 text-xs text-muted-foreground">{tour.priceType}</span>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link to="/experiences/$slug" params={{ slug: tour.slug }}>
                Details
              </Link>
            </Button>
            <Button asChild variant="espresso" size="sm">
              <Link to="/book" search={{ tour: tour.slug }}>
                Book
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
