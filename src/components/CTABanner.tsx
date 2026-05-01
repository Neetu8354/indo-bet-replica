import { openWhatsApp } from "@/lib/wa";
import { MessageCircle } from "lucide-react";

const CTABanner = () => (
  <section className="container py-16">
    <div className="relative rounded-3xl overflow-hidden p-8 md:p-16 text-center" style={{ background: "var(--gradient-crimson)" }}>
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 50% 50%, hsl(var(--gold) / 0.4), transparent 60%)" }} />
      <div className="relative">
        <h2 className="text-3xl md:text-6xl font-black mb-4 text-foreground">Ready to <span className="text-gold">Win Big?</span></h2>
        <p className="text-base md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">Join 1 million+ Indians betting on IPL, cricket & casino. Get your free ID on WhatsApp now.</p>
        <button onClick={openWhatsApp} className="inline-flex items-center gap-3 px-8 md:px-10 h-14 md:h-16 rounded-xl bg-gold text-primary-foreground font-black text-base md:text-xl btn-glow hover:scale-105 transition-transform">
          <MessageCircle className="w-6 h-6" /> Get FREE ID on WhatsApp
        </button>
      </div>
    </div>
  </section>
);

export default CTABanner;
