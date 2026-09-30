export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mb-10 md:flex md:items-end md:justify-between md:gap-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8b5e3c]">
          {eyebrow}
        </p>
        <h2 className="serif mt-2 text-4xl md:text-5xl">{title}</h2>
      </div>
      {text && <p className="mt-4 max-w-lg text-stone-600 md:mt-0">{text}</p>}
    </div>
  );
}
