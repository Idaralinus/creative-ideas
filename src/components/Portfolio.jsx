import ProtectedImage from "./ProtectedImage";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";
export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Spaces, furnished with purpose."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            return (
              <article
                key={p.title}
                className="group relative overflow-hidden bg-stone-200"
              >
                <ProtectedImage
                  src={p.image}
                  alt={p.title}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 .bg-gradient-to-t from-black/80 to-transparent p-5 pt-16 text-white">
                  <p className="serif text-2xl">{p.title}</p>
                  <p className="mt-1 text-xs text-stone-200">
                    {p.category} • {p.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-5 text-xs text-stone-500">
          Illustrative stock photography is used in this starter project.
          Replace it before publication.
        </p>
      </div>
    </section>
  );
}
