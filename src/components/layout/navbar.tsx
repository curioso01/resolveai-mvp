import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return <nav className="sticky top-0 z-20 border-b bg-bg/95 backdrop-blur"><div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"><Link href="/" className="font-bold">ResolveAí</Link><div className="hidden gap-6 md:flex text-sm"><Link href="/como-funciona">Como funciona</Link><Link href="/categorias">Categorias</Link><Link href="/seja-prestador">Seja prestador</Link></div><div className="flex gap-2"><Link href="/login"><Button variant="ghost">Entrar</Button></Link><Link href="/cadastro"><Button>Contratar agora</Button></Link></div></div></nav>;
}
