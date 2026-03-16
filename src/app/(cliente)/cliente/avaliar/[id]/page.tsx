import { PageHeader } from "@/components/shared/page-header";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="space-y-4">
      <PageHeader title={`Avaliar pedido #${id}`} subtitle="Compartilhe sua experiência com o prestador." />
      <div className="card space-y-3">
        <Textarea placeholder="Conte como foi o atendimento" />
        <Button>Enviar avaliação</Button>
      </div>
    </div>
  );
}
