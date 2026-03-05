export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Security & Risk",
    skills: [
      "Information Security",
      "Risk Assessment",
      "Vulnerability Assessment",
      "Security Compliance",
      "Vendor Risk Management",
      "Security Policy Development",
    ],
  },
  {
    name: "Infrastructure & Networking",
    skills: [
      "TCP/IP",
      "DNS",
      "Pi-hole",
      "Unbound",
      "VPN Configuration",
      "Cloudflare Tunnels",
      "Network Administration",
    ],
  },
  {
    name: "Monitoring & Automation",
    skills: [
      "Prometheus",
      "Grafana",
      "Netdata",
      "n8n",
      "Telegram Bots",
      "Cron",
      "Pushgateway",
    ],
  },
  {
    name: "Tools & Development",
    skills: [
      "Java",
      "Python",
      "Bash",
      "Git",
      "Docker",
      "Linux",
      "ServiceNow",
      "OneTrust",
    ],
  },
];
