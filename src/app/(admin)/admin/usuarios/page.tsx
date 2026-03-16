import { PageHeader } from "@/components/shared/page-header";
import { DataTable } from "@/components/shared/data-table";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Admin / Usuarios" subtitle="Painel operacional pronto para escalar." />
      <DataTable
        headers={["ID", "Nome", "Status"]}
        rows={[["1", "Exemplo", "Ativo"], ["2", "Exemplo 2", "Pendente"]]}
      />
    </div>
  );
}
