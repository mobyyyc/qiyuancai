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
          <h1>Qiyuan Cai</h1>
          <p>
            Computer Science, Artificial Intelligence Specialization
            <br />
            @ University of Waterloo.
          </p>
        </header>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          <ul className="entries" role="list">
            {projects.map((project) => (
              <li key={project.title}>
                <div className="entry-heading">
                  <h3>{project.title}</h3>
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
                </div>
                <p>{project.description}</p>
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
          <ul className="entries" role="list">
            {experience.map((item) => (
              <li key={item.organization}>
                <div className="entry-heading">
                  <h3>{item.organization}</h3>
                  <p className="entry-date">{item.date}</p>
                </div>
                <p className="entry-role">{item.role}</p>
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
