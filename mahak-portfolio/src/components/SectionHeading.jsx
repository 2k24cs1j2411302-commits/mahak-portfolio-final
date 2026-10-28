export default function SectionHeading({ eyebrow, title, id }) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-500">{eyebrow}</p>}
      <h2 id={id} className="font-display text-3xl font-bold sm:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
    </div>
  );
}
