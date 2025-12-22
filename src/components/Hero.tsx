import { Button } from "@/components/ui/button";
import { Play, ChevronRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";
import Logo from "./Logo";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Potenciado por IA
              </span>
            </div>

            {/* Logo/Title */}
            <div className="animate-fade-in animation-delay-100">
              <Logo size="lg" showText={true} />
            </div>

            {/* Tagline */}
            <div className="animate-fade-in animation-delay-200 space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground font-heading">
                Tu Copiloto de IA para la Mejora Continua
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Ayudando a ingenieros industriales a potenciar el diseño de estaciones y la optimización de procesos utilizando video de smartphone.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button variant="hero" size="xl">
                Agenda una Demo
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl" className="gap-3">
                <Play className="w-5 h-5" />
                Ver Video
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4 animate-fade-in animation-delay-400">
              <div>
                <div className="text-3xl font-bold gradient-text font-heading">4X</div>
                <div className="text-sm text-muted-foreground">Más productividad</div>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="text-3xl font-bold gradient-text font-heading">85%</div>
                <div className="text-sm text-muted-foreground">Menos tiempo</div>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="text-3xl font-bold gradient-text font-heading">500+</div>
                <div className="text-sm text-muted-foreground">Empresas</div>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative animate-fade-in animation-delay-200 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
            <img 
              src={heroIllustration} 
              alt="Be Kaizen AI Process Optimization Illustration"
              className="relative z-10 w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
