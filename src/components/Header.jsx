import { Link, NavLink } from 'react-router';

export default function Header() {
  return (
    <header className="site-header container">
      <Link to="/" className="wordmark">Martim<span aria-hidden="true">.</span></Link>
      <nav aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </header>
  );
}
