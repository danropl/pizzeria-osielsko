import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ORDER_URL, INSTAGRAM_PROFILE_URL } from "@/lib/constants";

interface InstagramPost {
  id: string;
  title: string;
  description: string;
  emoji: string;
  postUrl: string;
  embedCode: string;
}

const PROFILE = INSTAGRAM_PROFILE_URL;

const posts: InstagramPost[] = [
  {
    id: "1",
    title: "Pizza prosto z pieca 🔥",
    description: "Autentyczna pizza neapolitańska wypiekana w 90 sekund w naszym piecu opalanym drewnem.",
    emoji: "🍕",
    postUrl: PROFILE,
    embedCode: "",
  },
  {
    id: "2",
    title: "Rozciąganie ciasta 🤌",
    description: "Ręczne rozciąganie ciasta — tradycyjna neapolitańska technika naszego pizzaiolo.",
    emoji: "🫶",
    postUrl: PROFILE,
    embedCode: "",
  },
  {
    id: "3",
    title: "Warsztaty z dziećmi 👨‍🍳",
    description: "Mali pizzaiolo w akcji — warsztaty robienia pizzy dla najmłodszych.",
    emoji: "👶",
    postUrl: PROFILE,
    embedCode: "",
  },
  {
    id: "4",
    title: "Składniki prosto z Włoch 🇮🇹",
    description: "Importujemy z Włoch — mozzarella fior di latte, pelati San Marzano, oliwa extra vergine.",
    emoji: "🇮🇹",
    postUrl: PROFILE,
    embedCode: "",
  },
  {
    id: "5",
    title: "Atmosfera w restauracji ✨",
    description: "Ciepła, włoska atmosfera z ogrodem i piecem na żywo — przyjdź i przekonaj się!",
    emoji: "✨",
    postUrl: PROFILE,
    embedCode: "",
  },
  {
    id: "6",
    title: "Randka w Kuchni 💕",
    description: "Romantyczny wieczór dla dwojga — gotujcie wspólnie pod okiem naszego szefa kuchni.",
    emoji: "💕",
    postUrl: PROFILE,
    embedCode: "",
  },
];

/* ─── Instagram icon ─── */
const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

/* ─── Post Card ─── */
const PostCard = ({
  post,
  onOpen,
}: {
  post: InstagramPost;
  onOpen: (post: InstagramPost) => void;
}) => (
  <button
    type="button"
    onClick={() => onOpen(post)}
    className="card-warm overflow-hidden flex flex-col h-full group cursor-pointer text-left w-full"
  >
    {/* Poster */}
    <div className="relative aspect-square w-full bg-gradient-to-br from-foreground/5 via-foreground/10 to-foreground/20 rounded-t-3xl overflow-hidden flex flex-col items-center justify-center gap-3">
      <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{post.emoji}</span>

      {/* Instagram badge */}
      <span className="font-body text-xs font-semibold text-foreground/70 bg-background/60 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center gap-1.5">
        <InstagramIcon className="w-3.5 h-3.5" />
        Instagram
      </span>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
          <InstagramIcon className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>

    {/* Text */}
    <div className="p-5 flex flex-col flex-1">
      <h3 className="font-subhead text-lg font-semibold text-foreground mb-1">{post.title}</h3>
      <p className="font-body text-sm text-muted-foreground mb-4 flex-1">{post.description}</p>
      <span className="btn-ghost text-sm py-2 w-full text-center pointer-events-none">
        Zobacz post
      </span>
    </div>
  </button>
);

/* ─── Post Modal ─── */
const PostModal = ({
  post,
  onClose,
}: {
  post: InstagramPost;
  onClose: () => void;
}) => (
  <motion.div
    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
  >
    {/* Backdrop */}
    <div className="absolute inset-0 bg-foreground/70 backdrop-blur-sm" onClick={onClose} />

    {/* Content */}
    <motion.div
      className="relative z-10 w-full max-w-md bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50"
      initial={{ scale: 0.92, opacity: 0, y: 24 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.92, opacity: 0, y: 24 }}
      transition={{ type: "spring", damping: 28, stiffness: 340 }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-background transition-colors"
        aria-label="Zamknij"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Visual area */}
      <div className="aspect-square w-full bg-gradient-to-br from-foreground/5 via-foreground/10 to-foreground/20 flex flex-col items-center justify-center gap-5 p-8">
        <span className="text-7xl">{post.emoji}</span>
        <h3 className="font-subhead text-xl font-bold text-foreground text-center">{post.title}</h3>
        <p className="font-body text-sm text-muted-foreground text-center max-w-xs">{post.description}</p>
      </div>

      {/* Actions */}
      <div className="p-5 flex flex-col gap-3">
        <a
          href={post.postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm py-3 w-full text-center"
        >
          <InstagramIcon className="w-4 h-4" />
          Otwórz na Instagramie
        </a>
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost text-sm py-2.5 w-full text-center"
        >
          🍕 Zamów online
        </a>
      </div>
    </motion.div>
  </motion.div>
);

/* ─── Section ─── */
const InstagramSection = () => {
  const [activePost, setActivePost] = useState<InstagramPost | null>(null);
  const handleClose = useCallback(() => setActivePost(null), []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    },
    [handleClose],
  );

  useEffect(() => {
    if (!activePost) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activePost, handleKeyDown]);

  return (
    <>
      <section id="instagram" className="bg-background section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              @pizzeriaosielsko
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Zobacz nas na Instagramie
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Zaglądaj za kulisy, poznaj nasz team i zobacz jak powstają Twoje ulubione pizze. Obserwuj nas na Instagramie!
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.05}>
                <PostCard post={post} onOpen={setActivePost} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
                🍕 Zamów online
              </a>
              <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost text-base px-8 py-4">
                <InstagramIcon className="w-5 h-5" />
                Obserwuj nas na Instagramie
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatePresence>
        {activePost && <PostModal post={activePost} onClose={handleClose} />}
      </AnimatePresence>
    </>
  );
};

export default InstagramSection;
