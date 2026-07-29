import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ComoAjudo } from "@/components/site/ComoAjudo";
import { AreaAtuacao } from "@/components/site/AreaAtuacao";
import { SobreMim } from "@/components/site/SobreMim";
import { Depoimentos } from "@/components/site/Depoimentos";
import { FAQ } from "@/components/site/FAQ";
import { Contato } from "@/components/site/Contato";
import { Footer } from "@/components/site/Footer";
import { WhatsappButton } from "@/components/site/WhatsappButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nadya Tanan · Psicóloga e Neuropsicóloga" },
      {
        name: "description",
        content:
          "Psicoterapia e avaliação neuropsicológica para adolescentes e adultos. Atendimento online e presencial com escuta cuidadosa e base técnica.",
      },
      { property: "og:title", content: "Nadya Tanan · Psicóloga e Neuropsicóloga" },
      {
        property: "og:description",
        content:
          "Terapia e avaliação neuropsicológica, online e presencial, para adolescentes e adultos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ComoAjudo />
        <AreaAtuacao />
        <SobreMim />
        <Depoimentos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
