import { Zap, Shield, Headphones, Wallet, Trophy, Lock } from "lucide-react";
import { openWhatsApp } from "@/lib/wa";

const features = [
  { icon: Zap, title: "Instant Deposits", desc: "UPI, PhonePe, GPay, Paytm, IMPS — money in your ID in 30 seconds." },
  { icon: Wallet, title: "Fast ₹ Withdrawals", desc: "Cash out anytime. Withdrawals processed within 5 minutes." },
  { icon: Shield, title: "100% Safe & Secure", desc: "End-to-end encrypted. Your data and funds are always protected." },
  { icon: Headphones, title: "24/7 WhatsApp Support", desc: "Talk to a real person any time, day or night, in Hindi or English." },
  { icon: Trophy, title: "Best Cricket Odds", desc: "Industry-leading odds on IPL, T20, ODI, Test matches & more." },
  { icon: Lock, title: "Anonymous Betting", desc: "No KYC headaches. Get your ID on WhatsApp and start betting today." },
];

const Features = () => (
  <section className="container py-16">
    <div className="text-center mb-10">
      <div className="text-xs text-gold tracking-[0.3em] mb-2">WHY YOLO365</div>
      <h2 className="text-3xl md:text-5xl font-black mb-3">India's <span className="text-gold">Most Trusted</span> Betting Platform</h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map((f) => (
        <button onClick={openWhatsApp} key={f.title} className="card-premium rounded-2xl p-6 text-left">
          <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold mb-4">
            <f.icon className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg mb-1">{f.title}</h3>
          <p className="text-sm text-muted-foreground">{f.desc}</p>
        </button>
      ))}
    </div>
  </section>
);

export default Features;
