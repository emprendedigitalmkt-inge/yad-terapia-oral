import { productImages } from "./product-images";

export type CategoryId =
  | "vibratoria"
  | "alimentacion"
  | "mandibula"
  | "labios"
  | "masticables"
  | "sensorial"
  | "lengua"
  | "puntas"
  | "programas";

export interface Category {
  id: CategoryId;
  name: string;
  blurb: string;
}

export const categories: Category[] = [
  { id: "vibratoria", name: "Terapia vibratoria", blurb: "Estimulación vibrotáctil para conciencia sensorial intraoral." },
  { id: "mandibula", name: "Mandíbula", blurb: "Estabilidad, graduación, fuerza y simetría mandibular." },
  { id: "labios", name: "Labios", blurb: "Cierre, fuerza y tono labial para alimentación y articulación." },
  { id: "lengua", name: "Lengua", blurb: "Movilidad, disociación y conciencia lingual." },
  { id: "masticables", name: "Masticables", blurb: "Mordida progresiva y desensibilización oral segura." },
  { id: "alimentacion", name: "Alimentación", blurb: "Succión, popote y transición a la alimentación autónoma." },
  { id: "sensorial", name: "Sensorial", blurb: "Herramientas para perfiles sensoriales sensibles." },
  { id: "programas", name: "Programas", blurb: "Kits estructurados de intervención terapéutica." },
  { id: "puntas", name: "Accesorios y puntas", blurb: "Puntas, refacciones y accesorios para Sensi® y Z-Vibe®." },
];

export type Brand = "TalkTools" | "ARK Therapeutic";

export interface Product {
  sku: string;
  slug: string;
  name: string;
  brand: Brand;
  price: number;
  description: string;
  category: CategoryId;
  colors?: string[];
  featured?: boolean;
}

const P = (
  sku: string,
  name: string,
  brand: Brand,
  price: number,
  description: string,
  category: CategoryId,
  extra?: { colors?: string[]; featured?: boolean },
): Product => ({
  sku,
  slug: sku.toLowerCase(),
  name,
  brand,
  price,
  description,
  category,
  ...(extra?.colors ? { colors: extra.colors } : {}),
  ...(extra?.featured ? { featured: true } : {}),
});

export const products: Product[] = [
  P("TT-01", "TalkTools® Sensi® Recargable", "TalkTools", 44.99,
    "Herramienta de terapia oral con vibración recargable. Estimula la conciencia sensorial y motora intraoral para favorecer el desarrollo del habla y la alimentación. Ideal para uso clínico y en casa.",
    "vibratoria", { colors: ["Verde"], featured: true }),
  P("TT-02", "Kit de Alimentación Previa Recargable Sensi®", "TalkTools", 93.99,
    "Kit completo con vibración recargable para preparar la musculatura oral antes de la alimentación. Reúne las herramientas esenciales para el trabajo pre-alimentario en terapia de deglución.",
    "alimentacion", { featured: true }),
  P("TT-03", "Kit de Mandíbula Recargable Sensi®", "TalkTools", 63.99,
    "Sistema recargable enfocado en la estabilidad y graduación de la mandíbula. Apoya el desarrollo de la fuerza, simetría y control mandibular necesarios para masticar y articular.",
    "mandibula"),
  P("TT-04", "Gimnasio de Labios™", "TalkTools", 19.99,
    "Herramienta para fortalecer y ejercitar el cierre labial. Trabaja de forma progresiva la fuerza y el tono de los labios, clave para la alimentación y la articulación.",
    "labios", { featured: true }),
  P("TT-05", "Kit Sensi® Essentials", "TalkTools", 99.0,
    "Kit esencial con las herramientas fundamentales de terapia sensorial y motora oral. La base ideal para que el terapeuta inicie un programa de intervención completo.",
    "vibratoria", { featured: true }),
  P("TT-06", "Bloques de Mordida Sensorial (Morado)", "TalkTools", 31.0,
    "Bloques de mordida para personas con sensibilidad sensorial. Permiten graduar la apertura mandibular de forma segura y controlada, con textura pensada para perfiles hipersensibles.",
    "mandibula", { colors: ["Morado"] }),
  P("TT-07", "Juego de Tubos de Mordida", "TalkTools", 35.0,
    "Juego de tubos de mordida de distintas resistencias. Permite trabajar de manera progresiva la mordida, la fuerza mandibular y la desensibilización oral en terapia.",
    "masticables", { colors: ["Rojo", "Azul", "Verde"] }),
  P("TT-08", "Ejercitador de Mandíbula™", "TalkTools", 37.0,
    "Herramienta especializada para ejercitar y fortalecer la mandíbula. Favorece la estabilidad, la simetría y el control mandibular requeridos para una masticación y un habla eficientes.",
    "mandibula"),
  P("TT-09", "Punta Blanca Sensi® TOTs", "TalkTools", 12.99,
    "Punta especializada para el mango Sensi, diseñada para la evaluación y rehabilitación posterior a la liberación de tejido oral retenido. Proporciona estimulación vibrotáctil dirigida a los puntos de inserción del frenillo lingual y labial, facilitando la liberación miofascial y la cicatrización tras una frenotomía o frenectomía.",
    "puntas"),
  P("TT-10", "Kit de Bolsa Sensorial", "TalkTools", 29.75,
    "Set portátil con herramientas sensoriales variadas. Práctico para trasladar la terapia entre consultorio, escuela y hogar sin perder efectividad ni continuidad del tratamiento.",
    "sensorial"),
  P("TT-11", "Bloques de Evaluación de Mandíbula (Rojos)", "TalkTools", 33.0,
    "Bloques de referencia para evaluar la apertura y el rango de movimiento mandibular. Herramienta clave de diagnóstico para establecer una línea base y medir avances terapéuticos.",
    "mandibula", { colors: ["Rojo"] }),
  P("TT-12", "Programa de Apraxia", "TalkTools", 55.0,
    "Programa integral con tubos, figuras y bloques para el abordaje terapéutico de la apraxia del habla. Recurso completo y estructurado para el trabajo del profesional del lenguaje.",
    "programas"),
  P("TT-13", "Sensi® (Rosa)", "TalkTools", 34.99,
    "Herramienta de terapia oral con vibración, en color rosa. Estimula la conciencia sensorial intraoral para apoyar el trabajo motor-oral en terapia del lenguaje.",
    "vibratoria", { colors: ["Rosa"] }),
  P("TT-14", "Sensi® (Azul)", "TalkTools", 34.99,
    "Herramienta de terapia oral con vibración, en color azul (Ocean). Estimula la conciencia sensorial intraoral para apoyar el trabajo motor-oral en terapia del lenguaje.",
    "vibratoria", { colors: ["Azul"] }),
  P("TT-15", "Sensi® (Gris)", "TalkTools", 34.99,
    "Herramienta de terapia oral con vibración, en color gris. Estimula la conciencia sensorial intraoral para apoyar el trabajo motor-oral en terapia del lenguaje.",
    "vibratoria", { colors: ["Gris"] }),
  P("TT-16", "Sensi® Low Jaw Tip (Baja)", "TalkTools", 6.99,
    "Punta de nivel básico en la serie de puntas blandas para mandíbula, con la combinación más suave de estimulación vibrotáctil y mínima resistencia a la mordida. Punto de partida recomendado para clientes con hipersensibilidad oral significativa.",
    "puntas"),
  P("TT-17", "Punta de Mandíbula Mediana Sensi®", "TalkTools", 6.99,
    "Versión de dureza suave de la punta de mandíbula Medium, que proporciona una estimulación vibrotáctil moderada para pacientes que requieren evaluación de la mandíbula pero se benefician de una superficie de mordida más suave.",
    "puntas"),
  P("TT-18", "Honey Bear® Silicona", "TalkTools", 18.99,
    "Vaso con popote de silicona en forma de osito. Facilita el aprendizaje de la succión y la bebida con popote de manera lúdica, apoyando la transición a la alimentación autónoma.",
    "alimentacion", { featured: true }),
  P("ARK-01", "ARK Bite Blocks para Graduación de Mandíbula", "ARK Therapeutic", 24.99,
    "Bloques de mordida para la graduación y estabilidad de la mandíbula. Excelente complemento de cualquier kit de terapia motora oral; trabajan apertura, fuerza y control mandibular.",
    "mandibula", { colors: ["Turquesa", "Rojo", "Amarillo"] }),
  P("ARK-02", "ARK Pro Button para Labios", "ARK Therapeutic", 20.49,
    "Herramienta para el trabajo de fuerza y cierre labial. Se emplea en ejercicios de resistencia para fortalecer la musculatura peribucal en terapia miofuncional.",
    "labios"),
  P("ARK-03", "ARK ProBarbell™ para Cierre y Fuerza Labial", "ARK Therapeutic", 20.49,
    "Set diseñado para fortalecer el cierre labial. Permite trabajar de forma progresiva la fuerza y la resistencia de los labios en programas de terapia miofuncional orofacial.",
    "labios"),
  P("ARK-04", "ARK ProSqueezer™ Labios, Lengua y Mandíbula", "ARK Therapeutic", 27.25,
    "Ejercitador versátil para labios, lengua y mandíbula. Una sola herramienta que trabaja múltiples grupos musculares orales, optimizando el tiempo de la sesión terapéutica.",
    "labios"),
  P("ARK-05", "ARK Grabber (Amarillo y Azul) c/u", "ARK Therapeutic", 13.49,
    "Masticable hueco tipo Grabber/P-Tube para el trabajo de mordida y desensibilización oral. Su diseño hueco permite adaptarlo con vibración para mayor estímulo sensorial.",
    "masticables", { colors: ["Amarillo", "Azul"] }),
  P("ARK-06", "ARK Bite Tube Hollow Chew Tool (Rojo) c/u", "ARK Therapeutic", 11.75,
    "Tubo de mordida hueco de superficie lisa, en color rojo. Ideal para quienes buscan una textura suave; puede combinarse con vibración para el trabajo de mordida.",
    "masticables", { colors: ["Rojo"] }),
  P("ARK-07", "ARK Bite Tube Hollow Chew Tool (Amarillo) c/u", "ARK Therapeutic", 11.75,
    "Tubo de mordida hueco en color amarillo. Aporta resistencia para el trabajo de mordida y desensibilización; compatible con dispositivos vibratorios ARK.",
    "masticables", { colors: ["Amarillo"] }),
  P("ARK-08", "ARK Oro-Navigator Tongue", "ARK Therapeutic", 11.49,
    "Herramienta para el trabajo y la navegación de la lengua. Apoya la movilidad, disociación y conciencia lingual en terapia motora oral y miofuncional.",
    "lengua"),
  P("ARK-09", "ARK Z-Vibe® Herramienta Oral Vibratoria", "ARK Therapeutic", 38.49,
    "Herramienta vibratoria versátil para terapia motora oral. Su vibración estimula la conciencia sensorial y facilita el trabajo muscular; base de un amplio sistema de puntas intercambiables.",
    "vibratoria", { featured: true }),
  P("ARK-10", "ARK Z-Vibe® Travel Kit", "ARK Therapeutic", 66.99,
    "Kit de viaje con puntas y estuche. Reúne lo necesario para trasladar la terapia con Z-Vibe® entre consultorio y hogar, con todo organizado y protegido.",
    "vibratoria"),
  P("ARK-11", "ARK Brush Tip para Z-Vibe® c/u", "ARK Therapeutic", 8.75,
    "Puntas perfectas para la estimulación táctil y propioceptiva de la lengua, las mejillas, el paladar y los labios durante la estimulación oral y/o el cuidado dental.",
    "puntas"),
  P("ARK-12", "ARK Tip Kit (10 Puntas con Estuche)", "ARK Therapeutic", 99.0,
    "Kit completo con 10 puntas y estuche organizador. La colección más completa para aprovechar al máximo el Z-Vibe® con distintas texturas, formas y funciones.",
    "puntas", { featured: true }),
  P("ARK-13", "ARK Preefer Tip para Z-Vibe®", "ARK Therapeutic", 7.49,
    "Punta Preefer de repuesto para el Z-Vibe®. Diseñada para estimulación precisa dentro de la cavidad oral en el trabajo motor-sensorial.",
    "puntas"),
  P("ARK-14", "ARK Fine Tip para Z-Vibe®", "ARK Therapeutic", 7.49,
    "Punta fina de repuesto para el Z-Vibe®. Ideal para el trabajo de precisión en zonas específicas de la cavidad oral.",
    "puntas"),
  P("ARK-15", "ARK Bite-n-Chew Tip para Z-Vibe® (Verde) c/u", "ARK Therapeutic", 7.49,
    "Punta Bite-n-Chew para el Z-Vibe®. Pensada para el trabajo de mordida y masticación con estimulación vibratoria en un mismo accesorio.",
    "puntas", { colors: ["Verde"] }),
  P("ARK-16", "ARK Squeezer Tip para Z-Vibe® c/u", "ARK Therapeutic", 7.49,
    "Punta squeezer de repuesto para el Z-Vibe®. Permite trabajar presión y resistencia de forma controlada dentro del programa de terapia oral.",
    "puntas"),
  P("ARK-17", "ARK Animal Tip Set para Z-Vibe®", "ARK Therapeutic", 26.99,
    "Set de puntas con formas de animales para el Z-Vibe®. Hace la terapia más lúdica y motivadora para los niños, favoreciendo la adherencia al tratamiento.",
    "puntas", { featured: true }),
  P("ARK-18", "ARK Button Tips para Z-Vibe® (2 Pzas)", "ARK Therapeutic", 12.99,
    "Par de puntas tipo botón para el Z-Vibe®. Diseñadas para el trabajo de cierre y fuerza labial con apoyo de estimulación vibratoria.",
    "puntas", { colors: ["Amarillo", "Azul"] }),
  P("ARK-19", "ARK Tongue Tip para Z-Vibe®", "ARK Therapeutic", 8.75,
    "Punta especializada para el trabajo de la lengua con el Z-Vibe®. Favorece la movilidad, disociación y conciencia lingual en terapia motora oral.",
    "puntas"),
  P("ARK-20", "Kit de Refacciones para Z-Vibe® / Z-Grabber®", "ARK Therapeutic", 19.99,
    "Kit de refacciones para Z-Vibe® o Z-Grabber®. Mantiene las herramientas siempre operativas, prolongando su vida útil dentro del consultorio.",
    "puntas"),
  P("ARK-21", "Baterías de Repuesto Z-Vibe® / Z-Grabber®", "ARK Therapeutic", 17.99,
    "Baterías de repuesto para Z-Vibe® o Z-Grabber®. Aseguran la continuidad de la terapia sin interrupciones por falta de energía.",
    "puntas"),
  P("ARK-22", "ARK Lip Blok® para Beber con Popote", "ARK Therapeutic", 34.75,
    "Herramienta oral motora para el aprendizaje de la bebida con popote. Regula la profundidad del popote para un control preciso de la succión y la postura oral.",
    "alimentacion"),
  P("ARK-23", "ARK Y-Tip Bite Block para Z-Vibe®", "ARK Therapeutic", 26.99,
    "Punta Y-Tip tipo bloque de mordida para el Z-Vibe®. Combina la función de bloque de mordida bilateral con la estimulación vibratoria del Z-Vibe®.",
    "puntas"),
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productImage(product: Product): string {
  return productImages[product.slug] ?? "";
}

export function relatedProducts(product: Product, count = 4): Product[] {
  return products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, count);
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)} USD`;
}
