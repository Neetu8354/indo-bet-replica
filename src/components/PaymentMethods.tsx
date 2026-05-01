import { openWhatsApp } from "@/lib/wa";

const PaymentMethods = () => {
  const methods = ["UPI", "PhonePe", "Google Pay", "Paytm", "IMPS", "Net Banking", "RTGS", "Bank Transfer"];
  return (
    <section className="container py-14">
      <div className="card-premium rounded-2xl p-8 md:p-12 text-center">
        <div className="text-xs text-gold tracking-[0.3em] mb-2">INDIAN PAYMENTS</div>
        <h2 className="text-2xl md:text-4xl font-black mb-3">Deposit & Withdraw in <span className="text-gold">₹ INR</span></h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">All major Indian payment methods supported with zero transaction fees.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {methods.map((m) => (
            <button onClick={openWhatsApp} key={m} className="px-5 h-12 rounded-xl bg-muted border border-gold/20 font-bold text-sm hover:border-gold hover:text-gold transition-colors">
              {m}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
