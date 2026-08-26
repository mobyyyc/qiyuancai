export type Project = {
  id: number;
  title: string;
  subtitle?: string | null;
  description: string;
  languages?: string[];
  highlights?: string[];
  learned?: string[];
  url?: string | null;
  repo?: string | null;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Quantrade",
    subtitle:
      "Next.js / TypeScript / Python / PostgreSQL / Alpaca APIs / SEC EDGAR",
    description:
      "A private quantitative equity research platform for ranking U.S. equities with point-in-time data safeguards and reproducible research workflows.",
    languages: [
      "Next.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "Alpaca APIs",
      "SEC EDGAR",
    ],
    highlights: [
      "Built rankings, watchlists, company search, detail pages, historical price charts, score displays, keyboard search, and daily-update controls.",
      "Designed an end-of-day pipeline for prices, benchmark data, corporate actions, SEC filing facts, dated score snapshots, and data lineage.",
      "Backfilled a fixed current S&P 500 survivor cohort from 2021-2026 for private survivorship-biased Tier-B research.",
      "Generated model-ready labels and trained a research-only elastic-net model on 341k+ examples with purged chronological validation.",
    ],
    learned: [
      "point-in-time data",
      "research governance",
      "data provenance",
      "quantitative ML workflows",
    ],
    url: null,
    repo: "https://github.com/mobyyyc/Quantrade",
  },
  {
    id: 2,
    title: "NeuroWave",
    subtitle: "Python / PyTorch / CNNs / Audio ML / Electron / Windows",
    description:
      "A Windows audio-to-synth research tool that predicts editable synthesizer parameters from clean, one-note WAV clips.",
    languages: ["Python", "PyTorch", "CNNs", "Audio ML", "Electron", "Windows"],
    learned: [
      "CNN inference",
      "synth patch generation",
      "spectrogram comparison",
      "JSON and WAV export",
    ],
    url: "https://website-seven-mu-31.vercel.app/",
    repo: "https://github.com/mobyyyc/NeuroWave",
  },
  {
    id: 3,
    title: "Versor Product Manager AI Agent",
    subtitle: "Next.js / TypeScript / PostgreSQL / LLM APIs / NextAuth / Zod",
    description:
      "A full-stack AI planning platform that generates and refines structured project timelines through contextual LLM workflows.",
    languages: ["Next.js", "TypeScript", "PostgreSQL", "NeonDB", "NextAuth", "Zod"],
    learned: ["LLM workflows", "CRUD APIs", "OAuth 2.0", "validated outputs"],
    url: "https://pm-agent-omega.vercel.app/",
    repo: "https://github.com/mobyyyc/pm-agent",
  },
];
