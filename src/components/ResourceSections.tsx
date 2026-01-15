import { FileText, Award, HelpCircle } from "lucide-react";

export const DocumentacionSection = () => {
  return (
    <section id="documentacion" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Recursos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6">
            Documentación
          </h2>
          <p className="text-lg text-muted-foreground">
            Guías completas, tutoriales y referencias técnicas para aprovechar al máximo 
            la plataforma Be Kaizen. Próximamente disponible.
          </p>
        </div>
      </div>
    </section>
  );
};

export const CasosExitoSection = () => {
  return (
    <section id="casos-exito" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Recursos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6">
            Casos de Éxito
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubre cómo empresas líderes han transformado sus operaciones con Be Kaizen. 
            Historias de éxito y resultados medibles próximamente.
          </p>
        </div>
      </div>
    </section>
  );
};

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Recursos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Respuestas a las preguntas más comunes sobre Be Kaizen, 
            implementación y funcionalidades. Próximamente disponible.
          </p>
        </div>
      </div>
    </section>
  );
};
