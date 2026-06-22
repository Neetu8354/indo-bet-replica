import heroImg from "@/assets/hero-cricket.jpg";
import { openWhatsApp } from "@/lib/wa";
import { MessageCircle, ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";

const liveOdds = [
  { match: "IND vs AUS", market: "Match Odds", a: "1.84", b: "2.12" },
  { match: "MI vs CSK", market: "IPL 2026", a: "1.95", b: "1.90" },
  { match: "RCB vs KKR", market: "Tonight", a: "2.05", b: "1.80" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b hairline">
      <div className="relative h-[78vh] min-h-[520px] max-h-[820px]">
        <img
          src={heroImg}
          alt="Live online cricket betting on yolo365games.live — IPL 2026, T20 and ODI matches"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />
        <div className="absolute inset-0 bg-aurora opacity-70" />

        <div className="container relative z-10 h-full flex flex-col justify-center max-w-4xl">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full border border-gold/30 bg-background/40 backdrop-blur text-[11px] tracking-[0.18em] uppercase text-gold/90">
              <span className="live-dot" /> IPL 2026 · Live now
            </div>
            <h1 className="font-display text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] mb-5 sm:mb-7 tracking-tight">
              Where India bets,<br className="hidden sm:block" />{" "}
              <span className="italic text-gold">brilliantly.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/75 mb-7 sm:mb-9 max-w-xl leading-relaxed font-light">
              The premium cricket exchange built for serious Indian players. Sharp IPL odds, live casino with real dealers, and withdrawals that land in five minutes — all on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <button onClick={openWhatsApp} className="btn-shimmer inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-7 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-95 transition-opacity btn-glow">
                <MessageCircle className="w-4 h-4" /> Claim your YOLO365 ID
              </button>
              <button onClick={openWhatsApp} className="inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-7 rounded-md border hairline bg-background/40 backdrop-blur text-foreground hover:border-gold/50 hover:text-gold font-medium text-sm transition-colors">
                See tonight's odds <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-7 sm:mt-10 inline-flex items-center gap-2 text-[11px] sm:text-xs text-muted-foreground self-start">
              <ShieldCheck className="w-4 h-4 text-emerald-brand flex-shrink-0" />
              Licensed · 256-bit encrypted · 1M+ Indian players trust us
            </div>
          </div>
        </div>

        {/* Live odds card — desktop overlay */}
        <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-10 w-[320px] animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div className="card-premium rounded-xl p-5 backdrop-blur-xl bg-card/70">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-brand" />
                <span className="eyebrow-emerald">Live odds</span>
              </div>
              <span className="live-dot" />
            </div>
            <div className="space-y-3">
              {liveOdds.map((o) => (
                <button key={o.match} onClick={openWhatsApp} className="w-full text-left p-3 rounded-md border hairline hover:border-gold/40 hover:bg-background/40 transition-colors group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">{o.match}</div>
                    <div className="text-[10px] text-muted-foreground tracking-wider uppercase">{o.market}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="px-2 py-1.5 rounded bg-background/60 border hairline text-center font-mono-odds text-sm text-gold group-hover:border-gold/40">{o.a}</div>
                    <div className="px-2 py-1.5 rounded bg-background/60 border hairline text-center font-mono-odds text-sm text-gold group-hover:border-gold/40">{o.b}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-t hairline bg-card/40">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x hairline">
          {[
            ["1M+", "Active players"],
            ["₹100Cr+", "Paid out in 2025"],
            ["24/7", "WhatsApp support"],
            ["60s", "ID activation"],
          ].map(([n, l]) => (
            <div key={l} className="py-6 px-4 text-center md:text-left">
              <div className="font-display text-3xl md:text-4xl text-foreground tracking-tight">{n}</div>
              <div className="text-[11px] text-muted-foreground uppercase tracking-[0.18em] mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
