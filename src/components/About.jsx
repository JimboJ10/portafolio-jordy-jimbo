import SectionTitle from "./SectionTitle";
import { aboutText, strengths } from "../data/portfolioData";

export default function About() {
  const icons = [
    <svg key="fs" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    <svg key="api" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    <svg key="arch" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
    <svg key="db" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
    <svg key="mob" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    <svg key="team" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  ];

  return (
    <section id="sobre-mi" className="section-band py-20 sm:py-28">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Sobre mí" subtitle="Conóceme un poco más" />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Main text */}
          <div className="lg:col-span-3 animate-on-scroll">
            <div className="relative surface-panel p-6 sm:p-8 rounded-lg">
              <div className="absolute top-0 left-6 sm:left-8 w-16 h-0.5 bg-accent" />
              <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
                {aboutText}
              </p>
            </div>
          </div>

          {/* Strengths */}
          <div className="lg:col-span-2 animate-on-scroll">
            <h3 className="text-lg font-semibold text-text-primary mb-5 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Fortalezas
            </h3>
            <div className="space-y-3">
              {strengths.map((s, i) => (
                <div
                  key={s}
                  className="group flex items-center gap-3 p-3.5 rounded-lg bg-dark-700/70 border border-border hover:border-border-hover hover:bg-dark-600/70 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center text-accent-light group-hover:bg-accent/20 transition-colors duration-300 shrink-0">
                    {icons[i]}
                  </div>
                  <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
