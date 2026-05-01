import { openWhatsApp } from "@/lib/wa";

const items = [
  "🏏 IND vs AUS · Live Now",
  "🔥 IPL 2026 · 200% Bonus",
  "🎰 Teen Patti · ₹50,000 Jackpot",
  "💰 ₹15,000 Welcome Bonus",
  "⚡ Instant UPI Withdrawals",
  "🎯 Best Cricket Odds in India",
  "🏆 PKL Live · Kabaddi Betting",
];

const TickerBar = () => (
  <div className="bg-secondary text-secondary-foreground py-2 overflow-hidden border-b border-gold/30">
    <div className="flex gap-12 marquee whitespace-nowrap text-sm font-semibold">
      {[...items, ...items].map((t, i) => (
        <button key={i} onClick={openWhatsApp} className="hover:text-gold transition-colors">
          {t}
        </button>
      ))}
    </div>
  </div>
);

export default TickerBar;
