"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/browser";

export function Sidebar({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r bg-panel p-4">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <nav className="flex-1 space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-lg px-3 py-2 transition ${
              pathname === item.href
                ? "bg-panelSoft font-semibold text-primary"
                : "hover:bg-panelSoft"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <button
        onClick={handleLogout}
        className="w-full rounded-lg px-3 py-2 text-left text-sm text-muted hover:bg-panelSoft"
        type="button"
      >
        Sair
      </button>
    </aside>
  );
}
