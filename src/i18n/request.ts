// src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale puede venir como string | undefined
  const requested = await requestLocale;
  // Garantizar que locale sea siempre un string válido
  const locale = hasLocale(routing.locales, requested)
    ? (requested as string)
    : routing.defaultLocale;

  // Cargar los mensajes correspondientes
  const messages = (await import(`../messages/${locale}.json`)).default;

  return { locale, messages };
});
