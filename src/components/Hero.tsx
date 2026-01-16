import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ChevronRight } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import Logo from "./Logo";
import DemoRequestModal from "./DemoRequestModal";
import VideoModal from "./VideoModal";

const Hero = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  return <>
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      {/* AI Detection Overlay Effects - Hidden on mobile */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden hidden md:block">
        {/* Scanning lines effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line" style={{
            top: '30%'
          }} />
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary-glow to-transparent animate-scan-line" style={{
            top: '60%',
            animationDelay: '2s'
          }} />
        </div>

        {/* AI Detection boxes */}
        <div className="absolute right-[15%] top-[25%] animate-fade-in animation-delay-200">
          <div className="border-2 border-primary/60 rounded-lg p-2 backdrop-blur-sm bg-background/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-xs font-mono">Proceso detectado</span>
            </div>
            <div className="text-primary-glow text-lg font-bold font-mono mt-1">0.94</div>
          </div>
        </div>

        <div className="absolute right-[10%] top-[50%] animate-fade-in animation-delay-400">
          <div className="border-2 border-primary-glow/60 rounded-lg p-2 backdrop-blur-sm bg-background/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse" />
              <span className="text-primary-glow text-xs font-mono">Tiempo ciclo</span>
            </div>
            <div className="text-primary text-lg font-bold font-mono mt-1">12.4s</div>
          </div>
        </div>

        <div className="absolute right-[20%] bottom-[30%] animate-fade-in animation-delay-300">
          <div className="border-2 border-primary/60 rounded-lg p-2 backdrop-blur-sm bg-background/20">
            <div className="flex items-center gap-2">
              <span className="text-primary text-xs font-mono">Eficiencia</span>
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-primary-glow text-lg font-bold font-mono mt-1">+23%</div>
          </div>
        </div>

        {/* Corner brackets decoration */}
        <div className="absolute right-[8%] top-[20%] w-32 h-32 opacity-40">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-2xl">
          {/* Logo/Title */}
          <div className="animate-fade-in animation-delay-100">
            <Logo size="lg" showText={true} />
          </div>

          {/* Tagline */}
          <div className="animate-fade-in animation-delay-200 space-y-4 mt-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground font-heading">Tu Copiloto de IA para la Mejora Continua.</h2>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Ayudando a ingenieros industriales a potenciar el diseño de estaciones y la optimización de procesos utilizando video de smartphone.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300 mt-8">
            <Button variant="hero" size="xl" onClick={() => setIsDemoModalOpen(true)}>
              Agenda una Demo
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="hero-outline" 
              size="xl" 
              className="gap-3"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <Play className="w-5 h-5" />
              Ver Video
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8 animate-fade-in animation-delay-400">
            <div>
              <div className="text-3xl font-bold gradient-text font-heading">4X</div>
              <div className="text-sm text-muted-foreground">Más productividad</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-3xl font-bold gradient-text font-heading">85%</div>
              <div className="text-sm text-muted-foreground">Menos tiempo</div>
            </div>
          </div>
        </div>
      </div>

      <DemoRequestModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
      <VideoModal 
        open={isVideoModalOpen} 
        onOpenChange={setIsVideoModalOpen}
        onRequestDemo={() => setIsDemoModalOpen(true)}
      />
    </section>
    </>;
};
export default Hero;