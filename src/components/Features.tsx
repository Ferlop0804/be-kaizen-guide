import { Video, Brain, FileText, GitCompare, Clock, ShieldCheck } from "lucide-react";

const features = [
  { icon: Video, title: "Análisis de Video con IA", description: "Filmá el puesto con cualquier cámara. Kaizen Lab detecta automáticamente los ciclos, segmenta los pasos y mide los tiempos sin que nadie toque el cronómetro." },
  { icon: Brain, title: "Detección Inteligente", description: "Clasifica cada paso como Valor Agregado, Necesario sin Valor o Desperdicio. Detecta cuellos de botella cuando el ciclo supera el Takt Time y los muestra en el Yamazumi." },
  { icon: FileText, title: "Entregables Lean Automáticos", description: "Genera la WIS con foto por paso, el estudio de tiempos con TO→TN→TE, la hoja combinada SWCT y el Yamazumi. Lo que hoy le lleva al IE medio día, Kaizen Lab lo hace solo." },
  { icon: GitCompare, title: "Comparativo Antes y Después", description: "Medí el impacto real de cada evento Kaizen: delta por elemento, reducción de ciclo y variación de Headcount. La evidencia de mejora lista para auditoría, guardada junto al estudio." },
  { icon: Clock, title: "Ahorro de Tiempo Real", description: "Un puesto que hoy requiere 4 a 8 horas de relevamiento manual se documenta en menos de una hora. Sin refilmar, sin remarcar: analizás el video una vez y el sistema genera todos los entregables." },
  { icon: ShieldCheck, title: "Privacidad e Instalación sin Fricción", description: "Se instala en la PC del ingeniero. El video se procesa localmente y nunca sale de la planta. Sin servidor, sin nube, sin aprobación de IT corporativo." },
];

const Features = () => {
  return (
    <section id="platform" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Características
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6">
            Todo el estudio del puesto,{" "}
            <span className="gradient-text">a partir de un video</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Kaizen Lab reemplaza el cronómetro y la planilla por análisis automático del video del puesto.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold font-heading mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
