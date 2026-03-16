import type { Metadata } from "next";
import { FilterBar } from "@/components/shared/filter-bar";
import { PageHeader } from "@/components/shared/page-header";
import { ProviderCard } from "@/components/shared/cards";
import { providers } from "@/lib/constants/mocks";

export const metadata: Metadata = {
  title: "Buscar prestadores"
};

export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const normalized = q.trim().toLowerCase();
  const filteredProviders = normalized
    ? providers.filter((provider) => provider.displayName.toLowerCase().includes(normalized))
    : providers;

  return (
    <div className="space-y-6">
      <PageHeader
        title={normalized ? `Resultados para "${q}"` : "Buscar prestadores"}
        subtitle={`${filteredProviders.length} profissional(is) encontrado(s).`}
      />
      <FilterBar />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredProviders.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
}
