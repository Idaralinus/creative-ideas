import { useState } from "react";
import ProtectedImage from "./ProtectedImage";
import ImageLightbox from "./ImageLightbox";
import Button from "./Button";

export default function Hero() {
  const [selectedImage, setSelectedImage] = useState(null);

  const heroImage = "/images/optimized/3.floatingbed.webp";

  return (
    <>
      <section id="home" className="bg-[#f5f0e8] py-10 md:py-16">
        <div className="mx-auto grid w-[92%] max-w-7xl items-center gap-10 md:grid-cols-2">
          {/* Left Content */}
          <div className="py-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#8b5e3c]">
              Thoughtful spaces. Beautifully made furniture.
            </p>

            <h1 className="serif max-w-3xl text-5xl leading-[1.05] md:text-7xl">
              Furniture made for the way you live.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
              Creative Ideas brings together bespoke furniture and coordinated
              interior furnishing to make spaces functional, comfortable, and
              distinctly yours.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#portfolio">Explore Our Work</Button>

              <Button href="#contact" light>
                Request a Consultation
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="group relative min-h-[380px] cursor-pointer overflow-hidden rounded-2xl md:min-h-[540px]"
            onClick={() => setSelectedImage(heroImage)}
          >
            <ProtectedImage
              src={heroImage}
              alt="Creative Ideas bedroom furniture"
              className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
            />

            {/* Hover Label */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/20">
              <span className="translate-y-3 rounded-full bg-white px-5 py-2 text-sm font-semibold text-stone-800 opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                View Image
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Image */}
      {selectedImage && (
        <ImageLightbox
          image={selectedImage}
          alt="Creative Ideas bedroom furniture"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
