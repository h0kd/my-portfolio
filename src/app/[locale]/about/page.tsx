"use client";

import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { jobsEn, skillsEn } from "@/utils/aboutData.en";
import { jobsEs, skillsEs } from "@/utils/aboutData.es";

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();

  // Elige el array según el idioma
  const jobs = locale === "es" ? jobsEs : jobsEn;
  const skills = locale === "es" ? skillsEs : skillsEn;

  return (
    <section className="container mx-auto px-4 py-16 space-y-16">
      {/* 1. Cabecera */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="w-48 h-48 mx-auto md:mx-0 relative rounded-full overflow-hidden border-4 border-gray-700">
          <Image
            src="/images/profile.jpg"
            alt={t("title")}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t("introPrefix")} <strong>Leonardo Del Pino</strong>,{" "}
            {t("introSuffix")}
          </p>
        </div>
      </div>

      {/* 2. Educación */}
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          {t("education.heading")} 🎓
        </h2>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <div className="font-medium text-gray-900 dark:text-white">
            {t("education.institution")}
          </div>
          <div>{t("education.degree")}</div>
          <div>{t("education.years")}</div>
          <p className="mt-2">{t("education.description")}</p>
        </div>
      </div>

      {/* 3. Experiencia */}
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          {t("work.heading")} 💼
        </h2>
        <ul className="space-y-8 text-gray-700 dark:text-gray-300">
          {jobs.map((job, idx) => (
            <li key={idx}>
              <div className="text-xl font-medium text-gray-900 dark:text-white">
                {job.company} — {job.role}
              </div>
              <div>
                {job.period} {job.location && `| ${job.location}`}
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {job.responsibilities.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Habilidades */}
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          {t("skills.heading")} 🛠️
        </h2>
        <div className="space-y-4">
          {skills.map((cat, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 dark:text-white">
                {cat.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {cat.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Contacto */}
      <div className="text-center space-x-6">
        <a
          href="mailto:leonardodelpino11@gmail.com"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <Mail className="w-5 h-5" /> leonardodelpino11@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/leonardo-vicente-del-pino-sanhueza-67b1012a2/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <Linkedin className="w-5 h-5" /> LinkedIn
        </a>
      </div>
    </section>
  );
}
