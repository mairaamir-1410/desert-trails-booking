import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <div
      className={`mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${
        align === "center" ? "text-center md:justify-center" : ""
      }`}
    >
      <div className={align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="mt-3 text-3xl leading-[1.1] sm:text-4xl">{title}</h2>
        {intro ? (
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
