import { UserRole } from "@/types/domain";

export const isProtectedPath = (pathname: string) => ["/cliente", "/prestador", "/admin"].some((p) => pathname.startsWith(p));
export const roleForPath = (pathname: string): UserRole | null => pathname.startsWith("/cliente") ? "cliente" : pathname.startsWith("/prestador") ? "prestador" : pathname.startsWith("/admin") ? "admin" : null;
