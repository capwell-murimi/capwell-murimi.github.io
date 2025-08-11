import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { pathname } = useLocation();
  const linkCls = (path: string) =>
    `px-3 py-2 rounded-md text-sm ${pathname === path ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto mt-4 w-[min(1100px,93%)] rounded-xl border bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40 shadow-sm">
        <div className="flex items-center justify-between px-4 py-2">
          <Link to="/" className="font-semibold text-foreground" aria-label="Capwell Murimi Home">
            Capwell<span className="text-primary">.</span>
          </Link>
          <div className="flex items-center gap-1">
            <Link to="/" className={linkCls('/')}>
              Profile
            </Link>
            <Link to="/projects" className={linkCls('/projects')}>
              Projects
            </Link>
            <Link to="/resume" className={linkCls('/resume')}>
              Resume
            </Link>
            <Link to="/blog" className={linkCls('/blog')}>
              Write-ups
            </Link>
            <Link to="/contact" className={linkCls('/contact')}>
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
