import { Target, Sparkles, TrendingUp } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nosotros
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6">
              Impulsando la{" "}
              <span className="gradient-text">Mejora Continua</span>
            </h2>
          </div>

          {/* Main content */}
          <div className="space-y-8 text-center">
            <p className="text-xl text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">Be Kaizen</span> nace de la visión de transformar 
              la forma en que las industrias optimizan sus procesos. Combinamos la filosofía del 
              <span className="text-primary"> Kaizen</span> — la mejora continua paso a paso — con el poder 
              de la <span className="text-primary">inteligencia artificial</span> para crear soluciones 
              que realmente impactan la eficiencia operativa.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestra plataforma permite a ingenieros industriales y equipos de operaciones 
              analizar procesos mediante video, identificar desperdicios y oportunidades de mejora, 
              y generar insights accionables en minutos — no en días. Creemos que la excelencia 
              operacional no debe ser un objetivo inalcanzable, sino un proceso sistemático 
              potenciado por tecnología.
            </p>
          </div>

          {/* Values/pillars */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-heading mb-2 text-foreground">
                Mentalidad Kaizen
              </h3>
              <p className="text-sm text-muted-foreground">
                Pequeñas mejoras constantes que generan grandes transformaciones.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-heading mb-2 text-foreground">
                IA al Servicio
              </h3>
              <p className="text-sm text-muted-foreground">
                Tecnología que amplifica las capacidades de tu equipo, no que las reemplaza.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-heading mb-2 text-foreground">
                Resultados Medibles
              </h3>
              <p className="text-sm text-muted-foreground">
                Enfoque en métricas reales y mejoras cuantificables para tu operación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
