import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
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
import { CheckCircle, Loader2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(1, "El nombre es requerido").max(100),
  company: z.string().min(1, "La empresa es requerida").max(100),
  email: z.string().email("Ingresa un email válido").max(255),
  message: z.string().max(1000).optional(),
  website: z.string().max(0).optional(), // Honeypot field
});

type FormData = z.infer<typeof formSchema>;

interface ContactSalesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactSalesModal = ({ open, onOpenChange }: ContactSalesModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formLoadedAt] = useState(() => Date.now());
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { data: response, error } = await supabase.functions.invoke('submit-sales-inquiry', {
        body: {
          fullName: data.fullName,
          company: data.company,
          email: data.email,
          message: data.message || null,
          website: data.website || null,
          _loadedAt: formLoadedAt,
        }
      });

      if (error) throw error;
      
      if (response?.error) {
        throw new Error(response.error);
      }
      
      setIsSubmitted(true);
    } catch (error: any) {
      const errorMessage = error?.message || "No se pudo enviar la solicitud. Por favor, intenta nuevamente.";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
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
            <DialogHeader className="space-y-3">
              <DialogTitle className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
                Contactar a ventas
              </DialogTitle>
              <DialogDescription className="text-muted-foreground leading-relaxed">
                Contanos sobre tu operación y te contactaremos para diseñar una solución a medida para tu empresa.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre y apellido *</FormLabel>
                      <FormControl>
                        <Input placeholder="Juan García" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email corporativo *</FormLabel>
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
                      <FormLabel>Mensaje (opcional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Contanos sobre tu operación, cantidad de plantas, desafíos actuales..."
                          className="resize-none min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Honeypot field */}
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input 
                          tabIndex={-1} 
                          autoComplete="off"
                          {...field} 
                        />
                      </FormControl>
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
                    "Enviar consulta"
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
            
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold font-heading">¡Gracias por contactarnos!</h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                Nuestro equipo de ventas se pondrá en contacto contigo a la brevedad para diseñar la mejor solución para tu empresa.
              </p>
            </div>

            <div className="pt-4">
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

export default ContactSalesModal;
