import type { Metadata } from "next";
import { InternalShell } from "@/components/layout/internal-shell";

const items = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/usuarios", label: "Usuários" },
  { href: "/admin/pedidos", label: "Pedidos" },
  { href: "/admin/disputas", label: "Disputas" }
];

export const metadata: Metadata = {
  title: "Área administrativa"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <InternalShell title="ResolveAí Admin" items={items}>
      {children}
    </InternalShell>
  );
}
