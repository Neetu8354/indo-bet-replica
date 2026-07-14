import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { openWhatsApp } from "@/lib/wa";
import { CheckCircle2, MessageCircle, ShieldCheck, Zap, Clock, Smartphone, Lock, IndianRupee, Trophy, AlertTriangle } from "lucide-react";

const SITE = "https://www.yolo365games.live";
const URL = `${SITE}/cricket-id`;

const faqs = [
  { q: "How do I create a cricket ID online on YOLO365?", a: "Tap any 'Get ID on WhatsApp' button on this page. Our team verifies you in under 60 seconds and sends your YOLO365 cricket ID with username and password directly on WhatsApp. No forms, no email confirmations, no waiting." },
  { q: "Is a cricket betting ID legal in India?", a: "YOLO365 operates under a Curaçao eGaming license and accepts Indian players. Skill-based betting on offshore exchanges sits in a legal grey area in India — check your state laws. Telangana, Andhra Pradesh and Tamil Nadu restrict online gambling." },
  { q: "Can I create a cricket ID without documents?", a: "Yes. Basic IDs are issued without KYC documents. You only need to share documents (PAN + bank proof) if you cross the ₹50,000 monthly withdrawal limit, as per RBI guidelines." },
  { q: "What is the minimum deposit to start cricket betting?", a: "₹100 via UPI — PhonePe, GPay, Paytm, BHIM, or any UPI app. There are no deposit fees and funds reflect in your wallet within 30 seconds." },
  { q: "How fast are withdrawals on YOLO365?", a: "UPI and IMPS withdrawals land in your bank account in under 5 minutes during business hours. Bank transfers above ₹50,000 may take up to 30 minutes due to RBI processing." },
  { q: "Will my cricket ID get banned?", a: "No, as long as you bet from a single account and don't share credentials. We don't ban for winning. Multi-accounting, bonus abuse, or shared IPs are the only triggers — none of which apply to genuine players." },
  { q: "Can I use my YOLO365 cricket ID for IPL?", a: "Yes. The same ID gives you access to IPL, T20 World Cup, BBL, PSL, every international series, plus live casino, Teen Patti, Aviator and Andar Bahar." },
  { q: "What if my deposit fails?", a: "Failed deposits auto-refund to your UPI within 2 hours. If it doesn't, message us on WhatsApp with the UTR number and we'll trace it within 10 minutes." },
  { q: "Do I get a welcome bonus on my new cricket ID?", a: "Yes — 100% welcome bonus up to ₹10,000 on your first deposit, plus a ₹500 free bet on IPL matches. Bonus is credited instantly with no manual claim needed." },
  { q: "Is my money safe on YOLO365?", a: "Funds are held in a segregated client account with 256-bit SSL encryption. We've paid out ₹100Cr+ to Indian players in 2025 with zero withdrawal disputes." },
];

const steps = [
  { t: "Tap 'Get ID on WhatsApp'", d: "One click opens our verified WhatsApp number. No app download, no signup form." },
  { t: "Share your name + mobile number", d: "Our agent replies in under 60 seconds. That's it for basic verification." },
  { t: "Receive your YOLO365 ID", d: "Username, password and login link delivered straight to your chat." },
  { t: "Deposit ₹100+ via UPI", d: "Scan QR or pay to UPI ID. Funds reflect in 30 seconds, zero fees." },
  { t: "Place your first cricket bet", d: "Pick any IPL, T20 or international match. Bet from ₹10 minimum stake." },
  { t: "Withdraw winnings any time", d: "Request withdrawal on WhatsApp — money in your bank in under 5 minutes." },
];

const ld = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: "Create Cricket ID Online — Instant WhatsApp ID | YOLO365",
    description: "Create your cricket ID online on YOLO365 in 60 seconds via WhatsApp. No documents, instant UPI deposit, 5-minute withdrawal. IPL ready.",
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE}/#website` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Cricket ID", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to create a cricket ID online on YOLO365",
    totalTime: "PT1M",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.t,
      text: s.d,
    })),
  },
];

const CricketId = () => (
  <div className="min-h-screen">
    <SEO
      title="Create Cricket ID Online — Instant WhatsApp ID | YOLO365"
      description="Get your YOLO365 cricket ID in 60 seconds on WhatsApp. No documents, instant UPI deposit, 5-min withdrawal. IPL, T20 World Cup & live casino ready."
      canonical="/cricket-id"
      keywords="create cricket id online, cricket id whatsapp, online cricket id india, instant cricket betting id, IPL betting id, cricket id without documents, upi cricket betting id, yolo365 cricket id"
      jsonLd={ld}
    />
    <Header />
    <main>
      {/* Hero */}
      <section className="relative border-b hairline overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="container relative py-16 md:py-24 max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-5">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/80">Cricket ID</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full border border-gold/30 bg-background/40 backdrop-blur text-[11px] tracking-[0.18em] uppercase text-gold/90">
            <span className="live-dot" /> 60-second activation · IPL ready
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mb-5">
            Create your cricket ID online —{" "}
            <span className="italic text-gold">live in 60 seconds.</span>
          </h1>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed mb-7 max-w-2xl font-light">
            Tired of betting sites that ask for a PAN card, three documents, and 48 hours of "verification"? YOLO365 issues your cricket betting ID directly on WhatsApp — no forms, no waiting, no document drama. Deposit via UPI from ₹100. Withdraw in under 5 minutes. Built for serious Indian players.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={openWhatsApp} className="btn-shimmer inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-7 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-95 transition-opacity btn-glow">
              <MessageCircle className="w-4 h-4" /> Get my cricket ID on WhatsApp
            </button>
            <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-7 rounded-md border hairline bg-background/40 backdrop-blur text-foreground hover:border-gold/50 hover:text-gold font-medium text-sm transition-colors">
              See how it works
            </a>
          </div>
          <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-brand" /> Licensed</div>
            <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-gold" /> Instant UPI</div>
            <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-emerald-brand" /> 256-bit encrypted</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /> 5-min withdrawal</div>
          </div>
        </div>
      </section>

      {/* Problem → Agitation → Solution */}
      <section className="container py-16 max-w-3xl">
        <div className="eyebrow mb-3">The honest truth</div>
        <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-6 leading-tight">
          Most cricket IDs in India are <span className="italic text-gold">broken</span>.
        </h2>
        <div className="space-y-5 text-foreground/80 text-[15px] leading-relaxed">
          <p>
            You sign up on a "leading" betting site. Three pages of forms. Email OTP. PAN card upload. "Account under review." Then 36 hours later — banned for "suspicious activity" with ₹2,000 stuck in your wallet.
          </p>
          <p>
            Or worse: the site works fine until you win. Then withdrawal "pending verification" becomes a 14-day silence. Customer support is a chatbot in another timezone. Your money sits in limbo while IPL matches you wanted to bet on come and go.
          </p>
          <p className="text-foreground">
            <strong>YOLO365 cricket ID is built differently.</strong> No web forms — you talk to a real person on WhatsApp. Verification is instant because we trust Indian players. Deposits via UPI, withdrawals to your bank, all in minutes. We pay winners. That's the entire business.
          </p>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="container py-12">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <div className="eyebrow mb-3">Why 1M+ Indian players choose us</div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-tight">
            Everything a cricket bettor actually needs.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { i: MessageCircle, t: "60-second WhatsApp ID", d: "No signup form. No email loop. Just message us — get your ID in under a minute, any hour of the day." },
            { i: IndianRupee, t: "₹100 minimum deposit", d: "UPI, PhonePe, GPay, Paytm, BHIM, IMPS, RTGS — every Indian payment method. Zero fees, ever." },
            { i: Zap, t: "5-minute withdrawals", d: "Request to bank account complete in under 5 minutes during business hours. No 'pending verification' tricks." },
            { i: Trophy, t: "IPL + every match", d: "Same ID covers IPL, T20 World Cup, BBL, PSL, international series, plus live casino and Aviator." },
            { i: ShieldCheck, t: "Licensed & encrypted", d: "Curaçao eGaming license, 256-bit SSL, segregated client funds. ₹100Cr+ paid out in 2025." },
            { i: Smartphone, t: "No app needed", d: "Works on any phone browser. Login link delivered on WhatsApp — bookmark it and you're set." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="card-premium rounded-xl p-6">
              <Icon className="w-6 h-6 text-gold mb-3" />
              <h3 className="font-semibold text-base mb-2 tracking-tight">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to create */}
      <section id="how-it-works" className="border-y hairline bg-card/30">
        <div className="container py-16 max-w-4xl">
          <div className="eyebrow mb-3">Step-by-step</div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-8 leading-tight">
            How to create your YOLO365 cricket ID online.
          </h2>
          <ol className="space-y-3">
            {steps.map((s, i) => (
              <li key={s.t} className="flex gap-4 p-5 rounded-lg border hairline bg-background/40">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gold text-primary-foreground font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-base mb-1">{s.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <button onClick={openWhatsApp} className="btn-shimmer inline-flex items-center gap-2 h-12 px-7 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-95 transition-opacity">
              <MessageCircle className="w-4 h-4" /> Start now — message on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="container py-16 max-w-4xl">
        <div className="eyebrow mb-3">Inside your YOLO365 ID</div>
        <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-8 leading-tight">
          One ID. Every game. <span className="italic text-gold">Every market.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { t: "Cricket exchange", d: "IPL match odds, top batsman, session runs, in-play markets every ball. 5–8% sharper than bookmaker prices." },
            { t: "Live casino", d: "Real dealers from Evolution and Ezugi studios. Roulette, Blackjack, Baccarat, Dragon Tiger streamed in HD." },
            { t: "Teen Patti & Andar Bahar", d: "Live Indian card games at every stake — ₹10 tables to ₹50,000 VIP rooms." },
            { t: "Aviator & crash games", d: "1.00x to 1000x multipliers. Auto-cashout strategy support. Provably fair." },
            { t: "Football, kabaddi, tennis", d: "Premier League, La Liga, Pro Kabaddi League, ATP tour — full in-play markets." },
            { t: "24/7 WhatsApp support", d: "Real Indian agents, not chatbots. Average reply under 60 seconds, 365 days a year." },
          ].map((x) => (
            <div key={x.t} className="flex gap-3 p-5 rounded-lg border hairline bg-card/30">
              <CheckCircle2 className="w-5 h-5 text-emerald-brand flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm mb-1">{x.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{x.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & trust */}
      <section className="border-y hairline bg-card/30">
        <div className="container py-16 max-w-3xl">
          <div className="eyebrow mb-3">Player safety first</div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-6 leading-tight">
            Bet only what you can afford to lose.
          </h2>
          <div className="space-y-4 text-foreground/80 text-[15px] leading-relaxed">
            <p>
              YOLO365 is for entertainment. Cricket betting is not income — even sharp punters lose 40–45% of their stakes long-term. Set a monthly limit you'd happily spend at the cinema, and stop when it's gone.
            </p>
            <p>
              We support self-exclusion (24h, 7-day, 30-day cool-offs — message support to activate) and deposit limits on request. If betting stops being fun, talk to <a href="https://www.begambleaware.org" target="_blank" rel="noopener" className="text-gold underline">BeGambleAware</a> or call iCall India on 9152987821.
            </p>
            <p>
              Must be 18+ to create a YOLO365 cricket ID. Check your state's gambling laws before depositing.
            </p>
          </div>
          <div className="mt-6 flex items-start gap-3 p-4 rounded-md border border-gold/20 bg-gold/5">
            <AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <p className="text-xs text-foreground/70 leading-relaxed">
              <strong className="text-foreground">Bonus terms:</strong> 100% welcome up to ₹10,000 requires 5x rollover on cricket markets at odds 1.80+. ₹500 IPL free bet credited on first ₹500+ deposit. Full T&Cs on WhatsApp request.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-16 max-w-3xl">
        <div className="eyebrow mb-3">Questions everyone asks</div>
        <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-8 leading-tight">
          Cricket ID FAQs.
        </h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="p-5 rounded-md border hairline bg-card/30 group">
              <summary className="font-semibold cursor-pointer text-foreground/90 list-none flex items-start gap-3">
                <span className="text-gold mt-0.5">+</span>
                <span>{f.q}</span>
              </summary>
              <p className="text-sm text-muted-foreground mt-3 ml-6 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="container pb-16 max-w-4xl">
        <div className="eyebrow mb-4">Keep reading</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Link to="/blog/how-to-get-yolo365-cricket-betting-id-whatsapp" className="p-5 rounded-lg border hairline bg-card/40 hover:border-gold/40 transition-colors">
            <span className="text-sm font-medium">Full WhatsApp cricket ID guide →</span>
          </Link>
          <Link to="/blog/ipl-betting-tips-yolo365" className="p-5 rounded-lg border hairline bg-card/40 hover:border-gold/40 transition-colors">
            <span className="text-sm font-medium">IPL betting tips →</span>
          </Link>
          <Link to="/blog/upi-deposit-betting-india-guide" className="p-5 rounded-lg border hairline bg-card/40 hover:border-gold/40 transition-colors">
            <span className="text-sm font-medium">UPI deposit guide →</span>
          </Link>
          <Link to="/games/cricket-betting" className="p-5 rounded-lg border hairline bg-card/40 hover:border-gold/40 transition-colors">
            <span className="text-sm font-medium">Cricket markets & odds →</span>
          </Link>
          <Link to="/blog/cricket-betting-bankroll-management-india" className="p-5 rounded-lg border hairline bg-card/40 hover:border-gold/40 transition-colors">
            <span className="text-sm font-medium">Bankroll management 101 →</span>
          </Link>
          <Link to="/about" className="p-5 rounded-lg border hairline bg-card/40 hover:border-gold/40 transition-colors">
            <span className="text-sm font-medium">About YOLO365 →</span>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container pb-20">
        <div className="rounded-2xl border hairline bg-card/40 p-10 md:p-14 text-center max-w-3xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-aurora opacity-50" />
          <div className="relative">
            <div className="eyebrow-emerald mb-3">Last over — get in</div>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-4 leading-tight">
              Your cricket ID is <span className="italic text-gold">one message away.</span>
            </h2>
            <p className="text-foreground/75 mb-7 max-w-xl mx-auto">
              Tap below, send 'Hi' on WhatsApp, and you'll be placing your first IPL bet inside 60 seconds. No forms. No documents. No drama.
            </p>
            <button onClick={openWhatsApp} className="btn-shimmer inline-flex items-center gap-2 h-14 px-8 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-95 transition-opacity btn-glow">
              <MessageCircle className="w-4 h-4" /> Claim my YOLO365 cricket ID
            </button>
            <div className="mt-5 text-[11px] text-muted-foreground uppercase tracking-[0.18em]">
              18+ · Play responsibly · T&Cs apply
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default CricketId;
