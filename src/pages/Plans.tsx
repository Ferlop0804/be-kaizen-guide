import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingComparison from "@/components/PricingComparison";
import AfterApplying from "@/components/AfterApplying";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Rocket, Star, ShieldCheck } from "lucide-react";
import DemoRequestModal from "@/components/DemoRequestModal";
import ContactSalesModal from "@/components/ContactSalesModal";

const Plans = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

  const openDemo = () => setIsDemoModalOpen(true);
  const openSales = () => setIsSalesModalOpen(true);

  const plans = [
    {
      name: "Design Partner Program",
      icon: Rocket,
      badge: "Cupos muy limitados",
      note:
        "Buscamos únicamente entre 3 y 5 empresas industriales para participar en la validación de la primera versión de Be Kaizen. Los participantes influirán directamente en el desarrollo del producto y accederán a beneficios exclusivos como Founding Customers.",
      priceLabel: "Sin costo durante el piloto",
      priceSuffix: "Programa exclusivo de validación de 90 días.",
      description: null as string | null,
      features: [
        "Programa de 90 días",
        "1 planta · 1 línea de producción",
        "Hasta 5 estudios activos",
        "Hasta 3 horas de video durante el piloto",
        "Dashboard Lean",
        "Yamazumi",
        "Work Combination Table",
        "Work Instructions",
        "IA para recomendaciones",
        "Capacitación inicial",
        "Soporte directo del equipo fundador",
        "Reuniones periódicas de seguimiento",
        "Fine-tuning basado en su feedback",
      ],
      cta: "Aplicar al Programa",
      action: openDemo,
      variant: "hero" as const,
      footnote: "Sin compromiso de compra al finalizar el piloto.",
      highlighted: true,
    },
    {
      name: "Founding Customer",
      icon: Star,
      badge: "Primeros clientes",
      note: null,
      priceLabel: "USD 5.000",
      priceSuffix: "por año",
      description:
        "Para empresas que completaron exitosamente el programa Design Partner y desean incorporar Be Kaizen a su operación.",
      features: [
        "1 planta",
        "Hasta 10 procesos activos",
        "Hasta 10 usuarios",
        "Hasta 100 videos por año",
        "Dashboard Lean",
        "Yamazumi",
        "Work Combination Table",
        "Work Instructions",
        "IA para recomendaciones",
        "Actualizaciones incluidas",
        "Soporte prioritario",
      ],
      cta: "Solicitar Demo",
      action: openDemo,
      variant: "outline" as const,
      footnote: "Tarifa Founding congelada mientras el contrato siga activo.",
      highlighted: false,
    },
    {
      name: "Professional",
      icon: null,
      badge: null,
      note: null,
      priceLabel: "Precio personalizado",
      priceSuffix: "según plantas y volumen",
      description:
        "Para empresas que desean escalar la mejora continua en múltiples líneas de producción.",
      features: [
        "Hasta 3 plantas",
        "Hasta 50 procesos activos",
        "Hasta 30 usuarios",
        "Hasta 500 videos por año",
        "Dashboard ejecutivo",
        "Benchmark entre líneas",
        "Exportaciones avanzadas",
        "API (Roadmap)",
        "Soporte prioritario",
      ],
      cta: "Hablar con Ventas",
      action: openSales,
      variant: "outline" as const,
      footnote: null,
      highlighted: false,
    },
    {
      name: "Enterprise",
      icon: null,
      badge: null,
      note: null,
      priceLabel: "Consultar",
      priceSuffix: "propuesta a medida",
      description: "Para grandes organizaciones industriales.",
      features: [
        "Plantas ilimitadas",
        "Procesos ilimitados",
        "Usuarios ilimitados",
        "Videos ilimitados",
        "Integraciones ERP / MES",
        "Implementación dedicada",
        "SSO",
        "SLA empresarial",
        "Roadmap conjunto",
        "Customer Success dedicado",
      ],
      cta: "Contactar Ventas",
      action: openSales,
      variant: "outline" as const,
      footnote: null,
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pb-16 pt-32">
          <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-60" />
          <div className="container relative z-10 mx-auto px-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Planes
            </span>
            <h1 className="mx-auto mt-4 max-w-4xl font-heading text-4xl font-bold text-balance md:text-5xl lg:text-6xl">
              Elija el nivel de adopción que mejor se adapte a su{" "}
              <span className="gradient-text">organización</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Desde programas de validación colaborativa hasta implementaciones Enterprise para
              múltiples plantas.
            </p>
            <p className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              Confidencialidad y NDA disponibles desde la primera conversación
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="container mx-auto px-6 pb-8" aria-label="Planes disponibles">
          <div className="mx-auto grid max-w-7xl items-start gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan, index) => (
              <article
                key={plan.name}
                className={`animate-fade-in group relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "border-2 border-primary bg-card shadow-glow-sm hover:-translate-y-1 hover:shadow-glow xl:-mt-4"
                    : "border border-border bg-card hover:-translate-y-1 hover:border-primary/50"
                }`}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-8">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                        plan.highlighted
                          ? "bg-primary text-primary-foreground"
                          : "border border-primary/40 bg-background text-primary"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <header className="mb-6 mt-2">
                  <div className="flex items-center gap-2">
                    {plan.icon && <plan.icon className="h-5 w-5 text-primary" aria-hidden="true" />}
                    <h2 className="font-heading text-xl font-bold">{plan.name}</h2>
                  </div>
                  {plan.description && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {plan.description}
                    </p>
                  )}
                  {plan.note && (
                    <p className="mt-3 rounded-xl border border-border bg-secondary/40 p-4 text-sm leading-relaxed text-muted-foreground">
                      {plan.note}
                    </p>
                  )}
                </header>

                <div className="mb-6 border-y border-border py-5">
                  <div className="font-heading text-2xl font-bold text-foreground">
                    {plan.priceLabel}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{plan.priceSuffix}</div>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button
                    type="button"
                    variant={plan.variant}
                    size="lg"
                    className="w-full"
                    onClick={plan.action}
                  >
                    {plan.cta}
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                  {plan.footnote && (
                    <p className="mt-3 text-center text-xs text-muted-foreground">
                      {plan.footnote}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <PricingComparison />

        {/* Microcopy final */}
        <section className="container mx-auto px-6 pb-24">
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-10 text-center md:p-14">
            <h2 className="font-heading text-2xl font-bold md:text-3xl">
              ¿No está seguro de cuál es el plan adecuado?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Nuestro equipo puede ayudarlo a identificar la mejor alternativa según el nivel de
              madurez Lean de su organización y sus objetivos de mejora continua.
            </p>
            <Button type="button" variant="hero" size="lg" className="mt-8" onClick={openDemo}>
              Agendar una Demo
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </section>

        <AfterApplying onApply={openDemo} />
      </main>
      <Footer />

      <DemoRequestModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
      <ContactSalesModal open={isSalesModalOpen} onOpenChange={setIsSalesModalOpen} />
    </div>
  );
};

export default Plans;
