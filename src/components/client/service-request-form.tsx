"use client";

import { useActionState } from "react";
import { createServiceRequestAction } from "@/app/actions/service-request";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ServiceRequestForm() {
  const [state, action, pending] = useActionState(createServiceRequestAction, undefined);

  const fieldError = (name: "category" | "description" | "address" | "city" | "preferredDate") => state?.fieldErrors?.[name];

  return (
    <form action={action} className="grid gap-4 md:grid-cols-3">
      <div className="space-y-4 md:col-span-2">
        <div className="card space-y-3">
          <h2 className="text-lg font-semibold">Tipo de serviço</h2>
          <Select name="category" defaultValue="">
            <option value="" disabled>Selecione uma categoria</option>
            <option value="limpeza_residencial">Limpeza residencial</option>
            <option value="limpeza_vidros">Limpeza de vidros</option>
            <option value="diarista">Diarista</option>
            <option value="pequenos_reparos">Pequenos reparos</option>
          </Select>
          {fieldError("category") ? <p className="text-sm text-danger">{fieldError("category")}</p> : null}
        </div>

        <div className="card space-y-3">
          <h2 className="text-lg font-semibold">Descrição & localização</h2>
          <Textarea name="description" placeholder="Descreva sua necessidade" />
          {fieldError("description") ? <p className="text-sm text-danger">{fieldError("description")}</p> : null}
          <div>
            <Input name="address" placeholder="Rua, número, bairro" />
            {fieldError("address") ? <p className="mt-1 text-sm text-danger">{fieldError("address")}</p> : null}
          </div>
          <div>
            <Input name="city" placeholder="Cidade" />
            {fieldError("city") ? <p className="mt-1 text-sm text-danger">{fieldError("city")}</p> : null}
          </div>
        </div>

        <div className="card space-y-2">
          <h2 className="text-lg font-semibold">Agendamento</h2>
          <Input name="preferredDate" type="datetime-local" />
          {fieldError("preferredDate") ? <p className="text-sm text-danger">{fieldError("preferredDate")}</p> : null}
        </div>
      </div>

      <aside className="card h-fit space-y-4">
        <h2 className="text-xl font-semibold">Resumo do pedido</h2>
        <p className="text-sm text-muted">Você receberá retorno de prestadores verificados em poucos minutos.</p>
        {state?.error ? <p className="text-sm text-danger">{state.error}</p> : null}
        <Button disabled={pending} type="submit" className="w-full">{pending ? "Enviando..." : "Confirmar solicitação"}</Button>
      </aside>
    </form>
  );
}
