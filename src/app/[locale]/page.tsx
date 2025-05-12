"use client";

import { Link } from "../../i18n/navigation";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function HomePage() {
  const t = useTranslations("hero");
  const nav = useTranslations("nav");
  const [origin, setOrigin] = useState<string>("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const socialLinks = [
    { Icon: Github, url: "https://github.com/h0kd", external: true },
    {
      Icon: Linkedin,
      url: "https://www.linkedin.com/in/leonardo-vicente-del-pino-sanhueza-67b1012a2/",
      external: true,
    },
    { Icon: Mail, url: "/contact", external: false },
  ];

  return (
    <section className="text-center space-y-6 py-20">
      <motion.h1
        className="text-4xl font-bold text-gray-900 dark:text-white"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {t("title")}
      </motion.h1>
      <p className="text-lg max-w-xl mx-auto text-gray-700 dark:text-gray-300">
        {t("subtitle")}
      </p>

      {/* Download CV */}
      <div className="flex justify-center space-x-4">
        <Button variant="outline" asChild>
          <a
            href={origin ? `${origin}/files/Leonardo_DelPino_CV.pdf` : "#"}
            download
          >
            {t("downloadCV")}
          </a>
        </Button>
      </div>

      {/* Navigation links */}
      <nav className="flex justify-center gap-6">
        <Link href="/">{nav("home")}</Link>
        <Link href="/projects">{nav("projects")}</Link>
        <Link href="/about">{nav("about")}</Link>
        <Link href="/contact">{nav("contact")}</Link>
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center gap-6">
        {socialLinks.map(({ Icon, url, external }, i) =>
          external ? (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <Icon className="w-6 h-6" />
            </a>
          ) : (
            <Link
              key={i}
              href={url}
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <Icon className="w-6 h-6" />
            </Link>
          )
        )}
      </div>
    </section>
  );
}
