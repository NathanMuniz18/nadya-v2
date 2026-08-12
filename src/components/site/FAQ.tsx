import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faq } from "@/data/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs tracking-[0.28em] uppercase text-caramel mb-4">
              {faq.eyebrow}
            </div>
            <h2 className="font-julius text-4xl md:text-5xl text-brown leading-[1.1]">
              {faq.title}
            </h2>
            <p className="mt-6 text-[color:var(--gray-body)] leading-relaxed">
              Se sua dúvida não está aqui, escreva no WhatsApp — respondo pessoalmente.
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="divide-y divide-border border-y border-border">
              {faq.items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={i}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                    >
                      <span className={`font-display text-lg md:text-xl transition-colors ${isOpen ? "text-caramel" : "text-brown group-hover:text-caramel"}`}>
                        {item.q}
                      </span>
                      <span className="shrink-0 h-9 w-9 rounded-full border border-caramel/40 flex items-center justify-center text-caramel">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[color:var(--gray-body)] leading-relaxed max-w-2xl">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
