import { PageHeader } from "@/components/shared/page-header";
import { DataTable } from "@/components/shared/data-table";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Prestador / Historico" subtitle="Área autenticada com navegação e UX consistente." />
      <DataTable headers={["Serviço", "Data", "Status", "Valor"]} rows={[["Limpeza residencial", "20 Mar", "concluído", "R$ 220"], ["Reparo pia", "22 Mar", "agendado", "R$ 180"]]} />
    </div>
  );
}
