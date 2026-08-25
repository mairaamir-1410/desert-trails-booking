export type BookingStatus = "pending" | "confirmed" | "cancelled" | "completed";

export type Booking = {
  id: string;
  tourSlug: string;
  tourName: string;
  date: string;
  guests: number;
  pickup: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
  amount: number;
  status: BookingStatus;
  createdAt: string;
};

const KEY = "duneaura.bookings";

const isBrowser = () => typeof window !== "undefined";

export function getBookings(): Booking[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Booking[]) : [];
  } catch {
    return [];
  }
}

export function saveBooking(booking: Omit<Booking, "id" | "status" | "createdAt">): Booking {
  const record: Booking = {
    ...booking,
    id: `DA-${Date.now().toString(36).toUpperCase()}`,
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  if (isBrowser()) {
    try {
      window.localStorage.setItem(KEY, JSON.stringify([record, ...getBookings()]));
    } catch {
      /* storage unavailable */
    }
  }
  return record;
}

const MESSAGES_KEY = "duneaura.messages";

export type ContactMessage = {
  id: string;
  name: string;
  phone: string;
  email: string;
  topic: string;
  message: string;
  createdAt: string;
};

export function saveMessage(input: Omit<ContactMessage, "id" | "createdAt">): ContactMessage {
  const record: ContactMessage = {
    ...input,
    id: `MSG-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
  };
  if (isBrowser()) {
    try {
      const raw = window.localStorage.getItem(MESSAGES_KEY);
      const list = raw ? (JSON.parse(raw) as ContactMessage[]) : [];
      window.localStorage.setItem(MESSAGES_KEY, JSON.stringify([record, ...list]));
    } catch {
      /* storage unavailable */
    }
  }
  return record;
}
