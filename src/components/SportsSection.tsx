import cricket from "@/assets/sport-cricket.jpg";
import tennis from "@/assets/sport-tennis.jpg";
import kabaddi from "@/assets/sport-kabaddi.jpg";
import horse from "@/assets/sport-horse.jpg";
import esports from "@/assets/sport-esports.jpg";
import basketball from "@/assets/sport-basketball.jpg";
import { openWhatsApp } from "@/lib/wa";

const sports = [
  { img: cricket, name: "Cricket", tag: "🔥 Live · IPL 2026", live: 42 },
  { img: kabaddi, name: "Kabaddi", tag: "Pro Kabaddi League", live: 8 },
  { img: tennis, name: "Tennis", tag: "ATP · WTA · Grand Slam", live: 15 },
  { img: horse, name: "Horse Racing", tag: "Indian Derby", live: 12 },
  { img: esports, name: "Esports", tag: "BGMI · Valorant · CS2", live: 24 },
  { img: basketball, name: "Basketball", tag: "NBA · Indian League", live: 9 },
];

const SportsSection = () => (
  <section className="container py-16">
    <div className="text-center mb-10">
      <div className="text-xs text-gold tracking-[0.3em] mb-2">SPORTS BETTING</div>
      <h2 className="text-3xl md:text-5xl font-black mb-3">Bet on Your <span className="text-gold">Favorite Sports</span></h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">From IPL cricket to kabaddi, tennis & esports — best odds in India, all in INR.</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {sports.map((s) => (
        <button key={s.name} onClick={openWhatsApp} className="card-premium rounded-2xl overflow-hidden text-left group">
          <div className="aspect-square overflow-hidden relative">
            <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-secondary text-[10px] font-bold text-secondary-foreground">
              ● {s.live} LIVE
            </div>
          </div>
          <div className="p-3">
            <div className="font-bold text-base">{s.name}</div>
            <div className="text-[11px] text-muted-foreground">{s.tag}</div>
          </div>
        </button>
      ))}
    </div>
  </section>
);

export default SportsSection;
