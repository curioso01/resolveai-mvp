import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" | "outline" };
export function Button({ className, variant = "primary", ...props }: Props) {
  return <button className={cn("rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary", variant === "primary" && "bg-primary text-white hover:opacity-90", variant === "ghost" && "bg-transparent text-text hover:bg-panelSoft", variant === "outline" && "border bg-panel text-text", className)} {...props} />;
}
