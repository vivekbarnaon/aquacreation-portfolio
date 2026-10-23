import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "purple" | "obsidian" | "violet" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  children,
  variant = "purple",
  size = "sm",
  className,
}: BadgeProps) {
  const variantStyles = {
    purple: "bg-dark-purple/80 text-soft-lavender border-royal-purple/40",
    obsidian: "bg-deep-black/90 text-primary-white border-royal-purple/30",
    violet: "bg-royal-purple/20 text-electric-violet border-electric-violet/40",
    outline: "bg-transparent text-secondary-text border-royal-purple/30",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-medium rounded-full border backdrop-blur-sm tracking-wide",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
