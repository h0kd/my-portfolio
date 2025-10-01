// src/app/[locale]/layout.tsx
import "../globals.css";
import React, { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "../../i18n/routing";
import ClientNavbar from "./components/ClientNavbar";
import PageTransition from "../components/PageTransition";
import { ThemeProvider } from "../components/theme-provider";
import { Toaster } from "sonner";

interface Props {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  // 1. Esperar y validar locale
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return notFound();
  }

  // 2. Cargar los mensajes JSON para este locale
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    return notFound();
  }

  // 3. Renderizar el proveedor de i18n y layout interno
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
          <ClientNavbar />
          <main className="container mx-auto px-4 py-8">
            <PageTransition>{children}</PageTransition>
          </main>
          <Toaster position="top-center" richColors />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
