import { useState, useEffect } from "react";
import { personalInfo, navLinks } from "../data/portfolioData";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detectar sección activa
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-900/95 backdrop-blur-xl shadow-lg shadow-black/25 border-b border-border"
          : "bg-dark-900/45 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus-ring rounded-md"
            onClick={handleNavClick}
          >
            <span className="w-9 h-9 rounded-md bg-dark-700 flex items-center justify-center text-accent-light font-bold text-sm border border-border group-hover:border-accent/45 transition-all duration-300">
              JJ
            </span>
            <span className="text-base sm:text-lg font-bold text-text-primary group-hover:text-accent-light transition-colors duration-300">
              {personalInfo.shortName}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 focus-ring ${
                  activeSection === link.href.replace("#", "")
                    ? "text-accent-light bg-dark-700"
                    : "text-text-secondary hover:text-text-primary hover:bg-dark-700/70"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 rounded-md bg-dark-700/80 border border-border flex items-center justify-center hover:border-accent/40 transition-colors duration-300 focus-ring"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-text-primary rounded transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-text-primary rounded transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-text-primary rounded transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] pb-4" : "max-h-0"
          }`}
        >
          <div className="pt-3 pb-3 space-y-1 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`block px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-300 focus-ring ${
                  activeSection === link.href.replace("#", "")
                    ? "text-accent-light bg-dark-700"
                    : "text-text-secondary hover:text-text-primary hover:bg-dark-700/70"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
