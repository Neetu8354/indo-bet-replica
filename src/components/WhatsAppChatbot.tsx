import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { openWhatsApp } from "@/lib/wa";

const WhatsAppChatbot = () => {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[320px] max-w-[calc(100vw-2.5rem)] rounded-2xl overflow-hidden card-premium shadow-2xl animate-in fade-in slide-in-from-bottom-3">
          <div className="bg-whatsapp p-4 flex items-center gap-3 text-white">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black">Y</div>
            <div className="flex-1">
              <div className="font-bold">Yolo365 Support</div>
              <div className="text-xs flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" /> Online · Replies in 30s</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-4 space-y-3 bg-muted/30">
            <div className="bg-card rounded-2xl rounded-tl-sm p-3 text-sm max-w-[85%]">
              👋 Hi! Welcome to Yolo365. Get your free betting ID in 60 seconds!
            </div>
            <div className="bg-card rounded-2xl rounded-tl-sm p-3 text-sm max-w-[85%]">
              💰 Bet on IPL, cricket, kabaddi & live casino with instant ₹ deposits.
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Get my ID", "IPL betting", "Casino games", "Bonus offers"].map((q) => (
                <button key={q} onClick={openWhatsApp} className="text-xs px-3 py-1.5 rounded-full bg-gold/15 text-gold border border-gold/30 hover:bg-gold hover:text-primary-foreground transition-colors">
                  {q}
                </button>
              ))}
            </div>
          </div>
          <button onClick={openWhatsApp} className="w-full bg-whatsapp text-white py-3.5 font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <MessageCircle className="w-5 h-5" /> Continue on WhatsApp
          </button>
        </div>
      )}

      {!open && showBubble && (
        <div className="bg-card border border-gold/30 rounded-2xl rounded-br-sm px-4 py-2.5 text-sm shadow-lg max-w-[240px] animate-in fade-in slide-in-from-right-3">
          <div className="font-bold text-gold mb-0.5">🏏 Get Free ID!</div>
          <div className="text-xs text-muted-foreground">Chat with us on WhatsApp now</div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-2xl animate-pulse-wa hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    </div>
  );
};

export default WhatsAppChatbot;
