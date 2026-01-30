import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Star } from "lucide-react";
import DemoRequestModal from "@/components/DemoRequestModal";
import ContactSalesModal from "@/components/ContactSalesModal";

const Plans = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isContactSalesOpen, setIsContactSalesOpen] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Ideal para pilotos y validación inicial",
      features: [
        "Análisis de procesos por video",
        "Detección básica de cuellos de botella",
        "Reporte estándar",
        "Soporte por email",
      ],
      cta: "Solicitar demo",
      action: () => setIsDemoModalOpen(true),
      highlighted: false,
    },
    {
      name: "Professional",
      description: "Para empresas en mejora continua",
      features: [
        "Todo lo del plan Starter",
        "Análisis de tiempo y movimiento (MODAPTS)",
        "Dashboards operativos",
        "Recomendaciones automáticas",
        "Soporte prioritario",
      ],
      cta: "Solicitar demo",
      action: () => setIsDemoModalOpen(true),
      highlighted: true,
      badge: "Recomendado",
    },
    {
      name: "Enterprise",
      description: "Para operaciones complejas o multi-planta",
      features: [
        "Todo lo del plan Professional",
        "Implementación on-premise",
        "Seguridad avanzada de datos",
        "Integraciones personalizadas",
        "Acompañamiento dedicado",
      ],
      cta: "Contactar ventas",
      action: () => setIsContactSalesOpen(true),
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="container mx-auto px-6 text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Planes <span className="gradient-text">Be Kaizen</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones escalables según el nivel de madurez operativa de tu empresa
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-primary/20 via-card to-card border-2 border-primary shadow-glow scale-105"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      <Star className="w-4 h-4" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold font-heading mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  type="button"
                  variant={plan.highlighted ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                  onClick={plan.action}
                >
                  {plan.cta}
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <DemoRequestModal 
        open={isDemoModalOpen} 
        onOpenChange={setIsDemoModalOpen} 
      />

      <ContactSalesModal
        open={isContactSalesOpen}
        onOpenChange={setIsContactSalesOpen}
      />
    </div>
  );
};

export default Plans;
