import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AfterApplying from "@/components/AfterApplying";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Rocket, ShieldCheck } from "lucide-react";
import DemoRequestModal from "@/components/DemoRequestModal";
import ContactSalesModal from "@/components/ContactSalesModal";

const Plans = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

  const openDemo = () => setIsDemoModalOpen(true);
  const openSales = () => setIsSalesModalOpen(true);

  const plans = [
    {
      name: 'Design Partner', icon: Rocket, badge: 'Solo 5 cupos', note: null,
      priceLabel: 'USD 990 / 90 días', priceSuffix: 'Al renovar, los USD 990 se descuentan del plan Starter.',
      description: 'Para las primeras 5 empresas que quieran validar el producto junto al equipo fundador. Acceso completo a cambio de feedback estructurado.' as string | null,
      features: ['Hasta 10 puestos', 'Videos ilimitados', 'WIS con foto o esqueleto por paso', 'Estudio de tiempos (TO · TN · TE)', 'Hoja Combinada SWCT', 'Yamazumi con línea de Takt', 'Comparativo antes/después de mejoras Kaizen', 'Soporte directo del equipo fundador', 'Reuniones periódicas de seguimiento'],
      cta: 'Aplicar al programa', action: openDemo, variant: "hero" as const,
      footnote: 'NDA disponible desde la primera conversación.' as string | null, highlighted: true,
    },
    {
      name: 'Starter', icon: null, badge: null, note: null,
      priceLabel: 'USD 4.900 / año', priceSuffix: 'Facturación anual adelantada.',
      description: 'Para plantas que quieren documentar una línea de producción completa.' as string | null,
      features: ['Hasta 10 puestos', 'Videos ilimitados', 'WIS con foto o esqueleto por paso', 'Estudio de tiempos (TO · TN · TE)', 'Hoja Combinada SWCT', 'Yamazumi con línea de Takt', 'Comparativo antes/después de mejoras Kaizen', 'Soporte por email'],
      cta: 'Solicitar demo', action: openDemo, variant: "outline" as const,
      footnote: null as string | null, highlighted: false,
    },
    {
      name: 'Starter Plus', icon: null, badge: null, note: null,
      priceLabel: 'USD 6.900 / año', priceSuffix: 'Facturación anual adelantada.',
      description: 'Para plantas con entre 11 y 20 puestos activos.' as string | null,
      features: ['Hasta 20 puestos', 'Todo lo incluido en Starter', 'Soporte prioritario'],
      cta: 'Solicitar demo', action: openDemo, variant: "outline" as const,
      footnote: null as string | null, highlighted: false,
    },
    {
      name: 'Starter Pro', icon: null, badge: null, note: null,
      priceLabel: 'USD 8.500 / año', priceSuffix: 'Facturación anual adelantada.',
      description: 'Para plantas con entre 21 y 29 puestos activos.' as string | null,
      features: ['Hasta 29 puestos', 'Todo lo incluido en Starter', 'Soporte prioritario'],
      cta: 'Solicitar demo', action: openDemo, variant: "outline" as const,
      footnote: null as string | null, highlighted: false,
    },
    {
      name: 'Professional', icon: null, badge: null, note: null,
      priceLabel: 'USD 9.900 / año', priceSuffix: 'Facturación anual adelantada.',
      description: 'Para plantas que necesitan documentar hasta 30 puestos en una o más líneas.' as string | null,
      features: ['Hasta 30 puestos', 'Videos ilimitados', 'Todo lo incluido en Starter', 'Balance de línea y Headcount óptimo', 'Soporte prioritario'],
      cta: 'Solicitar demo', action: openDemo, variant: "outline" as const,
      footnote: null as string | null, highlighted: false,
    },
    {
      name: 'Business', icon: null, badge: null, note: null,
      priceLabel: 'USD 14.900 / año', priceSuffix: 'Facturación anual adelantada.',
      description: 'Para plantas que necesitan documentar toda su operación sin límite de puestos.' as string | null,
      features: ['Puestos ilimitados en 1 planta', 'Videos ilimitados', 'Todo lo incluido en Professional', 'Soporte prioritario con SLA'],
      cta: 'Solicitar demo', action: openDemo, variant: "outline" as const,
      footnote: null as string | null, highlighted: false,
    },
    {
      name: 'Enterprise', icon: null, badge: null, note: null,
      priceLabel: 'A cotizar', priceSuffix: 'Propuesta a medida.',
      description: 'Para organizaciones con múltiples plantas o requerimientos especiales de implementación.' as string | null,
      features: ['Plantas ilimitadas', 'Puestos ilimitados', 'Implementación dedicada', 'Capacitación on-site', 'Soporte con SLA empresarial'],
      cta: 'Contactar ventas', action: openSales, variant: "outline" as const,
      footnote: null as string | null, highlighted: false,
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
              Planes y <span className="gradient-text">precios</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Precio anual. Sin límite de videos. Todo se procesa en la PC de la planta.
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

        <section className="container mx-auto px-6 py-16">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <p className="rounded-2xl border border-border bg-card p-8 text-lg text-foreground">
              Todos los planes incluyen las mismas funcionalidades. La diferencia entre planes es
              únicamente la cantidad de puestos activos. Sin límite de videos en ningún plan.
            </p>
            <p className="inline-flex items-start gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              Be Kaizen es una aplicación de escritorio. El video se procesa en la PC del ingeniero
              y nunca sale de la planta. No requiere conexión a internet.
            </p>
          </div>
        </section>

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
