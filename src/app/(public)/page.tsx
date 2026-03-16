import type { Metadata } from "next";
import { categories, providers, reviews } from "@/lib/constants/mocks";
import { CategoryCard, ProviderCard, StepCard, TestimonialCard, TrustBadge } from "@/components/shared/cards";
import { SectionHeader } from "@/components/shared/section-header";
import { SearchBar } from "@/components/shared/search-bar";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Início"
};

export default function Home() {
  return <div className="space-y-12">
    <section className="grid gap-6 md:grid-cols-2 card"><div className="space-y-4"><TrustBadge text="Segurança premium garantida" /><h1 className="text-5xl font-black">Serviços profissionais com a segurança que você merece</h1><p className="text-muted">Conectamos você aos melhores prestadores locais.</p><SearchBar /><Button>Buscar agora</Button></div><div className="card">Visual premium do marketplace</div></section>
    <section className="space-y-4"><SectionHeader title="Categorias Premium" subtitle="Serviços mais solicitados"/><div className="grid gap-4 md:grid-cols-4">{categories.map(c=><CategoryCard key={c.id} title={c.label} description={`A partir de R$ ${c.priceFrom}`} />)}</div></section>
    <section className="space-y-4"><SectionHeader title="Como funciona"/><div className="grid gap-4 md:grid-cols-4">{["Escolha","Agende","Acompanhe","Avalie"].map((s,i)=><StepCard key={s} step= {String(i+1)} title={s} />)}</div></section>
    <section className="space-y-4"><SectionHeader title="Prestadores em destaque"/><div className="grid gap-4 md:grid-cols-2">{providers.map(p=><ProviderCard key={p.id} provider={p}/>)}</div></section>
    <section className="space-y-4"><SectionHeader title="Depoimentos"/><div className="grid gap-4 md:grid-cols-2">{reviews.map(r=><TestimonialCard key={r.id} name={r.clientName} quote={r.comment} />)}</div></section>
    <section className="space-y-4"><SectionHeader title="FAQ"/><Accordion items={[{title:"Como funciona o pagamento?",content:"Pagamento fica em custódia até a conclusão."},{title:"Os prestadores são verificados?",content:"Sim, com análise documental e reputação."}]} /></section>
  </div>;
}
