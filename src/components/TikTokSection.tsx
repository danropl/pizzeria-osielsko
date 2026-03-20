import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ORDER_URL, TIKTOK_PROFILE_URL } from "@/lib/constants";

/* ─── TikTok icon ─── */
const TikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
  </svg>
);

/* ─── Video data (themed content matching pizzeria's real TikTok activity) ─── */
interface TikTokVideo {
  id: string;
  title: string;
  description: string;
  emoji: string;
}

const videos: TikTokVideo[] = [
  {
    id: "1",
    title: "Pizza prosto z pieca 🔥",
    description: "Zobacz jak przygotowujemy naszą pizzę — 90 sekund w piecu opalanym drewnem i gotowe!",
    emoji: "🍕",
  },
  {
    id: "2",
    title: "Rozciąganie ciasta 🤌",
    description: "Ręczne rozciąganie ciasta — tradycyjna neapolitańska technika naszego pizzaiolo.",
    emoji: "🫶",
  },
  {
    id: "3",
    title: "Składniki prosto z Włoch 🇮🇹",
    description: "Mozzarella fior di latte, pelati San Marzano, oliwa extra vergine — importujemy to, co najlepsze.",
    emoji: "🇮🇹",
  },
  {
    id: "4",
    title: "Warsztaty z dziećmi 👨‍🍳",
    description: "Mali pizzaiolo w akcji! Warsztaty robienia pizzy — idealny pomysł na urodziny.",
    emoji: "👶",
  },
  {
    id: "5",
    title: "Randka w Kuchni 💕",
    description: "Romantyczny wieczór dla dwojga — gotujcie razem pod okiem naszego szefa kuchni.",
    emoji: "💕",
  },
  {
    id: "6",
    title: "Atmosfera w Sielsko ✨",
    description: "Ogród, piec na żywo, włoska muzyka — odwiedź nas i poczuj klimat!",
    emoji: "✨",
  },
];

/* ─── Video Card ─── */
const VideoCard = ({
  video,
  onOpen,
}: {
  video: TikTokVideo;
  onOpen: (video: TikTokVideo) => void;
}) => (
  <button
    type="button"
    onClick={() => onOpen(video)}
    className="card-warm overflow-hidden flex flex-col h-full group cursor-pointer text-left w-full"
  >
    <div className="relative aspect-[9/12] w-full bg-gradient-to-br from-foreground/5 via-foreground/10 to-foreground/20 rounded-t-3xl overflow-hidden flex flex-col items-center justify-center gap-4">
      <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{video.emoji}</span>
      {/* Play icon */}
      <div className="w-14 h-14 rounded-full bg-foreground/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-background ml-0.5" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      {/* TikTok badge */}
      <span className="font-body text-xs font-semibold text-foreground/70 bg-background/60 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center gap-1.5">
        <TikTokIcon className="w-3.5 h-3.5" />
        TikTok
      </span>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="font-subhead text-lg font-semibold text-foreground mb-1">{video.title}</h3>
      <p className="font-body text-sm text-muted-foreground mb-4 flex-1">{video.description}</p>
      <span className="btn-ghost text-sm py-2 w-full text-center pointer-events-none">
        ▶ Odtwórz
      </span>
    </div>
  </button>
);

/* ─── TikTok Profile Embed Modal ─── */
const VideoModal = ({
  video,
  onClose,
}: {
  video: TikTokVideo;
  onClose: () => void;
}) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Load TikTok embed script
    const existing = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (existing) {
      setScriptLoaded(true);
      // Re-render embeds
      (window as any).tiktokEmbed?.lib?.render?.();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
    return () => {
      // Don't remove script on unmount - it's shared
    };
  }, []);

  useEffect(() => {
    if (scriptLoaded) {
      // Trigger re-render of TikTok embeds
      setTimeout(() => {
        (window as any).tiktokEmbed?.lib?.render?.();
      }, 100);
    }
  }, [scriptLoaded]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute inset-0 bg-foreground/70 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        className="relative z-10 w-full max-w-sm bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50 max-h-[90vh] flex flex-col"
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

        {/* TikTok Profile Embed */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Header */}
          <div className="flex flex-col items-center gap-3 mb-4 pt-2">
            <span className="text-5xl">{video.emoji}</span>
            <h3 className="font-subhead text-lg font-bold text-foreground text-center">{video.title}</h3>
            <p className="font-body text-sm text-muted-foreground text-center">{video.description}</p>
          </div>

          {/* TikTok Profile Embed */}
          <div className="w-full min-h-[400px]">
            <blockquote
              className="tiktok-embed"
              cite={TIKTOK_PROFILE_URL}
              data-unique-id="pizzeria_osielsko"
              data-embed-from="embed_page"
              data-embed-type="creator"
              style={{ maxWidth: "100%", minWidth: "200px" }}
            >
              <section>
                <a target="_blank" rel="noopener noreferrer" href={`${TIKTOK_PROFILE_URL}?refer=creator_embed`}>
                  @pizzeria_osielsko
                </a>
              </section>
            </blockquote>
          </div>
        </div>

        {/* Actions */}
        <div className="p-4 border-t border-border/30 flex flex-col gap-2.5">
          <a
            href={TIKTOK_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-3 w-full text-center"
          >
            <TikTokIcon className="w-4 h-4" />
            Zobacz na TikToku
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
};

/* ─── Section ─── */
const TikTokSection = () => {
  const [activeVideo, setActiveVideo] = useState<TikTokVideo | null>(null);
  const handleClose = useCallback(() => setActiveVideo(null), []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    },
    [handleClose],
  );

  useEffect(() => {
    if (!activeVideo) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeVideo, handleKeyDown]);

  return (
    <>
      <section id="nasze-tiktoki" className="bg-background section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              @pizzeria_osielsko
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Zajrzyj do naszej kuchni
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Zaglądaj za kulisy, poznaj nasz team i zobacz jak powstają Twoje ulubione pizze. Śledź nas na TikToku!
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <AnimatedSection key={video.id} delay={i * 0.05}>
                <VideoCard video={video} onOpen={setActiveVideo} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
                🍕 Zamów online
              </a>
              <a href={TIKTOK_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost text-base px-8 py-4">
                <TikTokIcon className="w-5 h-5" />
                Zobacz profil na TikToku
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatePresence>
        {activeVideo && <VideoModal video={activeVideo} onClose={handleClose} />}
      </AnimatePresence>
    </>
  );
};

export default TikTokSection;
