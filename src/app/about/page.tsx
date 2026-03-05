import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillsGrid } from "@/components/skills-grid";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { siteConfig } from "@/data/personal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Jordan's background, skills, and homelab journey.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-24">
        <Container>
          <AnimateOnScroll>
            <SectionHeading
              title="About Me"
              subtitle="Background, interests, and what drives me"
            />

            <div className="max-w-3xl space-y-5">
              {siteConfig.bio.map((paragraph, i) => (
                <p key={i} className="text-gray-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      <section className="border-t border-gray-800 py-24">
        <Container>
          <AnimateOnScroll>
            <SectionHeading
              title="Skills & Technologies"
              subtitle="Tools and technologies I work with regularly"
            />
            <SkillsGrid />
          </AnimateOnScroll>
        </Container>
      </section>

      <section className="border-t border-gray-800 py-24">
        <Container>
          <AnimateOnScroll>
            <SectionHeading title="Beyond Tech" />
            <div className="max-w-3xl">
              <p className="text-gray-400 leading-relaxed">
                When I&apos;m not working on my homelab or writing automation
                scripts, I enjoy exploring new technologies, learning about
                network security, and staying up to date with the latest in
                open-source infrastructure tooling. I believe in building things
                that are reliable, maintainable, and genuinely useful.
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
