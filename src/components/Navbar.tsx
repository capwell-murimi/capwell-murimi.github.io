import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const linkCls = (path: string) =>
    `px-3 py-2 rounded-md text-sm transition-colors ${pathname === path ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`;

  const mobileLinkCls = (path: string) =>
    `block px-3 py-2 rounded-md text-base transition-colors ${pathname === path ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto mt-4 w-[min(1100px,93%)] rounded-xl border bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40 shadow-sm">
        <div className="flex items-center justify-between px-4 py-2">
          <Link to="/" className="font-semibold text-foreground" aria-label="Capwell Murimi Home">
            Capwell<span className="text-primary">.</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-background/80 backdrop-blur rounded-b-xl">
            <div className="px-4 py-3 space-y-1">
              <Link to="/" className={mobileLinkCls('/')} onClick={closeMenu}>
                Profile
              </Link>
              <Link to="/projects" className={mobileLinkCls('/projects')} onClick={closeMenu}>
                Projects
              </Link>
              <Link to="/resume" className={mobileLinkCls('/resume')} onClick={closeMenu}>
                Resume
              </Link>
              <Link to="/blog" className={mobileLinkCls('/blog')} onClick={closeMenu}>
                Write-ups
              </Link>
              <Link to="/contact" className={mobileLinkCls('/contact')} onClick={closeMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;