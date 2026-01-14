import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Loader2 } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(1, "El nombre es requerido").max(50),
  lastName: z.string().min(1, "El apellido es requerido").max(50),
  company: z.string().min(1, "La empresa es requerida").max(100),
  role: z.string().min(1, "El rol es requerido").max(100),
  email: z.string().email("Ingresa un email válido").max(255),
  message: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

interface DemoRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoRequestModal = ({ open, onOpenChange }: DemoRequestModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      role: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call - in production, this would save to database
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Demo request submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form after modal closes
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading">
                Solicitar Demo
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Completa el formulario y nos pondremos en contacto contigo.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre *</FormLabel>
                        <FormControl>
                          <Input placeholder="Juan" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Apellido *</FormLabel>
                        <FormControl>
                          <Input placeholder="García" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa *</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu empresa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rol *</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingeniero Industrial, Gerente de Operaciones..." {...field} />
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
                      <FormLabel>Email de trabajo *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="juan@empresa.com" {...field} />
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
                      <FormLabel>Desafío de proceso (opcional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe brevemente el proceso que te gustaría optimizar..."
                          className="resize-none min-h-[100px]"
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
                  className="w-full mt-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Solicitar demo"
                  )}
                </Button>
              </form>
            </Form>
          </>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold font-heading">¡Gracias por tu interés!</h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                Gracias por tu interés en Be Kaizen. Revisaremos tu información y, si encaja, coordinaremos una demo personalizada.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <Button
                variant="hero"
                size="lg"
                className="w-full gap-2"
                asChild
              >
                <a
                  href="https://calendly.com/argentina-kaizen/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar demo ahora
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="w-full"
                onClick={handleClose}
              >
                Cerrar
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DemoRequestModal;
