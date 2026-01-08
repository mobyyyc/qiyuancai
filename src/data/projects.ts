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
    title: "Personal Website",
    subtitle: "Next.js · Tailwind CSS · TypeScript",
  description: "Personal website showcasing projects and contact information. Built with Next.js (App Router) and Tailwind CSS with a focus on fast static generation, responsive layouts, accessible components, and a theme toggle.",
    languages: ["TypeScript", "Next.js", "Tailwind CSS"],
    learned: [
      "Static site generation",
      "Tailwind responsive layouts",
      "App Router patterns",
    ],
    url: null,
    repo: "https://github.com/mobyyyc/qiyuan-webpage",
  },
  {
    id: 2,
    title: "Gemini Chatbot (demo)",
    subtitle: "Next.js · Google Gemini API · Server API",
  description: "A demo chatbot focused on implementing Google Gemini and calling it from a server-side API proxy. This is for personal experimentation with the Gemini API and server-side testing in Next.js.",
    languages: ["TypeScript", "Next.js", "Tailwind CSS"],
    learned: ["Integrating the Gemini API", "Server-side API routing", "Safe env var usage"],
    url: null,
    repo: "https://github.com/mobyyyc/gemini-chatbot-demo",
  },
  {
    id: 3,
    title: "Chord Studio",
    subtitle: "React · Vite · Tone.js · Gemini API",
    description: "A website that helps you play around with chords, identify chords from notes, and learn chord progressions. Features a 'Chord of the Day' showcase page.",
    languages: ["TypeScript", "React", "Vite", "Tone.js", "Gemini API"],
    learned: ["Google AI Studio", "Sound Implementation", "Animations"],
    url: "https://minimalist-chord-studio-847933221896.us-west1.run.app",
    repo: "https://github.com/mobyyyc/chord-studio",
  },
];
