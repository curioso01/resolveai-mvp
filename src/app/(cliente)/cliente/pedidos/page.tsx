import { PageHeader } from "@/components/shared/page-header";
import { bookings, providers } from "@/lib/constants/mocks";
import { BookingCard, KPIStatCard, ProviderCard } from "@/components/shared/cards";
import { FilterBar } from "@/components/shared/filter-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  return <div className="space-y-6"><PageHeader title="Cliente / Pedidos" subtitle="Fluxo funcional com dados mockados." /><div className="space-y-3">{bookings.map(b=><BookingCard key={b.id} title={`Pedido ${b.id}`} status={b.status} />)}</div></div>;
}
