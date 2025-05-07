import ProjectCard from "../components/ProjectCard";
import projects from "../../utils/projects";

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      {/* Título adaptativo */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Projects
      </h1>

      {/* Grid de cards */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
