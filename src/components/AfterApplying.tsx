import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const steps = [
  { title: "Solicitud", detail: "Formulario de 2 minutos", time: "Día 0" },
  { title: "Reunión de descubrimiento", detail: "30 min con el equipo fundador", time: "Semana 1" },
  { title: "Kickoff", detail: "Definición de alcance y objetivos", time: "Semana 2" },
  { title: "Configuración", detail: "Setup de planta y línea", time: "Semana 2" },
  { title: "Carga de videos", detail: "Grabación con smartphone", time: "Semana 3" },
  { title: "Validación", detail: "Revisión conjunta de resultados", time: "Semana 4-8" },
  { title: "Resultados", detail: "Informe de impacto operativo", time: "Semana 12" },
  { title: "Founding Customer", detail: "Continuidad con condiciones preferenciales", time: "Día 90" },
];

interface AfterApplyingProps {
  onApply: () => void;
}

const AfterApplying = ({ onApply }: AfterApplyingProps) => {
  return (
    <section className="relative py-24" aria-labelledby="que-sucede-despues">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Proceso
          </span>
          <h2
            id="que-sucede-despues"
            className="mt-4 font-heading text-3xl font-bold md:text-4xl"
          >
            ¿Qué sucede después de aplicar?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Un recorrido claro y acotado de 90 días, sin sorpresas ni compromisos ocultos.
          </p>
        </div>

        <ol className="relative mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent lg:block" />
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="animate-fade-in relative"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-background font-heading text-sm font-bold text-primary">
                {String(index + 1).padStart(2, "0")}
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-primary/80">
                {step.time}
              </span>
              <h3 className="mt-1.5 font-heading text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-muted-foreground">
            Durante todo el programa trabajará directamente con el equipo fundador de Be Kaizen para
            validar la plataforma y adaptarla a necesidades reales de su operación.
          </p>
          <Button type="button" variant="hero" size="xl" className="mt-8" onClick={onApply}>
            Aplicar al Design Partner Program
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AfterApplying;
