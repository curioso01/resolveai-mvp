import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export function InternalShell({ title, items, children }: { title: string; items: { href: string; label: string }[]; children: React.ReactNode }) {
  return <div className="min-h-screen md:flex"><Sidebar title={title} items={items} /><div className="flex-1"><Topbar /><main className="p-4 md:p-6">{children}</main></div></div>;
}
