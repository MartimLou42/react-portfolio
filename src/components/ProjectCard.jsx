export default function ProjectCard({ project, headingLevel = 2, compact = false }) {
  const Heading = `h${headingLevel}`;
  return (
    <article className={`project-card${compact ? ' project-card-compact' : ''}`} aria-labelledby={`title-${project.id}`}>
      <div className="project-preview">
        {project.image ? (
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
        ) : (
          <div className="preview-placeholder">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <rect x="5" y="7" width="30" height="26" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5 14h30M10 10.5h1m3 0h1m3 0h1M16 20l-4 4 4 4m8-8 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>{project.type === 'Developer tool' ? 'Command-line tool' : 'Preview coming soon'}</p>
            <span>{project.type}</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <p className="project-kind">{project.type}{project.badge ? ` · ${project.badge}` : project.groupProject && ' · Group project'}</p>
        <Heading className="project-title" id={`title-${project.id}`}>{project.title}</Heading>
        <p className="project-description">{project.description}</p>
        {project.contribution && <p className="project-contribution">{project.contribution}</p>}
        <ul className="technology-tags" aria-label="Technologies">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-links">
          {project.links.map((link, index) => (
            <a key={link.url} className={index === 0 ? 'button button-primary' : 'source-link'} href={link.url}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      {project.gallery && (
        <details className="project-gallery">
          <summary>View onboarding design</summary>
          <div className="gallery-images">
            {project.gallery.map((item) => (
              <figure key={item.image}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </details>
      )}
    </article>
  );
}
