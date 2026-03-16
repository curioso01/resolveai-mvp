import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { KPIStatCard, ProviderCard } from "@/components/shared/cards";
import { providers } from "@/lib/constants/mocks";

export const metadata: Metadata = {
  title: "Dashboard cliente"
};

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Cliente / Dashboard" subtitle="Fluxo funcional com dados mockados." />
      <div className="grid gap-4 md:grid-cols-4">
        {["Pedidos ativos", "Concluídos", "Avaliação média", "Economia"].map((label, index) => (
          <KPIStatCard key={label} label={label} value={[2, 12, "4.8", "R$ 380"][index]} />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {providers.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
}
