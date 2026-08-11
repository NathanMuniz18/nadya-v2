import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { Logo } from "./Logo";
import { site, nav } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-cream border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-auto" />
            <div>
              <div className="font-display text-brown text-xl">{site.name}</div>
              <div className="text-[10px] tracking-[0.24em] uppercase text-caramel">{site.role}</div>
            </div>
          </div>
          <p className="mt-6 text-[color:var(--gray-body)] leading-relaxed max-w-md">
            Psicologia clínica e neuropsicologia para adolescentes e adultos, no presencial e online.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: FaInstagram, href: site.instagram, label: "Instagram" },
              { Icon: FaWhatsapp, href: site.whatsappUrl, label: "WhatsApp" },
              { Icon: FaLinkedinIn, href: site.linkedin, label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-brown hover:bg-caramel hover:text-white hover:border-caramel transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-[10px] tracking-[0.28em] uppercase text-caramel mb-4">Navegação</div>
          <ul className="space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-brown hover:text-caramel transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[10px] tracking-[0.28em] uppercase text-caramel mb-4">Contato</div>
          <ul className="space-y-2 text-brown">
            <li>{site.phone}</li>
            <li>{site.email}</li>
            <li className="text-[color:var(--gray-body)]">Atendimento online e presencial</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[color:var(--gray-body)]">
          <div>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</div>
          <div>{site.crp}</div>
        </div>
      </div>
    </footer>
  );
}
