import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-clay">About DuneAura</p>

        <h1 className="mt-4 max-w-4xl text-5xl leading-tight md:text-6xl">
          Desert journeys designed to be remembered.
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
          DuneAura connects travelers with carefully selected desert experiences, local guides,
          beautiful landscapes, and authentic moments.
        </p>
      </section>

      <section className="mt-20 grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-clay">Our Story</p>

          <h2 className="mt-4 text-4xl leading-tight">
            More than a tour. A connection to the desert.
          </h2>
        </div>

        <div className="space-y-5 text-muted-foreground">
          <p>
            DuneAura was created for travelers who want to experience the desert rather than simply
            pass through it.
          </p>

          <p>
            We bring together desert safaris, dune adventures, overnight camps, cultural
            experiences, and memorable journeys.
          </p>

          <p>Our goal is to make discovering the desert simple, comfortable, and unforgettable.</p>
        </div>
      </section>

      <section className="mt-20 border-y border-border py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-clay">Our Values</p>

        <h2 className="mt-4 text-4xl leading-tight">What makes DuneAura different</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="border border-border p-6">
            <p className="text-sm uppercase tracking-[0.15em] text-clay">01</p>

            <h3 className="mt-4 text-xl font-semibold">Authenticity</h3>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Discover genuine desert experiences and local culture.
            </p>
          </div>

          <div className="border border-border p-6">
            <p className="text-sm uppercase tracking-[0.15em] text-clay">02</p>

            <h3 className="mt-4 text-xl font-semibold">Trusted Partners</h3>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Work with experienced guides and local experience providers.
            </p>
          </div>

          <div className="border border-border p-6">
            <p className="text-sm uppercase tracking-[0.15em] text-clay">03</p>

            <h3 className="mt-4 text-xl font-semibold">Easy Booking</h3>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Find and book your next desert experience with ease.
            </p>
          </div>

          <div className="border border-border p-6">
            <p className="text-sm uppercase tracking-[0.15em] text-clay">04</p>

            <h3 className="mt-4 text-xl font-semibold">Responsible Travel</h3>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Explore beautiful destinations while respecting local communities and environments.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-clay">The DuneAura Experience</p>

            <h2 className="mt-4 text-4xl leading-tight">Every journey should feel effortless.</h2>
          </div>

          <div className="space-y-5 text-muted-foreground">
            <p>
              From choosing the right adventure to planning the details, we want your journey to
              feel simple from beginning to end.
            </p>

            <p>
              Whether you are looking for an adrenaline-filled dune adventure, a peaceful desert
              evening, or a cultural experience, DuneAura helps you find an experience that fits
              your journey.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 border-t border-border pt-20 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-clay">Start Exploring</p>

        <h2 className="mx-auto mt-4 max-w-3xl text-4xl leading-tight">
          Your next desert adventure is waiting.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Explore our collection of carefully selected desert experiences and discover something
          worth remembering.
        </p>

        <Link
          to="/experiences"
          className="mt-8 inline-block rounded-md bg-clay px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Explore Experiences
        </Link>
      </section>
    </div>
  );
}
