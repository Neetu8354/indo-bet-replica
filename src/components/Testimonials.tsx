import { openWhatsApp } from "@/lib/wa";
import { Star } from "lucide-react";

const reviews = [
  { n: "Rahul S.", c: "Mumbai", t: "Got my ID in 1 minute on WhatsApp. Withdrew ₹50,000 same day. Best site for IPL betting!" },
  { n: "Priya K.", c: "Delhi", t: "Teen Patti live tables are amazing. Real dealers, fast deposits via UPI. Trusted!" },
  { n: "Arjun M.", c: "Bangalore", t: "Been using Yolo365 for 2 years. Never had a single issue with payouts. 24/7 support is real." },
  { n: "Vikram T.", c: "Hyderabad", t: "Best cricket odds in India. The kabaddi market is huge during PKL season." },
];

const Testimonials = () => (
  <section className="container py-16">
    <div className="text-center mb-10">
      <div className="text-xs text-gold tracking-[0.3em] mb-2">PLAYER REVIEWS</div>
      <h2 className="text-3xl md:text-5xl font-black mb-3">Loved by <span className="text-gold">1 Million+</span> Indians</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {reviews.map((r) => (
        <button onClick={openWhatsApp} key={r.n} className="card-premium rounded-2xl p-6 text-left">
          <div className="flex gap-0.5 mb-3 text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
          </div>
          <p className="text-sm text-foreground/90 mb-4 leading-relaxed">"{r.t}"</p>
          <div className="text-sm font-bold">{r.n}</div>
          <div className="text-xs text-muted-foreground">{r.c}</div>
        </button>
      ))}
    </div>
  </section>
);

export default Testimonials;
