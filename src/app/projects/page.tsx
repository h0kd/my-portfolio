"use client";

import ProjectCard from "../components/ProjectCard";
import projects from "@/utils/projects";
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("projects");

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        {t("heading")}
      </h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
