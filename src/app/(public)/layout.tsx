import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Público"
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}
