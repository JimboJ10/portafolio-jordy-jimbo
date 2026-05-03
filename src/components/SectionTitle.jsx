export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10 sm:mb-14 animate-on-scroll">
      <p className="eyebrow mb-3">Portafolio</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3 tracking-normal">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-base sm:text-lg max-w-2xl">{subtitle}</p>
      )}
      <div className="accent-rule mt-5" />
    </div>
  );
}
