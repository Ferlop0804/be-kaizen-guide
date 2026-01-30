import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Briefcase, Users, Rocket, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().min(8, "Ingresa un teléfono válido"),
  position: z.string().min(1, "Selecciona un área de interés"),
  linkedin: z.string().url("Ingresa una URL válida de LinkedIn").optional().or(z.literal("")),
  message: z.string().min(10, "Cuéntanos un poco más sobre ti (mínimo 10 caracteres)"),
});

type FormData = z.infer<typeof formSchema>;

const Careers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      position: "",
      linkedin: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    const subject = encodeURIComponent(`Postulación: ${data.position} - ${data.fullName}`);
    const body = encodeURIComponent(
      `Nombre: ${data.fullName}\n` +
      `Email: ${data.email}\n` +
      `Teléfono: ${data.phone}\n` +
      `Área de interés: ${data.position}\n` +
      `LinkedIn: ${data.linkedin || "No proporcionado"}\n\n` +
      `Mensaje:\n${data.message}`
    );
    
    window.location.href = `mailto:contacto@bekaizen-ai.com?subject=${subject}&body=${body}`;
    
    toast.success("¡Gracias por tu interés! Se abrirá tu cliente de correo para enviar tu postulación.");
    setIsSubmitting(false);
    form.reset();
  };

  const benefits = [
    {
      icon: Rocket,
      title: "Crecimiento",
      description: "Oportunidades de desarrollo profesional y aprendizaje continuo",
    },
    {
      icon: Users,
      title: "Equipo",
      description: "Trabaja con profesionales apasionados por la innovación",
    },
    {
      icon: Heart,
      title: "Cultura",
      description: "Ambiente colaborativo y flexible que valora tu bienestar",
    },
    {
      icon: Briefcase,
      title: "Impacto",
      description: "Tu trabajo transformará la industria manufacturera",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Carreras
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6">
                ¿Querés ser parte del futuro de la manufactura?
              </h1>
              <p className="text-lg text-muted-foreground">
                En Be Kaizen estamos revolucionando la industria con inteligencia artificial. 
                Buscamos personas apasionadas que quieran construir el futuro con nosotros.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div 
                  key={benefit.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold font-heading mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold font-heading mb-4">
                  Postulate ahora
                </h2>
                <p className="text-muted-foreground">
                  Completá el formulario y nos pondremos en contacto contigo.
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre completo *</FormLabel>
                            <FormControl>
                              <Input placeholder="Tu nombre" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="tu@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Teléfono *</FormLabel>
                            <FormControl>
                              <Input placeholder="+54 11 1234-5678" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Área de interés *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecciona un área" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="desarrollo">Desarrollo de Software</SelectItem>
                                <SelectItem value="ia">Inteligencia Artificial / ML</SelectItem>
                                <SelectItem value="producto">Producto / UX</SelectItem>
                                <SelectItem value="ventas">Ventas / Comercial</SelectItem>
                                <SelectItem value="operaciones">Operaciones / Soporte</SelectItem>
                                <SelectItem value="otro">Otro</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="linkedin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Perfil de LinkedIn (opcional)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://linkedin.com/in/tu-perfil" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cuéntanos sobre ti *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="¿Por qué te gustaría trabajar en Be Kaizen? ¿Cuál es tu experiencia relevante?"
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Enviar postulación
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
