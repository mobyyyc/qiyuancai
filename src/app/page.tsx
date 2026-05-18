"use client";

import React from "react";
import { projects } from "../data/projects";

const focusItems = [
  "AI product systems",
  "Readable interfaces",
  "Full-stack prototypes",
];

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero-section reveal">
        <div className="hero-rule" />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio / 2026</p>
            <h1>Qiyuan Cai</h1>
            <p className="hero-line">
              Software developer building AI tools, web systems, and polished
              product experiences.
            </p>
          </div>

          <aside className="hero-panel" aria-label="Current focus">
            <p>Current focus</p>
            <ul>
              {focusItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Projects
          </a>
          <a className="button button-secondary" href="#contact">
            Contact
          </a>
        </div>
      </section>

      <section id="about" className="content-band reveal reveal-delay-1">
        <p className="section-label">About</p>
        <div className="section-grid">
          <h2>I make technical ideas feel usable.</h2>
          <p>
            I work across frontend, backend, and AI integration. My projects
            explore planning agents, music tools, chat systems, and portfolio
            interfaces with smooth motion and clear structure.
          </p>
        </div>
      </section>

      <section id="projects" className="projects-section reveal reveal-delay-2">
        <div className="section-heading">
          <p className="section-label">Selected work</p>
          <h2>Projects</h2>
        </div>

        <div className="project-list">
          {(projects ?? []).map((project, index) => (
            <article key={project.id} className="project-item">
              <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="project-body">
                <div>
                  <h3>{project.title}</h3>
                  {project.subtitle ? <p className="project-subtitle">{project.subtitle}</p> : null}
                </div>

                <p className="project-description">{project.description}</p>

                {project.languages && project.languages.length > 0 ? (
                  <div className="language-row">
                    {project.languages.map((language) => (
                      <span key={language}>{language}</span>
                    ))}
                  </div>
                ) : null}

                {project.learned && project.learned.length > 0 ? (
                  <p className="learned-line">
                    Learned: {project.learned.join(", ")}
                  </p>
                ) : null}

                <div className="project-links">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noreferrer">
                      Visit
                    </a>
                  ) : null}
                  {project.repo ? (
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      Source
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section reveal reveal-delay-3">
        <p className="section-label">Contact</p>
        <div className="contact-grid">
          <h2>Let&apos;s build something precise.</h2>
          <div className="contact-links">
            <a href="mailto:aly.moby@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/qiyuancai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mobyyyc"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
