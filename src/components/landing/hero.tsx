import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/shared/search-bar";

export function LandingHero() {
  return <section className="card grid gap-4 md:grid-cols-2"><div><p className="text-primary">ResolveAí Premium</p><h1 className="text-4xl font-black">Seu marketplace local de serviços confiáveis</h1><p className="mt-2 text-muted">MVP focado em contratação simples, confiança e rastreabilidade.</p><div className="mt-4 space-y-2"><SearchBar /><Button>Buscar prestadores</Button></div></div><div className="card">Imagem/ilustração hero</div></section>;
}
