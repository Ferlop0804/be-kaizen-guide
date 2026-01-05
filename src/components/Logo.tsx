interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "legible" | "abstract" | "minimal";
}

const Logo = ({ className = "", showText = true, size = "md", variant = "legible" }: LogoProps) => {
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-lg" },
    md: { icon: "w-10 h-10", text: "text-xl" },
    lg: { icon: "w-14 h-14", text: "text-3xl" },
  };

  // Variante 1: BK claramente legible
  const LegibleLogo = () => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Vertical bar shared by B and K */}
      <path d="M5 3 L9 3 L9 37 L5 37 Z" className="fill-primary" />
      
      {/* B upper curve + K upper diagonal merged */}
      <path
        d="M9 3 L17 3 C23 3 26 6.5 26 11 C26 14 24 16.5 21 17.5 L33 3 L33 8 L23 19 L9 19 L9 3 Z"
        className="fill-primary"
      />
      
      {/* B lower curve */}
      <path
        d="M9 21 L22 21 C27 21 30 25 30 29.5 C30 34 26 37 20 37 L9 37 L9 21 Z"
        className="fill-primary"
      />
      
      {/* K lower diagonal with accent */}
      <path d="M21 23 L35 37 L35 33 L25 23 Z" className="fill-primary-glow" />
      
      {/* B upper negative space */}
      <path d="M13 7 L16 7 C19 7 21 9 21 11.5 C21 14 19 15.5 16 15.5 L13 15.5 Z" className="fill-background" />
      
      {/* B lower negative space */}
      <path d="M13 25 L18 25 C22 25 25 27 25 30 C25 33 22 34 18 34 L13 34 Z" className="fill-background" />
      
      {/* Progress accent arrow */}
      <path d="M31 10 L35 6 L35 10 L33 12 Z" className="fill-primary-glow opacity-70" />
    </svg>
  );

  // Variante 2: BK abstracto/simbólico - formas geométricas fusionadas
  const AbstractLogo = () => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Abstract unified form - B curves become circular elements, K becomes angular */}
      {/* Central vertical element */}
      <path d="M8 2 L12 2 L12 38 L8 38 Z" className="fill-primary" />
      
      {/* Upper circular B element merging with K diagonal */}
      <circle cx="18" cy="12" r="9" className="fill-primary" />
      <circle cx="18" cy="12" r="5" className="fill-background" />
      
      {/* K upper diagonal emerging from circle */}
      <path d="M24 8 L36 2 L36 6 L26 14 Z" className="fill-primary" />
      
      {/* Lower circular B element - larger, showing growth */}
      <circle cx="19" cy="29" r="10" className="fill-primary" />
      <circle cx="19" cy="29" r="5.5" className="fill-background" />
      
      {/* K lower diagonal - dynamic angle showing progress */}
      <path d="M26 26 L36 38 L36 34 L30 26 Z" className="fill-primary-glow" />
      
      {/* Connecting flow element between circles */}
      <path d="M12 18 L15 18 L15 22 L12 22 Z" className="fill-primary opacity-60" />
    </svg>
  );

  // Variante 3: Ultra minimalista - isotipo puro
  const MinimalLogo = () => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Pure geometric abstraction - single continuous path suggesting BK */}
      {/* Main shape: vertical with angular extensions */}
      <path
        d="M10 4 L14 4 L14 16 L28 4 L34 4 L20 18 L14 18 L14 22 L20 22 L34 36 L28 36 L14 24 L14 36 L10 36 Z"
        className="fill-primary"
      />
      
      {/* Upper accent - Kaizen arrow suggesting continuous improvement */}
      <path d="M30 8 L36 4 L36 8 L32 12 Z" className="fill-primary-glow" />
      
      {/* Lower accent - forward momentum */}
      <path d="M30 32 L36 36 L36 32 L32 28 Z" className="fill-primary-glow opacity-70" />
    </svg>
  );

  const renderLogo = () => {
    switch (variant) {
      case "abstract":
        return <AbstractLogo />;
      case "minimal":
        return <MinimalLogo />;
      default:
        return <LegibleLogo />;
    }
  };

  return (
    <a href="#" className={`flex items-center gap-2.5 group ${className}`}>
      <div className={`${sizes[size].icon} relative transition-transform duration-300 group-hover:scale-105`}>
        {renderLogo()}
      </div>
      
      {showText && (
        <span className={`${sizes[size].text} font-bold font-heading tracking-tight`}>
          <span className="text-foreground">Be</span>
          <span className="text-primary ml-0.5">Kaizen</span>
        </span>
      )}
    </a>
  );
};

export default Logo;
