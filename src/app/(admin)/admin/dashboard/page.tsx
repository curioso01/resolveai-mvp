import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { KPIStatCard } from "@/components/shared/cards";

export const metadata: Metadata = {
  title: "Dashboard admin"
};

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Admin / Dashboard" subtitle="Painel operacional pronto para escalar." />
      <div className="grid gap-4 md:grid-cols-4">
        {["GMV", "Pedidos", "Disputas", "NPS"].map((label, index) => (
          <KPIStatCard key={label} label={label} value={["R$ 98.200", 432, 3, 81][index]} />
        ))}
      </div>
    </div>
  );
}
