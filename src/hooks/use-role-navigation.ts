"use client";
import { useMemo } from "react";
import { UserRole } from "@/types/domain";

export const useRoleNavigation = (role: UserRole) =>
  useMemo(() => {
    if (role === "cliente") return ["/cliente/dashboard", "/cliente/buscar", "/cliente/pedidos", "/cliente/perfil"];
    if (role === "prestador") return ["/prestador/dashboard", "/prestador/solicitacoes", "/prestador/agenda", "/prestador/saldo"];
    return ["/admin/dashboard", "/admin/usuarios", "/admin/pedidos", "/admin/disputas"];
  }, [role]);
