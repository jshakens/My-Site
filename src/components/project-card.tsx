import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { categoryLabels } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
          {categoryLabels[project.category]}
        </span>
      </div>

      <h3 className="mb-2 text-xl font-semibold text-gray-100">
        {project.title}
      </h3>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-4 flex gap-4 border-t border-gray-800 pt-4">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-cyan-500 transition-colors hover:text-cyan-400"
            >
              {link.label} <ExternalLink size={14} />
            </a>
          ))}
        </div>
      )}
    </Card>
  );
}
