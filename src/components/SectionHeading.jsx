export default function SectionHeading({ eyebrow, title, id }) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && <p className="mb-2 text-sm font-medium text-rose">{eyebrow}</p>}
      <h2 id={id} className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
      <span aria-hidden="true" className="mx-auto mt-4 block h-1 w-12 rounded-full bg-blush" />
    </div>
  );
}
