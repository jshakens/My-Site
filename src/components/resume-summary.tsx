import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Server, Workflow, Terminal } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Security",
    description: "Risk assessment, vendor evaluation, security compliance, and vulnerability analysis",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Self-hosted homelab with DNS filtering, monitoring, and secure remote access",
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "n8n workflows, Telegram bots, and automated security reporting pipelines",
  },
  {
    icon: Terminal,
    title: "Development",
    description: "Java, Python, and Bash scripting for network analysis and system management",
  },
];

export function ResumeSummary() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          title="What I Do"
          subtitle="A quick overview of my focus areas and expertise"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <Card key={item.title}>
              <item.icon className="mb-4 text-cyan-500" size={28} />
              <h3 className="mb-2 text-lg font-semibold text-gray-100">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/resume" variant="outline">
            View Full Resume
          </Button>
        </div>
      </Container>
    </section>
  );
}
