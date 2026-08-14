import { FaWhatsapp } from "react-icons/fa6";
import { site } from "@/data/content";

export function WhatsappButton() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-caramel text-[color:var(--espresso)] flex items-center justify-center shadow-xl hover:scale-105 hover:bg-[color:var(--beige)] transition-all"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
