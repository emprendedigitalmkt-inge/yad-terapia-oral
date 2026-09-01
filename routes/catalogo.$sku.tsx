import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { WhatsAppButton } from "@/components/whatsapp";
import {
  categories,
  formatPrice,
  getProduct,
  productImage,
  products,
  relatedProducts,
} from "@/lib/products";
import { SITE_URL } from "@/lib/contact";

export const Route = createFileRoute("/catalogo/$sku")({
  loader: ({ params }) => {
    const product = getProduct(params.sku);
    if (!product) throw notFound();
    return { product };
  },
  component: ProductPage,
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Producto no disponible — Yad Terapia Oral" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} | ${formatPrice(product.price)} — Yad Terapia Oral`;
    const description = product.description.slice(0, 155);
    const imageUrl = `${SITE_URL}${productImage(product)}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/catalogo/${params.sku}` },
        { property: "og:image", content: imageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: imageUrl },
      ],
      links: [{ rel: "canonical", href: `/catalogo/${params.sku}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            sku: product.sku,
            brand: { "@type": "Brand", name: product.brand },
            description: product.description,
            image: imageUrl,
            offers: {
              "@type": "Offer",
              price: product.price.toFixed(2),
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
          }),
        },
      ],
    };
  },
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const category = categories.find((c) => c.id === product.category);
  const related = relatedProducts(product);
  const waMessage = `Hola, me interesa el producto ${product.name} (${product.sku}) de ${formatPrice(product.price)}. ¿Me pueden dar más información?`;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-16">
      <nav aria-label="Ruta de navegación" className="text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link to="/" className="transition-colors hover:text-primary">Inicio</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to="/catalogo" className="transition-colors hover:text-primary">
              Catálogo
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-semibold text-foreground" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      <article className="mt-8 grid items-start gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="scroll-pop overflow-hidden rounded-[2rem] border border-border bg-card shadow-lg shadow-primary/5">
            <img
              src={productImage(product)}
              alt={product.name}
              width={720}
              height={720}
              className="aspect-square w-full object-contain p-8"
            />
          </div>
        </Reveal>

        <div>
          <Reveal delay={80}>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {product.brand} · {product.sku}
            </p>
            <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {product.name}
            </h1>
            {category && (
              <Link
                to="/catalogo"
                search={{ categoria: category.id }}
                className="mt-3 inline-block rounded-full bg-secondary px-3.5 py-1 text-xs font-bold text-primary transition-colors hover:bg-accent"
              >
                {category.name}
              </Link>
            )}
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            {product.colors && product.colors.length > 0 && (
              <p className="mt-4 text-sm">
                <span className="font-bold">Disponible en: </span>
                <span className="text-muted-foreground">{product.colors.join(", ")}</span>
              </p>
            )}
            <p className="mt-8 font-display text-4xl font-extrabold text-primary">
              {formatPrice(product.price)}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppButton message={waMessage}>
                Consultar por WhatsApp
              </WhatsAppButton>
              <Link
                to="/catalogo"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold transition-all hover:border-primary hover:text-primary"
              >
                Seguir explorando
              </Link>
            </div>
            <p className="mt-6 rounded-2xl border border-border bg-secondary/50 p-4 text-xs leading-relaxed text-muted-foreground">
              Esta herramienta debe utilizarse bajo la orientación de un terapeuta o
              profesional de la salud. ¿Dudas sobre si es la indicada para tu caso?
              Escríbenos y te orientamos sin costo.
            </p>
          </Reveal>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mt-20" aria-labelledby="relacionados-title">
          <Reveal>
            <h2
              id="relacionados-title"
              className="font-display text-2xl font-extrabold tracking-tight"
            >
              También te puede interesar
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <Reveal key={p.sku} delay={i * 80} className="h-full">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

// Referencia estática para prerender/SEO
export const allProductSlugs = products.map((p) => p.slug);
