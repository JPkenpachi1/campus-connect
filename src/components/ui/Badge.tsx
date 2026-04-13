import { cn } from "@/lib/utils";

export default function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-block bg-indigo-100 text-primary text-xs font-semibold px-3 py-1 rounded-full", className)}>
      {children}
    </span>
  );
}
