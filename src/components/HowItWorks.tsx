import { Upload, Cpu, FileText, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Graba con tu Smartphone",
    description: "Captura el proceso de ensamblaje o manufactura directamente con tu teléfono móvil.",
  },
  {
    step: "02",
    icon: Cpu,
    title: "Procesamiento IA",
    description: "Nuestra IA analiza automáticamente el video identificando pasos, tiempos y movimientos.",
  },
  {
    step: "03",
    icon: FileText,
    title: "Genera Reportes",
    description: "Obtén estudios de tiempo y movimiento, análisis FMEA y reportes exportables.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Optimiza Procesos",
    description: "Implementa las sugerencias de mejora y mide el impacto en productividad.",
  },
];

const HowItWorks = () => {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Cómo Funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6">
            De Video a Insights en{" "}
            <span className="gradient-text">Minutos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Un proceso simple de 4 pasos para transformar cómo analizas y optimizas tus operaciones.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {item.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mt-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold font-heading mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
