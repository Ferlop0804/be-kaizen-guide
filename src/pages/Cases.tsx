import { Building2, Clock, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoRequestModal from "@/components/DemoRequestModal";

const Cases = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const placeholderCases = [
    {
      industry: "Manufactura Automotriz",
      challenge: "Optimización de líneas de ensamblaje",
      icon: Building2,
    },
    {
      industry: "Industria Alimenticia",
      challenge: "Reducción de tiempos de ciclo en empaque",
      icon: Clock,
    },
    {
      industry: "Electrónica de Consumo",
      challenge: "Mejora de eficiencia en estaciones de trabajo",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Resultados Reales
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6">
                Casos de Éxito
              </h1>
              <p className="text-xl text-muted-foreground">
                Descubre cómo empresas están transformando sus operaciones 
                con análisis de procesos impulsado por IA.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Cases */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                  Próximamente: Historias de Transformación
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Estamos documentando los resultados de nuestros primeros clientes. 
                  Pronto compartiremos casos detallados con métricas reales y aprendizajes clave.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {placeholderCases.map((caseItem, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl border border-border border-dashed p-8 text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                      <caseItem.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold font-heading mb-2 text-foreground">
                      {caseItem.industry}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {caseItem.challenge}
                    </p>
                    <div className="mt-4 text-xs text-primary font-medium">
                      Caso en desarrollo
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold font-heading text-foreground">
                ¿Querés ser parte de nuestros casos de éxito?
              </h2>
              <p className="text-muted-foreground">
                Agenda una demo para explorar cómo Be Kaizen puede ayudarte 
                a optimizar tus procesos y generar resultados medibles.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => setIsDemoModalOpen(true)}
              >
                Agenda una Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <DemoRequestModal 
        open={isDemoModalOpen} 
        onOpenChange={setIsDemoModalOpen} 
      />
    </div>
  );
};

export default Cases;
