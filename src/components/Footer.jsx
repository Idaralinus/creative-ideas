export default function Footer() {
  return (
    <footer className="bg-[#211c18] py-14 text-white">
      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Footer Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Company */}
          <div>
            <h2 className="font-bold tracking-[0.16em]">CREATIVE IDEAS</h2>

            <p className="mt-2 text-xs tracking-[0.15em] text-stone-400">
              FURNITURE & INTERIOR FURNISHING
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-stone-400">
              Thoughtful spaces. Beautifully made furniture.
            </p>

            <p className="mt-3 max-w-sm text-sm leading-6 text-stone-400">
              Creating furniture and furnishing solutions for residential and
              commercial spaces.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest">
              Explore
            </h3>

            <div className="mt-5 grid gap-3 text-sm text-stone-400">
              <a href="#home" className="transition hover:text-white">
                Home
              </a>

              <a href="#about" className="transition hover:text-white">
                About
              </a>

              <a href="#services" className="transition hover:text-white">
                Services
              </a>

              <a href="#portfolio" className="transition hover:text-white">
                Portfolio
              </a>

              <a href="#process" className="transition hover:text-white">
                Our Process
              </a>

              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest">
              Contact
            </h3>

            <div className="mt-5 grid gap-3 text-sm text-stone-400">
              {/* Phone */}
              <a
                href="tel:+2348038952699"
                className="transition hover:text-white"
              >
                📞 08038952699
              </a>

              {/* Email */}
              <a
                href="mailto:idaraudoudoh@gmail.com"
                className="transition hover:text-white"
              >
                📧 idaraudoudoh@gmail.com
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348038952699?text=Hello%20Creative%20Ideas%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20furniture%20and%20interior%20furnishing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                💬 WhatsApp: 08038952699
              </a>

              {/* Location */}
              <p>📍 Lagos, Nigeria</p>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/idaralinus"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                📸 Instagram: @idaralinus
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-stone-700 pt-6">
          <div className="flex flex-col justify-between gap-3 text-xs text-stone-500 md:flex-row">
            <p>© 2026 Creative Ideas. All rights reserved.</p>

            <p>Furniture • Interior Furnishing • Installation</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
