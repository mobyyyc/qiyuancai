export type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  date: string;
  tools?: string[];
  highlights: string[];
};

export const experience: Experience[] = [
  {
    id: 1,
    role: "Artificial Intelligence Engineer Intern",
    company: "ATM Capital",
    location: "Waterloo, ON (Remote)",
    date: "May 2026 - Present",
    tools: ["OpenClaw", "Codex", "Claude Code", "Hermes", "Marvis"],
    highlights: [
      "Evaluate agentic coding tools for enterprise workflows.",
      "Test deployment, orchestration, cost, stability, permissions, and cross-device constraints.",
    ],
  },
  {
    id: 2,
    role: "Business Intelligence Engineer Intern",
    company: "DataOnDemand",
    location: "Beijing",
    date: "Jul 2025 - Aug 2025",
    tools: ["Power BI", "Strategy One", "Data Analysis", "Dashboard Design"],
    highlights: [
      "Built HR dashboards for performance, department mix, and turnover analysis.",
      "Designed reporting views for internal stakeholders.",
    ],
  },
];
