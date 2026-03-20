import AnimatedSection from "./AnimatedSection";
import { ORDER_URL, TIKTOK_PROFILE_URL } from "@/lib/constants";

interface TikTokVideo {
  id: string;
  title: string;
  description: string;
  emoji: string;
  postUrl: string;
}

const videos: TikTokVideo[] = [
  {
    id: "1",
    title: "Pizza prosto z pieca 🔥",
    description: "Zobacz jak przygotowujemy naszą pizzę w piecu opalanym drewnem.",
    emoji: "🍕",
    postUrl: TIKTOK_PROFILE_URL,
  },
  {
    id: "2",
    title: "Rozciąganie ciasta 🤌",
    description: "Ręczne rozciąganie ciasta — tradycyjna neapolitańska technika.",
    emoji: "🫶",
    postUrl: TIKTOK_PROFILE_URL,
  },
  {
    id: "3",
    title: "Warsztaty z dziećmi 👨‍🍳",
    description: "Mali pizzaiolo w akcji — warsztaty robienia pizzy dla dzieci.",
    emoji: "👶",
    postUrl: TIKTOK_PROFILE_URL,
  },
  {
    id: "4",
    title: "Składniki prosto z Włoch 🇮🇹",
    description: "Nasze składniki importujemy z Włoch — mozzarella, pelati, oliwa.",
    emoji: "🇮🇹",
    postUrl: TIKTOK_PROFILE_URL,
  },
  {
    id: "5",
    title: "Atmosfera w restauracji ✨",
    description: "Ciepła, włoska atmosfera — przyjdź i przekonaj się sam!",
    emoji: "✨",
    postUrl: TIKTOK_PROFILE_URL,
  },
  {
    id: "6",
    title: "Randka w Kuchni 💕",
    description: "Romantyczny wieczór dla dwojga — gotujcie razem!",
    emoji: "💕",
    postUrl: TIKTOK_PROFILE_URL,
  },
];

const TikTokCard = ({ video }: { video: TikTokVideo }) => (
  <a
    href={video.postUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="card-warm overflow-hidden flex flex-col h-full group cursor-pointer"
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
        Otwórz na TikToku →
      </span>
    </div>
  </a>
);

const TikTokSection = () => (
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
            <TikTokCard video={video} />
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
);

export default TikTokSection;
