import { MessageCircle, Brain, Briefcase, ArrowUpRight } from "lucide-react";
import { atuacao, site } from "@/data/content";
import areaImg from "@/assets/nadya-area.jpg.asset.json";
import { SignatureMark } from "./Logo";

const iconMap = { "message-circle": MessageCircle, brain: Brain, briefcase: Briefcase };

export function AreaAtuacao() {
  return (
    <section id="atuacao" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      <SignatureMark className="absolute -right-32 -bottom-16 w-[600px] text-white opacity-[0.05]" />


      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16">
          <div className="md:col-span-7">
            <div className="text-xs tracking-[0.28em] uppercase text-[color:var(--beige)] mb-4">
              {atuacao.eyebrow}
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-[color:var(--beige)] leading-[1.05] whitespace-pre-line">
              {atuacao.title}
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-[color:var(--beige)]/80 leading-relaxed">{atuacao.lead}</p>
          </div>
        </div>


        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Photo card — taller, fills the left column */}
          <div className="lg:col-span-4 relative">
            <div className="relative h-full min-h-[520px] lg:min-h-[620px] rounded-3xl overflow-hidden">
              <img
                src={areaImg.url}
                alt="Nadya Tanan trabalhando com tablet"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[color:var(--beige)]">
                <div className="text-[10px] tracking-[0.28em] uppercase opacity-80">Método</div>
                <div className="font-display text-xl mt-2">Escuta técnica, cuidado autoral.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-3 gap-6 items-stretch">
            {atuacao.services.map((s, i) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <div
                  key={s.title}
                  className="bg-[color:var(--beige)] rounded-3xl p-7 md:p-8 flex flex-col group h-full"
                >
                  <div className="h-14 w-14 rounded-2xl bg-navy/10 flex items-center justify-center text-navy mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-[10px] tracking-[0.3em] text-navy/60 mb-2">
                    Serviço 0{i + 1}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-navy">{s.title}</h3>
                  <p className="mt-4 text-navy/70 leading-relaxed">{s.text}</p>
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto pt-6 inline-flex items-center gap-2 text-navy hover:text-caramel transition-colors self-start"
                  >
                    <span className="border-b border-caramel pb-1">{s.cta}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
