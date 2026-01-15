import { Factory, Cpu, Package, Truck } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Automotriz",
    description: "Optimiza líneas de ensamblaje y procesos de manufactura automotriz.",
  },
  {
    icon: Cpu,
    title: "Electrónica",
    description: "Mejora la eficiencia en producción de componentes electrónicos.",
  },
  {
    icon: Package,
    title: "Manufactura",
    description: "Transforma operaciones de manufactura con análisis inteligente.",
  },
  {
    icon: Truck,
    title: "Logística",
    description: "Optimiza flujos de trabajo y operaciones logísticas.",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Industrias
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6">
            Soluciones para Cada{" "}
            <span className="gradient-text">Sector</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nuestra plataforma se adapta a las necesidades específicas de tu industria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm animate-fade-in text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold font-heading mb-3 text-foreground">
                {industry.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {industry.description}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
