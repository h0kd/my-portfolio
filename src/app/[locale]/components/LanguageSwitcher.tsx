"use client";

import Link from "next/link";
import { usePathname, useParams, useSearchParams } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname(); // p.ej. "/es/projects/expense-tracker"
  const search = useSearchParams().toString(); // querystring si la hubiera
  const { locale } = useParams() as { locale: string };

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
