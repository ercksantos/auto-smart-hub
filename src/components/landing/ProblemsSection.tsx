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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Desafios que <span className="gradient-text">Toda Concessionária</span> Enfrenta
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100">
            Se você se identifica com esses problemas, você não está sozinho. Milhares de concessionárias enfrentam os mesmos desafios diariamente.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 group animate-slide-up`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition Text */}
        <div className="text-center mt-16 animate-fade-in animation-delay-500">
          <p className="text-xl text-muted-foreground">
            Mas e se existisse uma solução que resolvesse{" "}
            <span className="text-foreground font-semibold">todos esses problemas</span> de uma vez?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
