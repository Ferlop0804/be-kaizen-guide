import { Zap, Video, BarChart3, Brain, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Análisis de Video con IA",
    description: "Captura procesos con tu smartphone y obtén análisis automáticos de tiempos y movimientos.",
  },
  {
    icon: Brain,
    title: "Detección Inteligente",
    description: "Identifica automáticamente actividades de valor agregado y desperdicios en tus procesos.",
  },
  {
    icon: BarChart3,
    title: "Reportes Instantáneos",
    description: "Genera estudios de tiempos y movimientos en minutos, no en días.",
  },
  {
    icon: Zap,
    title: "Sugerencias de Mejora",
    description: "Recibe recomendaciones basadas en IA para optimizar tus estaciones de trabajo.",
  },
  {
    icon: Clock,
    title: "Ahorro de Tiempo",
    description: "Reduce el tiempo de análisis de procesos hasta en un 85%.",
  },
  {
    icon: Shield,
    title: "Análisis FMEA",
    description: "Identifica riesgos potenciales y modos de falla de forma proactiva.",
  },
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
            Potencia la Productividad de tus Ingenieros{" "}
            <span className="gradient-text">4X</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Deja atrás Excel y cronómetros. Nuestra plataforma impulsada por IA elimina la necesidad de recolección manual de datos.
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
