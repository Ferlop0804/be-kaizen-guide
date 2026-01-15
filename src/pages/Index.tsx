import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
