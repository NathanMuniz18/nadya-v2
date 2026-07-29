import { MessageCircle, Brain, Briefcase, ArrowUpRight } from "lucide-react";
import { atuacao, site } from "@/data/content";
import areaImg from "@/assets/nadya-area.jpg.asset.json";
import { SignatureMark } from "./Logo";

const iconMap = { "message-circle": MessageCircle, brain: Brain, briefcase: Briefcase };

export function AreaAtuacao() {
  return (
    <section id="atuacao" className="py-24 md:py-32 bg-beige relative overflow-hidden">
      <SignatureMark className="absolute -right-32 -bottom-16 w-[600px] text-caramel opacity-[0.09]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16">
          <div className="md:col-span-7">
            <div className="text-xs tracking-[0.28em] uppercase text-caramel mb-4">
              {atuacao.eyebrow}
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-brown leading-[1.05] whitespace-pre-line">
              {atuacao.title}
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-[color:var(--gray-body)] leading-relaxed">{atuacao.lead}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Photo card spans first column on large */}
          <div className="lg:col-span-4 lg:row-span-2 relative">
            <div className="relative h-full min-h-[380px] rounded-3xl overflow-hidden">
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

          {atuacao.services.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <div
                key={s.title}
                className={`lg:col-span-8 bg-background rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 group ${
                  i === 1 ? "lg:col-span-8" : ""
                }`}
              >
                <div className="md:w-1/3">
                  <div className="h-14 w-14 rounded-2xl bg-beige flex items-center justify-center text-caramel mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-[10px] tracking-[0.3em] text-caramel mb-2">
                    Serviço 0{i + 1}
                  </div>
                  <h3 className="font-display text-3xl text-brown">{s.title}</h3>
                </div>
                <div className="md:w-2/3 md:border-l md:border-border md:pl-8 flex flex-col justify-between">
                  <p className="text-[color:var(--gray-body)] leading-relaxed">{s.text}</p>
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-brown hover:text-caramel transition-colors self-start"
                  >
                    <span className="border-b border-caramel pb-1">{s.cta}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
