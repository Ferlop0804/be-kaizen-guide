import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import DemoRequestModal from "./DemoRequestModal";

const CTA = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-primary/10" />
            <div className="absolute inset-0 bg-hero-glow opacity-50" />
            
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                                  linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />

            <div className="relative z-10 py-20 px-8 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 max-w-4xl mx-auto">
                ¿Listo para Transformar tu{" "}
                <span className="gradient-text">Mejora Continua?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Basado en principios Kaizen, potenciado por inteligencia artificial</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  type="button"
                  variant="hero" 
                  size="xl"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  Agenda una Demo Gratis
                  <ChevronRight className="w-5 h-5" />
                </Button>
                <Button 
                  variant="hero-outline" 
                  size="xl"
                  onClick={() => window.location.href = "/plans"}
                >
                  Conoce los Planes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </>
  );
};

export default CTA;
