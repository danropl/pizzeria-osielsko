import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ORDER_URL, TIKTOK_PROFILE_URL } from "@/lib/constants";

interface TikTokVideo {
  id: string;
  tiktokId: string;
  title: string;
  description: string;
  emoji: string;
  postUrl: string;
}

const videos: TikTokVideo[] = [
  {
    id: "1",
    tiktokId: "7400000000000000001",
    title: "Pizza prosto z pieca 🔥",
    description: "Zobacz jak przygotowujemy naszą pizzę w piecu opalanym drewnem.",
    emoji: "🍕",
    postUrl: TIKTOK_PROFILE_URL,
  },
  {
    id: "2",
    tiktokId: "7400000000000000002",
    title: "Rozciąganie ciasta 🤌",
    description: "Ręczne rozciąganie ciasta — tradycyjna neapolitańska technika.",
    emoji: "🫶",
    postUrl: TIKTOK_PROFILE_URL,
  },
  {
    id: "3",
    tiktokId: "7400000000000000003",
    title: "Warsztaty z dziećmi 👨‍🍳",
    description: "Mali pizzaiolo w akcji — warsztaty robienia pizzy dla dzieci.",
    emoji: "👶",
    postUrl: TIKTOK_PROFILE_URL,
  },
  {
    id: "4",
    tiktokId: "7400000000000000004",
    title: "Składniki prosto z Włoch 🇮🇹",
    description: "Nasze składniki importujemy z Włoch — mozzarella, pelati, oliwa.",
    emoji: "🇮🇹",
    postUrl: TIKTOK_PROFILE_URL,
  },
  {
    id: "5",
    tiktokId: "7400000000000000005",
    title: "Atmosfera w restauracji ✨",
    description: "Ciepła, włoska atmosfera — przyjdź i przekonaj się sam!",
    emoji: "✨",
    postUrl: TIKTOK_PROFILE_URL,
  },
  {
    id: "6",
    tiktokId: "7400000000000000006",
    title: "Randka w Kuchni 💕",
    description: "Romantyczny wieczór dla dwojga — gotujcie razem!",
    emoji: "💕",
    postUrl: TIKTOK_PROFILE_URL,
  },
];

const TikTokCard = ({
  video,
  onPlay,
}: {
  video: TikTokVideo;
  onPlay: (video: TikTokVideo) => void;
}) => (
  <button
    type="button"
    onClick={() => onPlay(video)}
    className="card-warm overflow-hidden flex flex-col h-full group cursor-pointer text-left w-full"
  >
    {/* Poster area */}
    <div className="relative aspect-[9/12] w-full bg-gradient-to-br from-foreground/5 via-foreground/10 to-foreground/20 rounded-t-3xl overflow-hidden flex flex-col items-center justify-center gap-4">
      <span className="text-5xl">{video.emoji}</span>
      {/* Play icon */}
      <div className="w-14 h-14 rounded-full bg-foreground/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-background ml-0.5" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      {/* TikTok badge */}
      <span className="font-body text-xs font-semibold text-foreground/70 bg-background/60 backdrop-blur-sm px-4 py-1.5 rounded-full">
        🎵 TikTok
      </span>
    </div>
    {/* Text */}
    <div className="p-5 flex flex-col flex-1">
      <h3 className="font-subhead text-lg font-semibold text-foreground mb-1">{video.title}</h3>
      <p className="font-body text-sm text-muted-foreground mb-4 flex-1">{video.description}</p>
      <span className="btn-ghost text-sm py-2 w-full text-center pointer-events-none">
        ▶ Odtwórz film
      </span>
    </div>
  </button>
);

/* ─── Video Modal ─── */
const VideoModal = ({
  video,
  onClose,
}: {
  video: TikTokVideo;
  onClose: () => void;
}) => {
  const embedUrl = `https://www.tiktok.com/embed/v2/${video.tiktokId}`;

  return (
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
        className="relative z-10 w-full max-w-sm bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50"
        initial={{ scale: 0.92, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 24 }}
        transition={{ type: "spring", damping: 28, stiffness: 340 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
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

        {/* Embed area */}
        <div className="aspect-[9/16] w-full bg-foreground/5 relative">
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            loading="lazy"
            title={video.title}
          />
          {/* Fallback overlay – shown if embed fails to load interactively */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none opacity-0 transition-opacity duration-500" id={`fallback-${video.id}`}>
            <span className="text-6xl">{video.emoji}</span>
            <p className="font-body text-sm text-muted-foreground text-center px-6">{video.description}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="p-4 flex flex-col gap-3">
          <h3 className="font-subhead text-base font-semibold text-foreground">{video.title}</h3>
          <a
            href={video.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm py-2 w-full text-center"
          >
            🎵 Zobacz na TikToku →
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

  // Escape key handler
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    },
    [handleClose],
  );

  // Attach/detach escape listener
  useState(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      <section id="nasze-pizze" className="bg-background section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Nasze TikToki
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
                <TikTokCard video={video} onPlay={setActiveVideo} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
                🍕 Zamów online
              </a>
              <a href={TIKTOK_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost text-base px-8 py-4">
                🎵 Śledź nas na TikToku
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video modal */}
      <AnimatePresence>
        {activeVideo && <VideoModal video={activeVideo} onClose={handleClose} />}
      </AnimatePresence>
    </>
  );
};

export default TikTokSection;
