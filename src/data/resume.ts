export interface ResumeData {
  summary: string;
  experience: {
    company: string;
    role: string;
    period: string;
    highlights: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  certifications: {
    name: string;
    issuer: string;
    year: string;
  }[];
}

export const resume: ResumeData = {
  summary:
    "Results-driven IT professional with hands-on experience in information security, risk management, and systems administration. Proven ability to implement security measures, troubleshoot complex technical issues, and maintain secure network infrastructure. Pursuing B.S. in Cybersecurity and Information Assurance with CompTIA Network+, A+, and ITF+ certifications. Skilled in applying security frameworks and communicating technical concepts to diverse audiences.",
  experience: [
    {
      company: "Western Governors University",
      role: "Enrollment Counselor / IT Risk Management Contributor",
      period: "2023 - Present",
      highlights: [
        "Collaborated with the IT Risk Management team on security assessment initiatives, processing over 100 overdue risk assessments and vendor evaluations to strengthen organizational security posture",
        "Conducted comprehensive vendor risk analysis by validating business contacts, verifying continued service utilization, and documenting security requirements to ensure compliance",
        "Participated in security assessment meetings and risk evaluation sessions, gaining practical exposure to enterprise risk management methodologies and security frameworks",
        "Reviewed and updated risk documentation, identifying discrepancies in vendor records and security assessments to improve accuracy and compliance",
        "Facilitated inter-departmental communication and conducted comprehensive trainings as Transcript Liaison, ensuring accurate dissemination of information and compliance with institutional policies",
      ],
    },
    {
      company: "Vivint Smart Home",
      role: "Advanced Technical Support Team Lead",
      period: "2019 - 2022",
      highlights: [
        "Resolved complex security system and network connectivity issues for a high-volume customer base, demonstrating advanced technical troubleshooting and problem-solving capabilities",
        "Led specialized technical projects requiring integration of new systems with existing infrastructure, identifying and resolving compatibility and security concerns",
        "Redefined customer verbal passcode policy and proactively contacted customers to remediate non-compliant passcodes, ensuring policy adherence and account security",
        "Maintained detailed technical documentation across multiple IT systems, ensuring accuracy and accessibility of system configurations and issue resolutions",
        "Communicated technical information effectively to non-technical audiences, adapting communication style to audience needs in a high-pressure environment",
      ],
    },
  ],
  education: [
    {
      institution: "Western Governors University",
      degree: "B.S. Cybersecurity & Information Assurance",
      period: "Expected 2027",
    },
    {
      institution: "Southwest Technical College",
      degree: "Software Development Technical Degree",
      period: "Graduated 2021",
    },
  ],
  skills: [
    {
      category: "Security",
      items: [
        "Information Security",
        "Risk Assessment",
        "Vulnerability Assessment",
        "Security Compliance",
        "Vendor Risk Management",
        "DNS Filtering",
        "VPN Configuration",
      ],
    },
    {
      category: "Infrastructure",
      items: [
        "Network Administration",
        "TCP/IP",
        "Linux",
        "Windows",
        "macOS",
        "Remote Access Security",
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Pi-hole",
        "Prometheus",
        "Grafana",
        "n8n",
        "ServiceNow",
        "OneTrust",
        "Salesforce",
      ],
    },
    {
      category: "Development",
      items: ["Java", "Python", "Bash", "Git", "Docker"],
    },
  ],
  certifications: [
    {
      name: "CompTIA A+",
      issuer: "CompTIA",
      year: "2024",
    },
    {
      name: "CompTIA ITF+",
      issuer: "CompTIA",
      year: "2024",
    },
    {
      name: "CompTIA Network+",
      issuer: "CompTIA",
      year: "In Progress",
    },
  ],
};
