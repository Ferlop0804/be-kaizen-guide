import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "que-es-kaizen",
    title: "¿Qué es Kaizen? La filosofía de mejora continua que transforma empresas",
    excerpt: "Kaizen es una filosofía japonesa que significa 'cambio para mejor'. Descubre cómo pequeñas mejoras diarias pueden generar grandes transformaciones en tu organización.",
    category: "Kaizen",
    readTime: "5 min",
    date: "2025-01-15",
  },
  {
    id: "2",
    slug: "toyota-production-system",
    title: "TPS: El Sistema de Producción Toyota explicado",
    excerpt: "El Toyota Production System revolucionó la manufactura mundial. Conoce sus principios fundamentales: Just-in-Time, Jidoka, y cómo aplicarlos en tu empresa.",
    category: "TPS",
    readTime: "8 min",
    date: "2025-01-10",
  },
  {
    id: "3",
    slug: "metodologia-5s",
    title: "5S: Organización y eficiencia en el lugar de trabajo",
    excerpt: "Seiri, Seiton, Seiso, Seiketsu y Shitsuke. Las 5S son la base de cualquier sistema de mejora continua. Aprende a implementarlas paso a paso.",
    category: "5S",
    readTime: "6 min",
    date: "2025-01-05",
  },
  {
    id: "4",
    slug: "seven-wastes-muda",
    title: "Los 7 desperdicios (Muda): Identifícalos y elimínalos",
    excerpt: "Transporte, inventario, movimiento, espera, sobreproducción, sobreprocesamiento y defectos. Aprende a detectar y eliminar cada tipo de desperdicio.",
    category: "Lean",
    readTime: "7 min",
    date: "2024-12-28",
  },
  {
    id: "5",
    slug: "ia-mejora-continua",
    title: "Inteligencia Artificial y Mejora Continua: El futuro de la manufactura",
    excerpt: "Cómo la IA está revolucionando los procesos de mejora continua, desde el análisis de video hasta la predicción de cuellos de botella.",
    category: "IA",
    readTime: "6 min",
    date: "2024-12-20",
  },
  {
    id: "6",
    slug: "value-stream-mapping",
    title: "Value Stream Mapping: Visualiza y optimiza tu cadena de valor",
    excerpt: "El VSM es una herramienta poderosa para identificar oportunidades de mejora. Guía práctica para crear tu primer mapa de flujo de valor.",
    category: "Lean",
    readTime: "9 min",
    date: "2024-12-15",
  },
];

const categories = ["Todos", "Kaizen", "TPS", "5S", "Lean", "IA"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = selectedCategory === "Todos" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-AR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6">
                Recursos sobre Mejora Continua
              </h1>
              <p className="text-lg text-muted-foreground">
                Artículos, guías y recursos sobre Kaizen, Lean Manufacturing, TPS 
                y las últimas tendencias en optimización industrial.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Placeholder Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Tag className="w-12 h-12 text-primary/40" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                        {post.category}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-semibold font-heading mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {formatDate(post.date)}
                      </span>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                      >
                        Leer más
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No hay artículos en esta categoría todavía.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
                ¿Querés recibir más contenido?
              </h2>
              <p className="text-muted-foreground mb-6">
                Próximamente lanzaremos un newsletter con contenido exclusivo sobre 
                mejora continua e inteligencia artificial aplicada a la industria.
              </p>
              <Badge variant="outline" className="text-primary border-primary">
                Próximamente
              </Badge>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
