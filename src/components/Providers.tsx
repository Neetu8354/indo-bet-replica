import { openWhatsApp } from "@/lib/wa";

const providers = ["EVOLUTION", "PRAGMATIC", "EZUGI", "SUPERSPADE", "BETGAMES", "PLAYTECH", "MICROGAMING", "NETENT", "RED TIGER", "HOTROAD"];

const Providers = () => (
  <section className="py-12 border-y border-gold/10 bg-card/30 overflow-hidden">
    <div className="container mb-6 text-center">
      <div className="text-xs text-gold tracking-[0.3em]">TRUSTED GAME PROVIDERS</div>
    </div>
    <div className="relative">
      <div className="flex gap-12 marquee whitespace-nowrap">
        {[...providers, ...providers].map((p, i) => (
          <button key={i} onClick={openWhatsApp} className="text-2xl md:text-3xl font-black text-muted-foreground/50 hover:text-gold transition-colors tracking-widest">
            {p}
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default Providers;
