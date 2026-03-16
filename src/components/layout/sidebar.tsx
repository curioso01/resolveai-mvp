"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from "@/components/layout/logout-button";

export function Sidebar({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r bg-panel p-4">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <nav className="flex-1 space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-lg px-3 py-2 transition ${
              pathname === item.href ? "bg-panelSoft font-semibold text-primary" : "hover:bg-panelSoft"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <LogoutButton />
    </aside>
  );
}
