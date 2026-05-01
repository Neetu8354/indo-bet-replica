import { openWhatsApp } from "@/lib/wa";
import { MessageCircle } from "lucide-react";

const steps = [
  { n: "1", t: "Click Get ID", d: "Tap any 'Get ID' button — opens WhatsApp instantly." },
  { n: "2", t: "Send 'Hi'", d: "Our team replies in under 60 seconds with your ID & password." },
  { n: "3", t: "Deposit ₹", d: "Add money via UPI, PhonePe, GPay or any Indian payment method." },
  { n: "4", t: "Bet & Win", d: "Place your bets on cricket, casino & more. Withdraw anytime." },
];

const HowItWorks = () => (
  <section className="container py-16">
    <div className="text-center mb-10">
      <div className="text-xs text-gold tracking-[0.3em] mb-2">GET STARTED</div>
      <h2 className="text-3xl md:text-5xl font-black mb-3">Get Your ID in <span className="text-gold">60 Seconds</span></h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {steps.map((s) => (
        <div key={s.n} className="card-premium rounded-2xl p-6 relative">
          <div className="absolute -top-4 -left-2 text-7xl font-black text-gold/20 leading-none">{s.n}</div>
          <div className="relative">
            <h3 className="font-bold text-lg mb-2">{s.t}</h3>
            <p className="text-sm text-muted-foreground">{s.d}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-10">
      <button onClick={openWhatsApp} className="inline-flex items-center gap-2 px-8 h-14 rounded-xl bg-gold text-primary-foreground font-bold btn-glow hover:scale-105 transition-transform text-lg">
        <MessageCircle className="w-5 h-5" /> Start on WhatsApp
      </button>
    </div>
  </section>
);

export default HowItWorks;
