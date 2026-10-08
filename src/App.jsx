import { useEffect, useRef } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';

export default function App() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    document.title = `${pathname === '/projects' ? 'Projects' : 'Martim'} | Bootcamp portfolio`;
    if (previousPath.current !== pathname) {
      mainRef.current.focus();
      window.scrollTo(0, 0);
      previousPath.current = pathname;
    }
  }, [pathname]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main ref={mainRef} id="main" className="container" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<section className="page-heading"><h1>Page not found.</h1><Link to="/">Back to Home</Link></section>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
