import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ResolveAí",
    template: "%s | ResolveAí"
  },
  description: "Marketplace local de serviços profissionais com segurança e rastreabilidade."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body>{children}</body>
    </html>
  );
}
