import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { categories, products, type Brand, type CategoryId } from "@/lib/products";

type Search = { categoria?: CategoryId };

export const Route = createFileRoute("/catalogo/")({
  component: CatalogPage,
  validateSearch: (search: Record<string, unknown>): Search => {
    const cat = search["categoria"];
    return typeof cat === "string" && categories.some((c) => c.id === cat)
      ? { categoria: cat as CategoryId }
      : {};
  },
  head: () => ({
    meta: [
      { title: "Catálogo de Terapia Oral | TalkTools® y ARK Therapeutic — Yad" },
      {
        name: "description",
        content:
          "41 herramientas profesionales de terapia motora oral: Sensi®, Z-Vibe®, bloques de mordida, ejercitadores de labios y lengua. Precios y asesoría por WhatsApp.",
      },
      { property: "og:title", content: "Catálogo de Terapia Oral y Motora — Yad" },
      {
        property: "og:description",
        content:
          "Herramientas TalkTools® y ARK Therapeutic para habla, alimentación y estimulación sensorial.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/catalogo" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/catalogo" }],
  }),
});

const brands: Brand[] = ["TalkTools", "ARK Therapeutic"];

function CatalogPage() {
  const { categoria } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [brand, setBrand] = useState<Brand | "todas">("todas");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (categoria && p.category !== categoria) return false;
      if (brand !== "todas" && p.brand !== brand) return false;
      if (
        q &&
        !`${p.name} ${p.description} ${p.sku} ${p.brand}`.toLowerCase().includes(q)
      )
        return false;
      return true;
    });
  }, [categoria, brand, query]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <header>
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Catálogo completo
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Herramientas de terapia oral y motora
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {products.length} productos originales TalkTools® y ARK Therapeutic.
            Cada tarjeta incluye consulta directa por WhatsApp.
          </p>
        </Reveal>
      </header>

      {/* Buscador */}
      <div className="mt-8">
        <label htmlFor="buscar" className="sr-only">
          Buscar producto
        </label>
        <div className="relative max-w-md">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            id="buscar"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nombre, SKU o marca…"
            className="w-full rounded-full border border-input bg-card py-3 pl-11 pr-4 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Filtros de marca */}
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filtrar por marca">
        {(["todas", ...brands] as const).map((b) => (
          <button
            key={b}
            type="button"
            onClick={() => setBrand(b)}
            aria-pressed={brand === b}
            className={`rounded-full border px-4 py-2 text-xs font-bold transition-all ${
              brand === b
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-primary"
            }`}
          >
            {b === "todas" ? "Todas las marcas" : b}
          </button>
        ))}
      </div>

      {/* Filtros de categoría */}
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
        <button
          type="button"
          onClick={() => navigate({ search: {}, replace: true })}
          aria-pressed={!categoria}
          className={`rounded-full border px-4 py-2 text-xs font-bold transition-all ${
            !categoria
              ? "border-primary bg-secondary text-primary"
              : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-primary"
          }`}
        >
          Todas
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() =>
              navigate({
                search: categoria === c.id ? {} : { categoria: c.id },
                replace: true,
              })
            }
            aria-pressed={categoria === c.id}
            className={`rounded-full border px-4 py-2 text-xs font-bold transition-all ${
              categoria === c.id
                ? "border-primary bg-secondary text-primary"
                : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-primary"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Resultados */}
      <p className="mt-8 text-sm font-semibold text-muted-foreground" role="status">
        {filtered.length} producto{filtered.length === 1 ? "" : "s"}
      </p>
      {filtered.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-border bg-card p-12 text-center">
          <p className="font-display text-lg font-bold">Sin resultados</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Prueba con otra búsqueda o quita los filtros.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, i) => (
            <ProductCard key={p.sku} product={p} priority={i < 4} />
          ))}
        </div>
      )}
    </main>
  );
}
