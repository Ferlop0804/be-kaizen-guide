import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageLightbox = ({ isOpen, onClose, imageSrc, imageAlt }: ImageLightboxProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] p-0 bg-transparent border-none">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
          aria-label="Cerrar imagen"
        >
          <X className="w-5 h-5" />
        </button>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
