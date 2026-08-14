import { Wind, Heart, Users, Leaf, Flame, Compass } from "lucide-react";
import { comoAjudo } from "@/data/content";

const iconMap = { wind: Wind, heart: Heart, users: Users, leaf: Leaf, flame: Flame, compass: Compass };

export function ComoAjudo() {
  return (
    <section id="como-ajudo" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <div className="text-xs tracking-[0.28em] uppercase text-caramel mb-4">
              {comoAjudo.eyebrow}
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-brown leading-[1.1]">
              {comoAjudo.title}
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-[color:var(--gray-body)] text-lg leading-relaxed">
              {comoAjudo.lead}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
          {comoAjudo.items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={item.title}
                className="group bg-background p-8 md:p-10 hover:bg-cream transition-colors relative"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-12 w-12 rounded-full bg-caramel/15 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-[color:var(--espresso)] transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-[10px] tracking-[0.3em] text-caramel">
                    0{i + 1}
                  </div>
                </div>
                <h3 className="font-display text-2xl text-brown mb-3">{item.title}</h3>
                <p className="text-[color:var(--gray-body)] leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
