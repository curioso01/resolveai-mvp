import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ServiceRequestForm } from "@/components/client/service-request-form";

export const metadata: Metadata = {
  title: "Solicitar serviço"
};

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Solicitar serviço" subtitle="Descreva o problema e receba propostas de prestadores locais." />
      <ServiceRequestForm />
    </div>
  );
}
