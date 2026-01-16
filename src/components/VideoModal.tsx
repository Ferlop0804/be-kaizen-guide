import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequestDemo: () => void;
}

const VideoModal = ({ open, onOpenChange, onRequestDemo }: VideoModalProps) => {
  const handleRequestDemo = () => {
    onOpenChange(false);
    onRequestDemo();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
          <h2 className="text-2xl font-bold font-heading mb-4">
            Video demo próximamente
          </h2>
          <Button 
            type="button"
            variant="hero" 
            size="lg"
            onClick={handleRequestDemo}
            className="mt-6"
          >
            Solicitar una demo
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
