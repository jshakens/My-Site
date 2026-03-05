import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  ResumeExperience,
  ResumeEducation,
  ResumeSkills,
  ResumeCertifications,
} from "@/components/resume-section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { resume } from "@/data/resume";
import { siteConfig } from "@/data/personal";
import { Download, Printer } from "lucide-react";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: "Resume",
  description: "Jordan's professional resume, experience, and skills.",
};

export default function ResumePage() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SectionHeading title="Resume" className="mb-0" />
          <div className="no-print flex gap-3">
            <Button href="/resume.pdf" variant="outline" download>
              <Download size={16} /> Download PDF
            </Button>
            <PrintButton />
          </div>
        </div>

        <AnimateOnScroll>
          <div className="mb-12 rounded-xl border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-1 text-2xl font-bold text-gray-100">
              {siteConfig.fullName}
            </h2>
            <p className="text-cyan-500">{siteConfig.tagline}</p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              {resume.summary}
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="mb-12">
            <h2 className="mb-6 text-xl font-semibold text-gray-100">
              Experience
            </h2>
            <ResumeExperience entries={resume.experience} />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="mb-12">
            <h2 className="mb-6 text-xl font-semibold text-gray-100">
              Education
            </h2>
            <ResumeEducation entries={resume.education} />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="mb-12">
            <h2 className="mb-6 text-xl font-semibold text-gray-100">
              Skills
            </h2>
            <ResumeSkills skills={resume.skills} />
          </div>
        </AnimateOnScroll>

        {resume.certifications.length > 0 && (
          <AnimateOnScroll>
            <div className="mb-12">
              <h2 className="mb-6 text-xl font-semibold text-gray-100">
                Certifications
              </h2>
              <ResumeCertifications certifications={resume.certifications} />
            </div>
          </AnimateOnScroll>
        )}
      </Container>
    </section>
  );
}
