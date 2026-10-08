export default function ProjectCard({ project, headingLevel = 2 }) {
  const Heading = `h${headingLevel}`;
  return (
    <article className="project-card" aria-labelledby={`title-${project.id}`}>
      <div className="project-preview">
        {project.image ? (
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
        ) : (
          <div className="preview-placeholder">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <rect x="5" y="7" width="30" height="26" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5 14h30M10 10.5h1m3 0h1m3 0h1M16 20l-4 4 4 4m8-8 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>Project screenshot coming soon</p>
            <span>Preview placeholder</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <p className="project-week">Week {project.week}{project.groupProject && ' · Group project'}</p>
        <Heading className="project-title" id={`title-${project.id}`}>{project.title}</Heading>
        <p className="project-description">{project.description}</p>
        <ul className="technology-tags" aria-label="Technologies">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-links">
          {project.demoUrl && <a className="button button-primary" href={project.demoUrl}>View live project</a>}
          <a className="source-link" href={project.repositoryUrl}>Source code <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
  );
}
