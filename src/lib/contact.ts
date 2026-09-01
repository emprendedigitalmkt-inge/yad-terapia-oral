// Datos de contacto centralizados. Reemplaza WHATSAPP_NUMBER por el número real
// (código de país + número, solo dígitos, ej. "5215512345678").
export const WHATSAPP_NUMBER = "5214773274335";
export const CONTACT_EMAIL = "contacto@empresa.com";
export const BUSINESS_NAME = "Yad Terapia Oral y Motora";

// Dominio público del sitio, usado para generar URLs absolutas (og:image, etc.).
// Configúralo definiendo VITE_SITE_URL en tu entorno de build una vez tengas el
// dominio final; si se deja vacío, las imágenes de vista previa usan rutas
// relativas (funciona en el navegador, pero algunas redes sociales requieren
// URLs absolutas para mostrar la vista previa del enlace).
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, "");

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, me gustaría recibir asesoría sobre sus productos de terapia oral y motora.";
