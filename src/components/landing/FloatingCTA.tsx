import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-3 animate-slide-up">
      <button
        onClick={() => setIsDismissed(true)}
        className="p-1.5 rounded-full bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Fechar"
      >
        <X className="w-4 h-4" />
      </button>
      <Button
        variant="heroAccent"
        size="lg"
        className="shadow-glow-accent sm:text-base text-sm"
        asChild
      >
        <a href="#contato" className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Testar Grátis</span>
          <span className="sm:hidden">Testar</span>
        </a>
      </Button>
    </div>
  );
};

export default FloatingCTA;
