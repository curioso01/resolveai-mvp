import { PageHeader } from "@/components/shared/page-header";
import { bookings, providers } from "@/lib/constants/mocks";
import { BookingCard, KPIStatCard, ProviderCard } from "@/components/shared/cards";
import { FilterBar } from "@/components/shared/filter-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  return <div className="space-y-6"><PageHeader title="Cliente / Perfil" subtitle="Fluxo funcional com dados mockados." /><div className="card space-y-3"><Input placeholder="Nome" defaultValue="João Cliente"/><Input placeholder="Cidade" defaultValue="São Paulo"/><Button>Salvar perfil</Button></div></div>;
}
