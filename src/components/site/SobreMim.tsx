import sobreImg from "@/assets/nadya-foto-sobre-mim.jpg";
import { sobre, site } from "@/data/content";

export function SobreMim() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[3/4] max-w-[460px]">
              <div className="absolute inset-0 translate-x-6 translate-y-6 bg-caramel rounded-3xl" />
              <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <img
                  src={sobreImg}
                  alt="Nadya Tanan sentada, retrato completo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-caramel mix-blend-multiply opacity-[0.05]" />
              </div>
            </div>
          </div>

          <div className="md:col-span-7 md:pl-8">
            <div className="text-xs tracking-[0.28em] uppercase text-caramel mb-4">
              {sobre.eyebrow}
            </div>
            <h2 className="font-montserrat font-semibold text-5xl md:text-6xl text-brown leading-[1.05]">
              {sobre.title}
              <span className="block font-display font-light italic text-caramel text-3xl md:text-4xl mt-2">
                {site.role}
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-[color:var(--gray-body)] leading-relaxed text-lg">
              {sobre.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
