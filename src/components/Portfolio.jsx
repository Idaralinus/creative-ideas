import { useState } from "react";
import ProtectedImage from "./ProtectedImage";
import ImageLightbox from "./ImageLightbox";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const openLightbox = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedTitle("");
  };

  return (
    <>
      <section id="portfolio" className="py-20 md:py-24">
        <div className="mx-auto w-[92%] max-w-7xl">
          <SectionHeading
            eyebrow="Selected Work"
            title="Spaces, furnished with purpose."
          />

          {/* Portfolio Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => {
              return (
                <article
                  key={p.title}
                  className="group relative overflow-hidden bg-stone-200"
                >
                  {/* Clickable Image */}
                  <button
                    type="button"
                    onClick={() => openLightbox(p.image, p.title)}
                    className="relative block w-full cursor-pointer"
                    aria-label={`View ${p.title} image`}
                  >
                    <ProtectedImage
                      src={p.image}
                      alt={p.title}
                      className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Watermark */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <span className="rotate-[-25deg] text-3xl font-bold tracking-[0.3em] text-white/20">
                        CREATIVE IDEAS
                      </span>
                    </div>

                    {/* View Image Overlay */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/30">
                      <span className="translate-y-3 rounded-full bg-white px-5 py-2 text-sm font-semibold text-stone-800 opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        View Image
                      </span>
                    </div>
                  </button>

                  {/* Project Information */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-16 text-white pointer-events-none">
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
            Furniture and interior furnishing projects by Creative Ideas.
          </p>
        </div>
      </section>

      {/* Full Screen Image Lightbox */}
      {selectedImage && (
        <ImageLightbox
          image={selectedImage}
          alt={selectedTitle}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}
