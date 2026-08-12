import { Star, Quote } from "lucide-react";
import { depoimentos } from "@/data/content";

export function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-navy text-[color:var(--beige)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:'radial-gradient(circle at 20% 30%, #c7a977 0%, transparent 40%), radial-gradient(circle at 80% 70%, #c7a977 0%, transparent 40%)'}} />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-16">
          <div className="text-xs tracking-[0.28em] uppercase text-caramel mb-4">
            {depoimentos.eyebrow}
          </div>
          <h2 className="font-julius text-4xl md:text-5xl leading-[1.1]" style={{color:'var(--beige)'}}>
            {depoimentos.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {depoimentos.items.map((d, i) => (
            <figure
              key={i}
              className={`relative rounded-3xl p-8 border border-white/10 bg-white/[0.03] backdrop-blur ${
                i === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <Quote className="absolute -top-4 left-8 h-8 w-8 text-caramel bg-navy p-1 rounded-full" />
              <div className="flex gap-1 mb-4 text-caramel">
                {Array.from({ length: d.stars }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-[color:var(--beige)]/85 leading-relaxed font-display text-lg italic">
                "{d.text}"
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
