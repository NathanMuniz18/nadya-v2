import { Mail, Phone, ArrowRight } from "lucide-react";
import { contato, site } from "@/data/content";
import { SignatureMark } from "./Logo";

export function Contato() {
  return (
    <section id="contato" className="py-24 md:py-32 bg-brown text-[color:var(--beige)] relative overflow-hidden">
      <SignatureMark className="absolute -left-20 -top-16 w-[420px] text-caramel opacity-[0.12]" />
      <SignatureMark className="absolute -right-24 -bottom-24 w-[520px] text-caramel opacity-[0.08]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs tracking-[0.28em] uppercase text-caramel mb-4">
            {contato.eyebrow}
          </div>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.1] whitespace-pre-line" style={{color:'var(--beige)'}}>
            {contato.title}
          </h2>
          <p className="mt-8 text-[color:var(--beige)]/75 text-lg leading-relaxed max-w-lg">
            {contato.lead}
          </p>

          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 group inline-flex items-center gap-3 bg-caramel text-brown px-8 py-5 rounded-full hover:bg-[color:var(--beige)] transition-colors"
          >
            {site.whatsappLabel}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <ul className="space-y-6 md:pl-12 md:border-l border-white/15">
          {[
            { Icon: Phone, label: "Telefone", value: site.phone },
            { Icon: Mail, label: "E-mail", value: site.email },
          ].map(({ Icon, label, value }) => (
            <li key={label} className="flex items-start gap-5">
              <div className="h-12 w-12 shrink-0 rounded-full border border-caramel/40 flex items-center justify-center text-caramel">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.28em] uppercase text-caramel">{label}</div>
                <div className="mt-1 font-display text-xl">{value}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
