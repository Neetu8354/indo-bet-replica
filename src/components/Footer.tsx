import { openWhatsApp } from "@/lib/wa";
import { MessageCircle, Mail, Clock } from "lucide-react";

const Footer = () => {
  const cols = {
    "Sports": ["Cricket", "IPL Betting", "Kabaddi", "Tennis", "Horse Racing", "Esports"],
    "Casino": ["Teen Patti", "Andar Bahar", "Roulette", "Blackjack", "Dragon Tiger", "Slots"],
    "Help": ["Get ID", "Deposit", "Withdraw", "FAQs", "Live Support", "Rules"],
  };
  return (
    <footer className="border-t hairline bg-card/40 mt-12">
      <div className="container py-14">
        <div className="grid md:grid-cols-5 gap-10 mb-10">
          <div className="md:col-span-2">
            <button onClick={openWhatsApp} className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-md bg-gold flex items-center justify-center font-bold text-lg text-primary-foreground">Y</div>
              <div className="leading-none">
                <div className="text-lg font-semibold tracking-tight">YOLO<span className="text-gold">365</span></div>
                <div className="text-[9px] text-muted-foreground tracking-[0.22em] mt-0.5">BOOKMAKER</div>
              </div>
            </button>
            <p className="text-sm text-muted-foreground mb-5 max-w-sm leading-relaxed">India's trusted online cricket betting and live casino exchange. Get your ID on WhatsApp in 60 seconds.</p>
            <div className="space-y-2 text-sm">
              <button onClick={openWhatsApp} className="flex items-center gap-2 text-foreground/85 hover:text-gold transition-colors">
                <MessageCircle className="w-4 h-4 text-gold" /> WhatsApp support
              </button>
              <div className="flex items-center gap-2 text-muted-foreground"><Clock className="w-4 h-4" /> Available 24/7</div>
              <div className="flex items-center gap-2 text-muted-foreground"><Mail className="w-4 h-4" /> support@yolo365.live</div>
            </div>
          </div>
          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-xs tracking-[0.18em] uppercase text-foreground/90">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <button onClick={openWhatsApp} className="text-sm text-muted-foreground hover:text-gold transition-colors">{l}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t hairline flex flex-col md:flex-row justify-between gap-4 items-center">
          <div className="text-xs text-muted-foreground">© 2026 Yolo365 Bookmaker. All rights reserved. Play responsibly. 18+ only.</div>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <button onClick={openWhatsApp} className="hover:text-gold transition-colors">Terms</button>
            <button onClick={openWhatsApp} className="hover:text-gold transition-colors">Privacy</button>
            <button onClick={openWhatsApp} className="hover:text-gold transition-colors">Responsible Gaming</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
