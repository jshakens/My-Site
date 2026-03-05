import { HeroSection } from "@/components/hero-section";
import { ResumeSummary } from "@/components/resume-summary";
import { FeaturedProjects } from "@/components/featured-projects";
import { Container } from "@/components/ui/container";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/personal";

export default function Home() {
  return (
    <>
      <HeroSection />

      <AnimateOnScroll>
        <ResumeSummary />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <FeaturedProjects />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="border-t border-gray-800 py-24">
          <Container className="text-center">
            <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-3 text-gray-400">
              Interested in collaborating or just want to chat? Reach out.
            </p>

            <div className="mt-8 flex items-center justify-center gap-6">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 transition-colors hover:text-cyan-400"
              >
                <Github size={20} />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 transition-colors hover:text-cyan-400"
              >
                <Linkedin size={20} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-gray-400 transition-colors hover:text-cyan-400"
              >
                <Mail size={20} />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </Container>
        </section>
      </AnimateOnScroll>
    </>
  );
}
