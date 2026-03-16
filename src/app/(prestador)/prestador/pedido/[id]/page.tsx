import { PageHeader } from "@/components/shared/page-header";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="space-y-4">
      <PageHeader title={`Prestador / Pedido #${id}`} />
      <div className="card">Detalhes, aceite/recusa e mensagens.</div>
    </div>
  );
}
