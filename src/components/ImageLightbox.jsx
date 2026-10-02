import { useEffect } from "react";

export default function ImageLightbox({ image, alt, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const preventAction = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      onContextMenu={preventAction}
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white backdrop-blur transition hover:bg-white/20"
        aria-label="Close image"
      >
        ×
      </button>

      {/* Image Container */}
      <div
        className="relative max-h-[92vh] max-w-[95vw]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Large Image */}
        <img
          src={image}
          alt={alt}
          draggable="false"
          onContextMenu={preventAction}
          onDragStart={preventAction}
          className="max-h-[88vh] max-w-[92vw] select-none object-contain"
        />

        {/* Large Watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="rotate-[-25deg] whitespace-nowrap text-5xl font-bold tracking-[0.35em] text-white/20 md:text-7xl">
            CREATIVE IDEAS
          </span>
        </div>

        {/* Small Watermark */}
        <div className="pointer-events-none absolute bottom-4 right-4 rounded bg-black/30 px-3 py-1 text-xs font-semibold tracking-widest text-white/60">
          CREATIVE IDEAS
        </div>
      </div>
    </div>
  );
}
