import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import DemoRequestModal from "./DemoRequestModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navLinks = [
        { label: "Soluciones", href: "/#solutions" },
    { label: "Industrias", href: "/#industries" },
    { label: "Nosotros", href: "/about" },
  ];

  const platformItems = [
    { label: "Kaizen Lab", sub: "Análisis de video · WIS · SWCT · Yamazumi", badge: "Disponible", id: "kaizen-lab" },
    { label: "Ergo Lab", sub: "Análisis ergonómico · Riesgo postural", badge: "Próximamente", id: "ergo-lab" },
    { label: "Quality Lab", sub: "PFMEA asistido por IA", badge: "Próximamente", id: "quality-lab" },
  ];
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const platformRef = useRef<HTMLDivElement>(null);
  const goToModule = (id: string) => {
    setIsPlatformOpen(false);
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    else window.location.href = `/#${id}`;
  };
  const renderPlatformItem = (item: typeof platformItems[number]) => (
    <button key={item.id} onClick={() => goToModule(item.id)} className="w-full text-left px-4 py-3 hover:bg-secondary transition-colors">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-semibold text-foreground">{item.label}</span>
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${item.badge === "Disponible" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>{item.badge}</span>
      </div>
      <div className="text-xs text-muted-foreground mt-1">{item.sub}</div>
    </button>
  );

  const resourcesDropdown = [
    { label: "Documentación", href: "/documentacion" },
    { label: "Casos de éxito", href: "/cases" },
    { label: "FAQ", href: "/faq" },
  ];

  const isActiveLink = (href: string) => {
    if (href.startsWith("/#")) return location.pathname === "/";
    return location.pathname === href;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
      if (platformRef.current && !platformRef.current.contains(event.target as Node)) {
        setIsPlatformOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsResourcesOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <Logo size="md" />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <div className="relative" ref={platformRef}>
                <button onClick={() => setIsPlatformOpen(!isPlatformOpen)} className="nav-link flex items-center gap-1">
                  Plataforma
                  <ChevronDown className={`w-4 h-4 transition-transform ${isPlatformOpen ? 'rotate-180' : ''}`} />
                </button>
                {isPlatformOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 rounded-lg bg-card border border-border shadow-lg py-2 z-50 animate-fade-in">
                    {platformItems.map(renderPlatformItem)}
                  </div>
                )}
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("/#")) {
                      e.preventDefault();
                      const targetId = link.href.replace("/#", "");
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                  className={`nav-link ${isActiveLink(link.href) ? 'text-primary' : ''}`}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className={`nav-link flex items-center gap-1 ${
                    resourcesDropdown.some(item => location.pathname === item.href) ? 'text-primary' : ''
                  }`}
                >
                  Recursos
                  <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isResourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-card border border-border shadow-lg py-2 z-50 animate-fade-in">
                    {resourcesDropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className={`block px-4 py-2 text-sm hover:bg-secondary transition-colors ${
                          location.pathname === item.href 
                            ? 'text-primary bg-secondary/50' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="hidden md:block">
              <Button 
                variant="hero" 
                size="default"
                onClick={() => setIsDemoModalOpen(true)}
              >
                Agenda Demo
              </Button>
            </div>

            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">Plataforma</span>
                  <div className="mt-2 -mx-4">{platformItems.map(renderPlatformItem)}</div>
                </div>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("/#")) {
                        e.preventDefault();
                        const targetId = link.href.replace("/#", "");
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                        setIsOpen(false);
                      }
                    }}
                    className={`nav-link py-2 ${isActiveLink(link.href) ? 'text-primary' : ''}`}
                  >
                    {link.label}
                  </a>
                ))}
                
                <div className="border-t border-border/50 pt-4">
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">Recursos</span>
                  <div className="flex flex-col gap-2 mt-2">
                    {resourcesDropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className={`nav-link py-2 pl-4 ${
                          location.pathname === item.href ? 'text-primary' : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="mt-2"
                  onClick={() => {
                    setIsOpen(false);
                    setIsDemoModalOpen(true);
                  }}
                >
                  Agenda Demo
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <DemoRequestModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </>
  );
};

export default Navbar;
