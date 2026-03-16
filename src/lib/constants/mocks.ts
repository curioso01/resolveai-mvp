import { Booking, DashboardStats, ProviderProfile, Review, Service, ServiceRequest } from "@/types/domain";

export const categories = [
  { id: "limpeza_residencial", label: "Limpeza residencial", priceFrom: 120 },
  { id: "limpeza_vidros", label: "Limpeza de vidros", priceFrom: 140 },
  { id: "diarista", label: "Diarista", priceFrom: 150 },
  { id: "pequenos_reparos", label: "Pequenos reparos", priceFrom: 180 }
];

export const providers: ProviderProfile[] = [
  { id: "p1", userId: "u2", displayName: "Marina Costa", city: "São Paulo, SP", rating: 4.9, verified: true, categories: ["limpeza_residencial", "diarista"] },
  { id: "p2", userId: "u3", displayName: "Ricardo Silva", city: "São Paulo, SP", rating: 4.8, verified: true, categories: ["pequenos_reparos"] }
];

export const services: Service[] = [
  { id: "s1", providerId: "p1", title: "Limpeza completa de apartamento", category: "limpeza_residencial", basePrice: 170 },
  { id: "s2", providerId: "p2", title: "Reparo de torneira e sifão", category: "pequenos_reparos", basePrice: 200 }
];

export const serviceRequests: ServiceRequest[] = [
  { id: "r1", clientId: "u1", providerId: "p1", serviceId: "s1", description: "Limpeza pós-obra em apto 70m²", scheduledFor: "2026-03-20T10:00:00Z", status: "agendado" }
];

export const bookings: Booking[] = [
  { id: "b1", requestId: "r1", amount: 190, status: "agendado", paymentStatus: "pendente" }
];

export const reviews: Review[] = [
  { id: "rv1", bookingId: "b1", clientId: "u1", clientName: "João Silva", providerId: "p1", rating: 5, comment: "Excelente atendimento e pontualidade." }
];

export const clientStats: DashboardStats = { activeOrders: 2, completedOrders: 12, totalRevenue: 0, averageRating: 4.8 };
export const providerStats: DashboardStats = { activeOrders: 4, completedOrders: 48, totalRevenue: 12450, averageRating: 4.9 };
