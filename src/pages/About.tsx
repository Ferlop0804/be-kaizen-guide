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

        {/* Team Philosophy */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold font-heading text-foreground">
                Un Equipo con Mentalidad Industrial
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestro equipo combina experiencia en ingeniería industrial, desarrollo de software 
                y machine learning. Entendemos los desafíos reales de la manufactura porque hemos 
                trabajado en plantas de producción, no solo en oficinas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Esa experiencia de primera mano es lo que nos permite crear una plataforma 
                que realmente resuelve problemas — no solo una tecnología impresionante 
                sin aplicación práctica.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
