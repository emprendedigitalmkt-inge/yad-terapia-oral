import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { ProductCard } from "@/components/product-card";
import { WhatsAppButton, WhatsAppIcon } from "@/components/whatsapp";
import { categories, products } from "@/lib/products";
import { whatsappLink } from "@/lib/contact";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Yad Terapia Oral | Herramientas TalkTools® y ARK para habla y alimentación" },
      {
        name: "description",
        content:
          "Herramientas profesionales de terapia oral y motora: TalkTools® Sensi®, ARK Z-Vibe® y más. Asesoría personalizada por WhatsApp para terapeutas y familias.",
      },
      { property: "og:title", content: "Yad Terapia Oral y Motora" },
      {
        property: "og:description",
        content:
          "Herramientas profesionales para la alimentación, el desarrollo del habla y la estimulación sensorial.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const benefits = [
  {
    title: "Respaldo profesional",
    text: "Herramientas originales TalkTools® y ARK Therapeutic, las marcas de referencia mundial en terapia motora oral.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
  },
  {
    title: "De la clínica a casa",
    text: "Diseñadas para el consultorio y para continuar el programa terapéutico en casa con confianza y seguridad.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
    ),
  },
  {
    title: "Asesoría personalizada",
    text: "Te ayudamos a elegir la herramienta correcta según el objetivo terapéutico: mandíbula, labios, lengua o alimentación.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    ),
  },
  {
    title: "Resultados medibles",
    text: "Sistemas progresivos y graduados que permiten al terapeuta establecer líneas base y medir avances sesión a sesión.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    ),
  },
];

const testimonials = [
  {
    quote:
      "El Sensi recargable cambió por completo mis sesiones de alimentación. Mis pacientes toleran mejor la estimulación y los avances son visibles en semanas.",
    name: "Lcda. Mariana G.",
    role: "Terapeuta de lenguaje, CDMX",
  },
  {
    quote:
      "Como mamá, encontrar las herramientas originales con asesoría incluida me dio la seguridad de seguir la terapia de mi hijo en casa.",
    name: "Carolina R.",
    role: "Madre de familia, Guadalajara",
  },
  {
    quote:
      "El Tip Kit del Z-Vibe es la inversión más inteligente para cualquier consultorio: diez funciones en un solo sistema, con la calidad ARK de siempre.",
    name: "Mtro. Daniel O.",
    role: "Terapeuta ocupacional, Monterrey",
  },
];

const featured = products.filter((p) => p.featured).slice(0, 8);

function LandingPage() {
  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden" aria-labelledby="hero-title">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,oklch(0.86_0.05_200/0.6),transparent)]"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:pb-28 lg:pt-24">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                TalkTools® · ARK Therapeutic
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1
                id="hero-title"
                className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
              >
                Herramientas que ayudan a{" "}
                <span className="text-primary">hablar, comer y sonreír</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Terapia oral y motora profesional para la alimentación, el desarrollo
                del habla y la estimulación sensorial. Para terapeutas en clínica y
                familias en casa.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <WhatsAppButton message="Hola, quiero asesoría para elegir una herramienta de terapia oral.">
                  Recibir asesoría gratis
                </WhatsAppButton>
                <Link
                  to="/catalogo"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold transition-all hover:border-primary hover:text-primary"
                >
                  Ver catálogo
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
                {[
                  ["41+", "Herramientas"],
                  ["2", "Marcas líderes"],
                  ["100%", "Originales"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="sr-only">{label}</dt>
                    <dd className="font-display text-2xl font-extrabold text-primary">{value}</dd>
                    <dd className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <Reveal delay={200} className="relative">
            <div className="animate-float-slow relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-accent/40 to-transparent blur-2xl"
              />
              <img
                src={heroImage}
                alt="Herramientas profesionales de terapia oral y motora: Sensi, tubos de mordida y accesorios"
                width={1600}
                height={1200}
                className="relative w-full rounded-[2rem] border border-border/60 object-cover shadow-2xl shadow-primary/15"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ BENEFICIOS ============ */}
      <section className="bg-card" aria-labelledby="beneficios-title">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Por qué elegirnos
            </p>
            <h2
              id="beneficios-title"
              className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              Más que productos: acompañamiento terapéutico
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 100} as="article">
                <div className="h-full rounded-3xl border border-border bg-background p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6" aria-hidden="true">
                      {b.icon}
                    </svg>
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CATEGORÍAS ============ */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28" aria-labelledby="categorias-title">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Explora por objetivo
          </p>
          <h2
            id="categorias-title"
            className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Cada herramienta, un objetivo terapéutico
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 90}>
              <Link
                to="/catalogo"
                search={{ categoria: c.id }}
                className="group block h-full rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-bold transition-colors group-hover:text-primary">
                      {c.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
                  </div>
                  <span
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ DESTACADOS ============ */}
      <section className="bg-secondary/40" aria-labelledby="destacados-title">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-primary">
                  Los favoritos
                </p>
                <h2
                  id="destacados-title"
                  className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
                >
                  Productos destacados
                </h2>
              </div>
              <Link
                to="/catalogo"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-bold transition-all hover:border-primary hover:text-primary"
              >
                Ver los 41 productos
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <Reveal key={p.sku} delay={(i % 4) * 90} className="h-full">
                <ProductCard product={p} priority={i < 4} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRUEBA SOCIAL ============ */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28" aria-labelledby="testimonios-title">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Prueba social
          </p>
          <h2
            id="testimonios-title"
            className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Terapeutas y familias que ya confían
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 110} as="article">
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
                <div className="flex gap-1 text-[oklch(0.78_0.15_85)]" aria-label="5 de 5 estrellas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
                      <path d="M11.48 3.5a.56.56 0 0 1 1.04 0l2.13 5.11 5.52.44c.5.04.7.66.32.98l-4.2 3.6 1.28 5.38a.56.56 0 0 1-.84.61L12 16.72l-4.73 2.9a.56.56 0 0 1-.84-.6l1.28-5.4-4.2-3.59a.56.56 0 0 1 .32-.98l5.52-.44 2.13-5.1Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-sm font-bold">{t.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ AYUDA ============ */}
      <section className="bg-card" aria-labelledby="ayuda-title">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Primero ayudar, luego vender
            </p>
            <h2
              id="ayuda-title"
              className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              ¿No sabes qué herramienta necesitas?
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Cuéntanos el objetivo terapéutico —mandíbula, labios, lengua, alimentación
              o sensibilidad sensorial— y te orientamos sin costo hacia la herramienta
              adecuada para tu caso.
            </p>
            <div className="mt-8">
              <WhatsAppButton message="Hola, no sé qué herramienta necesito. ¿Me pueden asesorar? Mi objetivo es: ">
                Pedir orientación sin costo
              </WhatsAppButton>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <ul className="space-y-4">
              {[
                "Describe el caso o el diagnóstico (TOTs, apraxia, deglución atípica…).",
                "Recibe una recomendación concreta con nivel y textura adecuados.",
                "Aprende a usarla con la guía de tu terapeuta y continuidad en casa.",
              ].map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-extrabold text-primary-foreground">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/90">{step}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="px-4 py-20 sm:px-6 lg:py-28" aria-labelledby="cta-title">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-[oklch(0.45_0.09_228)] to-[oklch(0.3_0.06_225)] px-6 py-16 text-center sm:px-12 lg:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-16 size-96 rounded-full bg-accent/25 blur-3xl"
            />
            <h2
              id="cta-title"
              className="relative mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              El momento de avanzar en la terapia es hoy
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85">
              Escríbenos por WhatsApp y recibe asesoría personalizada, precios
              actualizados y disponibilidad inmediata.
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-4">
              <WhatsAppButton message="Hola, quiero hacer un pedido de herramientas de terapia oral.">
                <WhatsAppIcon /> Hablar con un asesor
              </WhatsAppButton>
              <Link
                to="/catalogo"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Explorar el catálogo
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

// Referencia para enlaces de producto desde otras secciones
export const productWaMessage = (name: string, sku: string) =>
  whatsappLink(`Hola, me interesa ${name} (${sku}). ¿Me dan más información?`);
