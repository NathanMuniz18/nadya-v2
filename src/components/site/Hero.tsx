import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/nadya-foto-hero.jpg";
import { hero, site } from "@/data/content";
import { SignatureMark } from "./Logo";

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-cream">
      {/* Signature mark watermark */}
      <SignatureMark className="absolute -left-24 top-24 w-[520px] text-caramel opacity-[0.08] pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-beige/60 -skew-x-6 origin-top-right hidden md:block" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6 lg:col-span-7">
          <div className="text-xs tracking-[0.28em] uppercase text-caramel mb-6">
            {hero.eyebrow}
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.05] text-brown whitespace-pre-line">
            {hero.title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? <em className="italic text-caramel not-italic-fallback" style={{fontStyle:'italic'}}>{line}</em> : line}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-xl text-[color:var(--gray-body)] text-lg leading-relaxed">
            {hero.lead}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {hero.tags.map((t) => (
              <span
                key={t}
                className="text-xs tracking-wider uppercase px-3 py-1.5 rounded-full border border-navy/40 text-navy"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 bg-navy text-white px-7 py-4 rounded-full hover:bg-navy/80 transition-colors"
            >
              {hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#atuacao"
              className="inline-flex items-center gap-2 text-navy px-7 py-4 rounded-full border border-navy/20 hover:border-navy/60 transition-colors"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-5 relative">
          <div className="relative aspect-[4/5] max-w-[440px] mx-auto">
            <div className="absolute -inset-4 border border-caramel/40 rounded-tl-[120px] rounded-br-[120px]" />
            <div className="relative w-full h-full overflow-hidden rounded-tl-[110px] rounded-br-[110px]">
              <img
                src={heroImg}
                alt="Retrato de Nadya Tanan, psicóloga e neuropsicóloga"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[color:var(--caramel)] mix-blend-multiply opacity-[0.06]" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-navy text-[color:var(--beige)] px-5 py-4 rounded-2xl shadow-lg">
              <div className="text-[10px] tracking-[0.25em] uppercase opacity-70">CRP</div>
              <div className="font-display text-lg">{site.crp}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
