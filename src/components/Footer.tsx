import { Linkedin, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
const Footer = () => {
  const footerLinks = {
    Plataforma: [{
      label: "Diseño de Estaciones",
      href: "#"
    }, {
      label: "Análisis de Tiempos",
      href: "#"
    }, {
      label: "Análisis FMEA",
      href: "#"
    }, {
      label: "Reportes",
      href: "#"
    }],
    Industrias: [{
      label: "Automotriz",
      href: "#"
    }, {
      label: "Electrónica",
      href: "#"
    }, {
      label: "Manufactura",
      href: "#"
    }, {
      label: "Logística",
      href: "#"
    }],
    Empresa: [{
      label: "Sobre Nosotros",
      href: "/about"
    }, {
      label: "Carreras",
      href: "/carreras"
    }, {
      label: "Blog",
      href: "/blog"
    }, {
      label: "Contacto",
      href: "mailto:contacto@bekaizen-ai.com"
    }],
    Recursos: [{
      label: "Documentación",
      href: "#"
    }, {
      label: "Casos de Éxito",
      href: "#"
    }, {
      label: "Webinars",
      href: "#"
    }, {
      label: "FAQ",
      href: "#"
    }]
  };
  return <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo size="md" />
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Tu copiloto de IA para la mejora continua. Optimiza procesos industriales con análisis de video inteligente.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/bekaizen-arg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contacto@bekaizen-ai.com" 
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => <div key={category}>
              <h4 className="font-semibold font-heading text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map(link => <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        {link.label}
                      </a>
                    )}
                  </li>)}
              </ul>
            </div>)}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Be Kaizen. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/privacidad" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacidad
            </Link>
            <Link to="/terminos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Términos
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;