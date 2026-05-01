import { openWhatsApp } from "@/lib/wa";
import { MessageCircle, Mail, Clock } from "lucide-react";

const Footer = () => {
  const cols = {
    "Sports": ["Cricket", "IPL Betting", "Kabaddi", "Tennis", "Horse Racing", "Esports"],
    "Casino": ["Teen Patti", "Andar Bahar", "Roulette", "Blackjack", "Dragon Tiger", "Slots"],
    "Help": ["Get ID", "Deposit", "Withdraw", "FAQs", "Live Support", "Rules"],
  };
  return (
    <footer className="border-t border-gold/20 bg-card/40 mt-12">
      <div className="container py-14">
        <div className="grid md:grid-cols-5 gap-10 mb-10">
          <div className="md:col-span-2">
            <button onClick={openWhatsApp} className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center font-black text-xl text-primary-foreground">Y</div>
              <div>
                <div className="text-2xl font-black text-gold">YOLO365</div>
                <div className="text-[10px] text-muted-foreground tracking-[0.2em]">BOOKMAKER</div>
              </div>
            </button>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">India's #1 online cricket betting and live casino platform. Trusted by 1 million+ players. Get your ID on WhatsApp in 60 seconds.</p>
            <div className="space-y-2 text-sm">
              <button onClick={openWhatsApp} className="flex items-center gap-2 text-gold hover:underline">
                <MessageCircle className="w-4 h-4" /> WhatsApp Support
              </button>
              <div className="flex items-center gap-2 text-muted-foreground"><Clock className="w-4 h-4" /> 24/7 Available</div>
              <div className="flex items-center gap-2 text-muted-foreground"><Mail className="w-4 h-4" /> support@yolo365.live</div>
            </div>
          </div>
          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold mb-4 text-sm tracking-wide">{title}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l}>
                    <button onClick={openWhatsApp} className="text-sm text-muted-foreground hover:text-gold transition-colors">{l}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between gap-4 items-center">
          <div className="text-xs text-muted-foreground">© 2026 Yolo365 Bookmaker. All rights reserved. Play responsibly. 18+ only.</div>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <button onClick={openWhatsApp} className="hover:text-gold">Terms</button>
            <button onClick={openWhatsApp} className="hover:text-gold">Privacy</button>
            <button onClick={openWhatsApp} className="hover:text-gold">Responsible Gaming</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
