import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { openWhatsApp } from "@/lib/wa";
import { ShieldCheck, Award, Users, Zap, Lock, HeartHandshake } from "lucide-react";

const SITE = "https://www.yolo365games.live";

const About = () => {
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${SITE}/about#webpage`,
      url: `${SITE}/about`,
      name: "About YOLO365 — India's Trusted Online Cricket Betting Exchange",
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE}/about` },
      ],
    },
  ];

  const values = [
    { icon: ShieldCheck, title: "Licensed & Regulated", desc: "Operating under Curaçao eGaming license with full KYC compliance for Indian players." },
    { icon: Zap, title: "60-Second ID Activation", desc: "WhatsApp-first onboarding — fastest cricket betting ID delivery in India." },
    { icon: Lock, title: "256-bit SSL Security", desc: "Bank-grade encryption protects every deposit, withdrawal, and personal detail." },
    { icon: HeartHandshake, title: "Responsible Gaming", desc: "Self-exclusion, deposit limits, and 18+ verification on every account." },
    { icon: Award, title: "1000+ Provider Games", desc: "Evolution, Ezugi, Pragmatic Play, Spribe, Betsoft and 50+ more studios." },
    { icon: Users, title: "5 Lakh+ Active Users", desc: "India's fastest-growing cricket betting community since 2021." },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About YOLO365 — India's Trusted Cricket Betting ID & Live Casino Site"
        description="Learn about YOLO365 — India's most trusted online cricket betting exchange since 2021. 5 lakh+ users, instant UPI deposits, 5-minute withdrawals, licensed & regulated."
        canonical="/about"
        keywords="about YOLO365, YOLO365 review, trusted cricket betting site India, licensed online betting India, YOLO365 company"
        jsonLd={ld}
      />
      <Header />
      <main className="container py-16">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <a href="/" className="hover:text-gold">Home</a> <span className="mx-2">/</span> <span className="text-foreground/80">About</span>
        </nav>

        <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-7">A different kind of <span className="italic text-gold">betting house</span>.</h1>
        <p className="text-lg md:text-xl text-foreground/75 max-w-3xl leading-relaxed mb-14 font-light">
          YOLO365 was built for Indian players who'd outgrown the noise of mass-market exchanges. Since 2021, over five lakh discerning bettors have come to us for sharper odds, a quieter interface, and the kind of personal service that treats every account like a private membership.
        </p>

        <section className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-5">Our mission</h2>
          <p className="text-foreground/80 leading-relaxed max-w-3xl text-lg font-light">
            We believe cricket betting in India deserves better than clunky apps and call-centre support. So we built a platform that speaks your language — Hindi-first WhatsApp service, INR-native UPI, no endless KYC paperwork. Just one message, sixty seconds, and you're on the field for IPL, BBL, or any market that moves you.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Why 5 Lakh+ Indians Trust YOLO365</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-xl border hairline bg-card/40 hover:border-gold/40 transition-colors">
                <v.icon className="w-7 h-7 text-gold mb-3" />
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">YOLO365 by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { n: "5L+", l: "Active Users" },
              { n: "60s", l: "ID Activation" },
              { n: "5 min", l: "Withdrawals" },
              { n: "1000+", l: "Casino Games" },
            ].map((s) => (
              <div key={s.l} className="p-6 rounded-xl border hairline bg-card/40 text-center">
                <div className="text-3xl font-extrabold text-gold">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border hairline bg-card/40 p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to join India's #1 cricket betting community?</h2>
          <p className="text-muted-foreground mb-6">Get your YOLO365 betting ID on WhatsApp in 60 seconds.</p>
          <button onClick={openWhatsApp} className="px-7 h-12 rounded-md bg-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Get ID on WhatsApp
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
