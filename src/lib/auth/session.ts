import { createClient } from "@/lib/supabase/server";
import { UserRole } from "@/types/domain";

export const getCurrentRole = async (): Promise<UserRole | null> => {
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();
  return (profile?.role as UserRole | undefined) ?? null;
};
