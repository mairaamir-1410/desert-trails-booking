import { images } from "./tours";

/** DEMO reviews — placeholder content, not real customers. */
export type Review = {
  id: string;
  name: string;
  country: string;
  rating: number;
  date: string;
  tour: string;
  text: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Lena M. (demo)",
    country: "Germany",
    rating: 5,
    date: "2026-06-14",
    tour: "Signature Evening Safari",
    text: "The drive was thrilling without ever feeling unsafe, and the camp was far calmer than we expected. Our guide made the whole evening.",
  },
  {
    id: "r2",
    name: "Rahul S. (demo)",
    country: "India",
    rating: 5,
    date: "2026-05-30",
    tour: "Private Desert Safari",
    text: "Booked the private vehicle for our family. Being able to set our own timing made a huge difference with young kids.",
  },
  {
    id: "r3",
    name: "Sofia A. (demo)",
    country: "Spain",
    rating: 4,
    date: "2026-05-02",
    tour: "Quad Bike Dune Run",
    text: "Great briefing and proper gear. An hour flew by — I'd book the two-hour combo next time.",
  },
  {
    id: "r4",
    name: "James K. (demo)",
    country: "United Kingdom",
    rating: 5,
    date: "2026-04-18",
    tour: "Overnight Desert Camp",
    text: "Waking up to sunrise over the dunes was the highlight of our trip. Tent was clean and the breakfast was generous.",
  },
  {
    id: "r5",
    name: "Amira H. (demo)",
    country: "Egypt",
    rating: 5,
    date: "2026-03-27",
    tour: "Desert Dining & Show Night",
    text: "Food was excellent and the performances felt genuine rather than staged for tourists.",
  },
  {
    id: "r6",
    name: "Tom V. (demo)",
    country: "Netherlands",
    rating: 4,
    date: "2026-03-09",
    tour: "Dubai City Journey",
    text: "Well paced day, knowledgeable guide. Would have liked a little more free time at the souks.",
  },
];

export type Faq = { q: string; a: string; group: string };

export const faqs: Faq[] = [
  {
    group: "Booking",
    q: "How do I book an experience?",
    a: "Choose an experience, pick your date and group size, and submit the booking form. We confirm by phone or WhatsApp, usually within an hour during opening hours.",
  },
  {
    group: "Booking",
    q: "What payment methods are accepted?",
    a: "Bookings are currently confirmed as requests, with payment taken in cash or by card at pick-up. Online payment is planned for a later release.",
  },
  {
    group: "Booking",
    q: "What is the cancellation policy?",
    a: "Free cancellation up to 24 hours before departure. Inside 24 hours the booking is non-refundable but can be moved once.",
  },
  {
    group: "On the day",
    q: "Is hotel pick-up available?",
    a: "Yes, on most experiences. Pick-up is included across Dubai; Sharjah and Abu Dhabi pick-ups carry a surcharge.",
  },
  {
    group: "On the day",
    q: "What should I wear?",
    a: "Light, comfortable clothing and closed shoes. Bring a warm layer for evening and overnight trips between November and March.",
  },
  {
    group: "On the day",
    q: "What happens if the weather changes?",
    a: "In sandstorms or heavy rain we move your booking to the next available date at no cost, or refund it in full.",
  },
  {
    group: "Guests",
    q: "Is it family friendly?",
    a: "Yes. Camp evenings suit all ages. Dune driving is not recommended during pregnancy or with back and neck conditions.",
  },
  {
    group: "Guests",
    q: "Are children allowed?",
    a: "Children are welcome on all camp and safari experiences. Quad biking requires a minimum age of 16 to ride solo.",
  },
  {
    group: "Guests",
    q: "What is included in the price?",
    a: "Each experience page lists exactly what is included and excluded. Transfers, activities and dinner are included where stated.",
  },
];

export type GalleryItem = { id: string; src: string; alt: string; category: string };

export const galleryCategories = [
  "All",
  "Desert",
  "Quad Bikes",
  "Dune Buggy",
  "Camp",
  "Food",
  "Culture",
  "City",
];

export const gallery: GalleryItem[] = [
  { id: "g1", src: images.heroDunes, alt: "4x4 cresting a dune at sunset", category: "Desert" },
  { id: "g2", src: images.campNight, alt: "Desert camp lit by lanterns at dusk", category: "Camp" },
  { id: "g3", src: images.quadBike, alt: "Quad bike riding across sand dunes", category: "Quad Bikes" },
  { id: "g4", src: images.duneBuggy, alt: "Dune buggy spraying sand on a dune", category: "Dune Buggy" },
  { id: "g5", src: images.camelRide, alt: "Camel caravan silhouetted at golden hour", category: "Culture" },
  { id: "g6", src: images.bbqDinner, alt: "BBQ buffet laid out at the desert camp", category: "Food" },
  { id: "g7", src: images.cityTour, alt: "City skyline at dusk from the water", category: "City" },
  { id: "g8", src: images.sandboarding, alt: "Sandboarder carving down a dune face", category: "Desert" },
];

export const whyUs = [
  {
    title: "Licensed and permitted",
    text: "Every route runs on registered desert permits with a serviced, tracked fleet.",
  },
  {
    title: "Guides, not drivers",
    text: "Our team is first-aid trained and briefed to host, not just transport, your group.",
  },
  {
    title: "Small groups",
    text: "Shared departures cap at six guests per vehicle, so nobody rides in the middle seat.",
  },
  {
    title: "Honest pricing",
    text: "What you see is the final price. No camp entry fees or surprise add-ons at the gate.",
  },
];
