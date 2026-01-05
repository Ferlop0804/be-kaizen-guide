import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LogoDemo = () => {
  const variants = [
    {
      id: "legible",
      name: "BK Legible",
      description: "Letras B y K claramente reconocibles con formas fusionadas. Ideal para uso corporativo donde la legibilidad es prioritaria.",
    },
    {
      id: "abstract",
      name: "BK Abstracto",
      description: "Interpretación geométrica con círculos y ángulos. Balance entre reconocimiento y modernidad.",
    },
    {
      id: "minimal",
      name: "BK Minimalista",
      description: "Isotipo ultra simplificado. Perfecto para favicon, apps móviles y usos donde el espacio es limitado.",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-heading mb-4">
            Variantes del Logo <span className="text-primary">BeKaizen</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tres niveles de abstracción para diferentes contextos de uso. 
            Compara las opciones y elige la que mejor represente la identidad de marca.
          </p>
        </div>

        {/* Logo Grid - Large Display */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {variants.map((variant) => (
            <div
              key={variant.id}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              {/* Logo Display */}
              <div className="aspect-square bg-background rounded-xl flex items-center justify-center mb-6 border border-border/50">
                <Logo
                  variant={variant.id}
                  size="lg"
                  showText={false}
                  className="scale-[2.5]"
                />
              </div>

              {/* With Text */}
              <div className="flex justify-center mb-6 py-4 bg-background rounded-lg border border-border/50">
                <Logo variant={variant.id} size="lg" showText={true} />
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold font-heading mb-2 text-center">
                {variant.name}
              </h3>
              <p className="text-muted-foreground text-sm text-center">
                {variant.description}
              </p>
            </div>
          ))}
        </div>

        {/* Size Comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-heading mb-6 text-center">
            Escalabilidad
          </h2>
          <div className="bg-card border border-border rounded-2xl p-8">
            {variants.map((variant) => (
              <div
                key={variant.id}
                className="flex items-center gap-8 py-6 border-b border-border/50 last:border-0"
              >
                <span className="w-32 text-sm font-medium text-muted-foreground">
                  {variant.name}
                </span>
                <div className="flex items-center gap-8">
                  <Logo variant={variant.id} size="sm" showText={false} />
                  <Logo variant={variant.id} size="md" showText={false} />
                  <Logo variant={variant.id} size="lg" showText={false} />
                  <Logo variant={variant.id} size="sm" showText={true} />
                  <Logo variant={variant.id} size="md" showText={true} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dark/Light Context */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-heading mb-6 text-center">
            Contextos de Uso
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Dark Context */}
            <div className="bg-[#0a1628] rounded-2xl p-8 border border-border">
              <h3 className="text-white text-lg font-semibold mb-6">Fondo Oscuro</h3>
              <div className="flex flex-wrap gap-6">
                {variants.map((variant) => (
                  <Logo key={variant.id} variant={variant.id} size="md" showText={true} />
                ))}
              </div>
            </div>

            {/* Light Context */}
            <div className="bg-white rounded-2xl p-8 border border-border">
              <h3 className="text-gray-900 text-lg font-semibold mb-6">Fondo Claro</h3>
              <div className="flex flex-wrap gap-6">
                {variants.map((variant) => (
                  <div key={variant.id} className="flex items-center gap-2.5">
                    <div className="w-10 h-10">
                      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        {variant.id === "legible" && (
                          <>
                            <path d="M5 3 L9 3 L9 37 L5 37 Z" fill="#0a1628" />
                            <path d="M9 3 L17 3 C23 3 26 6.5 26 11 C26 14 24 16.5 21 17.5 L33 3 L33 8 L23 19 L9 19 L9 3 Z" fill="#0a1628" />
                            <path d="M9 21 L22 21 C27 21 30 25 30 29.5 C30 34 26 37 20 37 L9 37 L9 21 Z" fill="#0a1628" />
                            <path d="M21 23 L35 37 L35 33 L25 23 Z" fill="#14b8a6" />
                            <path d="M13 7 L16 7 C19 7 21 9 21 11.5 C21 14 19 15.5 16 15.5 L13 15.5 Z" fill="white" />
                            <path d="M13 25 L18 25 C22 25 25 27 25 30 C25 33 22 34 18 34 L13 34 Z" fill="white" />
                            <path d="M31 10 L35 6 L35 10 L33 12 Z" fill="#14b8a6" fillOpacity="0.7" />
                          </>
                        )}
                        {variant.id === "abstract" && (
                          <>
                            <path d="M8 2 L12 2 L12 38 L8 38 Z" fill="#0a1628" />
                            <circle cx="18" cy="12" r="9" fill="#0a1628" />
                            <circle cx="18" cy="12" r="5" fill="white" />
                            <path d="M24 8 L36 2 L36 6 L26 14 Z" fill="#0a1628" />
                            <circle cx="19" cy="29" r="10" fill="#0a1628" />
                            <circle cx="19" cy="29" r="5.5" fill="white" />
                            <path d="M26 26 L36 38 L36 34 L30 26 Z" fill="#14b8a6" />
                            <path d="M12 18 L15 18 L15 22 L12 22 Z" fill="#0a1628" fillOpacity="0.6" />
                          </>
                        )}
                        {variant.id === "minimal" && (
                          <>
                            <path d="M10 4 L14 4 L14 16 L28 4 L34 4 L20 18 L14 18 L14 22 L20 22 L34 36 L28 36 L14 24 L14 36 L10 36 Z" fill="#0a1628" />
                            <path d="M30 8 L36 4 L36 8 L32 12 Z" fill="#14b8a6" />
                            <path d="M30 32 L36 36 L36 32 L32 28 Z" fill="#14b8a6" fillOpacity="0.7" />
                          </>
                        )}
                      </svg>
                    </div>
                    <span className="text-xl font-bold font-heading tracking-tight">
                      <span className="text-gray-900">Be</span>
                      <span className="text-teal-500 ml-0.5">Kaizen</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Favicon Preview */}
        <section>
          <h2 className="text-2xl font-bold font-heading mb-6 text-center">
            Vista Favicon (16x16, 32x32)
          </h2>
          <div className="flex justify-center gap-12">
            {variants.map((variant) => (
              <div key={variant.id} className="text-center">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-4 h-4 bg-background border border-border rounded overflow-hidden">
                    <Logo variant={variant.id} showText={false} className="w-full h-full" />
                  </div>
                  <div className="w-8 h-8 bg-background border border-border rounded overflow-hidden">
                    <Logo variant={variant.id} showText={false} className="w-full h-full" />
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{variant.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LogoDemo;
