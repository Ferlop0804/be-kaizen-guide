import { Target, Sparkles, TrendingUp, Eye, Lightbulb, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Nosotros
                </span>
                <h1 className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6">
                  Impulsando la{" "}
                  <span className="gradient-text">Mejora Continua</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Combinamos la filosofía Kaizen con inteligencia artificial 
                  para transformar la eficiencia operativa de las industrias.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold font-heading text-foreground">Nuestra Visión</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ser la plataforma de referencia para la optimización de procesos industriales 
                  impulsada por IA en Latinoamérica. Creemos que cada fábrica, cada línea de producción, 
                  tiene el potencial de alcanzar la excelencia operativa cuando cuenta con las 
                  herramientas correctas.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold font-heading text-foreground">Nuestra Misión</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Democratizar el acceso a herramientas avanzadas de análisis de procesos. 
                  Permitimos que ingenieros industriales y equipos de operaciones transformen 
                  video de smartphone en insights accionables — sin necesidad de infraestructura 
                  compleja o consultorías prolongadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold font-heading text-center text-foreground">
                El Origen de Be Kaizen
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Be Kaizen</span> nace de la visión de transformar 
                la forma en que las industrias optimizan sus procesos. Durante años, el análisis de tiempos 
                y movimientos ha sido un proceso manual, lento y propenso a errores. Los ingenieros 
                industriales pasaban horas con cronómetros y hojas de cálculo, perdiendo tiempo valioso 
                que podría invertirse en mejoras reales.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Combinamos la filosofía del <span className="text-primary font-semibold">Kaizen</span> — 
                la mejora continua paso a paso, nacida en la manufactura japonesa — con el poder de la 
                <span className="text-primary font-semibold"> inteligencia artificial</span> para crear 
                soluciones que realmente impactan la eficiencia operativa.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestra plataforma permite a ingenieros industriales y equipos de operaciones 
                analizar procesos mediante video, identificar desperdicios y oportunidades de mejora, 
                y generar insights accionables en minutos — no en días. Creemos que la excelencia 
                operacional no debe ser un objetivo inalcanzable, sino un proceso sistemático 
                potenciado por tecnología.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold font-heading text-center mb-12 text-foreground">
                Nuestros Pilares
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 rounded-2xl bg-card border border-border">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading mb-3 text-foreground">
                    Mentalidad Kaizen
                  </h3>
                  <p className="text-muted-foreground">
                    Pequeñas mejoras constantes que generan grandes transformaciones. 
                    Cada 1% cuenta, cada ciclo puede optimizarse.
                  </p>
                </div>

                <div className="text-center p-8 rounded-2xl bg-card border border-border">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading mb-3 text-foreground">
                    IA al Servicio
                  </h3>
                  <p className="text-muted-foreground">
                    Tecnología que amplifica las capacidades de tu equipo, no que las reemplaza. 
                    El ingeniero siempre tiene el control.
                  </p>
                </div>

                <div className="text-center p-8 rounded-2xl bg-card border border-border">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading mb-3 text-foreground">
                    Resultados Medibles
                  </h3>
                  <p className="text-muted-foreground">
                    Enfoque en métricas reales y mejoras cuantificables. 
                    Sin promesas vacías, solo datos y acciones concretas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold font-heading text-foreground">
                  Nuestro Equipo de Liderazgo
                </h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Profesionales con experiencia en industria, tecnología y gestión empresarial, 
                  comprometidos con la excelencia operativa.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
                {/* Fernando Lopez */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg">
                    <img 
                      src="/assets/fernando-lopez.png" 
                      alt="Lic. Fernando Lopez - CEO & Founder" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground">
                    Lic. Fernando Lopez
                  </h3>
                  <p className="text-primary font-semibold mt-1">
                    CEO & Founder
                  </p>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    Profesional con amplia trayectoria en mejora continua y excelencia operativa. 
                    Lidera Be Kaizen aplicando metodologías probadas para optimizar procesos, generar eficiencia sostenible y transformar organizaciones desde adentro.
                  </p>
                </div>

                {/* Silvia Farall */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg">
                    <img 
                      src="/assets/silvia-farall.png" 
                      alt="Contadora Silvia Farall - General Manager" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground">
                    Contadora Silvia Farall
                  </h3>
                  <p className="text-primary font-semibold mt-1">
                    General Manager
                  </p>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    Experta en gestión operativa y financiera con sólida trayectoria en administración empresarial. 
                    Asegura la excelencia en la ejecución y operaciones de Be Kaizen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
