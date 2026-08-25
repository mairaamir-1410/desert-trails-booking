import heroDunes from "@/assets/hero-dunes.jpg";
import campNight from "@/assets/camp-night.jpg";
import quadBike from "@/assets/quad-bike.jpg";
import duneBuggy from "@/assets/dune-buggy.jpg";
import camelRide from "@/assets/camel-ride.jpg";
import bbqDinner from "@/assets/bbq-dinner.jpg";
import cityTour from "@/assets/city-tour.jpg";
import sandboarding from "@/assets/sandboarding.jpg";

export const images = {
  heroDunes,
  campNight,
  quadBike,
  duneBuggy,
  camelRide,
  bbqDinner,
  cityTour,
  sandboarding,
};

export type CategorySlug =
  | "desert-safari"
  | "quad-biking"
  | "dune-buggy"
  | "night-experiences"
  | "city-tours"
  | "culture-dining";

export type Category = {
  slug: CategorySlug;
  name: string;
  blurb: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "desert-safari",
    name: "Desert Safari",
    blurb: "Dune drives, sunset stops and camp evenings — shared or fully private.",
    image: heroDunes,
  },
  {
    slug: "quad-biking",
    name: "Quad Biking",
    blurb: "Guided ATV rides across open dune tracks with full safety briefing.",
    image: quadBike,
  },
  {
    slug: "dune-buggy",
    name: "Dune Buggy",
    blurb: "Two and four-seat buggies built for the steep stuff.",
    image: duneBuggy,
  },
  {
    slug: "night-experiences",
    name: "Night Experiences",
    blurb: "Overnight camps, stargazing and quiet desert mornings.",
    image: campNight,
  },
  {
    slug: "city-tours",
    name: "City Tours",
    blurb: "Full-day guided journeys through Dubai and Abu Dhabi.",
    image: cityTour,
  },
  {
    slug: "culture-dining",
    name: "Culture & Dining",
    blurb: "Camel rides, henna, live shows and an open-fire BBQ buffet.",
    image: bbqDinner,
  },
];

export type Tour = {
  slug: string;
  name: string;
  category: CategorySlug;
  short: string;
  description: string;
  price: number;
  priceType: "per person" | "per vehicle" | "per group";
  duration: string;
  location: string;
  rating: number;
  reviewCount: number;
  maxGuests: number;
  vehicle: string;
  pickup: boolean;
  featured: boolean;
  active: boolean;
  gallery: string[];
  highlights: string[];
  included: string[];
  excluded: string[];
  requirements: string[];
  safety: string[];
  faqs: { q: string; a: string }[];
};

export const tours: Tour[] = [
  {
    slug: "signature-evening-safari",
    name: "Signature Evening Safari",
    category: "desert-safari",
    short: "Dune drive, sunset stop and a full camp evening with BBQ buffet.",
    description:
      "Our most-booked departure. We collect you in the late afternoon, cross the conservation dunes while the light turns, then settle into a private-feel camp for shows, dinner and a slow drive home under the stars.",
    price: 129,
    priceType: "per person",
    duration: "6 hours",
    location: "Al Marmoom dune belt",
    rating: 4.9,
    reviewCount: 412,
    maxGuests: 6,
    vehicle: "Shared 4x4 Land Cruiser",
    pickup: true,
    featured: true,
    active: true,
    gallery: [heroDunes, campNight, bbqDinner, camelRide],
    highlights: ["Sunset dune drive", "Camel ride", "Sandboarding", "BBQ buffet", "Live shows"],
    included: [
      "Hotel or residence pick-up and drop-off",
      "45-minute dune drive with a licensed guide",
      "Sandboarding and short camel ride",
      "Henna, Arabic coffee, dates and unlimited water",
      "Live shows: Tanoura, Ayyala and fire performance",
      "BBQ buffet dinner (vegetarian and non-vegetarian)",
    ],
    excluded: ["Alcoholic drinks", "Quad bike add-on", "Gratuities", "Personal expenses"],
    requirements: [
      "Not recommended during pregnancy or with back/neck injuries",
      "Children under 3 travel free but need a booster seat request",
      "Comfortable clothing and closed shoes",
    ],
    safety: [
      "Fleet serviced every 30 days and desert-permit registered",
      "Guides trained in first aid and dune recovery",
      "Seat belts mandatory throughout the drive",
    ],
    faqs: [
      { q: "What time is pick-up?", a: "Typically 15:00–15:30 depending on your area and the season." },
      { q: "Is dinner included?", a: "Yes — a full BBQ buffet with vegetarian options is included." },
    ],
  },
  {
    slug: "private-desert-safari",
    name: "Private Desert Safari",
    category: "desert-safari",
    short: "Your own vehicle, your own pace, your own guide for the evening.",
    description:
      "A fully private 4x4 with a dedicated guide for your group. Choose your departure time, how long you spend on the dunes and where you stop for photographs.",
    price: 749,
    priceType: "per vehicle",
    duration: "6–7 hours",
    location: "Al Marmoom dune belt",
    rating: 5,
    reviewCount: 118,
    maxGuests: 6,
    vehicle: "Private 4x4 Land Cruiser",
    pickup: true,
    featured: true,
    active: true,
    gallery: [heroDunes, campNight, sandboarding],
    highlights: ["Private vehicle", "Flexible timing", "Reserved camp seating", "Photo stops"],
    included: [
      "Private pick-up and drop-off",
      "Dedicated guide and vehicle for your group",
      "Reserved majlis seating at camp",
      "All camp activities and BBQ buffet dinner",
    ],
    excluded: ["Alcoholic drinks", "Gratuities"],
    requirements: ["Advance booking of 24 hours recommended", "Maximum 6 guests per vehicle"],
    safety: ["Licensed private guide", "Child seats available on request"],
    faqs: [{ q: "Can we choose the departure time?", a: "Yes, any time between 14:00 and 17:00." }],
  },
  {
    slug: "morning-dune-safari",
    name: "Morning Dune Safari",
    category: "desert-safari",
    short: "Cool early light, empty dunes and an unhurried breakfast stop.",
    description:
      "An early departure for travellers who prefer the quiet side of the desert. Softer temperatures, better photography and back in the city before lunch.",
    price: 79,
    priceType: "per person",
    duration: "4 hours",
    location: "Lahbab red dunes",
    rating: 4.7,
    reviewCount: 203,
    maxGuests: 6,
    vehicle: "Shared 4x4 Land Cruiser",
    pickup: true,
    featured: false,
    active: true,
    gallery: [heroDunes, sandboarding, camelRide],
    highlights: ["Sunrise dune drive", "Sandboarding", "Camel ride", "Light breakfast"],
    included: ["Pick-up and drop-off", "Dune drive", "Sandboarding", "Camel ride", "Refreshments"],
    excluded: ["Lunch", "Quad bike add-on"],
    requirements: ["Early 05:30–06:30 pick-up", "Bring sunglasses and a light layer"],
    safety: ["Seat belts mandatory", "Registered desert permits"],
    faqs: [{ q: "Is breakfast included?", a: "A light breakfast with tea and coffee is served at the stop." }],
  },
  {
    slug: "overnight-desert-camp",
    name: "Overnight Desert Camp",
    category: "night-experiences",
    short: "Sleep under the stars in a serviced Bedouin-style camp.",
    description:
      "Arrive in the afternoon, spend the evening at camp and stay the night in a private tent. Wake for sunrise over the dunes before a slow breakfast and return.",
    price: 349,
    priceType: "per person",
    duration: "18 hours",
    location: "Private camp, Al Marmoom",
    rating: 4.8,
    reviewCount: 87,
    maxGuests: 4,
    vehicle: "Shared 4x4 Land Cruiser",
    pickup: true,
    featured: true,
    active: true,
    gallery: [campNight, heroDunes, bbqDinner],
    highlights: ["Private tent", "Stargazing session", "Sunrise view", "Dinner and breakfast"],
    included: [
      "Return transfers",
      "Private tent with bedding",
      "BBQ dinner and morning breakfast",
      "Stargazing with a guide",
      "Camp facilities and washrooms",
    ],
    excluded: ["Alcoholic drinks", "Quad biking"],
    requirements: ["Bring a warm layer — desert nights are cold from November to March"],
    safety: ["Overnight camp staff on site", "Lit pathways and fire safety equipment"],
    faqs: [{ q: "Are washrooms available?", a: "Yes, serviced washrooms are available at camp all night." }],
  },
  {
    slug: "quad-bike-dune-run",
    name: "Quad Bike Dune Run",
    category: "quad-biking",
    short: "Guided ATV session on a dedicated dune track.",
    description:
      "A briefed, guided quad session on open dune tracks. Automatic machines, full protective gear and a guide riding with your group the whole way.",
    price: 149,
    priceType: "per person",
    duration: "60 minutes",
    location: "Lahbab red dunes",
    rating: 4.8,
    reviewCount: 331,
    maxGuests: 10,
    vehicle: "Automatic 350cc ATV",
    pickup: false,
    featured: true,
    active: true,
    gallery: [quadBike, sandboarding, heroDunes],
    highlights: ["Automatic quads", "Helmet and goggles", "Guide-led route", "Photo stop"],
    included: ["60-minute guided ride", "Helmet, goggles and gloves", "Safety briefing", "Water"],
    excluded: ["Transfers (add-on available)", "Insurance excess"],
    requirements: ["Minimum age 16 to ride solo", "Closed shoes required"],
    safety: ["Mandatory briefing before every ride", "Guide-escorted route only"],
    faqs: [{ q: "Do I need a licence?", a: "No licence is needed — a short briefing covers everything." }],
  },
  {
    slug: "dune-buggy-expedition",
    name: "Dune Buggy Expedition",
    category: "dune-buggy",
    short: "Two-seat buggy with a guide leading the route across steep dunes.",
    description:
      "Roll cage, harnesses and real power. This route takes in the steeper faces of the dune belt with a lead guide and a support vehicle behind.",
    price: 549,
    priceType: "per group",
    duration: "90 minutes",
    location: "Al Faya dune belt",
    rating: 4.9,
    reviewCount: 164,
    maxGuests: 2,
    vehicle: "2-seat 1000cc buggy",
    pickup: false,
    featured: false,
    active: true,
    gallery: [duneBuggy, heroDunes, sandboarding],
    highlights: ["Roll-cage buggy", "Lead guide", "Support vehicle", "Action photos"],
    included: ["90-minute guided route", "Helmets and harness check", "Briefing", "Water"],
    excluded: ["Transfers", "Damage excess"],
    requirements: ["Driver must be 18+ with a valid licence", "Long sleeves recommended"],
    safety: ["Support vehicle follows every group", "Harness and roll cage on all units"],
    faqs: [{ q: "Can two people ride?", a: "Yes, the price covers a two-seat buggy for the group." }],
  },
  {
    slug: "quad-and-buggy-combo",
    name: "Quad + Buggy Combo",
    category: "quad-biking",
    short: "Half a session on a quad, half in a buggy — one booking.",
    description:
      "For groups who cannot decide. Thirty minutes on an ATV, then swap into a buggy for the second half of the route.",
    price: 399,
    priceType: "per person",
    duration: "2 hours",
    location: "Lahbab red dunes",
    rating: 4.7,
    reviewCount: 92,
    maxGuests: 8,
    vehicle: "ATV + 2-seat buggy",
    pickup: true,
    featured: false,
    active: true,
    gallery: [quadBike, duneBuggy],
    highlights: ["Two vehicles", "Guided route", "Full gear", "Refreshments"],
    included: ["Both sessions", "All safety gear", "Guide", "Refreshments"],
    excluded: ["Meals", "Insurance excess"],
    requirements: ["Minimum age 16", "Closed shoes"],
    safety: ["Briefing before each vehicle change"],
    faqs: [{ q: "Can we split the sessions between two people?", a: "Yes, just let the guide know on arrival." }],
  },
  {
    slug: "dubai-city-journey",
    name: "Dubai City Journey",
    category: "city-tours",
    short: "A full guided day across old and new Dubai.",
    description:
      "From the creek and spice souks to the marina waterfront, a paced full-day itinerary with a licensed city guide and air-conditioned transport.",
    price: 189,
    priceType: "per person",
    duration: "8 hours",
    location: "Dubai",
    rating: 4.6,
    reviewCount: 148,
    maxGuests: 14,
    vehicle: "Air-conditioned minibus",
    pickup: true,
    featured: false,
    active: true,
    gallery: [cityTour, heroDunes],
    highlights: ["Licensed guide", "Creek and souks", "Marina waterfront", "Photo stops"],
    included: ["Hotel pick-up and drop-off", "Guide", "Transport", "Bottled water"],
    excluded: ["Entrance tickets", "Lunch"],
    requirements: ["Comfortable walking shoes", "Modest dress for heritage sites"],
    safety: ["Licensed transport operator", "Guide contactable throughout the day"],
    faqs: [{ q: "Are tickets included?", a: "Attraction tickets are booked separately on request." }],
  },
  {
    slug: "abu-dhabi-heritage-day",
    name: "Abu Dhabi Heritage Day",
    category: "city-tours",
    short: "Grand mosque, corniche and the cultural district in one day.",
    description:
      "A calmer, culture-led day trip to the capital with a guide who knows the history behind each stop.",
    price: 219,
    priceType: "per person",
    duration: "10 hours",
    location: "Abu Dhabi",
    rating: 4.8,
    reviewCount: 96,
    maxGuests: 14,
    vehicle: "Air-conditioned minibus",
    pickup: true,
    featured: false,
    active: true,
    gallery: [cityTour, camelRide],
    highlights: ["Grand mosque visit", "Corniche stop", "Cultural district", "Guide-led"],
    included: ["Transfers from Dubai", "Guide", "Transport", "Water"],
    excluded: ["Museum tickets", "Meals"],
    requirements: ["Modest dress required at the mosque"],
    safety: ["Licensed intercity transport"],
    faqs: [{ q: "Is the mosque visit included?", a: "Entry is free; we handle the timed registration." }],
  },
  {
    slug: "desert-dining-show-night",
    name: "Desert Dining & Show Night",
    category: "culture-dining",
    short: "Camp evening focused on food, music and live performances.",
    description:
      "No dune drive — arrive straight at camp for a long evening of Arabic dining, live Tanoura and fire shows, henna and shisha under the lanterns.",
    price: 99,
    priceType: "per person",
    duration: "4 hours",
    location: "Private camp, Al Marmoom",
    rating: 4.7,
    reviewCount: 176,
    maxGuests: 20,
    vehicle: "Shared transfer",
    pickup: true,
    featured: true,
    active: true,
    gallery: [bbqDinner, campNight, camelRide],
    highlights: ["BBQ buffet", "Live shows", "Henna", "Shisha corner"],
    included: ["Transfers", "BBQ buffet dinner", "Live entertainment", "Soft drinks and water"],
    excluded: ["Alcoholic drinks", "Dune activities"],
    requirements: ["Let us know dietary needs at booking"],
    safety: ["Fire performances run in a cordoned area"],
    faqs: [{ q: "Is it family friendly?", a: "Yes — this is our most family-suited evening." }],
  },
];

export const activeTours = tours.filter((t) => t.active);
export const featuredTours = activeTours.filter((t) => t.featured);
export const getTour = (slug: string) => tours.find((t) => t.slug === slug && t.active);
export const getCategory = (slug: CategorySlug) => categories.find((c) => c.slug === slug);
