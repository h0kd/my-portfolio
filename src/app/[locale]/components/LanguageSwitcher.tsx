"use client";

import Link from "next/link";
import { usePathname, useParams, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const pathname = usePathname(); // p.ej. "/es/projects/expense-tracker"
  const search = useSearchParams().toString(); // querystring si la hubiera
  const { locale } = useParams() as { locale: string };
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex space-x-2">
        <div className="px-2 py-1 rounded bg-gray-200 animate-pulse">EN</div>
        <div className="px-2 py-1 rounded bg-gray-200 animate-pulse">ES</div>
      </div>
    );
  }

  // Calcula la ruta "complementaria"
  const otherLocale = locale === "es" ? "en" : "es";
  const restOfPath = pathname.replace(`/${locale}`, "");
  const href = `/${otherLocale}${restOfPath}${search ? `?${search}` : ""}`;

  return (
    <div className="flex space-x-2">
      <Link
        href={href}
        className={`px-2 py-1 rounded ${
          locale === "en"
            ? "bg-gray-300 text-gray-900"
            : "hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        EN
      </Link>
      <Link
        href={href}
        className={`px-2 py-1 rounded ${
          locale === "es"
            ? "bg-gray-300 text-gray-900"
            : "hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        ES
      </Link>
    </div>
  );
}
