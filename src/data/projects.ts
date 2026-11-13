type Project = {
  title: string;
  description: string;
  repo: string;
  url?: string;
};

export const projects: Project[] = [
  {
    title: "Sliplet",
    description:
      "An iOS app that reads receipts on-device, lets you split a bill by item, and makes past purchases searchable.",
    repo: "https://github.com/mobyyyc/Sliplet",
  },
  {
    title: "Quantrade",
    description:
      "A private research platform for ranking U.S. equities using prices and SEC filings as they were available at the time.",
    repo: "https://github.com/mobyyyc/Quantrade",
  },
  {
    title: "NeuroWave",
    description:
      "A Windows research tool that turns a recording of one note into an editable synth patch using a PyTorch model.",
    repo: "https://github.com/mobyyyc/NeuroWave",
    url: "https://website-seven-mu-31.vercel.app/",
  },
  {
    title: "Versor PM Agent",
    description:
      "An AI project planner that builds timelines and uses GitHub activity to flag delivery risks for human review.",
    repo: "https://github.com/mobyyyc/pm-agent",
    url: "https://pm-agent-omega.vercel.app/",
  },
];
