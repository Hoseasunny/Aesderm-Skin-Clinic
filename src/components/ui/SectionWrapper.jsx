export default function SectionWrapper({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={`section-padding scroll-mt-24 py-20 lg:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
