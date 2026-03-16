import { KPIStatCard } from "@/components/shared/cards";

export function AdminMetrics() {
  return <div className="grid gap-4 md:grid-cols-4">{["Usuários", "Prestadores", "Pedidos", "Disputas"].map((label, i) => <KPIStatCard key={label} label={label} value={[1024, 312, 432, 3][i]} />)}</div>;
}
