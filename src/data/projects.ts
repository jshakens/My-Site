export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "homelab" | "automation" | "networking";
  featured: boolean;
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    id: "homelab-infrastructure",
    title: "Home Network Security Infrastructure",
    description:
      "Designed and implemented a secure home network using Pi-hole DNS server for ad-blocking and malicious traffic filtering with Unbound as a recursive DNS resolver for enhanced privacy. Configured network security policies and access controls to monitor and filter traffic.",
    technologies: [
      "Raspberry Pi",
      "Pi-hole",
      "Unbound",
      "Docker",
      "Linux",
      "Cloudflare Tunnel",
    ],
    category: "homelab",
    featured: true,
  },
  {
    id: "monitoring-stack",
    title: "Monitoring & Anomaly Detection",
    description:
      "Deployed a full monitoring stack including Prometheus, Grafana, and Netdata with AI anomaly detection. Implemented tshark packet capture analysis with automated cron jobs pushing metrics to Prometheus Pushgateway for real-time network visibility.",
    technologies: [
      "Prometheus",
      "Grafana",
      "Netdata",
      "tshark",
      "Pushgateway",
      "node_exporter",
    ],
    category: "homelab",
    featured: true,
  },
  {
    id: "n8n-automations",
    title: "Automated Security Reporting",
    description:
      "Built automated security reporting workflows via n8n and Telegram bot integration. Self-hosted n8n exposed publicly via Cloudflare tunnel, powering automated monitoring alerts, scheduled Pi-hole reports, and webhook-driven integrations.",
    technologies: [
      "n8n",
      "Cloudflare Tunnels",
      "Telegram Bot API",
      "Webhooks",
    ],
    category: "automation",
    featured: true,
  },
  {
    id: "network-analysis",
    title: "Packet Capture & Network Analysis",
    description:
      "Custom scripts for network traffic analysis using tshark packet capture with automated cron jobs. Includes PCAP analysis, Discord integration for alerts, and automated reporting pipelines pushing metrics to Prometheus.",
    technologies: ["tshark", "Python", "Bash", "Prometheus", "Cron"],
    category: "networking",
    featured: false,
  },
  {
    id: "telegram-bot",
    title: "Telegram Bot Integration",
    description:
      "Telegram bot delivering automated Pi-hole reports, Prometheus monitoring alerts, and system health notifications. Integrated with n8n workflows for flexible, event-driven automation.",
    technologies: ["Telegram Bot API", "n8n", "Prometheus", "Bash"],
    category: "automation",
    featured: false,
  },
  {
    id: "vpn-remote-access",
    title: "Secure Remote Access",
    description:
      "Demonstrated practical application of network security concepts including DNS-level filtering, VPN tunneling, and secure remote access using Cloudflare Tunnel for exposing self-hosted services safely.",
    technologies: ["Cloudflare Tunnel", "VPN", "DNS Filtering", "Linux"],
    category: "networking",
    featured: false,
  },
];

export const categoryLabels: Record<Project["category"], string> = {
  homelab: "Homelab",
  automation: "Automation",
  networking: "Networking",
};
