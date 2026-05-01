import heroImg from "@/assets/hero-cricket.jpg";
import { openWhatsApp } from "@/lib/wa";
import { MessageCircle, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[80vh] min-h-[560px] max-h-[820px]">
        <img
          src={heroImg}
          alt="Live cricket betting on Yolo365 — IPL, T20, ODI"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={900}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />

        <div className="container relative z-10 h-full flex flex-col justify-center max-w-3xl">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-secondary/90 text-secondary-foreground text-xs font-bold mb-5 animate-pulse-gold">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> LIVE NOW · IPL 2026
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-5">
            India's #1 <span className="text-gold">Cricket Betting</span> ID
          </h1>
          <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-xl">
            Bet on every IPL match, international cricket, kabaddi & live casino. Instant ₹ deposits, lightning-fast withdrawals — all on WhatsApp.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={openWhatsApp} className="inline-flex items-center gap-2 h-14 px-7 rounded-xl bg-gold text-primary-foreground font-bold text-base btn-glow hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5" /> Get ID on WhatsApp
            </button>
            <button onClick={openWhatsApp} className="inline-flex items-center gap-2 h-14 px-7 rounded-xl border-2 border-gold/50 text-gold font-bold text-base hover:bg-gold/10 transition-colors">
              <Zap className="w-5 h-5" /> Claim ₹15,000 Bonus
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            {[
              ["1M+", "Active Players"],
              ["₹100Cr+", "Paid Out"],
              ["24/7", "Support"],
              ["60s", "Instant ID"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl md:text-3xl font-black text-gold">{n}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
