import "../globals.css";
import React, { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "../../i18n/routing";
import Navbar from "./components/Navbar";
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
  // Await params before accessing its properties
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              <PageTransition>{children}</PageTransition>
            </main>
            <Toaster position="top-center" richColors />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
