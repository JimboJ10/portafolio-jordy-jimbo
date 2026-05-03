import { personalInfo } from "../data/portfolioData";

const highlights = [
  { label: "Ubicación", value: personalInfo.location },
  { label: "Enfoque", value: "Web, backend y móvil" },
  { label: "Stack", value: "Angular · Node · SQL/NoSQL" },
];

const quickStack = ["Angular", "Ionic", "Node.js", "Express", "PostgreSQL", "MongoDB"];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[88svh] flex items-center pt-24 pb-14 sm:pt-28 sm:pb-18 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div className="max-w-3xl">
            <div className="hero-fade hero-fade-1 inline-flex items-center gap-3 mb-7 text-sm text-text-secondary">
              <span className="h-px w-10 bg-accent" />
              <span>Disponible para oportunidades junior y prácticas</span>
            </div>

            <h1 className="hero-fade hero-fade-2 text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-normal mb-6">
              {personalInfo.shortName}
              <span className="block gradient-text mt-2">
                Desarrollador full-stack junior.
              </span>
            </h1>

            <p className="hero-fade hero-fade-3 text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed mb-4">
              {personalInfo.tagline}
            </p>

            <p className="hero-fade hero-fade-4 text-base sm:text-lg text-text-muted max-w-2xl mb-9">
              {personalInfo.subtitle}
            </p>

            <div className="hero-fade hero-fade-5 flex flex-col sm:flex-row gap-3 sm:items-center">
              <a
                href="#proyectos"
                className="focus-ring inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-md bg-accent text-dark-900 font-bold text-sm sm:text-base transition-all duration-300 hover:bg-accent-light"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h10" />
                </svg>
                Ver proyectos
              </a>

              <a
                href="#contacto"
                className="focus-ring inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-md bg-dark-700 border border-border text-text-primary font-semibold text-sm sm:text-base transition-all duration-300 hover:border-accent/45 hover:bg-dark-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.5l-8.1 5.2a1.7 1.7 0 01-1.8 0L3 8.5M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contactarme
              </a>
            </div>
          </div>

          <aside className="hero-fade hero-fade-6 surface-panel rounded-lg p-5 sm:p-6 lg:p-7">
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-border">
              <div>
                <p className="eyebrow mb-2">Perfil</p>
                <h2 className="text-2xl font-bold text-text-primary">
                  {personalInfo.title}
                </h2>
              </div>
              <span className="shrink-0 w-12 h-12 rounded-md bg-dark-700 border border-border flex items-center justify-center text-accent-light font-extrabold">
                JJ
              </span>
            </div>

            <div className="grid gap-3 py-5">
              {highlights.map((item) => (
                <div key={item.label} className="grid grid-cols-[6rem_1fr] gap-3 text-sm">
                  <span className="text-text-muted">{item.label}</span>
                  <span className="text-text-secondary font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-5">
              <p className="text-sm font-semibold text-text-primary mb-3">Tecnologías recientes</p>
              <div className="flex flex-wrap gap-2">
                {quickStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-dark-800 px-3 py-1.5 text-sm text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-md border border-border bg-dark-700 px-4 py-3 text-sm font-semibold text-text-primary transition-colors duration-300 hover:border-accent/45"
              >
                GitHub
              </a>
              <a
                href={personalInfo.cvFile}
                download
                className="focus-ring rounded-md border border-accent/35 bg-accent/10 px-4 py-3 text-sm font-semibold text-accent-light transition-colors duration-300 hover:bg-accent/20"
              >
                Descargar CV
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
