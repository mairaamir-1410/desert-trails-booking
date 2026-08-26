import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { activeTours, getTour } from "@/data/tours";
import { site, whatsappLink } from "@/data/site";
import { saveBooking, type Booking } from "@/lib/bookings";

type Search = { tour?: string };

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    tour: typeof search.tour === "string" ? search.tour : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Request a Booking — DuneAura Tourism" },
      {
        name: "description",
        content:
          "Send a booking request for any DuneAura desert safari, dune adventure or city tour. We confirm by phone or WhatsApp.",
      },
      { property: "og:title", content: "Request a Booking — DuneAura Tourism" },
      {
        property: "og:description",
        content: "Pick your experience, date and group size — we confirm within the hour.",
      },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const { tour: tourParam } = Route.useSearch();
  const initial = (tourParam && getTour(tourParam)?.slug) || activeTours[0].slug;

  const [slug, setSlug] = useState(initial);
  const [guests, setGuests] = useState(2);
  const [confirmation, setConfirmation] = useState<Booking | null>(null);

  const tour = getTour(slug) ?? activeTours[0];
  const total = tour.priceType === "per person" ? tour.price * guests : tour.price;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const record = saveBooking({
      tourSlug: tour.slug,
      tourName: tour.name,
      date: String(form.get("date") ?? ""),
      guests,
      pickup: String(form.get("pickup") ?? ""),
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      notes: String(form.get("notes") ?? ""),
      amount: total,
    });
    setConfirmation(record);
    toast.success("Booking request received", {
      description: `Reference ${record.id}. We'll confirm shortly.`,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (confirmation) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center lg:px-8">
        <p className="eyebrow">Request received</p>
        <h1 className="mt-4 text-4xl">Thank you, {confirmation.name.split(" ")[0] || "traveller"}</h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Your reference is <strong className="text-foreground">{confirmation.id}</strong>. We'll
          confirm {confirmation.tourName} on {confirmation.date} for {confirmation.guests} guests by
          phone or WhatsApp, usually within an hour during opening hours.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Estimated total: {site.currency} {confirmation.amount}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="espresso">
            <a href={whatsappLink(`Hi, my booking reference is ${confirmation.id}.`)} target="_blank" rel="noreferrer">
              Confirm on WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link to="/experiences">Browse more experiences</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/">Back to home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <p className="eyebrow">Booking</p>
      <h1 className="mt-3 max-w-2xl text-4xl leading-[1.05] sm:text-5xl">
        Request your desert experience
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
        No payment is taken online. Send the request and we'll confirm availability by phone or
        WhatsApp before anything is charged.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_22rem]">
        <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="tour">Experience</Label>
            <select
              id="tour"
              name="tour"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              {activeTours.map((t) => (
                <option key={t.slug} value={t.slug}>
                  {t.name} — {site.currency} {t.price} {t.priceType}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Label htmlFor="date">Preferred date</Label>
            <Input id="date" name="date" type="date" required className="mt-2" />
          </div>
          <div>
            <Label htmlFor="guests">Guests</Label>
            <Input
              id="guests"
              name="guests"
              type="number"
              min={1}
              max={40}
              value={guests}
              onChange={(e) => setGuests(Math.max(1, Number(e.target.value) || 1))}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" required className="mt-2" />
          </div>
          <div>
            <Label htmlFor="phone">Phone / WhatsApp</Label>
            <Input id="phone" name="phone" required className="mt-2" />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required className="mt-2" />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="pickup">Hotel or pick-up location</Label>
            <Input id="pickup" name="pickup" className="mt-2" placeholder="Hotel name, area" />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="notes">Anything we should know?</Label>
            <Textarea id="notes" name="notes" rows={4} className="mt-2" />
          </div>

          <div className="sm:col-span-2">
            <Button type="submit" variant="espresso" size="lg" className="w-full sm:w-auto">
              Send booking request
            </Button>
          </div>
        </form>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-border bg-card p-6">
            <img
              src={tour.gallery[0]}
              alt={tour.name}
              loading="lazy"
              width={800}
              height={600}
              className="h-40 w-full rounded-md object-cover"
            />
            <h2 className="mt-5 text-xl leading-snug">{tour.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{tour.short}</p>
            <dl className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Duration</dt>
                <dd>{tour.duration}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Price</dt>
                <dd>
                  {site.currency} {tour.price} {tour.priceType}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Guests</dt>
                <dd>{guests}</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-3 font-display text-lg">
                <dt>Estimated total</dt>
                <dd>
                  {site.currency} {total}
                </dd>
              </div>
            </dl>
            <Button asChild variant="outline" className="mt-5 w-full">
              <Link to="/experiences/$slug" params={{ slug: tour.slug }}>
                View experience details
              </Link>
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
