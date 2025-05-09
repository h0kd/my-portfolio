// src/app/[locale]/projects/page.tsx
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import ProjectCard from "../../components/ProjectCard";
import projectsEn from "@/utils/projects"; // your English data
import { projectsEs } from "@/utils/project.es"; // your Spanish data

interface Params {
  locale: string;
}

export function generateStaticParams() {
  return ["en", "es"].map((locale) => ({ locale }));
}

export default async function ProjectsPage({
  params,
}: {
  params: Params | Promise<Params>;
}) {
  // wait for the params to arrive
  const { locale } = await params;

  // load your “projects” translations
  const t = await getTranslations("projects");

  // pick the right data array
  const list = locale === "es" ? projectsEs : projectsEn;
  if (!list || list.length === 0) {
    return notFound();
  }

  return (
    <section className="container mx-auto px-4 py-8">
      {/* localized heading */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        {t("heading")}
      </h1>

      {/* grid of cards */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {list.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
