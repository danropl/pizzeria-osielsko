import lemonMotif from "@/assets/lemon-motif.png";
import oliveBranch from "@/assets/olive-branch.png";
import olives from "@/assets/olives.png";

type Decoration = {
  src: string;
  top: string;
  left?: string;
  right?: string;
  w: string;
  rotate: string;
};

const decorations: Decoration[] = [
  // Top — olive branch, right edge
  { src: oliveBranch, top: "1%", right: "-2%", w: "w-36 md:w-52", rotate: "rotate-[15deg]" },
  // Upper — lemon, left edge
  { src: lemonMotif, top: "10%", left: "-3%", w: "w-28 md:w-40", rotate: "-rotate-[12deg]" },
  // Upper-mid — olives, right
  { src: olives, top: "20%", right: "1%", w: "w-16 md:w-24", rotate: "rotate-[25deg]" },
  // Mid — olive branch, left
  { src: oliveBranch, top: "32%", left: "-4%", w: "w-32 md:w-48", rotate: "-rotate-[20deg] scale-x-[-1]" },
  // Mid — lemon, right edge
  { src: lemonMotif, top: "44%", right: "-3%", w: "w-28 md:w-40", rotate: "rotate-[18deg] scale-x-[-1]" },
  // Mid-lower — olives, left
  { src: olives, top: "52%", left: "0%", w: "w-14 md:w-20", rotate: "-rotate-[10deg]" },
  // Lower — olive branch, right
  { src: oliveBranch, top: "62%", right: "-1%", w: "w-36 md:w-52", rotate: "rotate-[-22deg]" },
  // Lower — lemon, left
  { src: lemonMotif, top: "74%", left: "-4%", w: "w-24 md:w-36", rotate: "rotate-[8deg]" },
  // Bottom — olives, right
  { src: olives, top: "82%", right: "2%", w: "w-16 md:w-22", rotate: "rotate-[30deg] scale-x-[-1]" },
  // Bottom — olive branch, left
  { src: oliveBranch, top: "92%", left: "-3%", w: "w-32 md:w-44", rotate: "-rotate-[15deg] scale-x-[-1]" },
];

const MediterraneanDecorations = () => (
  <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
    {decorations.map((dec, i) => (
      <img
        key={i}
        src={dec.src}
        alt=""
        className={`absolute ${dec.w} ${dec.rotate}`}
        style={{ top: dec.top, left: dec.left, right: dec.right }}
        loading="lazy"
      />
    ))}
  </div>
);

export default MediterraneanDecorations;
