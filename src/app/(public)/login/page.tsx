import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { LoginForm } from "@/components/shared/auth/login-form";

export const metadata: Metadata = {
  title: "Login"
};

export default function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Entrar" subtitle="Acesse sua conta para gerenciar solicitações e atendimentos." />
      <LoginForm />
    </div>
  );
}
