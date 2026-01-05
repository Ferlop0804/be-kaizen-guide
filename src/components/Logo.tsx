import { useId } from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const BRAND_NAME = "Be Kaizen";

const Logo = ({ className = "", showText = true, size = "md" }: LogoProps) => {
  const maskId = useId();

  const sizes = {
    sm: { icon: "w-9 h-9", text: "text-xl" },
    md: { icon: "w-11 h-11", text: "text-2xl" },
    lg: { icon: "w-16 h-16", text: "text-4xl" },
  };

  return (
    <a href="#" className={`flex items-center gap-3 ${className}`}>
      {/* Geometric BK Logo - Letters integrated into angular shape */}
      <div className={`${sizes[size].icon} relative`} aria-hidden="true">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/*
            Use an SVG mask so the inner cutouts are truly transparent.
            This keeps the logo correct on any background (footer card, navbar, hero, etc.).
          */}
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
            <rect x="0" y="0" width="48" height="48" fill="white" />
            {/* Cutouts (black = transparent) */}
            <path d="M14 12 L14 22 L18 22 C21 22 23 20 23 17 C23 14 21 12 18 12 Z" fill="black" />
            <path d="M14 28 L14 40 L19 40 C23 40 25 37 25 34 C25 31 23 28 19 28 Z" fill="black" />
          </mask>

          <g mask={`url(#${maskId})`}>
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
          </g>
        </svg>
      </div>

      {showText && (
        <span className={`${sizes[size].text} font-bold font-heading gradient-text`}>
          {BRAND_NAME}
        </span>
      )}
    </a>
  );
};

export default Logo;
