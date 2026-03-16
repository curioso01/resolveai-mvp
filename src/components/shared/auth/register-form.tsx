"use client";

import { useActionState } from "react";
import { registerAction } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export function RegisterForm() {
  const [state, action, pending] = useActionState(registerAction, undefined);

  return (
    <form action={action} className="card mx-auto max-w-md space-y-4">
      <div>
        <label className="mb-1 block text-sm" htmlFor="name">Nome</label>
        <Input id="name" name="name" placeholder="Seu nome" required />
      </div>
      <div>
        <label className="mb-1 block text-sm" htmlFor="email">Email</label>
        <Input id="email" name="email" type="email" placeholder="voce@email.com" required />
      </div>
      <div>
        <label className="mb-1 block text-sm" htmlFor="password">Senha</label>
        <Input id="password" name="password" type="password" placeholder="******" required />
      </div>
      <div>
        <label className="mb-1 block text-sm" htmlFor="role">Perfil</label>
        <Select id="role" name="role" defaultValue="cliente">
          <option value="cliente">Cliente</option>
          <option value="prestador">Prestador</option>
        </Select>
      </div>
      {state && "error" in state ? <p className="text-sm text-danger">{state.error}</p> : null}
      <Button disabled={pending} type="submit" className="w-full">{pending ? "Enviando..." : "Criar conta"}</Button>
    </form>
  );
}
