import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "../../../utils/projects";
import projects from "../../../utils/projects";
import { Button } from "@/components/ui/button";

interface Params {
  slug: string;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: Params }) {
  const project: ProjectData | undefined = projects.find(
    (p) => p.slug === params.slug
  );

  if (!project) {
    return notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12 space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {project.title}
      </h1>

      {/* Header Image */}
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-lg text-gray-700 dark:text-gray-300">
        {project.description}
      </p>

      {/* Features */}
      {project.features?.length ? (
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Key Features
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {project.features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Tech Stack */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Tech Stack
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

      {/* Buttons */}
      <div className="flex gap-4 pt-6">
        <Button variant="outline" asChild>
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </Link>
        </Button>
      </div>
    </article>
  );
}
