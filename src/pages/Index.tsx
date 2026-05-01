import Header from "@/components/Header";
import TickerBar from "@/components/TickerBar";
import Hero from "@/components/Hero";
import PromoSlider from "@/components/PromoSlider";
import SportsSection from "@/components/SportsSection";
import CasinoSection from "@/components/CasinoSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import PaymentMethods from "@/components/PaymentMethods";
import Providers from "@/components/Providers";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppChatbot from "@/components/WhatsAppChatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TickerBar />
      <Header />
      <main>
        <Hero />
        <PromoSlider />
        <SportsSection />
        <CasinoSection />
        <HowItWorks />
        <Features />
        <PaymentMethods />
        <Providers />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default Index;
