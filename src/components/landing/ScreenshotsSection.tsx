import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const screenshots = [
  {
    title: "Dashboard do Sistema",
    description: "Visão completa das métricas e performance do seu negócio em tempo real.",
    image: "/dashboard-sistema.png"
  },
  {
    title: "Gestão de Veículos",
    description: "Gerencie todo seu estoque com fotos, especificações e preços.",
    image: "/gestao-veiculos.png"
  },
  {
    title: "Gestão de Leads",
    description: "Acompanhe todos os interessados e o status de cada negociação.",
    image: "/gestao-leads.png"
  },
  {
    title: "Conversa WhatsApp",
    description: "Veja como a IA atende seus clientes de forma natural e eficiente.",
    image: "/whatsapp.png"
  }
];

const ScreenshotsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-cyan-400 font-medium mb-6 animate-fade-in">
            Demonstração
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Veja o Sistema em{" "}
            <span className="gradient-text">Ação</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100">
            Interface moderna e intuitiva, desenvolvida para facilitar o dia a dia da sua equipe.
          </p>
        </div>

        {/* Screenshot Viewer */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Display */}
          <div className="glass-card rounded-2xl overflow-hidden shadow-glow-md animate-scale-in">
            {/* Browser Chrome */}
            <div className="bg-secondary/50 px-4 py-3 flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
              </div>
              <div className="flex-1 bg-secondary/50 rounded-lg px-3 py-1.5 text-xs text-muted-foreground">
                app.concessionaria-inteligente.com
              </div>
            </div>

            {/* Content */}
            <div className="bg-card overflow-hidden">
              <img
                key={activeIndex}
                src={screenshots[activeIndex].image}
                alt={screenshots[activeIndex].title}
                className="w-full h-auto object-contain animate-in fade-in zoom-in-95 duration-500"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="glass"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:-translate-x-full lg:-left-4 z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="glass"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 lg:translate-x-full lg:-right-4 z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Caption */}
          <div className="text-center mt-8">
            <h3 className="text-xl font-bold mb-2">{screenshots[activeIndex].title}</h3>
            <p className="text-muted-foreground">{screenshots[activeIndex].description}</p>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                  ? "w-8 bg-cyan-400"
                  : "bg-muted hover:bg-muted-foreground/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
