import { Link, NavLink } from 'react-router';

export default function Header() {
  return (
    <header className="site-header container">
      <Link to="/" className="wordmark" aria-label="Martim, Home">Martim<span aria-hidden="true">.</span></Link>
      <nav aria-label="Main navigation">
        <a href="/#work">Work</a>
        <NavLink to="/projects">Projects</NavLink>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}
