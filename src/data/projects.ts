export type Project = {
  id: number;
  title: string;
  subtitle?: string | null;
  description: string;
  languages?: string[];
  learned?: string[];
  url?: string | null;
  repo?: string | null;
};

export const projects: Project[] = [
  {
    id: 1,
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
    id: 2,
    title: "Versor Product Manager AI Agent",
    subtitle: "Next.js / TypeScript / PostgreSQL / LLM APIs / NextAuth / Zod",
    description:
      "A full-stack AI planning platform that generates and refines structured project timelines through contextual LLM workflows.",
    languages: ["Next.js", "TypeScript", "PostgreSQL", "NeonDB", "NextAuth", "Zod"],
    learned: ["LLM workflows", "CRUD APIs", "OAuth 2.0", "validated outputs"],
    url: "https://pm-agent-omega.vercel.app/",
    repo: "https://github.com/mobyyyc/pm-agent",
  },
  {
    id: 3,
    title: "Chord Studio",
    subtitle: "TypeScript / Vite / LLM APIs / Cloud Deployment",
    description:
      "A responsive chord-detection app with music-aware LLM explanations and a playful learning flow for progressions.",
    languages: ["TypeScript", "Vite", "LLM APIs", "Cloud Deployment"],
    learned: ["music-aware prompts", "responsive UI", "deployment"],
    url: "https://minimalist-chord-studio-847933221896.us-west1.run.app",
    repo: "https://github.com/mobyyyc/chord-studio",
  },
  {
    id: 4,
    title: "Gemini Chatbot",
    subtitle: "Next.js / AI Integration / Backend API",
    description:
      "A backend-focused AI project that connects the Gemini API to a web interface and manages request flow between client and server.",
    languages: ["TypeScript", "Next.js", "Gemini API"],
    learned: ["AI API integration", "client-server flow", "server logic"],
    url: null,
    repo: "https://github.com/mobyyyc/learn_chatbot",
  },
];
