import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/project-card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { projects, categoryLabels } from "@/data/projects";
import type { Project } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Jordan's homelab infrastructure, automation workflows, and technical projects.",
};

const categories: Project["category"][] = ["homelab", "automation", "networking"];

export default function ProjectsPage() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          title="Projects"
          subtitle="Everything I've built, automated, and maintain"
        />

        {categories.map((category) => {
          const categoryProjects = projects.filter(
            (p) => p.category === category
          );
          if (categoryProjects.length === 0) return null;

          return (
            <AnimateOnScroll key={category} className="mb-16 last:mb-0">
              <h3 className="mb-6 text-xl font-semibold text-gray-100">
                {categoryLabels[category]}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categoryProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </AnimateOnScroll>
          );
        })}
      </Container>
    </section>
  );
}
