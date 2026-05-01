import { useEffect, useState } from "react";
import promoCasino from "@/assets/promo-casino.jpg";
import promoWelcome from "@/assets/promo-welcome.jpg";
import promoIpl from "@/assets/promo-ipl.jpg";
import { openWhatsApp } from "@/lib/wa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { img: promoIpl, title: "IPL 2026 Mega Bonus", sub: "Bet ₹1000 → Get ₹2000 Free", cta: "Claim Now" },
  { img: promoWelcome, title: "Welcome Bonus 200%", sub: "Up to ₹15,000 on First Deposit", cta: "Get Bonus" },
  { img: promoCasino, title: "Live Casino VIP", sub: "Teen Patti · Andar Bahar · Roulette", cta: "Play Live" },
];

const PromoSlider = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="container py-10">
      <div className="relative rounded-2xl overflow-hidden card-premium">
        <div className="relative aspect-[21/9] md:aspect-[24/8]">
          {slides.map((s, idx) => (
            <div key={idx} className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}>
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 max-w-xl">
                <h3 className="text-2xl md:text-5xl font-black text-gold mb-2 md:mb-4">{s.title}</h3>
                <p className="text-sm md:text-xl text-foreground/90 mb-4 md:mb-6">{s.sub}</p>
                <button onClick={openWhatsApp} className="self-start px-6 md:px-8 h-11 md:h-12 rounded-lg bg-gold text-primary-foreground font-bold btn-glow hover:scale-105 transition-transform text-sm md:text-base">
                  {s.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => setI((i - 1 + slides.length) % slides.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => setI((i + 1) % slides.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-2 bg-foreground/30"}`} aria-label={`Slide ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSlider;
