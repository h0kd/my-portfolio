// src/app/components/ProjectCard.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ProjectData } from "../../utils/projects";

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
      {/* Imagen */}
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Título */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>

        {/* Descripción */}
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack como chips */}
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Tech Stack:
          </h4>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Botones con shadcn/ui */}
        <div className="mt-6 flex gap-3">
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
      </div>
    </div>
  );
}
