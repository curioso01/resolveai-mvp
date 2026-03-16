"use server";

import { redirect } from "next/navigation";
import { loginSchema, registerSchema } from "@/lib/validations/auth";
import { createClient } from "@/lib/supabase/server";

type ActionState = { error: string } | { success: true };

export async function loginAction(_: ActionState | undefined, formData: FormData): Promise<ActionState> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Dados inválidos." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword(parsed.data);

  if (error || !data.user) {
    return { error: error?.message ?? "Não foi possível autenticar." };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", data.user.id)
    .single();

  const role = profile?.role ?? "cliente";
  redirect(`/${role}/dashboard`);
}

export async function registerAction(_: ActionState | undefined, formData: FormData): Promise<ActionState> {
  const parsed = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role")
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Dados inválidos." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
    options: {
      data: {
        name: parsed.data.name,
        role: parsed.data.role
      }
    }
  });

  if (error) {
    return { error: error.message };
  }

  if (data.user) {
    const { error: profileError } = await supabase.from("profiles").upsert({
      id: data.user.id,
      role: parsed.data.role,
      display_name: parsed.data.name
    });

    if (profileError) {
      return { error: profileError.message };
    }
  }

  redirect("/login");
}

export async function logoutAction(): Promise<ActionState> {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    return { error: error.message };
  }

  redirect("/");
}
