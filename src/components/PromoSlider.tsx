import { useEffect, useState } from "react";
import promoCasino from "@/assets/promo-casino.jpg";
import promoWelcome from "@/assets/promo-welcome.jpg";
import promoIpl from "@/assets/promo-ipl.jpg";
import { openWhatsApp } from "@/lib/wa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { img: promoIpl, alt: "IPL 2026 cricket betting bonus on yolo365games.live — match-day mega offer", eyebrow: "IPL 2026 · Tonight", title: "Match-day, made richer.", sub: "Stake ₹1,000 on any IPL fixture and we'll triple it — ₹2,000 in instant bonus credits.", cta: "Claim ₹2,000 bonus" },
  { img: promoWelcome, alt: "200% welcome bonus for new players on yolo365games.live cricket betting site", eyebrow: "New player", title: "Your first ₹15,000 is on us.", sub: "A 200% match on your opening deposit — the warmest welcome in Indian betting.", cta: "Unlock welcome bonus" },
  { img: promoCasino, alt: "VIP live casino tables — Teen Patti, Andar Bahar, Roulette on yolo365games.live", eyebrow: "VIP live casino", title: "An evening at the high-roller table.", sub: "Private Teen Patti, Andar Bahar and Roulette rooms — dealers who know your name.", cta: "Reserve a seat" },
];

const PromoSlider = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="container py-14">
      <div className="flex items-end justify-between mb-6">
        <div>
          <div className="eyebrow mb-2">Featured</div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight">This week's offers</h2>
        </div>
        <button onClick={openWhatsApp} className="hidden md:inline-flex text-sm text-foreground/70 hover:text-gold transition-colors">All promotions →</button>
      </div>
      <div className="relative rounded-lg overflow-hidden border hairline">
        <div className="relative aspect-[21/9] md:aspect-[24/8]">
          {slides.map((s, idx) => (
            <div key={idx} className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}>
              <img src={s.img} alt={s.alt} className="w-full h-full object-cover" loading="lazy" decoding="async" width={1920} height={720} />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/55 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-14 max-w-2xl">
                <div className="eyebrow mb-3">{s.eyebrow}</div>
                <h3 className="font-display text-3xl md:text-5xl tracking-tight mb-4 leading-[1.02]">{s.title}</h3>
                <p className="text-sm md:text-lg text-foreground/75 mb-6 max-w-md font-light leading-relaxed">{s.sub}</p>
                <button onClick={openWhatsApp} className="btn-shimmer self-start px-6 h-11 rounded-md bg-gold text-primary-foreground font-semibold hover:opacity-95 transition-opacity text-sm">
                  {s.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => setI((i - 1 + slides.length) % slides.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/70 border hairline flex items-center justify-center text-foreground/80 hover:text-gold backdrop-blur transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button onClick={() => setI((i + 1) % slides.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/70 border hairline flex items-center justify-center text-foreground/80 hover:text-gold backdrop-blur transition-colors">
          <ChevronRight className="w-4 h-4" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={`h-1 rounded-full transition-all ${i === idx ? "w-6 bg-gold" : "w-1.5 bg-foreground/30"}`} aria-label={`Slide ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSlider;
