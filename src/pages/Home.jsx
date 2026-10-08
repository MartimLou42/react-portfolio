import { Link } from 'react-router';
import ProjectCard from '../components/ProjectCard.jsx';
import projects from '../data/projects.json';

export default function Home() {
  const selected = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);

  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div>
          <p className="intro">Hi, I'm Martim.</p>
          <h1 id="home-title">Selected work.</h1>
        </div>
        <div className="hero-summary">
          <p>Websites, applications, and creative projects. A collection of work from my bootcamp and beyond.</p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">See my work</a>
            <a className="source-link" href="#contact">Get in touch</a>
          </div>
        </div>
      </section>
      <section id="work" tabIndex={-1} className="work-section" aria-labelledby="selected-title">
        <div className="section-heading">
          <div>
            <h2 id="selected-title">A closer look</h2>
            <p>A few projects to start with.</p>
          </div>
          <Link to="/projects">Browse all projects</Link>
        </div>
        <div className="selected-projects">
          {selected.map((project) => <ProjectCard key={project.id} project={project} headingLevel={3} />)}
        </div>
      </section>
      <section className="work-section" aria-labelledby="more-title">
        <div className="section-heading">
          <div>
            <h2 id="more-title">More work</h2>
            <p>Smaller applications, experiments, and earlier projects.</p>
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
