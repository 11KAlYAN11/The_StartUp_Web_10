import {
  Compass,
  Code2,
  Sparkles,
  Cloud,
  LayoutGrid,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  compass: Compass,
  code: Code2,
  sparkles: Sparkles,
  cloud: Cloud,
  layout: LayoutGrid,
  shield: ShieldCheck,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = ICONS[name] ?? Sparkles;
  return <Component className={className} />;
}
