# Desert Vibes Tourism — New Website

A premium, database-driven desert tourism platform: public site + admin dashboard, built on this project's React/TanStack Start + Tailwind + shadcn stack with Lovable Cloud (Postgres, Auth, Storage) as the backend. Everything content-related is editable from the admin panel — no code changes for prices, images, reviews, or contact details.

Note on stack: this project runs TanStack Start (React + TypeScript + Tailwind + shadcn), not Next.js. It covers the same ground — SSR, SEO metadata per route, server functions — so the requirements are fully met.

## Design direction

- Palette: deep charcoal base, warm sand and cream surfaces, terracotta/burnt-orange primary, restrained gold accent. All tokens in `src/styles.css`, so a full rebrand is a token edit.
- Typography: one strong display face for headings, one clean grotesque for body.
- Editorial, spacious layout: large cinematic imagery, thin rules, generous whitespace, subtle motion only. No gradient soup, no glassmorphism.
- Custom shadcn variants (hero button, experience card, stat block) instead of ad-hoc classes.

## Information architecture

```
/                      home
/experiences           listing: search, category filter, sort
/experiences/$slug     detail: gallery, inclusions, FAQ, reviews, booking
/packages              package grid
/packages/$slug        package detail
/book                  booking flow (prefilled from a package)
/gallery               media grid + lightbox
/about  /contact  /faq  /reviews
/auth                  admin sign-in
/admin/*               protected dashboard
```

## Database (Lovable Cloud)

Tables: `categories`, `experiences`, `packages`, `media` (gallery), `reviews`, `faqs`, `bookings`, `contact_messages`, `site_settings` (single row), `user_roles` + `has_role()` for admin authorization.

- Public read via narrow anon SELECT policies on active/approved rows only.
- Writes: bookings and contact messages accept public inserts (validated); everything else is admin-only via `has_role(auth.uid(),'admin')`.
- Bookings carry status: pending / confirmed / cancelled / completed, plus a nullable payment block reserved for later.
- Storage bucket for images/video with admin-only upload policies.
- Seed migration ships realistic demo data, reviews clearly labelled DEMO.

## Admin dashboard

Overview stats, Bookings (search/filter/status update), Experiences CRUD, Packages CRUD, Categories, Gallery upload/manage, Reviews approve/hide, FAQs, Contact messages, Site settings. Reusable data-table and form components across all sections.

## Phases

1. Enable Cloud, schema + RLS + demo seed, design system tokens and fonts.
2. Public shell: navigation, footer, home page sections (hero, categories, featured, why-us, night experience, gallery teaser, reviews, FAQ, final CTA).
3. Experiences and packages listing + detail pages with filters and SEO metadata.
4. Booking flow and contact system (map embed, WhatsApp CTA), both writing to the database.
5. Admin auth + dashboard CRUD across all sections, including media uploads.
6. Gallery, about, FAQ, reviews pages; SEO (per-route meta, JSON-LD, sitemap, robots), responsive pass at 375/390/768/1024/1440, console/build check.

## Technical notes

- Hero and category imagery generated as original assets — no external hotlinks.
- All business info read from `site_settings`; nothing hardcoded in components.
- Payments, i18n, notifications, coupons: not built now, but schema and layout leave room.
