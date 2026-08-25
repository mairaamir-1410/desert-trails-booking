import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TourCard } from "@/components/site/TourCard";
import { Stars } from "@/components/site/Stars";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { categories, featuredTours, activeTours, images } from "@/data/tours";
import { reviews, faqs, whyUs, gallery } from "@/data/content";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DuneAura Tourism — Desert Safaris, Quad Biking & City Tours" },
      {
        name: "description",
        content:
          "Small-group and private desert safaris, dune buggy and quad experiences, overnight camps and guided city tours across the Emirates.",
      },
      { property: "og:title", content: "DuneAura Tourism — Desert Journeys, Refined" },
      {
        property: "og:description",
        content:
          "Licensed guides, small groups and honest pricing. Book a desert safari or dune adventure in a few clicks.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Featured />
      <WhyUs />
      <NightSection />
      <DiningSection />
      <GalleryStrip />
      <ReviewsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden">
      <img
        src={images.heroDunes}
        alt="A 4x4 cresting a golden dune ridge at sunset in the Arabian desert"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-espresso/90 via-espresso/45 to-espresso/25" />

      <div className="mx-auto w-full max-w-7xl px-5 pt-28 pb-16 lg:px-8 lg:pb-20">
        <div className="max-w-2xl fade-up">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-gold">
            Dubai · Abu Dhabi · Al Marmoom
          </p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.02] text-espresso-foreground sm:text-6xl">
            The desert, without the tourist coach.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-espresso-foreground/80">
            Six guests per vehicle, guides who host rather than herd, and camp evenings that end
            when you want them to. {site.tagline}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/book">Book now</Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <Link to="/experiences">
                Explore experiences <ArrowRight />
              </Link>
            </Button>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-espresso-foreground/20 pt-6 text-espresso-foreground/85">
            {[
              { k: "4.8 / 5", v: "1,400+ guest reviews" },
              { k: "12 yrs", v: "operating in the Emirates" },
              { k: "6 max", v: "guests per shared 4x4" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-2xl text-gold">{s.k}</dt>
                <dd className="text-xs tracking-wide text-espresso-foreground/65">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="What we run"
        title="Eight ways into the desert"
        intro="Every experience below is guided, permitted and priced with transfers where stated. Pick a category to see the departures inside it."
        action={
          <Button asChild variant="outline">
            <Link to="/experiences">All experiences</Link>
          </Button>
        }
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <Link
            key={c.slug}
            to="/experiences"
            search={{ category: c.slug }}
            className="group relative isolate flex min-h-64 flex-col justify-end overflow-hidden rounded-lg p-6"
          >
            <img
              src={c.image}
              alt={c.name}
              loading="lazy"
              width={1200}
              height={800}
              className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 -z-10 bg-gradient-to-t from-espresso/90 via-espresso/35 to-transparent" />
            <h3 className="text-2xl text-espresso-foreground">{c.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-espresso-foreground/75">{c.blurb}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-gold">
              Explore <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="border-y border-border bg-sand/45">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Most booked"
          title="Featured departures"
          intro="Our highest-rated experiences this season, with live availability confirmed by phone or WhatsApp after you book."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredTours.map((t) => (
            <TourCard key={t.slug} tour={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading eyebrow="Why DuneAura" title="Built around the guest, not the group size" />
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.map((w, i) => (
          <div key={w.title}>
            <span className="font-display text-3xl text-clay/40">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="rule-gold my-4 w-16" />
            <h3 className="text-lg">{w.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function NightSection() {
  return (
    <section className="bg-espresso text-espresso-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-gold">After sunset</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            When the coaches leave, the desert gets quiet.
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-espresso-foreground/75">
            Our overnight camp sits away from the main tourist belt. Private tents, a fire that
            stays lit, a guide who can name the constellations, and sunrise over an empty dune line
            before breakfast.
          </p>
          <ul className="mt-7 space-y-3 text-sm text-espresso-foreground/80">
            {["Private serviced tents", "Guided stargazing", "Dinner and breakfast", "Sunrise dune walk"].map(
              (i) => (
                <li key={i} className="flex items-center gap-3">
                  <Sparkles size={15} className="text-gold" /> {i}
                </li>
              ),
            )}
          </ul>
          <Button asChild variant="gold" size="lg" className="mt-9">
            <Link to="/experiences/$slug" params={{ slug: "overnight-desert-camp" }}>
              See the overnight camp
            </Link>
          </Button>
        </div>
        <img
          src={images.campNight}
          alt="Desert camp lit by lanterns and firelight at dusk"
          loading="lazy"
          width={1200}
          height={800}
          className="rounded-lg object-cover"
        />
      </div>
    </section>
  );
}

function DiningSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
      <img
        src={images.bbqDinner}
        alt="Arabian BBQ buffet laid out under lanterns at the desert camp"
        loading="lazy"
        width={1200}
        height={800}
        className="order-2 rounded-lg object-cover lg:order-1"
      />
      <div className="order-1 lg:order-2">
        <p className="eyebrow">Food &amp; entertainment</p>
        <h2 className="mt-4 text-3xl sm:text-4xl">Dinner is cooked at camp, not trucked in.</h2>
        <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
          An open-fire grill, a proper vegetarian spread, unlimited water and Arabic coffee. The
          evening programme runs Tanoura, Ayyala and fire performances — spaced out so you can
          actually eat between them.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { t: "BBQ buffet", d: "Veg and non-veg, cooked to order at the grill." },
            { t: "Live shows", d: "Three performances across the evening." },
            { t: "Henna & costumes", d: "Included at no extra cost." },
            { t: "Shisha corner", d: "Optional, in a separate seating area." },
          ].map((x) => (
            <div key={x.t} className="rounded-md border border-border bg-card p-4">
              <h3 className="text-base">{x.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryStrip() {
  return (
    <section className="border-y border-border bg-sand/45">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="From the dunes"
          title="Gallery"
          action={
            <Button asChild variant="outline">
              <Link to="/gallery">View gallery</Link>
            </Button>
          }
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.slice(0, 8).map((g) => (
            <img
              key={g.id}
              src={g.src}
              alt={g.alt}
              loading="lazy"
              width={1200}
              height={800}
              className="aspect-square rounded-md object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Guest reviews"
        title="What people say"
        intro="Demo reviews shown while the site is in development — these are placeholders, not real guests."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.slice(0, 6).map((r) => (
          <figure key={r.id} className="rounded-lg border border-border bg-card p-6">
            <Stars rating={r.rating} />
            <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
              <span className="block text-foreground">{r.name}</span>
              {r.country} · {r.tour}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="border-t border-border bg-sand/45">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-28">
        <div>
          <p className="eyebrow">Good to know</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Frequently asked</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Still unsure about something? Message us on WhatsApp and a real person will answer.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link to="/faq">All questions</Link>
          </Button>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.slice(0, 6).map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={images.camelRide}
        alt="Camel caravan silhouetted against a desert sunset"
        loading="lazy"
        width={1200}
        height={800}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-espresso/80" />
      <div className="mx-auto max-w-3xl px-5 py-24 text-center lg:py-32">
        <ShieldCheck className="mx-auto text-gold" />
        <h2 className="mt-6 text-3xl text-espresso-foreground sm:text-5xl">
          Ready when you are.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-espresso-foreground/80">
          Free cancellation up to 24 hours before departure. {activeTours.length} experiences
          available, most with hotel pick-up included.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button asChild variant="gold" size="xl">
            <Link to="/book">Book now</Link>
          </Button>
          <Button asChild variant="onDark" size="xl">
            <Link to="/contact">Talk to us</Link>
          </Button>
        </div>
        <p className="mt-8 inline-flex items-center gap-2 text-xs text-espresso-foreground/60">
          <Star size={13} className="fill-gold text-gold" /> 4.8 average across 1,400+ demo reviews
        </p>
      </div>
    </section>
  );
}
