import { Link, useRouterState } from "@tanstack/react-router";
import { BUSINESS_NAME } from "@/lib/contact";
import { WhatsAppButton } from "./whatsapp";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" aria-label={BUSINESS_NAME}>
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.5 2.8 6 4.1 6 8a6 6 0 1 1-12 0c0-3.9 3.5-5.2 6-8Z" />
              <path strokeLinecap="round" d="M9.5 12.5c.6 1.4 1.5 2.2 2.5 2.2s1.9-.8 2.5-2.2" />
            </svg>
          </span>
          <span className="font-display text-base font-bold leading-tight tracking-tight">
            Yad <span className="text-primary">Terapia Oral</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Navegación principal">
          <Link
            to="/"
            className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors hover:text-primary sm:px-4 ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Inicio
          </Link>
          <Link
            to="/catalogo"
            className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors hover:text-primary sm:px-4 ${
              pathname.startsWith("/catalogo") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Catálogo
          </Link>
          <WhatsAppButton className="hidden !px-4 !py-2 text-xs sm:inline-flex">
            Asesoría gratis
          </WhatsAppButton>
        </nav>
      </div>
    </header>
  );
}
