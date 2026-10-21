import { useState, useEffect } from "react";
import { Menu, X, Star, Moon, Sun } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "About", href: "#about", sectionId: "about", isSection: true },
  { label: "Featured", href: "#featured-projects", sectionId: "featured-projects", isSection: true },
  { label: "Profiles", href: "#profiles", sectionId: "profiles", isSection: true },
  { label: "Curiosities", href: "/curiosities", isSection: false, hasStar: true },
  { label: "Projects", href: "/projects", isSection: false },
  { label: "Experience", href: "#experience", sectionId: "experience", isSection: true },
  { label: "Skills", href: "#skills", sectionId: "skills", isSection: true },
  { label: "Education", href: "#education", sectionId: "education", isSection: true },
  { label: "Contact", href: "#contact", sectionId: "contact", isSection: true }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsOpen(false);
    if (link.isSection && link.sectionId) {
      if (location.pathname !== "/") {
        navigate("/" + link.href);
      } else {
        document.getElementById(link.sectionId)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="px-4 md:px-8 lg:px-12 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground">Aatif Ahmad</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1.5 rounded-full border border-border bg-card px-2 py-1.5">
            {navLinks.map((link) =>
              link.isSection ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="rounded-full px-3 py-1.5 text-sm font-semibold text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {link.label}
                  {"hasStar" in link && link.hasStar && <Star className="h-3 w-3 text-primary" fill="currentColor" />}
                </Link>
              )
            )}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-accent transition-colors"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-accent transition-colors"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-3 rounded-lg border border-border bg-card p-2">
            {navLinks.map((link) =>
              link.isSection ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="block w-full rounded-md px-3 py-2 text-left text-sm font-semibold text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  <span className="flex items-center gap-1">
                    {link.label}
                    {"hasStar" in link && link.hasStar && <Star className="h-3 w-3 text-primary" fill="currentColor" />}
                  </span>
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
