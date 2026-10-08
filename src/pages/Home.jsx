import { Link } from 'react-router';
import ProjectCard from '../components/ProjectCard.jsx';
import projects from '../data/projects.json';

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div>
          <p className="intro">Hi, I'm Martim.</p>
          <h1 id="home-title">My work,<br />week by week.</h1>
        </div>
        <div className="hero-summary">
          <p>A collection of my web development bootcamp projects, from HTML and CSS to full-stack applications.</p>
          <div className="hero-actions">
            <Link to="/projects" className="button button-primary">Explore projects</Link>
            <a className="source-link" href="https://github.com/MartimLou42">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
      <section className="featured-project" aria-labelledby="featured-title">
        <div className="section-heading">
          <h2 id="featured-title">Where it started</h2>
          <Link to="/projects">Browse projects</Link>
        </div>
        <ProjectCard project={projects[0]} headingLevel={3} />
      </section>
    </>
  );
}
