import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hi DuneAura, I'd like to ask about an experience.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-espresso text-espresso-foreground shadow-lift transition-transform hover:scale-105"
    >
      <MessageCircle size={20} />
    </a>
  );
}
