import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ORDER_URL, TIKTOK_PROFILE_URL } from "@/lib/constants";

interface TikTokVideo {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  postUrl: string;
}

const videos: TikTokVideo[] = [
  {
    id: "1",
    title: "Pizza prosto z pieca 🔥",
    description: "Zobacz jak przygotowujemy naszą pizzę w piecu opalanym drewnem.",
    embedUrl: "https://www.tiktok.com/embed/v2/7345000000000000001",
    postUrl: `${TIKTOK_PROFILE_URL}`,
  },
  {
    id: "2",
    title: "Rozciąganie ciasta 🤌",
    description: "Ręczne rozciąganie ciasta — tradycyjna neapolitańska technika.",
    embedUrl: "https://www.tiktok.com/embed/v2/7345000000000000002",
    postUrl: `${TIKTOK_PROFILE_URL}`,
  },
  {
    id: "3",
    title: "Warsztaty z dziećmi 👨‍🍳",
    description: "Mali pizzaiolo w akcji — warsztaty robienia pizzy dla dzieci.",
    embedUrl: "https://www.tiktok.com/embed/v2/7345000000000000003",
    postUrl: `${TIKTOK_PROFILE_URL}`,
  },
  {
    id: "4",
    title: "Składniki prosto z Włoch 🇮🇹",
    description: "Nasze składniki importujemy z Włoch — mozzarella, pelati, oliwa.",
    embedUrl: "https://www.tiktok.com/embed/v2/7345000000000000004",
    postUrl: `${TIKTOK_PROFILE_URL}`,
  },
  {
    id: "5",
    title: "Atmosfera w restauracji ✨",
    description: "Ciepła, włoska atmosfera — przyjdź i przekonaj się sam!",
    embedUrl: "https://www.tiktok.com/embed/v2/7345000000000000005",
    postUrl: `${TIKTOK_PROFILE_URL}`,
  },
  {
    id: "6",
    title: "Randka w Kuchni 💕",
    description: "Romantyczny wieczór dla dwojga — gotujcie razem!",
    embedUrl: "https://www.tiktok.com/embed/v2/7345000000000000006",
    postUrl: `${TIKTOK_PROFILE_URL}`,
  },
];

const TikTokCard = ({ video }: { video: TikTokVideo }) => {
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <div className="card-warm overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[9/16] w-full bg-foreground/5 rounded-t-3xl overflow-hidden">
        {showEmbed ? (
          <iframe
            src={video.embedUrl}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            allow="autoplay; encrypted-media"
            loading="lazy"
            title={video.title}
          />
        ) : (
          <button
            onClick={() => setShowEmbed(true)}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 group cursor-pointer bg-gradient-to-b from-foreground/5 via-foreground/10 to-foreground/30 transition-colors hover:from-foreground/10 hover:via-foreground/15 hover:to-foreground/40"
            aria-label={`Odtwórz: ${video.title}`}
          >
            {/* TikTok icon */}
            <div className="w-16 h-16 rounded-full bg-foreground/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-background ml-0.5" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="font-body text-sm font-semibold text-foreground/80 bg-background/60 backdrop-blur-sm px-4 py-1.5 rounded-full">
              ▶ Odtwórz
            </span>
          </button>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-subhead text-lg font-semibold text-foreground mb-1">{video.title}</h3>
        <p className="font-body text-sm text-muted-foreground mb-4 flex-1">{video.description}</p>
        <a
          href={video.postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost text-sm py-2 w-full text-center"
        >
          🎵 Otwórz na TikToku
        </a>
      </div>
    </div>
  );
};

const TikTokSection = () => {
  return (
    <section id="nasze-pizze" className="bg-background section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Nasze TikToki
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Zobacz nasze pizze na TikToku
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Zaglądaj do naszej kuchni, poznaj nasz team i zobacz jak powstają Twoje ulubione pizze. Śledź nas na TikToku!
          </p>
        </AnimatedSection>

        {/* Video grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <AnimatedSection key={video.id} delay={i * 0.05}>
              <TikTokCard video={video} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTAs */}
        <AnimatedSection className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              🍕 Zamów online
            </a>
            <a
              href={TIKTOK_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-base px-8 py-4"
            >
              🎵 Śledź nas na TikToku
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TikTokSection;
