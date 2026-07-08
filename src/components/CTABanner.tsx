import { openWhatsApp } from "@/lib/wa";
import { MessageCircle } from "lucide-react";

const CTABanner = () => (
  <section className="container py-20">
    <div className="relative rounded-2xl overflow-hidden border hairline bg-card/40 p-12 md:p-20 text-center grain">
      <div className="absolute inset-0 bg-aurora opacity-80" />
      <div className="absolute inset-0 opacity-[0.10]" style={{ background: "radial-gradient(circle at 50% 0%, hsl(var(--gold)) 0%, transparent 55%)" }} />
      <div className="relative max-w-2xl mx-auto">
        <div className="eyebrow mb-4">A premium membership</div>
        <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-5 leading-[1.02]">
          Your seat at the <span className="italic text-gold">high table</span> is waiting.
        </h2>
        <p className="text-base md:text-lg text-foreground/75 mb-9 font-light leading-relaxed">
          One million Indians have already moved to YOLO365 for sharper odds, faster cashouts, and the kind of service usually reserved for private banks. Sixty seconds on WhatsApp is all it takes.
        </p>
        <button onClick={openWhatsApp} className="btn-shimmer inline-flex items-center gap-2 px-7 h-14 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-95 transition-opacity btn-glow">
          <MessageCircle className="w-4 h-4" /> Claim your YOLO365 ID — free
        </button>
      </div>
    </div>
  </section>
);

export default CTABanner;
