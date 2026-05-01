import roulette from "@/assets/casino-roulette.jpg";
import andarbahar from "@/assets/casino-andarbahar.jpg";
import teenpatti from "@/assets/casino-teenpatti.jpg";
import blackjack from "@/assets/casino-blackjack.jpg";
import slots from "@/assets/casino-slots.jpg";
import dragontiger from "@/assets/casino-dragontiger.jpg";
import { openWhatsApp } from "@/lib/wa";

const games = [
  { img: teenpatti, name: "Teen Patti", tag: "Indian Classic", min: "₹100" },
  { img: andarbahar, name: "Andar Bahar", tag: "Live Dealer", min: "₹50" },
  { img: roulette, name: "Roulette", tag: "European · Auto", min: "₹100" },
  { img: dragontiger, name: "Dragon Tiger", tag: "Quick Cards", min: "₹50" },
  { img: blackjack, name: "Blackjack", tag: "21 Live Tables", min: "₹200" },
  { img: slots, name: "Lucky 777 Slots", tag: "1000+ Slots", min: "₹10" },
];

const CasinoSection = () => (
  <section className="container py-16">
    <div className="text-center mb-10">
      <div className="text-xs text-gold tracking-[0.3em] mb-2">LIVE CASINO</div>
      <h2 className="text-3xl md:text-5xl font-black mb-3">Premium <span className="text-gold">Live Casino</span> Games</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">Real dealers, real cash, real Indian games — Teen Patti, Andar Bahar & more.</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {games.map((g) => (
        <button key={g.name} onClick={openWhatsApp} className="card-premium rounded-2xl overflow-hidden text-left group">
          <div className="aspect-[4/3] overflow-hidden relative">
            <img src={g.img} alt={g.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
              <div>
                <div className="font-black text-lg md:text-xl text-foreground">{g.name}</div>
                <div className="text-xs text-muted-foreground">{g.tag}</div>
              </div>
              <div className="text-[11px] px-2 py-1 rounded bg-gold text-primary-foreground font-bold">Min {g.min}</div>
            </div>
          </div>
        </button>
      ))}
    </div>
    <div className="text-center mt-8">
      <button onClick={openWhatsApp} className="px-8 h-12 rounded-xl bg-gold text-primary-foreground font-bold btn-glow hover:scale-105 transition-transform">
        View All 1000+ Games
      </button>
    </div>
  </section>
);

export default CasinoSection;
