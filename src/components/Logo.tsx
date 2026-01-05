interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", showText = true, size = "md" }: LogoProps) => {
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-lg" },
    md: { icon: "w-10 h-10", text: "text-xl" },
    lg: { icon: "w-14 h-14", text: "text-3xl" },
  };

  return (
    <a href="#" className={`flex items-center gap-2.5 group ${className}`}>
      {/* Unified BK Geometric Logo - Letters fused into continuous flow */}
      <div className={`${sizes[size].icon} relative`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
        >
          {/* Main unified shape - B and K merged with continuous flow */}
          {/* Left vertical bar (shared by B and K) with forward lean for movement */}
          <path
            d="M6 4 L10 4 L10 36 L6 36 Z"
            className="fill-primary"
          />
          
          {/* B upper curve flowing into K upper diagonal */}
          <path
            d="M10 4 L18 4 C24 4 27 7 27 11.5 C27 14.5 25.5 16.5 23 17.5 L34 4 L34 8 L24 18 L10 18 L10 4 Z"
            className="fill-primary"
          />
          
          {/* B lower curve - larger, flowing forward */}
          <path
            d="M10 20 L24 20 L24 21 C24 21 26 21.5 27.5 23.5 C29 25.5 29 28 29 29.5 C29 33 26 36 21 36 L10 36 L10 20 Z"
            className="fill-primary"
          />
          
          {/* K lower diagonal - extending from shared center, dynamic angle */}
          <path
            d="M22 22 L34 36 L34 32 L26 22 Z"
            className="fill-primary-glow"
          />
          
          {/* Inner negative space - B upper curve */}
          <path
            d="M14 8 L17 8 C20 8 22 9.5 22 12 C22 14 20.5 15 18 15 L14 15 Z"
            className="fill-background"
          />
          
          {/* Inner negative space - B lower curve */}
          <path
            d="M14 23 L19 23 C22.5 23 24.5 25 24.5 28 C24.5 31 22 33 19 33 L14 33 Z"
            className="fill-background"
          />
          
          {/* Accent line - continuous improvement arrow/flow indicator */}
          <path
            d="M32 12 L36 8 L36 12 L34 14 Z"
            className="fill-primary-glow opacity-80"
          />
        </svg>
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
