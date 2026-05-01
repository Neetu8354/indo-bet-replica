import { openWhatsApp } from "@/lib/wa";
import { MessageCircle, Menu, X, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const nav = ["Sports", "Cricket", "Live Casino", "Slots", "Promotions", "Support"];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/85 border-b border-gold/20">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <button onClick={openWhatsApp} className="flex items-center gap-2" aria-label="Yolo365 home">
          <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center font-black text-xl text-primary-foreground btn-glow">
            Y
          </div>
          <div className="leading-none">
            <div className="text-2xl font-black text-gold tracking-tight">YOLO365</div>
            <div className="text-[10px] text-muted-foreground tracking-[0.2em]">BOOKMAKER</div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <button key={n} onClick={openWhatsApp} className="text-sm font-medium hover:text-gold transition-colors">
              {n}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={openWhatsApp} className="hidden md:inline-flex items-center gap-2 px-4 h-10 rounded-lg border border-gold/40 text-gold hover:bg-gold/10 text-sm font-semibold transition-colors">
            <User className="w-4 h-4" /> Login
          </button>
          <button onClick={openWhatsApp} className="inline-flex items-center gap-2 px-4 md:px-5 h-10 rounded-lg bg-gold text-primary-foreground font-bold text-sm btn-glow hover:scale-105 transition-transform">
            <MessageCircle className="w-4 h-4" /> Get ID
          </button>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-gold">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-background">
          <div className="container py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <button key={n} onClick={openWhatsApp} className="text-left py-3 px-2 rounded hover:bg-muted text-sm font-medium">
                {n}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
