import {
  site,
  summary,
  results,
  resultsNote,
  experience,
  skills,
  competencies,
  education,
  projects,
} from "@/data/site";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";
import BackToTop from "@/components/BackToTop";

function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section-title">
        {title}
      </h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <ScrollProgress />

      <header className="topbar">
        <a className="brand" href="#top">
          Himani Nihalani
        </a>
        <nav aria-label="Primary">
          <a href="#results">Results</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          {projects.length > 0 && <a href="#projects">Projects</a>}
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <div id="top" className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <h1 className="hero-name">
            <span>Himani</span>
            <span>Nihalani</span>
          </h1>
          <p className="hero-intro">{site.role}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={site.links.resume} download>
              Download resume
            </a>
            <a className="btn" href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <Section id="about" title="About">
          <p className="lead">{summary}</p>
        </Section>

        <Section id="results" title="Hackathon results">
          <ol className="board">
            {results.map((r) => (
              <li key={r.event} className="board-row">
                <span className="place">{r.place}</span>
                <span className="board-text">
                  <strong>{r.event}</strong>
                  <span>{r.detail}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="muted note">{resultsNote}</p>
        </Section>

        <Section id="experience" title="Experience">
          <div className="exp-rail">
            {experience.map((e, i) => (
              <Reveal key={e.title} as="article" className="exp-item" delay={i * 90}>
                <div className="exp-marker">
                  <span className="exp-dot" />
                  {i !== experience.length - 1 && <span className="exp-line" />}
                </div>
                <div className="exp-card">
                  <p className="exp-period">{e.period}</p>
                  <h3 className="job-title">{e.title}</h3>
                  <p className="job-org">{e.org}</p>
                  <ul className="points">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {projects.length > 0 && (
          <Section id="projects" title="Projects">
            <div className="projects">
              {projects.map((p, i) => (
                <Reveal key={p.name} as="article" className="project-card" delay={i * 110}>
                  <div className="project-top">
                    <h3 className="job-title">{p.name}</h3>
                    {p.tech && (
                      <ul className="tech-pills">
                        {p.tech.map((t) => (
                          <li key={t} className="tech-pill">
                            {t}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <p>{p.description}</p>
                  {(p.href || p.repo) && (
                    <p className="project-links">
                      {p.href && (
                        <a href={p.href} target="_blank" rel="noreferrer">
                          Live site
                        </a>
                      )}
                      {p.repo && (
                        <a href={p.repo} target="_blank" rel="noreferrer">
                          Source code
                        </a>
                      )}
                    </p>
                  )}
                </Reveal>
              ))}
            </div>
          </Section>
        )}

        <Section id="skills" title="Skills">
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.label} className="skill-row">
                <dt>{s.label}</dt>
                <dd>{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
          <p className="muted competencies">{competencies.join(" · ")}</p>
        </Section>

        <Section id="education" title="Education">
          <div className="edu">
            <div>
              <h3 className="job-title">{education.degree}</h3>
              <p className="job-org">{education.school}</p>
            </div>
            <p className="job-period">{education.period}</p>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="lead">
            Want to collaborate or talk about an opportunity? Reach out on LinkedIn or take a look at my code on GitHub.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={site.links.linkedin} target="_blank" rel="noreferrer">
              Message on LinkedIn
            </a>
            <a className="btn" href={site.links.github} target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <a href="#top" className="footer-top-link">Back to top</a>
      </footer>

      <BackToTop />
    </>
  );
}
