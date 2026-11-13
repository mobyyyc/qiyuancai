import ScrollRuler from "../components/ScrollRuler";
import { experience } from "../data/experience";
import { projects } from "../data/projects";

const webringDirectory = "https://cs.uwatering.com/#qiyuancai.vercel.app";

export default function Home() {
  return (
    <div className="site">
      <ScrollRuler />
      <main>
        <header className="intro" id="intro">
          <div>
            <h1>Qiyuan Cai</h1>
            <p className="intro-study">
              Computer Science, Artificial Intelligence Specialization
              <br />
              @ University of Waterloo.
            </p>
          </div>
          <div className="intro-project">
            <p className="intro-project-label">Currently building</p>
            <a href="#sliplet">Sliplet <span aria-hidden="true">↗</span></a>
            <p>An iOS app for reading receipts on-device and splitting bills by item.</p>
          </div>
        </header>

        <section className="section about" id="about" aria-labelledby="about-title">
          <h2 id="about-title">About</h2>
          <div className="about-content">
            <p>
              I’m interested in machine learning and building better tools for
              people. I also enjoy making music.
            </p>
            <figure className="about-quote">
              <blockquote cite="https://www.dandad.org/work/d-ad-awards-archive/apple-wonderful-tools">
                <p>“Give people wonderful tools, and they’ll do wonderful things.”</p>
              </blockquote>
              <figcaption>
                <a href="https://www.dandad.org/work/d-ad-awards-archive/apple-wonderful-tools">
                  Apple, <cite>Wonderful Tools</cite>
                </a>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section projects" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          <ul className="entries project-list" role="list">
            {projects.map((project) => (
              <li key={project.title} id={project.title === "Sliplet" ? "sliplet" : undefined}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="links entry-links">
                  <a href={project.repo} aria-label={`${project.title} on GitHub`}>
                    GitHub
                  </a>
                  {project.url ? (
                    <a href={project.url} aria-label={`${project.title} website`}>
                      Website
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <h2 id="experience-title">Experience</h2>
          <ul className="entries experience-list" role="list">
            {experience.map((item) => (
              <li key={item.organization}>
                <h3>{item.role}</h3>
                <div className="experience-meta">
                  <p className="entry-organization">{item.organization}</p>
                  <p className="entry-date">{item.date}</p>
                </div>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="section" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-row">
            <div className="links contact-links">
              <a href="mailto:qiyuan.cai@uwaterloo.ca">Email</a>
              <a href="https://www.linkedin.com/in/qiyuancai/">LinkedIn</a>
              <a href="https://github.com/mobyyyc">GitHub</a>
            </div>
            <nav className="webring" aria-label="Waterloo CS Webring">
              <a href={`${webringDirectory}?nav=prev`} aria-label="Previous Webring site">←</a>
              <a href={webringDirectory} aria-label="Waterloo CS Webring directory">
                <span className="webring-lion" aria-hidden="true" />
              </a>
              <a href={`${webringDirectory}?nav=next`} aria-label="Next Webring site">→</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
