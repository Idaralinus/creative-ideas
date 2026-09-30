import ProtectedImage from "./ProtectedImage";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Services", "Portfolio", "Process", "Contact"];
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#fffdf9]/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 w-[92%] max-w-7xl items-center justify-between py-4 md:py-5">
        <div className="mx-auto flex min-h-20 w-[92%] max-w-7xl items-center justify-left py-4 md:py-5 gap-2">
          <ProtectedImage
            src="/images/Logo_UE5.jpg"
            alt="Creative Ideas"
            className="h-10 w-10 object-contain "
          />
          <a href="#home" className="font-bold tracking-[.16em]">
            CREATIVE IDEAS
            <span className="mt-1 block text-[9px] font-normal tracking-[.2em] text-stone-500">
              FURNITURE & INTERIOR FURNISHING
            </span>
          </a>
        </div>
        <nav className="hidden gap-7 text-sm md:flex">
          {links.map((x) => (
            <a
              key={x}
              href={"#" + x.toLowerCase()}
              className="hover:text-[#8b5e3c]"
            >
              {x}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-stone-200 bg-[#fffdf9] px-[4%] py-5 md:hidden">
          {links.map((x) => (
            <a
              key={x}
              href={"#" + x.toLowerCase()}
              onClick={() => setOpen(false)}
              className="block py-3"
            >
              {x}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
