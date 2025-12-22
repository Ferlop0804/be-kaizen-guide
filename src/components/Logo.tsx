interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", showText = true, size = "md" }: LogoProps) => {
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-lg" },
    md: { icon: "w-10 h-10", text: "text-xl" },
    lg: { icon: "w-14 h-14", text: "text-2xl" },
  };

  return (
    <a href="#" className={`flex items-center gap-3 ${className}`}>
      {/* Geometric BK Logo */}
      <div className={`${sizes[size].icon} relative`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background hexagonal shape */}
          <path
            d="M24 2L44 14V34L24 46L4 34V14L24 2Z"
            className="fill-primary"
          />
          
          {/* Inner geometric pattern - creates depth */}
          <path
            d="M24 6L40 16V32L24 42L8 32V16L24 6Z"
            className="fill-primary-glow/20"
          />
          
          {/* Letter B - left side, geometric style */}
          <path
            d="M14 16H20C22.5 16 24 17.5 24 19.5C24 21 23 22 22 22.5C23.5 23 24.5 24.5 24.5 26C24.5 28.5 22.5 30 20 30H14V16Z
               M17 18.5V22H19.5C20.5 22 21.5 21.5 21.5 20C21.5 18.5 20.5 18.5 19.5 18.5H17Z
               M17 24V27.5H20C21 27.5 22 27 22 25.75C22 24.5 21 24 20 24H17Z"
            className="fill-primary-foreground"
          />
          
          {/* Letter K - right side, angular geometric style */}
          <path
            d="M27 16H30V22L35 16H39L33.5 22.5L39.5 30H35.5L31.5 24.5L30 26V30H27V16Z"
            className="fill-primary-foreground"
          />
          
          {/* Accent line - diagonal slash between letters */}
          <path
            d="M24 14L24 34"
            stroke="currentColor"
            strokeWidth="0.5"
            className="stroke-primary-foreground/30"
          />
        </svg>
      </div>
      
      {showText && (
        <span className={`${sizes[size].text} font-bold font-heading gradient-text`}>
          Be Kaizen
        </span>
      )}
    </a>
  );
};

export default Logo;
