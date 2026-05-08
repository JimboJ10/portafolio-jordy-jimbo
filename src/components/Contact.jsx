import SectionTitle from "./SectionTitle";
import { personalInfo } from "../data/portfolioData";

const contactItems = [
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    label: "Correo electrónico",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    external: false,
  },
  // {
  //   icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  //   label: "Teléfono",
  //   value: personalInfo.phone,
  //   href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  //   external: false,
  // },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>,
    label: "GitHub",
    value: "JimboJ10",
    href: personalInfo.github,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contacto" subtitle="¿Hablamos?" />

        <div className="max-w-5xl mx-auto">
          <div className="mb-10 animate-on-scroll text-center">
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              ¿Te interesa mi perfil? Estoy abierto a oportunidades como Junior Developer, prácticas profesionales o proyectos de desarrollo.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 lg:gap-6 mb-10 animate-on-scroll">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="focus-ring group surface-panel min-h-44 w-full sm:w-72 p-6 rounded-lg hover:border-border-hover transition-all duration-300 text-center flex flex-col items-center justify-center"
              >
                <div className="mx-auto rounded-md bg-accent/10 flex items-center justify-center text-accent-light mb-4 group-hover:bg-accent group-hover:text-dark-900 transition-all duration-300 w-[52px] h-[52px]">
                  {item.icon}
                </div>
                <p className="text-text-muted text-xs uppercase tracking-wider font-medium mb-1.5">
                  {item.label}
                </p>
                <p className="text-text-primary text-sm font-semibold group-hover:text-accent-light transition-colors duration-300 break-all">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          <div className="animate-on-scroll flex justify-center">
            <a
              href={personalInfo.cvFile}
              download
              className="focus-ring group inline-flex items-center gap-3 px-6 py-3.5 rounded-md bg-accent hover:bg-accent-light text-dark-900 font-bold text-base transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
