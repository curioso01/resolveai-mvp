import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

async function logoutAction() {
  "use server";
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        className="w-full rounded-lg px-3 py-2 text-left text-sm text-muted hover:bg-panelSoft"
        type="submit"
      >
        Sair
      </button>
    </form>
  );
}
