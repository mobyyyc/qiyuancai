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
    title: "Versor Product Manager AI Agent",
    subtitle: "Next.js / RAG / LLM / Google Auth",
    description:
      "An AI planning agent for PMs and developers. It uses RAG to retrieve company data, generate project plans, and keep each user's work private with Google Auth.",
    languages: ["Next.js", "TypeScript", "RAG", "LLM", "Google Auth"],
    learned: ["RAG architecture", "LLM integration", "Google Auth"],
    url: "https://pm-agent-omega.vercel.app/",
    repo: "https://github.com/mobyyyc/pm-agent",
  },
  {
    id: 2,
    title: "Chord Studio",
    subtitle: "React / Vite / Tone.js / Gemini API",
    description:
      "A music tool for exploring chords, identifying notes, and learning progressions. Includes sound playback and a Chord of the Day page.",
    languages: ["TypeScript", "React", "Vite", "Tone.js", "Gemini API"],
    learned: ["Google AI Studio", "sound implementation", "animations"],
    url: "https://minimalist-chord-studio-847933221896.us-west1.run.app",
    repo: "https://github.com/mobyyyc/chord-studio",
  },
  {
    id: 3,
    title: "Gemini Chatbot",
    subtitle: "Next.js / AI Integration / Backend API",
    description:
      "A backend-focused AI project that connects the Gemini API to a web interface and manages request flow between client and server.",
    languages: ["TypeScript", "Next.js", "Gemini API"],
    learned: ["AI API integration", "client-server flow", "server logic"],
    url: null,
    repo: "https://github.com/mobyyyc/learn_chatbot",
  },
  {
    id: 4,
    title: "Personal Website",
    subtitle: "Next.js / Tailwind CSS / TypeScript / Three.js",
    description:
      "A portfolio site for projects and contact links. Built with the App Router, responsive styling, accessible controls, and an interactive Three.js background.",
    languages: ["TypeScript", "Next.js", "Tailwind CSS", "Three.js"],
    learned: [
      "static site generation",
      "responsive layouts",
      "App Router patterns",
      "Three.js animation",
    ],
    url: null,
    repo: "https://github.com/mobyyyc/qiyuan-webpage",
  },
];
