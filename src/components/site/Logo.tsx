import { site } from "@/data/site";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className={inverted ? "text-gold" : "text-clay"}
      >
        <circle cx="16" cy="11" r="5" fill="currentColor" opacity="0.9" />
        <path
          d="M1 27c4.5 0 6-8 12-8s5.5 5 9 5 4-3 9-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-display text-[1.05rem] tracking-tight ${
            inverted ? "text-espresso-foreground" : "text-foreground"
          }`}
        >
          {site.name.split(" ")[0]}
        </span>
        <span className="block text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
          Tourism
        </span>
      </span>
    </span>
  );
}
