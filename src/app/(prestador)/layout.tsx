import type { Metadata } from "next";
import { InternalShell } from "@/components/layout/internal-shell";

const items = [
  { href: "/prestador/dashboard", label: "Dashboard" },
  { href: "/prestador/solicitacoes", label: "Solicitações" },
  { href: "/prestador/agenda", label: "Agenda" },
  { href: "/prestador/saldo", label: "Saldo" }
];

export const metadata: Metadata = {
  title: "Área do prestador"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <InternalShell title="ResolveAí Prestador" items={items}>
      {children}
    </InternalShell>
  );
}
