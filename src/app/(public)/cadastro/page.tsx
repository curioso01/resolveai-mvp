import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { RegisterForm } from "@/components/shared/auth/register-form";

export const metadata: Metadata = {
  title: "Cadastro"
};

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Criar conta" subtitle="Cadastre-se como cliente ou prestador para começar no ResolveAí." />
      <RegisterForm />
    </div>
  );
}
