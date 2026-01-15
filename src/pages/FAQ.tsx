import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoRequestModal from "@/components/DemoRequestModal";

const FAQ = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "¿Qué es Be Kaizen?",
          a: "Be Kaizen es una plataforma de inteligencia artificial diseñada para optimizar procesos industriales. Utilizando análisis de video, permite a ingenieros industriales identificar oportunidades de mejora, medir tiempos de ciclo y generar insights accionables de manera automatizada.",
        },
        {
          q: "¿Qué tipos de procesos puede analizar?",
          a: "Be Kaizen está diseñado para analizar procesos de manufactura, ensamblaje, logística interna y cualquier operación que pueda capturarse en video. Es especialmente efectivo en líneas de producción, estaciones de trabajo manuales y procesos de empaque.",
        },
        {
          q: "¿Necesito equipos especiales para usar Be Kaizen?",
          a: "No. Be Kaizen funciona con video capturado desde smartphones o tablets estándar. No requieres cámaras industriales especiales ni infraestructura compleja para comenzar.",
        },
      ],
    },
    {
      category: "Demo y Onboarding",
      questions: [
        {
          q: "¿Cómo funciona la demo?",
          a: "En la demo personalizada, analizamos un proceso real de tu operación (puedes enviarnos un video). Te mostramos cómo Be Kaizen identifica oportunidades de mejora y genera reportes automáticamente. La sesión dura aproximadamente 30 minutos.",
        },
        {
          q: "¿Cuánto tiempo toma implementar Be Kaizen?",
          a: "La implementación inicial puede completarse en pocos días. El onboarding incluye capacitación para tu equipo y configuración de la plataforma según las características de tus procesos.",
        },
      ],
    },
    {
      category: "Seguridad y Datos",
      questions: [
        {
          q: "¿Cómo se protegen los videos y datos de mi empresa?",
          a: "Todos los datos se transmiten y almacenan con encriptación de grado empresarial. Los videos se procesan en servidores seguros y puedes configurar políticas de retención según tus requerimientos de compliance.",
        },
        {
          q: "¿Puedo usar Be Kaizen en instalaciones con restricciones de seguridad?",
          a: "Sí. Ofrecemos opciones de despliegue que se adaptan a diferentes requerimientos de seguridad. Contactanos para discutir las opciones disponibles para tu industria.",
        },
      ],
    },
    {
      category: "Precios",
      questions: [
        {
          q: "¿Cuál es el modelo de precios?",
          a: "El precio depende del volumen de análisis y las funcionalidades requeridas. Agenda una demo para recibir una propuesta personalizada según las necesidades de tu operación.",
        },
        {
          q: "¿Hay un período de prueba?",
          a: "Ofrecemos un piloto inicial para que puedas evaluar los resultados en tu operación antes de un compromiso a largo plazo. Los detalles se discuten durante la demo.",
        },
      ],
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
                Soporte
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6">
                Preguntas Frecuentes
              </h1>
              <p className="text-xl text-muted-foreground">
                Respuestas a las preguntas más comunes sobre Be Kaizen, 
                implementación, seguridad y precios.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-12">
              {faqs.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h2 className="text-xl font-semibold font-heading mb-6 text-foreground">
                    {section.category}
                  </h2>
                  <div className="space-y-4">
                    {section.questions.map((faq, faqIndex) => {
                      const globalIndex = sectionIndex * 100 + faqIndex;
                      const isOpen = openIndex === globalIndex;
                      
                      return (
                        <div 
                          key={faqIndex}
                          className="bg-card rounded-xl border border-border overflow-hidden"
                        >
                          <button
                            onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left"
                          >
                            <span className="font-medium text-foreground pr-4">
                              {faq.q}
                            </span>
                            <ChevronDown 
                              className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-4">
                              <p className="text-muted-foreground">
                                {faq.a}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold font-heading text-foreground">
                ¿Tenés más preguntas?
              </h2>
              <p className="text-muted-foreground">
                Agenda una demo y conversemos sobre cómo Be Kaizen 
                puede adaptarse a tus necesidades específicas.
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

export default FAQ;
