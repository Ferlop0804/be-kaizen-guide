import { FileText, Timer, LineChart, BarChart3 } from "lucide-react";

const outputs = [
  { icon: FileText, title: "Hoja de Instrucciones de Trabajo (WIS)", description: "Con foto o esqueleto por paso, puntos clave y JKK. Lista para pegar en el puesto o enviar a auditoría." },
  { icon: Timer, title: "Estudio de Tiempos", description: "TO, Factor de Valoración, TN, Suplemento OIT y TE por elemento. Cadena completa automática." },
  { icon: LineChart, title: "Hoja Combinada de Trabajo (SWCT)", description: "Manual, máquina y desplazamiento graficados contra el Takt Time." },
  { icon: BarChart3, title: "Yamazumi del Puesto", description: "VA, NNVA y NVA apilados con línea de Takt visible. Comparativo antes/después de cada mejora." },
];

const LabOutputs = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Entregables</span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4">
          ¿Qué genera <span className="gradient-text">Kaizen Lab</span>?
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {outputs.map((o, i) => (
          <div key={o.title} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <o.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold font-heading mb-3 text-foreground">{o.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{o.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LabOutputs;
