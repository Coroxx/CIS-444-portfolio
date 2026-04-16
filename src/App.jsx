import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';

function App() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/">
          <span className="brand-mark">EF</span>
          <span>Elliot Feuillade</span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href={`${basePath}#about`}>About</a>
          <a href={`${basePath}#projects`}>Projects</a>
          <a href={`${basePath}#experience`}>Experience</a>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
