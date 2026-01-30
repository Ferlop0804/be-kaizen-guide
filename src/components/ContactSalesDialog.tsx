import { toast } from "sonner";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type ContactSalesDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  email: string;
};

export default function ContactSalesDialog({ open, onOpenChange, email }: ContactSalesDialogProps) {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast("Email copiado al portapapeles");
    } catch {
      // Fallback para navegadores donde clipboard pueda estar restringido
      const el = document.createElement("textarea");
      el.value = email;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      toast("Email copiado al portapapeles");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contactar a ventas</DialogTitle>
          <DialogDescription>
            Si tu navegador no abre el cliente de correo (común en modo incógnito), podés copiar el email y escribirnos
            manualmente.
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Email</p>
          <p className="mt-1 font-mono text-sm text-foreground break-all">{email}</p>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button type="button" variant="outline" onClick={copyEmail}>
            Copiar email
          </Button>
          <a
            href={`mailto:${email}`}
            className={cn(buttonVariants({ variant: "hero", size: "default" }))}
          >
            Abrir correo
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
