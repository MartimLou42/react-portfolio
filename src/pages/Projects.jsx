import { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import projects from '../data/projects.json';

const technologies = [...new Set(projects.flatMap((project) => project.technologies))];

export default function Projects() {
  const [technology, setTechnology] = useState('All');
  const visible = technology === 'All' ? projects : projects.filter((project) => project.technologies.includes(technology));

  return (
    <>
      <section className="page-heading" aria-labelledby="projects-title">
        <h1 id="projects-title">All projects.</h1>
        <p>Explore the collection, or choose a technology to narrow it down.</p>
      </section>
      <div className="filter-bar">
        <label htmlFor="technology">Technology</label>
        <select id="technology" value={technology} onChange={(event) => setTechnology(event.target.value)}>
          {['All', ...technologies].map((option) => <option key={option}>{option}</option>)}
        </select>
        <p role="status">{visible.length} {visible.length === 1 ? 'project' : 'projects'}</p>
      </div>
      <section className="project-grid" aria-label="Projects">
        {visible.map((project) => <ProjectCard key={project.id} project={project} compact />)}
      </section>
    </>
  );
}
