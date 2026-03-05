import { Badge } from "@/components/ui/badge";

export function ResumeExperience({
  entries,
}: {
  entries: { company: string; role: string; period: string; highlights: string[] }[];
}) {
  return (
    <div className="space-y-8">
      {entries.map((entry, i) => (
        <div key={i} className="border-l-2 border-gray-800 pl-6">
          <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                {entry.role}
              </h3>
              <p className="text-cyan-500">{entry.company}</p>
            </div>
            <span className="mt-1 font-mono text-sm text-gray-500 sm:mt-0">
              {entry.period}
            </span>
          </div>
          <ul className="mt-3 space-y-2">
            {entry.highlights.map((highlight, j) => (
              <li key={j} className="text-sm text-gray-400">
                <span className="mr-2 text-cyan-500">&#8227;</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function ResumeEducation({
  entries,
}: {
  entries: { institution: string; degree: string; period: string }[];
}) {
  return (
    <div className="space-y-6">
      {entries.map((entry, i) => (
        <div key={i} className="border-l-2 border-gray-800 pl-6">
          <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                {entry.degree}
              </h3>
              <p className="text-cyan-500">{entry.institution}</p>
            </div>
            <span className="mt-1 font-mono text-sm text-gray-500 sm:mt-0">
              {entry.period}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ResumeSkills({
  skills,
}: {
  skills: { category: string; items: string[] }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {skills.map((group) => (
        <div key={group.category}>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ResumeCertifications({
  certifications,
}: {
  certifications: { name: string; issuer: string; year: string }[];
}) {
  return (
    <div className="space-y-4">
      {certifications.map((cert, i) => (
        <div key={i} className="border-l-2 border-gray-800 pl-6">
          <h3 className="text-lg font-semibold text-gray-100">{cert.name}</h3>
          <p className="text-sm text-gray-400">
            {cert.issuer} &middot; {cert.year}
          </p>
        </div>
      ))}
    </div>
  );
}
