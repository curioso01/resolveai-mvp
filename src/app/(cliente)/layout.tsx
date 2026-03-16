import type { Metadata } from "next";
import { InternalShell } from "@/components/layout/internal-shell";

const items = [
  { href: "/cliente/dashboard", label: "Dashboard" },
  { href: "/cliente/buscar", label: "Buscar" },
  { href: "/cliente/pedidos", label: "Pedidos" },
  { href: "/cliente/perfil", label: "Perfil" }
];

export const metadata: Metadata = {
  title: "Área do cliente"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <InternalShell title="ResolveAí Cliente" items={items}>
      {children}
    </InternalShell>
  );
}
