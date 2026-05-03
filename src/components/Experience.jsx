import SectionTitle from "./SectionTitle";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experiencia"
          subtitle="Mi trayectoria profesional"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-px bg-border" />

          {experience.map((exp, idx) => (
            <div key={idx} className="relative flex gap-6 sm:gap-8 animate-on-scroll">
              {/* Timeline dot */}
              <div className="hidden sm:flex shrink-0 w-16 items-start justify-center pt-8">
                <div className="w-4 h-4 rounded-full bg-accent border-4 border-dark-900 shadow-lg shadow-black/25" />
              </div>

              {/* Card */}
              <div className="flex-1 mb-8">
                <div className="group surface-panel p-6 sm:p-8 rounded-lg hover:border-border-hover transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-light transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-accent-warm font-semibold text-sm mt-1.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-accent/10 text-accent-light border border-accent/25 text-sm font-medium">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-text-muted text-sm">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-warm shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
