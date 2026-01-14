import { Clock, TrendingUp, DollarSign, Target, BarChart2, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Economize até 15 horas semanais",
    description: "Automatize tarefas repetitivas e libere sua equipe para focar em vendas.",
    metric: "15h/semana",
    color: "from-cyan-500 to-cyan-400"
  },
  {
    icon: TrendingUp,
    title: "Aumente em até 40% a conversão",
    description: "Atendimento instantâneo significa mais clientes fechando negócio.",
    metric: "+40%",
    color: "from-emerald-400 to-emerald-500"
  },
  {
    icon: DollarSign,
    title: "Atenda mais sem contratar",
    description: "Escale seu atendimento sem aumentar custos com pessoal.",
    metric: "∞ clientes",
    color: "from-violet-500 to-violet-400"
  },
  {
    icon: Target,
    title: "Nunca perca uma oportunidade",
    description: "Atendimento 24/7 captura leads a qualquer hora do dia ou noite.",
    metric: "24/7",
    color: "from-orange-500 to-orange-400"
  },
  {
    icon: BarChart2,
    title: "Controle total do estoque",
    description: "Visualize, organize e atualize seu inventário em tempo real.",
    metric: "100%",
    color: "from-pink-500 to-pink-400"
  },
  {
    icon: CheckCircle,
    title: "Melhore a experiência",
    description: "Clientes satisfeitos indicam mais e voltam a comprar.",
    metric: "5★",
    color: "from-cyan-400 to-emerald-400"
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-500/5 to-background" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-emerald-400 font-medium mb-6 animate-fade-in">
            Benefícios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Resultados Reais para{" "}
            <span className="gradient-text-accent">Seu Negócio</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100">
            Não são apenas promessas. São resultados comprovados por concessionárias que já usam nossa plataforma.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 group hover:scale-[1.02] transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 text-background" />
                </div>
                <span className={`text-2xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                  {benefit.metric}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
