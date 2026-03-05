import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/personal";
import { ArrowRight, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background grid decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />

      <Container className="relative flex min-h-[85vh] flex-col items-center justify-center text-center">
        <p className="mb-4 font-mono text-sm text-cyan-500">Hi, my name is</p>
        <h1 className="text-5xl font-bold tracking-tight text-gray-100 sm:text-6xl lg:text-7xl">
          {siteConfig.fullName}
        </h1>
        <p className="mt-4 text-xl text-gray-400 sm:text-2xl">
          {siteConfig.tagline}
        </p>
        <p className="mt-6 max-w-xl text-gray-500">
          {siteConfig.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/projects">
            View Projects <ArrowRight size={16} />
          </Button>
          <Button href="/resume.pdf" variant="outline" download>
            <Download size={16} /> Download Resume
          </Button>
        </div>
      </Container>
    </section>
  );
}
