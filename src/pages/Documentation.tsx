import { FileText, BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Documentation = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "E-book: Introducción a Be Kaizen",
      description: "Guía completa sobre cómo la inteligencia artificial está transformando la mejora continua en entornos industriales. Aprende los conceptos fundamentales y casos de aplicación.",
      format: "PDF",
      pages: "24 páginas",
      buttonText: "Descargar e-book",
      url: "https://drive.google.com/uc?export=download&confirm=t&id=15KxReCRcwrkoilqKuofk_rX-2CMGFyGD",
    },
    {
      icon: FileText,
      title: "Guía de Implementación",
      description: "Manual paso a paso para implementar Be Kaizen en tu organización. Desde la configuración inicial hasta las mejores prácticas para maximizar resultados.",
      format: "Documento",
      pages: "18 páginas",
      buttonText: "Descargar guía",
      url: "https://drive.google.com/uc?export=download&confirm=t&id=1Ih1aLV1bterAUDXPrl6f0XVYivsIQHfx",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Recursos
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6">
                Documentación
              </h1>
              <p className="text-xl text-muted-foreground">
                Recursos para aprender sobre Be Kaizen y cómo implementar 
                la mejora continua impulsada por IA en tu organización.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl border border-border p-8 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <resource.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold font-heading mb-3 text-foreground">
                    {resource.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-secondary rounded-full">{resource.format}</span>
                    <span>{resource.pages}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full gap-2"
                    asChild
                  >
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4" />
                      {resource.buttonText}
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                Más Recursos Próximamente
              </h2>
              <p className="text-muted-foreground">
                Estamos preparando tutoriales en video, webinars y documentación técnica 
                detallada para ayudarte a sacar el máximo provecho de Be Kaizen.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
