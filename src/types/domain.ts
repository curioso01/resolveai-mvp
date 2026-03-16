export type UserRole = "cliente" | "prestador" | "admin";
export type PaymentStatus = "pendente" | "pago" | "falhou" | "reembolsado";
export type BookingStatus =
  | "pendente_pagamento"
  | "aguardando_aceite"
  | "aceito"
  | "recusado"
  | "agendado"
  | "em_execucao"
  | "concluido_prestador"
  | "concluido_cliente"
  | "cancelado_cliente"
  | "cancelado_prestador"
  | "em_disputa"
  | "reembolsado";

export type ServiceCategory = "limpeza_residencial" | "limpeza_vidros" | "diarista" | "pequenos_reparos";

export interface ProviderProfile { id: string; userId: string; displayName: string; city: string; rating: number; verified: boolean; categories: ServiceCategory[]; }
export interface Service { id: string; providerId: string; title: string; category: ServiceCategory; basePrice: number; }
export interface ServiceRequest { id: string; clientId: string; providerId: string; serviceId: string; description: string; scheduledFor: string; status: BookingStatus; }
export interface Booking { id: string; requestId: string; amount: number; status: BookingStatus; paymentStatus: PaymentStatus; }
export interface Review { id: string; bookingId: string; clientId: string; clientName: string; providerId: string; rating: number; comment: string; }
export interface DashboardStats { activeOrders: number; completedOrders: number; totalRevenue: number; averageRating: number; }

export interface DatabaseEntities {
  users: unknown; provider_profiles: ProviderProfile; categories: unknown; provider_categories: unknown;
  services: Service; service_requests: ServiceRequest; bookings: Booking; payments: unknown; reviews: Review;
  messages: unknown; provider_availability: unknown; disputes: unknown;
}
