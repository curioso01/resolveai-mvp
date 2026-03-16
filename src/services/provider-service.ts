import { providers, services } from "@/lib/constants/mocks";

export const providerService = {
  list: async () => providers,
  byId: async (id: string) => providers.find((p) => p.id === id),
  servicesByProvider: async (providerId: string) => services.filter((s) => s.providerId === providerId)
};
