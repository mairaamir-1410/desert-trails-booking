import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

const galleryImages = [
  {
    src: "/images/gallery/desert-safari.jpg",
    alt: "Desert safari across golden dunes",
    title: "Desert Safari",
    category: "Adventure",
  },
  {
    src: "/images/gallery/dune-buggy.jpg",
    alt: "Dune buggy adventure in the desert",
    title: "Dune Adventures",
    category: "Adventure",
  },
  {
    src: "/images/gallery/sunset.jpg",
    alt: "Golden sunset over desert dunes",
    title: "Golden Hour",
    category: "Landscape",
  },
  {
    src: "/images/gallery/desert-camp.jpg",
    alt: "Traditional desert camp beneath the evening sky",
    title: "Desert Camp",
    category: "Culture",
  },
  {
    src: "/images/gallery/camel-ride.jpg",
    alt: "Camel ride across the desert",
    title: "Desert Trails",
    category: "Experience",
  },
  {
    src: "/images/gallery/night-camp.jpg",
    alt: "Desert camp under a star-filled night sky",
    title: "Under the Stars",
    category: "Landscape",
  },
];

function GalleryPage() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-clay">The DuneAura Gallery</p>

          <h1 className="mt-4 max-w-4xl text-5xl leading-tight md:text-6xl">
            Moments from the desert worth remembering.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            Take a glimpse into the landscapes, adventures, and unforgettable moments that make
            every DuneAura journey special.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-clay">Explore The Collection</p>

            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">From sunrise to starlight.</h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Discover the atmosphere of our desert experiences before you begin your own journey.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <article
              key={image.src}
              className={`group overflow-hidden border border-border bg-card ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0 ? "h-full min-h[520px]" : "aspect[4/3]"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 bg:gradient-to-t from-black/70 via-black/20 to-transparent p-6 pt-20">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                    {image.category}
                  </p>

                  <h3 className="mt-2 text-2xl text-white">{image.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="text-3xl">01</p>
              <h3 className="mt-4 text-xl font-semibold">Feel the Adventure</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                From sweeping dunes to exhilarating desert activities, discover experiences designed
                for curious travelers.
              </p>
            </div>

            <div>
              <p className="text-3xl">02</p>
              <h3 className="mt-4 text-xl font-semibold">Discover the Culture</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Experience the traditions, hospitality, and stories that give the desert its
                character.
              </p>
            </div>

            <div>
              <p className="text-3xl">03</p>
              <h3 className="mt-4 text-xl font-semibold">Make It Yours</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Choose an experience that matches your pace, interests, and idea of the perfect
                desert escape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-clay">Your Turn</p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">
            The next story could be yours.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Explore our experiences and start planning a desert journey filled with moments worth
            capturing.
          </p>

          <a
            href="/experiences"
            className="mt-8 inline-block rounded-md bg-clay px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore Experiences
          </a>
        </div>
      </section>
    </main>
  );
}
