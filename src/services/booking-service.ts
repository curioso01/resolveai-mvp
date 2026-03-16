import { bookings, serviceRequests } from "@/lib/constants/mocks";

export const bookingService = {
  list: async () => bookings,
  byId: async (id: string) => bookings.find((b) => b.id === id),
  requestById: async (id: string) => serviceRequests.find((r) => r.id === id)
};
