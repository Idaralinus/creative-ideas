import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionHeading from "./components/SectionHeading";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { useEffect, useState } from "react";

const testimonials = [
  {
    location: "Lagos, Nigeria",
    client: "Pastor & Mrs. Peter",
    text: "Creative Ideas understood exactly what we wanted. The furniture added a beautiful and comfortable feel to our home, and the finishing was excellent. Communication throughout the project was also very good.",
  },
  {
    location: "Abuja, Nigeria",
    client: "Abdul Yusuf",
    text: "What impressed us most was the attention to detail. The team listened to our requirements and delivered furniture that fitted perfectly into the space. The entire experience was smooth and professional.",
  },
  {
    location: "Akwa Ibom, Nigeria",
    client: "Blessing Lawrence",
    text: "We were very pleased with the quality and craftsmanship. Creative Ideas transformed the space into something warm, stylish, and functional. They paid attention to the little details that made a big difference.",
  },
];
export default function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentTestimonial(
      (currentTestimonial - 1 + testimonials.length) % testimonials.length,
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-20 md:py-24">
          <div className="mx-auto grid w-[92%] max-w-7xl gap-10 md:grid-cols-[.8fr_1.2fr]">
            <SectionHeading
              eyebrow="About Creative Ideas"
              title="We turn spaces into places to belong."
            />
            <div>
              <p className="text-lg leading-8 text-stone-600">
                We create furniture and furnishing solutions that bring comfort,
                function, and character to homes, offices, hospitality spaces,
                and selected commercial environments.
              </p>
              <p className="mt-5 leading-7 text-stone-600">
                From a single custom piece to a coordinated room furnishing, we
                listen to each client's needs and develop solutions around the
                space, intended use, preferred style, and budget.
              </p>
            </div>
          </div>
        </section>
        <Services />
        <Portfolio />
        <Process />
        <section className="bg-[#f5f0e8] py-20 md:py-24">
          <div className="mx-auto w-[92%] max-w-5xl text-center">
            {/* Heading */}
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8b5e3c]">
              Client Experience
            </p>

            <h2 className="serif mt-3 text-4xl md:text-5xl">
              Built around trust and communication.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-600">
              Thoughtful furniture, quality craftsmanship, and a smooth
              experience from consultation to installation.
            </p>

            {/* Carousel */}
            <div className="relative mx-auto mt-12 max-w-3xl">
              <div className="rounded-2xl bg-white px-7 py-10 shadow-sm md:px-14 md:py-14">
                {/* Stars */}
                <div className="text-xl tracking-[0.2em] text-[#8b5e3c]">
                  ★★★★★
                </div>

                {/* Testimonial */}
                <blockquote className="serif mt-7 text-2xl leading-9 text-stone-800 md:text-3xl md:leading-10">
                  “{testimonials[currentTestimonial].text}”
                </blockquote>

                {/* Client */}
                <div className="mt-8">
                  <p className="font-semibold text-stone-800">
                    {testimonials[currentTestimonial].client}
                  </p>

                  <p className="mt-1 text-sm text-stone-500">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>

              {/* Previous Button */}
              <button
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
                className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-stone-700 shadow-md transition hover:bg-stone-100 md:-left-5"
              >
                ‹
              </button>

              {/* Next Button */}
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-stone-700 shadow-md transition hover:bg-stone-100 md:-right-5"
              >
                ›
              </button>

              {/* Dots */}
              <div className="mt-8 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      currentTestimonial === index
                        ? "w-8 bg-[#8b5e3c]"
                        : "w-2.5 bg-stone-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="bg-[#28221d] py-20 text-white md:py-28"
        >
          <div className="mx-auto w-[92%] max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#e2c19e]">
              Let's create your space
            </p>
            <h2 className="serif mt-3 max-w-3xl text-4xl md:text-6xl">
              Have a furniture idea or a space to furnish?
            </h2>
            <p className="mt-5 max-w-xl text-stone-300">
              Tell us what you have in mind. We'll discuss your requirements,
              project scope, and next steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="mailto:idaraudoudoh@gmail.com">
                Email Creative Ideas
              </Button>
              <Button href="https://wa.me/2348038952699" light>
                WhatsApp Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
