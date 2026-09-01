import { Link } from "@tanstack/react-router";
import { formatPrice, productImage, type Product, categories } from "@/lib/products";
import { whatsappLink } from "@/lib/contact";
import { WhatsAppIcon } from "./whatsapp";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const category = categories.find((c) => c.id === product.category);
  const waMessage = `Hola, me interesa el producto ${product.name} (${product.sku}) de ${formatPrice(product.price)}. ¿Me pueden dar más información?`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
      <Link
        to="/catalogo/$sku"
        params={{ sku: product.slug }}
        className="relative block aspect-square overflow-hidden bg-secondary/50"
        aria-label={`Ver ${product.name}`}
      >
        <img
          src={productImage(product)}
          alt={product.name}
          width={720}
          height={720}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary backdrop-blur">
          {category?.name}
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
          {product.brand} · {product.sku}
        </p>
        <h3 className="font-display text-base font-bold leading-snug">
          <Link
            to="/catalogo/$sku"
            params={{ sku: product.slug }}
            className="transition-colors hover:text-primary"
          >
            {product.name}
          </Link>
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <p className="font-display text-lg font-extrabold text-primary">
            {formatPrice(product.price)}
          </p>
          <a
            href={whatsappLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar ${product.name} por WhatsApp`}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-bold text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
          >
            <WhatsAppIcon className="size-3.5" />
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
}
