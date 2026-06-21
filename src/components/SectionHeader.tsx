import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
