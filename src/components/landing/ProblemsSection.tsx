import { Clock, FolderOpen, UserX, Cog } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const problems = [
  {
    icon: Clock,
    title: "22h da noite: Lead entra e ninguém responde",
    description: "Ele vai no Google, acha a concorrência e fecha lá. Você perdeu R$ 3.000 de comissão sem nem saber."
  },
  {
    icon: FolderOpen,
    title: "Cliente pede foto do carro. Vendedor demora 2 horas",
    description: "Enquanto isso, ele já visitou outras 3 lojas que responderam na hora. Venda perdida."
  },
  {
    icon: UserX,
    title: "Sábado à tarde: 15 leads no WhatsApp, 2 vendedores",
    description: "Metade desiste de esperar. A outra metade recebe atendimento apressado. Taxa de conversão despenca."
  },
  {
    icon: Cog,
    title: "Vendedor gasta 3 horas por dia respondendo as mesmas perguntas",
    description: "Tempo que poderia estar fechando vendas está sendo desperdiçado com trabalho repetitivo."
  }
];

const ProblemsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="section-padding relative" ref={elementRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-slide-up">
            Isso Acontece <span className="gradient-text">TODO DIA</span> Na Sua Concessionária
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground animate-slide-up animation-delay-100">
            E cada vez que acontece, você está perdendo dinheiro. Dinheiro que poderia estar no seu bolso.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:scale-105 transition-all duration-300 group animate-slide-up`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-destructive/20 transition-all duration-300 ${isVisible ? 'animate-icon-bounce' : 'icon-hidden'
                }`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}>
                <problem.icon className="w-6 h-6 sm:w-7 sm:h-7 text-destructive" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-foreground leading-snug">
                {problem.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition Text */}
        <div className="text-center mt-12 sm:mt-16 px-4 animate-fade-in animation-delay-500">
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            <span className="text-foreground font-semibold">A boa notícia:</span> existe uma forma de resolver tudo isso{" "}
            <span className="text-foreground font-semibold">sem contratar ninguém</span> e sem complicar sua operação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
