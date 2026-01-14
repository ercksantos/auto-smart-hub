import { Clock, FolderOpen, UserX, Cog } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Atendimento limitado ao horário comercial",
    description: "Clientes interessados que não conseguem contato fora do expediente vão para a concorrência."
  },
  {
    icon: FolderOpen,
    title: "Dificuldade em organizar o catálogo de veículos",
    description: "Informações dispersas em planilhas, fotos perdidas e dados desatualizados."
  },
  {
    icon: UserX,
    title: "Perda de leads por demora no atendimento",
    description: "Enquanto você responde um cliente, outros três desistem de esperar."
  },
  {
    icon: Cog,
    title: "Processos manuais que consomem tempo da equipe",
    description: "Sua equipe gasta horas em tarefas repetitivas que poderiam ser automatizadas."
  }
];

const ProblemsSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-slide-up">
            Desafios que <span className="gradient-text">Toda Concessionária</span> Enfrenta
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground animate-slide-up animation-delay-100">
            Se você se identifica com esses problemas, você não está sozinho. Milhares de concessionárias enfrentam os mesmos desafios diariamente.
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
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-destructive/20 transition-colors">
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
            Mas e se existisse uma solução que resolvesse{" "}
            <span className="text-foreground font-semibold">todos esses problemas</span> de uma vez?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
