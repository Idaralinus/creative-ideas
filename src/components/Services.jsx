import SectionHeading from "./SectionHeading";
const s = [
  [
    "01 / DESIGN",
    "Bespoke Furniture Design",
    "Made-to-measure concepts shaped around your space and requirements.",
  ],
  [
    "02 / MAKE",
    "Manufacturing & Supply",
    "Sofas, beds, dining sets, wardrobes, storage, desks and consoles.",
  ],
  [
    "03 / FURNISH",
    "Interior Furnishing",
    "Coordinated furniture, finishes, soft furnishings and accessories.",
  ],
  [
    "04 / INSTALL",
    "Delivery & Installation",
    "Delivery, placement, assembly and installation coordination.",
  ],
  [
    "05 / COMMERCIAL",
    "Office & Commercial",
    "Furniture solutions for workspaces, reception and hospitality.",
  ],
  [
    "06 / SUPPORT",
    "After-Sales Support",
    "Care guidance and support under agreed service terms.",
  ],
];
export default function Services() {
  return (
    <section id="services" className="bg-[#f5f0e8] py-20 md:py-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Furniture & furnishing services"
          text="Flexible services for homes, offices and commercial projects."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.map(([n, t, d]) => (
            <article
              key={t}
              className="min-h-56 border border-stone-200 bg-[#fffdf9] p-7"
            >
              <span className="text-xs tracking-widest text-[#8b5e3c]">
                {n}
              </span>
              <h3 className="serif mt-6 text-2xl">{t}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
