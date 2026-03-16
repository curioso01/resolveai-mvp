"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { serviceRequestSchema } from "@/lib/validations/service-request";

type FieldErrors = Partial<Record<"category" | "description" | "address" | "city" | "preferredDate", string>>;
export type ServiceRequestState = { error?: string; fieldErrors?: FieldErrors; success?: true };

export async function createServiceRequestAction(
  _: ServiceRequestState | undefined,
  formData: FormData
): Promise<ServiceRequestState> {
  const payload = {
    category: formData.get("category"),
    description: formData.get("description"),
    address: formData.get("address"),
    city: formData.get("city"),
    preferredDate: formData.get("preferredDate")
  };

  const parsed = serviceRequestSchema.safeParse(payload);

  if (!parsed.success) {
    const fieldErrors: FieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof FieldErrors;
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { error: "Revise os dados do formulário.", fieldErrors };
  }

  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Faça login para solicitar um serviço." };
  }

  const { error } = await supabase.from("service_requests").insert({
    client_id: user.id,
    description: parsed.data.description,
    address: parsed.data.address,
    city: parsed.data.city,
    scheduled_for: parsed.data.preferredDate,
    status: "aguardando_aceite"
  });

  if (error) {
    return { error: error.message };
  }

  redirect("/cliente/pedidos");
}
