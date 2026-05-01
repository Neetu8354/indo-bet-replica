import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { openWhatsApp } from "@/lib/wa";

const faqs = [
  { q: "How do I get a Yolo365 betting ID?", a: "Click any 'Get ID' button on this page. It opens WhatsApp where our team will share your ID and password within 60 seconds." },
  { q: "Is Yolo365 safe and legal in India?", a: "Yes. Yolo365 operates under international gaming licenses, uses bank-grade encryption, and is trusted by 1 million+ Indian players. Online betting is legal in most Indian states." },
  { q: "What is the minimum deposit?", a: "You can start with as little as ₹100. We accept UPI, PhonePe, GPay, Paytm, IMPS and net banking." },
  { q: "How long do withdrawals take?", a: "Most withdrawals are processed within 5 minutes directly to your Indian bank account. No hidden fees." },
  { q: "Can I bet on IPL and cricket matches?", a: "Absolutely. Yolo365 covers every IPL match, international cricket (T20, ODI, Test), domestic leagues, women's cricket and more — with the best odds in India." },
  { q: "Do you have live casino games?", a: "Yes — Teen Patti, Andar Bahar, Roulette, Dragon Tiger, Blackjack, Baccarat and 1000+ slot games with real live dealers." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container py-16">
      <div className="text-center mb-10">
        <div className="text-xs text-gold tracking-[0.3em] mb-2">FAQ</div>
        <h2 className="text-3xl md:text-5xl font-black">Frequently Asked <span className="text-gold">Questions</span></h2>
      </div>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="card-premium rounded-xl overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full p-5 flex items-center justify-between text-left">
              <span className="font-bold text-base md:text-lg">{f.q}</span>
              <ChevronDown className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button onClick={openWhatsApp} className="text-gold hover:underline font-semibold text-sm">
          Have more questions? Chat with us on WhatsApp →
        </button>
      </div>
    </section>
  );
};

export default FAQ;
