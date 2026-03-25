import lemonMotif from "@/assets/lemon-motif.png";

const positions = [
  { top: "2%", right: "-3%", w: "w-44 md:w-64", rotate: "rotate-12" },
  { top: "5%", left: "-4%", w: "w-36 md:w-52", rotate: "-rotate-[20deg] scale-x-[-1]" },
  { top: "18%", right: "2%", w: "w-32 md:w-48", rotate: "rotate-[30deg]" },
  { top: "24%", left: "-2%", w: "w-28 md:w-44", rotate: "-rotate-[8deg]" },
  { top: "36%", right: "-5%", w: "w-40 md:w-56", rotate: "rotate-[-18deg] scale-x-[-1]" },
  { top: "42%", left: "1%", w: "w-32 md:w-44", rotate: "rotate-[22deg]" },
  { top: "54%", right: "0%", w: "w-36 md:w-52", rotate: "rotate-[10deg]" },
  { top: "60%", left: "-3%", w: "w-40 md:w-56", rotate: "-rotate-[28deg] scale-x-[-1]" },
  { top: "72%", right: "-2%", w: "w-32 md:w-48", rotate: "rotate-[-15deg]" },
  { top: "78%", left: "0%", w: "w-28 md:w-40", rotate: "rotate-[18deg] scale-x-[-1]" },
  { top: "88%", right: "1%", w: "w-36 md:w-52", rotate: "rotate-[25deg]" },
  { top: "93%", left: "-4%", w: "w-40 md:w-56", rotate: "-rotate-[12deg]" },
];

const LemonDecorations = () => (
  <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
    {positions.map((pos, i) => (
      <img
        key={i}
        src={lemonMotif}
        alt=""
        className={`absolute ${pos.w} ${pos.rotate}`}
        style={{ top: pos.top, left: pos.left, right: pos.right }}
        loading="lazy"
      />
    ))}
  </div>
);

export default LemonDecorations;
