import { BookingCard } from "@/components/shared/cards";

export function ProviderRequestList() {
  return <div className="space-y-2"><BookingCard title="Instalação de chuveiro" status="aguardando_aceite" /><BookingCard title="Limpeza pós-obra" status="agendado" /></div>;
}
