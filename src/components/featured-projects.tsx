import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="border-t border-gray-800 py-24">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of the things I've built and maintain"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/projects" variant="outline">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
