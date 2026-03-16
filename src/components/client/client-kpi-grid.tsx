import { KPIStatCard } from "@/components/shared/cards";

export function ClientKPIGrid() {
  return <div className="grid gap-4 md:grid-cols-4">{["Pedidos Ativos", "Concluídos", "Avaliação", "Economia"].map((label, i) => <KPIStatCard key={label} label={label} value={[2, 14, 4.8, "R$ 480"][i]} />)}</div>;
}
