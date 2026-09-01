import { Link } from "@tanstack/react-router";
import { BUSINESS_NAME, CONTACT_EMAIL, whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/contact";
import { categories } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold">{BUSINESS_NAME}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Herramientas profesionales TalkTools® y ARK Therapeutic para la
            alimentación, el desarrollo del habla y la estimulación sensorial.
          </p>
        </div>
        <nav aria-label="Categorías del catálogo">
          <p className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Categorías
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {categories.slice(0, 8).map((c) => (
              <li key={c.id}>
                <Link
                  to="/catalogo"
                  search={{ categoria: c.id }}
                  className="text-foreground/80 transition-colors hover:text-primary"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Contacto
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 transition-colors hover:text-primary"
              >
                WhatsApp — asesoría personalizada
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-foreground/80 transition-colors hover:text-primary"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs leading-relaxed text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} {BUSINESS_NAME}. Las herramientas de terapia oral
          y motora deben utilizarse bajo la orientación de un profesional de la salud
          o terapeuta certificado. TalkTools® y ARK Therapeutic son marcas de sus
          respectivos propietarios.
        </p>
      </div>
    </footer>
  );
}
