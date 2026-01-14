import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const screenshots = [
  {
    title: "Dashboard Principal",
    description: "Visão completa das métricas e performance do seu negócio em tempo real.",
    content: (
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-secondary/40 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold gradient-text">127</p>
            <p className="text-xs text-muted-foreground mt-1">Veículos</p>
          </div>
          <div className="bg-secondary/40 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold gradient-text-accent">89</p>
            <p className="text-xs text-muted-foreground mt-1">Leads Hoje</p>
          </div>
          <div className="bg-secondary/40 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-violet-400">94%</p>
            <p className="text-xs text-muted-foreground mt-1">Satisfação</p>
          </div>
          <div className="bg-secondary/40 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-orange-400">R$2.4M</p>
            <p className="text-xs text-muted-foreground mt-1">Vendas/Mês</p>
          </div>
        </div>
        <div className="bg-secondary/20 rounded-lg p-4 h-40 flex items-end gap-1">
          {[30, 45, 55, 40, 70, 65, 85, 75, 90, 80, 95, 85, 70, 88].map((h, i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500/60 to-cyan-400/90 rounded-t" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Catálogo de Veículos",
    description: "Gerencie todo seu estoque com fotos, especificações e preços.",
    content: (
      <div className="p-6 space-y-3">
        {[
          { name: "Honda Civic 2024", price: "R$ 142.900", status: "Disponível", img: "🚗" },
          { name: "Toyota Corolla 2023", price: "R$ 135.000", status: "Reservado", img: "🚙" },
          { name: "Volkswagen Polo 2024", price: "R$ 89.900", status: "Disponível", img: "🚘" },
          { name: "Chevrolet Onix 2023", price: "R$ 78.500", status: "Vendido", img: "🏎️" },
        ].map((car, i) => (
          <div key={i} className="flex items-center gap-4 bg-secondary/30 rounded-lg p-3 hover:bg-secondary/40 transition-colors">
            <div className="w-16 h-12 rounded-lg bg-secondary/50 flex items-center justify-center text-2xl">{car.img}</div>
            <div className="flex-1">
              <p className="font-semibold text-sm">{car.name}</p>
              <p className="text-xs text-muted-foreground">{car.price}</p>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${
              car.status === "Disponível" ? "bg-emerald-500/20 text-emerald-400" :
              car.status === "Reservado" ? "bg-orange-500/20 text-orange-400" :
              "bg-muted text-muted-foreground"
            }`}>{car.status}</span>
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Gestão de Leads",
    description: "Acompanhe todos os interessados e o status de cada negociação.",
    content: (
      <div className="p-6 space-y-3">
        {[
          { name: "Carlos Silva", vehicle: "Civic 2024", status: "Aprovado", time: "há 5 min" },
          { name: "Maria Santos", vehicle: "Corolla 2023", status: "Análise", time: "há 15 min" },
          { name: "João Costa", vehicle: "Polo 2024", status: "Novo", time: "há 32 min" },
          { name: "Ana Oliveira", vehicle: "Onix 2023", status: "Aprovado", time: "há 1h" },
        ].map((lead, i) => (
          <div key={i} className="flex items-center gap-4 bg-secondary/30 rounded-lg p-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-400 flex items-center justify-center text-background font-bold text-sm">
              {lead.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">{lead.name}</p>
              <p className="text-xs text-muted-foreground">Interessado: {lead.vehicle}</p>
            </div>
            <div className="text-right">
              <span className={`text-xs px-2 py-1 rounded-full ${
                lead.status === "Aprovado" ? "bg-emerald-500/20 text-emerald-400" :
                lead.status === "Análise" ? "bg-orange-500/20 text-orange-400" :
                "bg-cyan-500/20 text-cyan-400"
              }`}>{lead.status}</span>
              <p className="text-xs text-muted-foreground mt-1">{lead.time}</p>
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Conversa WhatsApp",
    description: "Veja como a IA atende seus clientes de forma natural e eficiente.",
    content: (
      <div className="p-4 space-y-3 bg-[#0b141a]">
        <div className="flex gap-2">
          <div className="bg-[#202c33] rounded-lg rounded-tl-none p-3 max-w-[80%]">
            <p className="text-sm">Olá! Vi o Honda Civic 2024 no site de vocês. Ainda está disponível? 🚗</p>
            <p className="text-[10px] text-muted-foreground text-right mt-1">14:32</p>
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="bg-[#005c4b] rounded-lg rounded-tr-none p-3 max-w-[80%]">
            <p className="text-sm">Olá! 👋 Sim, o Honda Civic EXL 2024 está disponível! Ele vem com motor 2.0 turbo, 174cv, câmbio CVT e apenas 8.500 km rodados. Gostaria de ver mais fotos?</p>
            <p className="text-[10px] text-muted-foreground text-right mt-1">14:32 ✓✓</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-[#202c33] rounded-lg rounded-tl-none p-3 max-w-[80%]">
            <p className="text-sm">Sim! Pode mandar as fotos por favor. Qual o valor?</p>
            <p className="text-[10px] text-muted-foreground text-right mt-1">14:33</p>
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="bg-[#005c4b] rounded-lg rounded-tr-none p-3 max-w-[80%]">
            <p className="text-sm">Claro! O valor é R$ 142.900 à vista ou parcelo. Enviando as fotos agora... 📸</p>
            <p className="text-[10px] text-muted-foreground text-right mt-1">14:33 ✓✓</p>
          </div>
        </div>
      </div>
    )
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
            <div className="bg-card min-h-[320px]">
              {screenshots[activeIndex].content}
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
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
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
