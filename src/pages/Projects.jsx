import ProjectCard from '../components/ProjectCard.jsx';
import projects from '../data/projects.json';

export default function Projects() {
  return (
    <>
      <section className="page-heading" aria-labelledby="projects-title">
        <h1 id="projects-title">Projects.</h1>
        <p>Weekly challenges, with the code and live projects to explore.</p>
      </section>
      <section className="project-list" aria-label="Bootcamp projects">
        <p className="preview-note">First look: Week 1. The remaining seven projects will follow.</p>
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </section>
    </>
  );
}
