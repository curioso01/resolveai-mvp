"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchBar({ initialValue = "" }: { initialValue?: string }) {
  const [query, setQuery] = useState(initialValue);
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const q = query.trim();
    router.push(q ? `/cliente/buscar?q=${encodeURIComponent(q)}` : "/cliente/buscar");
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-2" role="search">
      <Input
        aria-label="Buscar serviços ou prestadores"
        placeholder="Buscar serviços ou prestadores"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Button type="submit">Buscar</Button>
    </form>
  );
}
