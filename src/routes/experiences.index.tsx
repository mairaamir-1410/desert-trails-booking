import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TourCard } from "@/components/site/TourCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { categories, activeTours, type CategorySlug } from "@/data/tours";

type Sort = "featured" | "price-asc" | "price-desc" | "rating";

type Search = { category?: CategorySlug; q?: string; sort?: Sort };

const categorySlugs = categories.map((c) => c.slug) as string[];
const sorts: Sort[] = ["featured", "price-asc", "price-desc", "rating"];

export const Route = createFileRoute("/experiences/")({
  validateSearch: (search: Record<string, unknown>): Search => {
    const category =
      typeof search.category === "string" && categorySlugs.includes(search.category)
        ? (search.category as CategorySlug)
        : undefined;
    const q = typeof search.q === "string" && search.q.trim() ? search.q : undefined;
    const sort =
      typeof search.sort === "string" && sorts.includes(search.sort as Sort)
        ? (search.sort as Sort)
        : undefined;
    return { category, q, sort };
  },
  head: () => ({
    meta: [
      { title: "Desert Experiences & Tours — DuneAura Tourism" },
      {
        name: "description",
        content:
          "Browse every DuneAura departure: desert safaris, quad biking, dune buggies, overnight camps, city tours and dining nights.",
      },
      { property: "og:title", content: "Desert Experiences & Tours — DuneAura Tourism" },
      {
        property: "og:description",
        content: "Filter safaris, dune adventures and city tours by category, price and rating.",
      },
    ],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  const { category, q, sort = "featured" } = Route.useSearch();
  const navigate = useNavigate({ from: "/experiences" });

  const setSearch = (next: Partial<Search>) =>
    navigate({ search: (prev) => ({ ...prev, ...next }) });

  let list = activeTours.filter((t) => {
    if (category && t.category !== category) return false;
    if (q) {
      const needle = q.toLowerCase();
      if (
        !t.name.toLowerCase().includes(needle) &&
        !t.short.toLowerCase().includes(needle) &&
        !t.location.toLowerCase().includes(needle)
      )
        return false;
    }
    return true;
  });

  list = [...list].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return Number(b.featured) - Number(a.featured);
  });

  const active = categories.find((c) => c.slug === category);

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="Experiences"
        title={active ? active.name : "Every DuneAura departure"}
        intro={
          active
            ? active.blurb
            : "Guided, permitted and priced with transfers where stated. Filter by category or search for a specific experience."
        }
      />

      <div className="mb-8 flex flex-col gap-4 border-y border-border py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSearch({ category: undefined })}
            className={`rounded-sm border px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.16em] transition-colors ${
              !category
                ? "border-clay bg-clay text-primary-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setSearch({ category: c.slug })}
              className={`rounded-sm border px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.16em] transition-colors ${
                category === c.slug
                  ? "border-clay bg-clay text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Input
            value={q ?? ""}
            onChange={(e) => setSearch({ q: e.target.value || undefined })}
            placeholder="Search experiences"
            className="h-10 w-full sm:w-56"
            aria-label="Search experiences"
          />
          <select
            value={sort}
            onChange={(e) => setSearch({ sort: e.target.value as Sort })}
            aria-label="Sort experiences"
            className="h-10 rounded-md border border-input bg-background px-3 text-sm"
          >
            <option value="featured">Featured first</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="rating">Top rated</option>
          </select>
        </div>
      </div>

      {list.length ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <TourCard key={t.slug} tour={t} />
          ))}
        </div>
      ) : (
        <div className="border border-border bg-card p-12 text-center">
          <h2 className="text-2xl">Nothing matches that search</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Try another category, or clear the filters to see all departures.
          </p>
          <Button
            variant="espresso"
            className="mt-6"
            onClick={() => setSearch({ category: undefined, q: undefined })}
          >
            Clear filters
          </Button>
        </div>
      )}

      <div className="mt-16 border-t border-border pt-8 text-sm text-muted-foreground">
        Not sure which to pick?{" "}
        <Link to="/contact" className="text-clay underline-offset-4 hover:underline">
          Talk to our team
        </Link>{" "}
        or{" "}
        <Link to="/faq" className="text-clay underline-offset-4 hover:underline">
          read the FAQ
        </Link>
        .
      </div>
    </div>
  );
}
