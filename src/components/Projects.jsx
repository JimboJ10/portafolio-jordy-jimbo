import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="proyectos" className="section-band py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Proyectos"
          subtitle="Mis proyectos full-stack destacados"
        />

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [showDetails, setShowDetails] = useState(false);

  const accents = [
    { bar: "bg-accent", bg: "bg-accent/10", text: "text-accent-light", badge: "border-accent/25" },
    { bar: "bg-accent-clay", bg: "bg-accent-clay/10", text: "text-orange-200", badge: "border-accent-clay/30" },
  ];
  const accent = accents[index % accents.length];

  return (
    <div className="group animate-on-scroll">
      <div className="relative h-full surface-panel p-6 sm:p-7 rounded-lg hover:border-border-hover transition-all duration-300 overflow-hidden flex flex-col">
        {/* Top accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-0.5 ${accent.bar} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

        {/* Project type badge */}
        <div className="flex items-center justify-between mb-5">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold ${accent.bg} ${accent.text} ${accent.badge} border`}>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            {project.type}
          </span>
          <div className="w-10 h-10 rounded-md bg-dark-700 flex items-center justify-center text-text-muted group-hover:text-accent-light group-hover:bg-dark-600 transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-light transition-colors duration-300 mb-3">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-dark-800 text-text-secondary border border-border hover:border-border-hover hover:text-accent-light transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Details toggle */}
        {showDetails && (
          <div className="mb-6 p-5 rounded-lg bg-dark-800/80 border border-border">
            <h4 className="text-sm font-bold text-text-primary mb-3">Funcionalidades destacadas:</h4>
            <ul className="space-y-2.5">
              {project.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-warm shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Buttons — push to bottom */}
        <div className="flex flex-wrap gap-3 mt-auto pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent hover:bg-accent-light text-dark-900 text-sm font-bold transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Ver en GitHub
          </a>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-dark-700 border border-border hover:border-border-hover text-text-secondary hover:text-text-primary text-sm font-semibold transition-all duration-300 cursor-pointer"
          >
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${showDetails ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {showDetails ? "Ocultar" : "Detalles"}
          </button>
        </div>
      </div>
    </div>
  );
}
