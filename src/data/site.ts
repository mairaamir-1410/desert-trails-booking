/**
 * Central business information (DEMO DATA).
 * Replace the values here to update the whole site — nothing is hardcoded in components.
 */
export const site = {
  name: "DuneAura Tourism",
  tagline: "Desert journeys, refined.",
  description:
    "Private and shared desert safaris, dune adventures and city journeys across the Emirates, hosted by professional guides.",
  phone: "+971 50 000 0000",
  phoneHref: "tel:+971500000000",
  whatsapp: "971500000000",
  email: "hello@duneaura.example",
  address: "Office 1204, Marina Business Tower, Dubai, United Arab Emirates",
  hours: "Daily · 08:00 – 23:00 (GST)",
  mapEmbed:
    "https://www.google.com/maps?q=Dubai%20Marina%2C%20Dubai&output=embed",
  mapDirections: "https://www.google.com/maps/dir/?api=1&destination=Dubai+Marina,Dubai",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TripAdvisor", href: "https://tripadvisor.com" },
  ],
  footerNote:
    "DuneAura Tourism is a demo project. All prices, reviews and contact details shown are placeholders.",
  currency: "AED",
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
