import lemonMotif from "@/assets/lemon-motif.png";

const LemonDecorations = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    {/* Top-right */}
    <img
      src={lemonMotif}
      alt=""
      className="absolute -top-8 -right-12 w-48 md:w-64 opacity-[0.07] rotate-12"
      loading="lazy"
    />
    {/* Left side, mid-page */}
    <img
      src={lemonMotif}
      alt=""
      className="absolute top-[30%] -left-16 w-40 md:w-56 opacity-[0.06] -rotate-[25deg] scale-x-[-1]"
      loading="lazy"
    />
    {/* Right side, lower */}
    <img
      src={lemonMotif}
      alt=""
      className="absolute top-[55%] -right-10 w-44 md:w-60 opacity-[0.07] rotate-[15deg]"
      loading="lazy"
    />
    {/* Left side, bottom area */}
    <img
      src={lemonMotif}
      alt=""
      className="absolute top-[80%] -left-14 w-36 md:w-52 opacity-[0.06] rotate-[-10deg]"
      loading="lazy"
    />
  </div>
);

export default LemonDecorations;
