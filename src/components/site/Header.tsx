import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site } from "@/data/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <Logo className="h-11 w-auto" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-brown text-lg">{site.name}</div>
            <div className="font-display font-light italic text-[11px] tracking-[0.18em] text-caramel">
              {site.role}
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-[color:var(--brown)] hover:text-caramel transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-caramel text-[color:var(--espresso)] px-3.5 py-2 rounded-full text-xs md:px-5 md:py-2.5 md:text-sm hover:bg-[color:var(--beige)] transition-colors"
          >
            Agendar conversa
          </a>
          <button
            className="lg:hidden text-brown"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-brown hover:text-caramel"
              >
                {n.label}
              </a>
            ))}
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-caramel text-[color:var(--espresso)] px-5 py-3 rounded-full text-sm mt-2"
            >
              Agendar conversa
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
