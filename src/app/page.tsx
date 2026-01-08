"use client";

import React from "react";
import Image from "next/image";
import { projects } from "../data/projects";

export default function Home() {
  // Projects are static; render directly from the imported data

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-[900px]">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center sm:text-left">
          Hi, I&apos;m {" "}
          <span className="bg-gradient-to-r from-[#278cff] via-[#b061ff] to-[#ff53a9] bg-clip-text text-transparent">
            Qiyuan Cai
          </span>
        </h1>
        <p className="text-lg text-center sm:text-left max-w-[600px]">
          Aspiring Software Developer with a Passion for Artificial Intelligence
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto md:w-[158px]"
            href="#projects"
          >
            <strong>Projects</strong>
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="#contact"
          >
            <strong>Contact</strong>
          </a>
        </div>

        {/* Short description area before projects */}
        <section id="about" className="w-full mt-2">
          <div className="rounded-lg border border-black/[.04] dark:border-white/[.06] p-4 bg-background/40">
            <p className="text-base text-muted-foreground max-w-[720px]">
              I&apos;m a software developer focusing on web applications and machine learning experiments. I enjoy building small, elegant apps and exploring AI-driven interfaces. Below are a few highlights — click a project to learn more.
            </p>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" className="w-full mt-4">
          <h2 className="text-2xl font-semibold text-left">Projects</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(projects ?? []).map((p) => (
              <article key={p.id} className="rounded-lg border border-black/[.06] dark:border-white/[.08] p-4 bg-background/50 flex flex-col justify-between">
                <h3 className="font-medium text-lg"><b>{p.title}</b></h3>
                {p.subtitle ? (
                  <div className="text-xs text-muted-foreground mt-1">{p.subtitle}</div>
                ) : null}
                {/* language badges */}
                {p.languages && p.languages.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.languages.map((lang) => (
                      <span
                        key={lang}
                        className="language-badge text-xs px-2 py-1 rounded-full border"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                ) : null}

                <p className="text-sm mt-2 text-muted-foreground">{p.description}</p>

                {/* what I learned */}
                {p.learned && p.learned.length > 0 ? (
                  <div className="mt-3 text-sm text-muted-foreground">
                    <strong className="text-sm">What I learned: </strong>
                    <span>{p.learned.join(" • ")}</span>
                  </div>
                ) : null}
                {/* Buttons */}
                <div className="mt-4 flex gap-2">
                  {p.url && (
                    <a
                      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-9 px-3"
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="text-sm">Visit Website</span>
                    </a>
                  )}
                  {p.repo && (
                    <a
                      className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-9 px-3"
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="text-sm">View Source</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact section (also mirrored in footer) */}
        <section id="contact" className="w-full mt-6">
          <h2 className="text-2xl font-semibold text-left">Contact</h2>
          <div className="mt-4 flex flex-col sm:flex-row gap-4 items-start">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto md:w-[158px]"
              href="mailto:aly.moby@gmail.com"
            >
              <strong>Email</strong>
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="https://www.linkedin.com/in/qiyuancai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>LinkedIn</strong>
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="https://github.com/mobyyyc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>GitHub</strong>
            </a>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
