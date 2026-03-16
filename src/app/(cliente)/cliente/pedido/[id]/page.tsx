import { PageHeader } from "@/components/shared/page-header";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="space-y-4">
      <PageHeader title={`Pedido #${id}`} subtitle="Detalhes completos da solicitação e andamento." />
      <div className="card">Tela de pedido preparada para fluxo operacional.</div>
    </div>
  );
}
