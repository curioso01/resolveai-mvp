import Link from "next/link";
import { ProviderProfile } from "@/types/domain";
import { formatBRL } from "@/lib/formatters/currency";
import { StatusBadge } from "@/components/shared/status-badge";

export const CategoryCard = ({ title, description }: { title: string; description: string }) => <div className="card"><h3 className="font-semibold">{title}</h3><p className="text-sm text-muted">{description}</p></div>;
export const ProviderCard = ({ provider }: { provider: ProviderProfile }) => <div className="card space-y-2"><h3 className="font-semibold">{provider.displayName}</h3><p className="text-sm text-muted">{provider.city}</p><StatusBadge status={`⭐ ${provider.rating}`} /><Link href={`/cliente/prestador/${provider.id}`} className="text-primary">Ver perfil</Link></div>;
export const ServiceCard = ({ title, price }: { title: string; price: number }) => <div className="card"><h3>{title}</h3><p className="text-primary font-semibold">{formatBRL(price)}</p></div>;
export const BookingCard = ({ title, status }: { title: string; status: string }) => <div className="card"><h3>{title}</h3><StatusBadge status={status} /></div>;
export const KPIStatCard = ({ label, value }: { label: string; value: string | number }) => <div className="card"><p className="text-sm text-muted">{label}</p><p className="text-2xl font-bold">{value}</p></div>;
export const TestimonialCard = ({ name, quote }: { name: string; quote: string }) => <div className="card"><p className="italic">“{quote}”</p><p className="mt-2 text-sm text-muted">{name}</p></div>;
export const StepCard = ({ step, title }: { step: string; title: string }) => <div className="card"><p className="text-primary">{step}</p><p className="font-semibold">{title}</p></div>;
export const TrustBadge = ({ text }: { text: string }) => <span className="rounded-full border px-3 py-1 text-xs">{text}</span>;
