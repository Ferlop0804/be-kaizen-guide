import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Video, PersonStanding, ShieldAlert } from "lucide-react";
import DemoRequestModal from "./DemoRequestModal";

const modules = [
  { id: "kaizen-lab", icon: Video, name: "Kaizen Lab", available: true, description: "Análisis de video con IA · Estudio de tiempos automático · WIS · SWCT · Yamazumi · Comparativo antes/después de mejoras Kaizen", cta: "Agenda una demo" },
  { id: "ergo-lab", icon: PersonStanding, name: "Ergo Lab", available: false, description: "Análisis ergonómico asistido por IA · Detección de riesgo postural · Informe REBA/RULA automático", cta: "Anotarme en la lista de espera" },
  { id: "quality-lab", icon: ShieldAlert, name: "Quality Lab", available: false, description: "PFMEA asistido por IA · Identificación de modos de falla · Priorización automática de riesgos", cta: "Anotarme en la lista de espera" },
];

const Modules = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id="modules" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Plataforma</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4">
            Tres módulos, <span className="gradient-text">una plataforma</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {modules.map((m) => (
            <div key={m.id} id={m.id} className={`flex flex-col p-8 rounded-2xl bg-card border transition-all duration-300 scroll-mt-24 ${m.available ? "border-primary/50 shadow-glow-sm" : "border-border hover:border-primary/40"}`}>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <m.icon className="w-7 h-7 text-primary" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${m.available ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                  {m.available ? "Disponible" : "Próximamente"}
                </span>
              </div>
              <h3 className="text-2xl font-semibold font-heading mb-3 text-foreground">{m.name}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">{m.description}</p>
              <Button variant={m.available ? "hero" : "outline"} className="mt-8 w-full" onClick={() => setOpen(true)}>
                {m.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <DemoRequestModal open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default Modules;
