// src/app/[locale]/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import projectsEn from "@/utils/projects";
import { projectsEs } from "@/utils/project.es";

interface Params {
  locale: string;
  slug: string;
}

export function generateStaticParams() {
  const locales: Params["locale"][] = ["en", "es"];
  return locales.flatMap((locale) =>
    (locale === "es" ? projectsEs : projectsEn).map((p) => ({
      locale,
      slug: p.slug,
    }))
  );
}

export default async function ProjectDetailPage({
  // Igual: params es Promise<Params>
  params,
}: {
  params: Promise<Params>;
}) {
  // ¡Y await params antes de leer!
  const { locale, slug } = await params;

  const t = await getTranslations("projects");

  const list = locale === "es" ? projectsEs : projectsEn;
  const project = list.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <article className="container mx-auto px-4 py-12 space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {project.title}
      </h1>

      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <p className="text-lg text-gray-700 dark:text-gray-300">
        {project.description}
      </p>

      {project.features && project.features.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("featuresHeading")}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {project.features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {t("techStackHeading")}
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <div className="flex gap-4 pt-6">
        <Button variant="outline" asChild>
          <Link href={project.demoUrl} target="_blank" rel="noopener">
            {t("demo")}
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={project.repoUrl} target="_blank" rel="noopener">
            {t("code")}
          </Link>
        </Button>
      </div>
    </article>
  );
}
