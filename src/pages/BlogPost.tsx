import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPostContent {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
}

const blogPostsContent: Record<string, BlogPostContent> = {
  "que-es-kaizen": {
    slug: "que-es-kaizen",
    title: "¿Qué es Kaizen? La filosofía de mejora continua que transforma empresas",
    category: "Kaizen",
    readTime: "5 min",
    date: "2025-01-15",
    content: `
## Origen del Kaizen

Kaizen (改善) es un término japonés que combina dos palabras: "kai" (cambio) y "zen" (mejor). Literalmente significa "cambio para mejor" o "mejora continua". Esta filosofía surgió en Japón después de la Segunda Guerra Mundial, cuando las empresas japonesas necesitaban reconstruirse con recursos limitados.

## Los principios fundamentales

### 1. Mejora continua incremental
A diferencia de las grandes transformaciones, Kaizen se enfoca en pequeñas mejoras diarias. La idea es que muchos cambios pequeños, implementados consistentemente, generan resultados extraordinarios a largo plazo.

### 2. Participación de todos
Kaizen no es responsabilidad exclusiva de la gerencia. Cada empleado, desde el operario hasta el CEO, tiene la capacidad y responsabilidad de identificar oportunidades de mejora.

### 3. Eliminación del desperdicio
Uno de los objetivos centrales es identificar y eliminar el "muda" (desperdicio) en todas sus formas: tiempo, materiales, movimientos innecesarios, etc.

## El ciclo PDCA

El Kaizen se implementa frecuentemente a través del ciclo PDCA:

- **Plan (Planificar):** Identificar el problema y planificar la mejora
- **Do (Hacer):** Implementar la mejora a pequeña escala
- **Check (Verificar):** Evaluar los resultados
- **Act (Actuar):** Estandarizar la mejora o ajustar

## Beneficios del Kaizen

1. **Reducción de costos:** Al eliminar desperdicios constantemente
2. **Mayor calidad:** Mejoras continuas en procesos
3. **Mejor moral:** Empleados empoderados y valorados
4. **Cultura de mejora:** Mentalidad orientada al progreso

## Kaizen en la era digital

Con herramientas como Be Kaizen, la filosofía Kaizen se potencia con inteligencia artificial. El análisis de video y datos permite identificar oportunidades de mejora que serían invisibles al ojo humano, acelerando el ciclo de mejora continua.
    `,
  },
  "toyota-production-system": {
    slug: "toyota-production-system",
    title: "TPS: El Sistema de Producción Toyota explicado",
    category: "TPS",
    readTime: "8 min",
    date: "2025-01-10",
    content: `
## ¿Qué es el Toyota Production System?

El Sistema de Producción Toyota (TPS) es el sistema de manufactura desarrollado por Toyota entre 1948 y 1975. Es considerado el precursor del Lean Manufacturing y ha revolucionado la forma en que las empresas producen bienes en todo el mundo.

## Los dos pilares del TPS

### 1. Just-in-Time (JIT)

El principio Just-in-Time significa producir solo lo que se necesita, cuando se necesita y en la cantidad necesaria. Sus componentes clave son:

- **Takt Time:** El ritmo de producción basado en la demanda del cliente
- **Flujo continuo:** Eliminar interrupciones en el proceso
- **Sistema Pull:** Producir basándose en la demanda real, no en pronósticos

### 2. Jidoka (Autonomación)

Jidoka significa "automatización con toque humano". Es la capacidad de detener la producción cuando se detecta un problema:

- **Andon:** Sistema de señalización visual para alertar problemas
- **Poka-yoke:** Dispositivos a prueba de errores
- **Parar para corregir:** Cultura de detener la línea ante defectos

## La casa del TPS

El TPS se representa como una casa con:

- **Techo:** Meta de mejor calidad, menor costo, menor tiempo de entrega
- **Pilares:** Just-in-Time y Jidoka
- **Base:** Estabilidad, trabajo estandarizado, Kaizen

## Herramientas del TPS

- **Kanban:** Sistema de señales para control de inventario
- **5S:** Organización del lugar de trabajo
- **SMED:** Reducción de tiempos de setup
- **Value Stream Mapping:** Visualización del flujo de valor

## El TPS hoy

El TPS sigue evolucionando. Con tecnologías como la IA, las empresas pueden ahora analizar sus procesos con mayor precisión y velocidad, identificando oportunidades de mejora que antes tomaban meses en descubrir.
    `,
  },
  "metodologia-5s": {
    slug: "metodologia-5s",
    title: "5S: Organización y eficiencia en el lugar de trabajo",
    category: "5S",
    readTime: "6 min",
    date: "2025-01-05",
    content: `
## ¿Qué son las 5S?

Las 5S son una metodología japonesa para organizar y mantener el lugar de trabajo de manera eficiente. El nombre proviene de cinco palabras japonesas que comienzan con la letra S.

## Las 5S explicadas

### 1. Seiri (整理) - Clasificar

Separar lo necesario de lo innecesario. Solo mantener en el área de trabajo los elementos que realmente se utilizan.

**Preguntas clave:**
- ¿Cuándo fue la última vez que usé esto?
- ¿Realmente lo necesito aquí?
- ¿Qué pasaría si lo elimino?

### 2. Seiton (整頓) - Ordenar

Un lugar para cada cosa y cada cosa en su lugar. Organizar los elementos de manera que sean fáciles de encontrar y usar.

**Principios:**
- Los elementos más usados, más cerca
- Etiquetado claro y visible
- Demarcación de áreas

### 3. Seiso (清掃) - Limpiar

Mantener el área de trabajo limpia. La limpieza es también una forma de inspección que permite detectar problemas temprano.

**Beneficios:**
- Detectar fugas, grietas, desgaste
- Ambiente más seguro
- Mayor orgullo por el espacio de trabajo

### 4. Seiketsu (清潔) - Estandarizar

Crear estándares y procedimientos para mantener las primeras 3S. Hacer que la organización y limpieza sean parte de la rutina.

**Herramientas:**
- Checklists visuales
- Fotografías del estado ideal
- Responsabilidades claras

### 5. Shitsuke (躾) - Disciplina

Mantener y mejorar los estándares. Crear el hábito de seguir los procedimientos establecidos.

**Claves:**
- Auditorías regulares
- Reconocimiento del buen trabajo
- Mejora continua de los estándares

## Implementando las 5S

1. **Comenzar con un área piloto**
2. **Involucrar a todo el equipo**
3. **Documentar el antes y después**
4. **Realizar auditorías periódicas**
5. **Expandir gradualmente**

## 5S y tecnología

Las herramientas digitales pueden potenciar las 5S: auditorías con tablets, fotografías para comparación, dashboards de seguimiento y análisis de video para verificar el cumplimiento de estándares.
    `,
  },
  "seven-wastes-muda": {
    slug: "seven-wastes-muda",
    title: "Los 7 desperdicios (Muda): Identifícalos y elimínalos",
    category: "Lean",
    readTime: "7 min",
    date: "2024-12-28",
    content: `
## ¿Qué es Muda?

Muda (無駄) es el término japonés para "desperdicio". En el contexto de Lean Manufacturing, se refiere a cualquier actividad que consume recursos pero no agrega valor para el cliente.

## Los 7 desperdicios clásicos

### 1. Transporte

Movimiento innecesario de materiales o productos.

**Ejemplos:**
- Mover piezas entre áreas distantes
- Layouts ineficientes
- Múltiples almacenes

### 2. Inventario

Exceso de materia prima, trabajo en proceso o productos terminados.

**Problemas que oculta:**
- Defectos de calidad
- Problemas de proveedores
- Desbalance de líneas

### 3. Movimiento

Movimientos innecesarios de personas.

**Ejemplos:**
- Caminar para buscar herramientas
- Estirarse para alcanzar materiales
- Búsqueda de información

### 4. Espera

Tiempo en que personas o máquinas están inactivas.

**Causas comunes:**
- Desbalance de línea
- Falta de materiales
- Cuellos de botella

### 5. Sobreproducción

Producir más de lo necesario o antes de tiempo.

**Es el peor desperdicio porque:**
- Genera todos los demás desperdicios
- Oculta problemas
- Consume capital de trabajo

### 6. Sobreprocesamiento

Hacer más trabajo del necesario.

**Ejemplos:**
- Tolerancias más precisas de lo requerido
- Inspecciones redundantes
- Documentación excesiva

### 7. Defectos

Productos o servicios que no cumplen especificaciones.

**Costos asociados:**
- Retrabajo
- Scrap
- Inspección adicional
- Insatisfacción del cliente

## El 8vo desperdicio

Muchos expertos agregan un octavo desperdicio: **el talento no utilizado**. Desaprovechar las ideas, habilidades y conocimiento de los empleados.

## Identificando desperdicios con IA

Las herramientas de análisis de video con IA pueden identificar desperdicios que serían invisibles en observaciones tradicionales: microesperas, movimientos ineficientes, variaciones en tiempos de ciclo.
    `,
  },
  "ia-mejora-continua": {
    slug: "ia-mejora-continua",
    title: "Inteligencia Artificial y Mejora Continua: El futuro de la manufactura",
    category: "IA",
    readTime: "6 min",
    date: "2024-12-20",
    content: `
## La convergencia de IA y Lean

La Inteligencia Artificial está transformando la manera en que las empresas implementan la mejora continua. Lo que antes tomaba semanas de observación y análisis, ahora puede hacerse en horas.

## Aplicaciones de IA en mejora continua

### Análisis de video

- **Detección automática de actividades**
- **Medición precisa de tiempos de ciclo**
- **Identificación de movimientos innecesarios**
- **Análisis de ergonomía**

### Predicción y prevención

- **Mantenimiento predictivo**
- **Predicción de cuellos de botella**
- **Alertas tempranas de desviaciones**

### Optimización

- **Balanceo automático de líneas**
- **Sugerencias de layout**
- **Optimización de rutas**

## Ventajas sobre métodos tradicionales

| Aspecto | Tradicional | Con IA |
|---------|-------------|--------|
| Tiempo de análisis | Días/Semanas | Horas |
| Objetividad | Variable | Consistente |
| Cobertura | Muestreo | 100% |
| Detección de patrones | Limitada | Avanzada |

## El rol humano sigue siendo clave

La IA no reemplaza a los expertos en mejora continua, los potencia. El conocimiento del proceso, la creatividad para soluciones y la implementación del cambio siguen requiriendo el toque humano.

## El futuro: IA generativa

Las nuevas tecnologías de IA generativa prometen ir más allá del análisis, sugiriendo activamente mejoras basadas en patrones detectados y mejores prácticas de la industria.

## Comenzando con IA

Para empresas que quieren empezar:

1. **Identificar un caso de uso específico**
2. **Empezar con un piloto pequeño**
3. **Medir resultados claramente**
4. **Escalar gradualmente**

Be Kaizen combina décadas de conocimiento en mejora continua con lo último en inteligencia artificial, haciendo accesible esta tecnología para empresas de todos los tamaños.
    `,
  },
  "value-stream-mapping": {
    slug: "value-stream-mapping",
    title: "Value Stream Mapping: Visualiza y optimiza tu cadena de valor",
    category: "Lean",
    readTime: "9 min",
    date: "2024-12-15",
    content: `
## ¿Qué es el Value Stream Mapping?

El Value Stream Mapping (VSM) o Mapeo de Flujo de Valor es una herramienta Lean que permite visualizar todo el flujo de materiales e información desde el proveedor hasta el cliente.

## ¿Por qué hacer un VSM?

- **Ver el flujo completo**, no solo procesos individuales
- **Identificar desperdicios** en todo el sistema
- **Alinear al equipo** en una visión común
- **Priorizar mejoras** de mayor impacto

## Elementos de un VSM

### Iconos de proceso
- Cajas de proceso con tiempos de ciclo
- Inventarios (triángulos)
- Operadores

### Flujo de información
- Flechas de información
- Programación de producción
- Pronósticos

### Línea de tiempo
- Tiempo de valor agregado
- Tiempo de no valor agregado
- Lead time total

## Pasos para crear un VSM

### 1. Seleccionar familia de productos

Elegir productos que comparten procesos similares.

### 2. Mapear estado actual

Ir al gemba (lugar de trabajo) y documentar:
- Cada proceso
- Inventarios entre procesos
- Tiempos de ciclo
- Changeover times
- Uptime de máquinas

### 3. Calcular métricas

- **Lead Time:** Tiempo total desde inicio hasta fin
- **Tiempo de ciclo:** Tiempo de cada proceso
- **Ratio VA/NVA:** Proporción de valor agregado

### 4. Diseñar estado futuro

Aplicar principios Lean:
- Producir al takt time
- Implementar flujo continuo donde sea posible
- Usar supermercados donde no sea posible
- Nivelar la producción (heijunka)

### 5. Plan de implementación

Priorizar las mejoras y crear un plan de acción.

## Tips para un buen VSM

1. **Camina el proceso** físicamente
2. **Involucra al equipo** que conoce el proceso
3. **Usa lápiz y papel** primero
4. **No busques perfección**, busca entendimiento
5. **Actualízalo regularmente**

## VSM digital

Las herramientas digitales modernas permiten crear VSM interactivos, conectados a datos en tiempo real, facilitando el seguimiento de mejoras y la actualización continua del mapa.
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsContent[slug] : null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-AR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 text-center py-20">
            <h1 className="text-3xl font-bold font-heading mb-4">Artículo no encontrado</h1>
            <p className="text-muted-foreground mb-8">
              El artículo que buscas no existe o ha sido movido.
            </p>
            <Button asChild variant="hero">
              <Link to="/blog">Volver al Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-6 max-w-4xl">
          {/* Back link */}
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                {post.category}
              </Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {post.readTime} de lectura
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold font-heading text-foreground mt-10 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold font-heading text-foreground mt-8 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground my-4">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('1. ')) {
                const items = paragraph.split('\n').filter(line => /^\d+\. /.test(line));
                return (
                  <ol key={index} className="list-decimal list-inside space-y-2 text-muted-foreground my-4">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^\d+\. /, '')}</li>
                    ))}
                  </ol>
                );
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={index} className="font-semibold text-foreground my-4">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                );
              }
              if (paragraph.startsWith('|')) {
                return null; // Skip tables for simplicity
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed my-4">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-card rounded-2xl border border-border text-center">
            <h3 className="text-2xl font-bold font-heading mb-4">
              ¿Querés aplicar estas metodologías con IA?
            </h3>
            <p className="text-muted-foreground mb-6">
              Be Kaizen combina décadas de conocimiento en mejora continua con lo último en inteligencia artificial.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/#platform">Conocer la plataforma</Link>
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
