import { notFound } from "next/navigation";
import { PageHeader } from "@/components/shared/page-header";
import { ServiceCard, TestimonialCard } from "@/components/shared/cards";
import { providers, reviews, services } from "@/lib/constants/mocks";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const provider = providers.find((item) => item.id === id);

  if (!provider) {
    return notFound();
  }

  return (
    <div className="space-y-4">
      <PageHeader title={provider.displayName} subtitle={provider.city} />
      <div className="grid gap-4 md:grid-cols-2">
        {services
          .filter((service) => service.providerId === provider.id)
          .map((service) => (
            <ServiceCard key={service.id} title={service.title} price={service.basePrice} />
          ))}
      </div>
      <div className="space-y-2">
        {reviews.map((review) => (
          <TestimonialCard key={review.id} name={review.clientName} quote={review.comment} />
        ))}
      </div>
    </div>
  );
}
