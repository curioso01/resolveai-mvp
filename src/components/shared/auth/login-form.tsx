"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginAction } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, undefined);

  return (
    <form action={action} className="card mx-auto max-w-md space-y-4">
      <div>
        <label className="mb-1 block text-sm" htmlFor="email">Email</label>
        <Input id="email" name="email" type="email" placeholder="voce@email.com" required />
      </div>
      <div>
        <label className="mb-1 block text-sm" htmlFor="password">Senha</label>
        <Input id="password" name="password" type="password" placeholder="******" required />
      </div>
      {state && "error" in state ? <p className="text-sm text-danger">{state.error}</p> : null}
      <Button disabled={pending} type="submit" className="w-full">{pending ? "Entrando..." : "Entrar"}</Button>
      <p className="text-sm text-muted">
        Ainda não tem conta? <Link href="/cadastro" className="text-primary">Criar cadastro</Link>
      </p>
    </form>
  );
}
