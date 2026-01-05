interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", showText = true, size = "md" }: LogoProps) => {
  const sizes = {
    sm: { icon: "w-9 h-9", text: "text-xl" },
    md: { icon: "w-11 h-11", text: "text-2xl" },
    lg: { icon: "w-16 h-16", text: "text-4xl" },
  };

  return (
    <a href="#" className={`flex items-center gap-3 ${className}`}>
      {/* Geometric BK Logo - Letters integrated into angular shape */}
      <div className={`${sizes[size].icon} relative`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* B shape - left side, forms vertical bar with bumps */}
          <path
            d="M8 4 L8 44 L20 44 C26 44 30 40 30 35 C30 30 27 27 24 26 C27 25 29 22 29 18 C29 12 25 8 19 8 L19 4 Z"
            className="fill-primary"
          />
          
          {/* K shape - integrated with B, sharing the vertical stroke */}
          {/* Top diagonal of K */}
          <path
            d="M24 24 L40 6 L40 4 L32 4 L20 18 L20 8 L19 8 L19 26 Z"
            className="fill-primary"
          />
          
          {/* Bottom diagonal of K */}
          <path
            d="M20 30 L20 44 L28 44 L28 34 L40 48 L40 44 L30 30 L40 18 L40 14 L26 28 Z"
            className="fill-primary-glow"
          />
          
          {/* Inner cutout for B curves - top */}
          <path
            d="M14 12 L14 22 L18 22 C21 22 23 20 23 17 C23 14 21 12 18 12 Z"
            className="fill-background"
          />
          
          {/* Inner cutout for B curves - bottom */}
          <path
            d="M14 28 L14 40 L19 40 C23 40 25 37 25 34 C25 31 23 28 19 28 Z"
            className="fill-background"
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
