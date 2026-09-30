import ProtectedImage from "./ProtectedImage";
import Button from "./Button";
export default function Hero() {
  return (
    <section id="home" className="bg-[#f5f0e8] py-10 md:py-16">
      <div className="mx-auto grid w-[92%] max-w-7xl items-center gap-10 md:grid-cols-2">
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
        <div className="min-h-[380px] md:min-h-[540px] overflow-hidden">
          <ProtectedImage
            src="/images/3.floatingbed.jpg"
            alt="Creative Ideas bedroom furniture"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
