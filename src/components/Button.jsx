export default function Button({ children, href = "#", light = false }) {
  return;
  <a
    href={href}
    className={
      "inline-block border px-6 py-3 text-sm font-bold transition " +
      (light
        ? "border-stone-400 hover:bg-[#28221d] hover:text-white"
        : "border-[#8b5e3c] bg-[#8b5e3c] text-white hover:border-[#28221d] hover:bg-[#28221d]")
    }
  >
    {children}
  </a>;
}
