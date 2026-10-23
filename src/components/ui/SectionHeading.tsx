import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-dark-purple/80 border border-royal-purple/40 text-soft-lavender shadow-sm",
            align === "center" ? "mx-auto" : ""
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-electric-violet" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-white">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-amber-200 via-orange-400 to-amber-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-secondary-text leading-relaxed pt-1">
          {description}
        </p>
      )}
    </div>
  );
}
