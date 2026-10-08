import ProjectCard from '../components/ProjectCard.jsx';
import projects from '../data/projects.json';

export default function Home() {
  const selected = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);

  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <h1 id="home-title">Hi, I'm Martim.<br />Here's some of my selected work.</h1>
      </section>
      <section id="work" tabIndex={-1} className="work-section" aria-label="Featured projects">
        <div className="selected-projects">
          {selected.map((project) => <ProjectCard key={project.id} project={project} headingLevel={2} />)}
        </div>
      </section>
      <section className="work-section" aria-labelledby="more-title">
        <div className="section-heading">
          <div>
            <h2 id="more-title">More work</h2>
          </div>
        </div>
        <div className="project-grid">
          {more.map((project) => <ProjectCard key={project.id} project={project} headingLevel={3} compact />)}
        </div>
      </section>
      <section id="contact" tabIndex={-1} className="contact-section" aria-labelledby="contact-title">
        <h2 id="contact-title">Let's talk.</h2>
        <div>
          <p>Interested in my work or a potential collaboration? Get in touch.</p>
          <a className="button button-primary" href="mailto:martimcolour@gmail.com">Email me</a>
          <a className="source-link" href="https://github.com/MartimLou42">Find me on GitHub</a>
        </div>
      </section>
    </>
  );
}
