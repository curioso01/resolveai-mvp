import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { KPIStatCard } from "@/components/shared/cards";
import { DataTable } from "@/components/shared/data-table";

export const metadata: Metadata = {
  title: "Dashboard prestador"
};

export default function Page() {
  return <div className="space-y-6"><PageHeader title="Prestador / Dashboard" subtitle="Área autenticada com navegação e UX consistente." /><div className="grid gap-4 md:grid-cols-4">{["Ganhos","Pedidos","Nota","Taxa aceitação"].map((k,i)=><KPIStatCard key={k} label={k} value={["R$ 12.450",48,4.9,"92%"][i]} />)}</div><DataTable headers={["Serviço","Data","Status","Valor"]} rows={[["Reparo pia","22 Out","agendado","R$180"],["Limpeza","23 Out","aceito","R$250"]]} /></div>;
}
