"use client";

import { useTranslations } from "next-intl";
import { Link as IntlLink } from "../../../i18n/navigation";
import { ModeToggle } from "../../../app/components/mode-toggle";
import LanguageSwitcher from "./LanguageSwitcher"; // <- Importa el switcher

export default function Navbar() {
  const t = useTranslations("nav");

  return (
    <>
      {/* Top bar con email */}
      <div className="h-8 flex items-center overflow-hidden bg-gray-100 dark:bg-black">
        <div className="whitespace-nowrap animate-marquee text-gray-900 dark:text-gray-200 font-mono px-4">
          leonardodelpino11@gmail.com
        </div>
      </div>

      {/* Main nav */}
      <nav className="py-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <IntlLink
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Leo
          </IntlLink>

          {/* Navigation links + controls */}
          <div className="flex items-center space-x-4">
            {/* Enlaces de navegación */}
            <div className="flex items-center space-x-6">
              <IntlLink
                href="/"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {t("home")}
              </IntlLink>
              <IntlLink
                href="/projects"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {t("projects")}
              </IntlLink>
              <IntlLink
                href="/about"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {t("about")}
              </IntlLink>
              <IntlLink
                href="/contact"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {t("contact")}
              </IntlLink>
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Theme dropdown */}
            <ModeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
