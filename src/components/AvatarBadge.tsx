import type { AvatarTone } from "../types";

const toneClasses: Record<AvatarTone, string> = {
  teal: "from-teal-500 to-cyan-600",
  coral: "from-orange-500 to-rose-600",
  gold: "from-amber-400 to-yellow-600",
  indigo: "from-indigo-500 to-sky-600",
  emerald: "from-emerald-500 to-lime-600",
  rose: "from-pink-500 to-fuchsia-600",
  slate: "from-slate-600 to-zinc-800",
};

interface AvatarBadgeProps {
  initials: string;
  tone: AvatarTone;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-9 w-9 text-[11px]",
  md: "h-12 w-12 text-sm",
  lg: "h-20 w-20 text-xl",
};

export function AvatarBadge({ initials, tone, size = "md" }: AvatarBadgeProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${toneClasses[tone]} ${sizes[size]} font-semibold text-white shadow-sm ring-1 ring-white/60`}
      aria-label={`Avatar ${initials}`}
    >
      {initials}
    </span>
  );
}
