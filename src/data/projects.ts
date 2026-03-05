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
    subtitle: "Next.js · RAG · LLM · Google Auth",
    description: "An AI agent integrated with LLMs to help PMs and developers create project plans and timelines. Uniquely uses RAG to retrieve company data for customized plans. Features Google Authentication to ensure users only see their own projects. Currently under development.",
    languages: ["Next.js", "TypeScript", "RAG", "LLM", "Google Auth"],
    learned: ["RAG Architecture", "LLM Integration", "Google Auth Integration"],
    url: "https://pm-agent-omega.vercel.app/",
    repo: "https://github.com/mobyyyc/pm-agent",
  },
  {
    id: 2,
    title: "Chord Studio",
    subtitle: "React · Vite · Tone.js · Gemini API",
    description: "A website that helps you play around with chords, identify chords from notes, and learn chord progressions. Features a 'Chord of the Day' showcase page.",
    languages: ["TypeScript", "React", "Vite", "Tone.js", "Gemini API"],
    learned: ["Google AI Studio", "Sound Implementation", "Animations"],
    url: "https://minimalist-chord-studio-847933221896.us-west1.run.app",
    repo: "https://github.com/mobyyyc/chord-studio",
  },
  {
    id: 3,
    title: "Gemini Chatbot",
    subtitle: "Next.js · AI Integration · Backend API",
    description: "A learning project focused on integrating AI capabilities into the backend. Demonstrates how to connect the Google Gemini API and manage communication between the frontend and backend.",
    languages: ["TypeScript", "Next.js", "Gemini API"],
    learned: ["AI API Integration", "Frontend-Backend Communication", "Server-side Logic"],
    url: null,
    repo: "https://github.com/mobyyyc/learn_chatbot",
  },
  {
    id: 4,
    title: "Personal Website",
    subtitle: "Next.js · Tailwind CSS · TypeScript · Three.js",
    description: "Personal website showcasing projects and contact information. Built with Next.js (App Router), Tailwind CSS, and Three.js with a focus on fast static generation, responsive layouts, accessible components, and a theme toggle.",
    languages: ["TypeScript", "Next.js", "Tailwind CSS", "Three.js"],
    learned: [
      "Static site generation",
      "Tailwind responsive layouts",
      "App Router patterns",
      "Three.js background animation",
    ],
    url: null,
    repo: "https://github.com/mobyyyc/qiyuan-webpage",
  },
];
