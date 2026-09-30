const steps = [
  [
    "STEP 01",
    "Consultation & Brief",
    "Discuss needs, style, budget, dimensions and timeline.",
  ],
  [
    "STEP 02",
    "Measure & Design",
    "Confirm dimensions and develop a proposal for approval.",
  ],
  [
    "STEP 03",
    "Quotation & Approval",
    "Agree scope, materials, price, lead time and exclusions.",
  ],
  [
    "STEP 04",
    "Make & Check",
    "Proceed with approved production and check workmanship.",
  ],
  [
    "STEP 05",
    "Deliver & Install",
    "Coordinate delivery, assembly and placement.",
  ],
  [
    "STEP 06",
    "Handover & Support",
    "Review completed work and provide care guidance.",
  ],
];
export default function Process() {
  return (
    <section id="process" className="bg-[#28221d] py-20 text-white md:py-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c7a17d]">
          How We Work
        </p>
        <h2 className="serif mt-2 max-w-2xl text-4xl md:text-5xl">
          From first conversation to final placement.
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(([n, t, d]) => (
            <div key={t} className="border-t border-stone-600 pt-5">
              <span className="text-xs tracking-widest text-[#c7a17d]">
                {n}
              </span>
              <h3 className="serif mt-3 text-2xl">{t}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-300">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
