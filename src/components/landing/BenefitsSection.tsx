import { Clock, TrendingUp, DollarSign, Target, BarChart2, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const benefits = [
  {
    icon: Clock,
    title: "Resposta em menos de 1 minuto, 24 horas por dia",
    description: "Acabou a desculpa de \"estava fechado\". Cada lead é respondido na hora, mesmo às 3h da manhã.",
    metric: "<1min",
    color: "from-cyan-500 to-cyan-400"
  },
  {
    icon: TrendingUp,
    title: "Converta mais sem aumentar a equipe",
    description: "Mais vendas com o mesmo time. Seus vendedores focam em fechar, não em responder \"qual o preço?\".",
    metric: "+vendas",
    color: "from-emerald-400 to-emerald-500"
  },
  {
    icon: DollarSign,
    title: "Pare de pagar vendedor para ficar no WhatsApp",
    description: "Salário de R$ 3.500/mês sendo desperdiçado. Use seu time onde ele gera dinheiro de verdade.",
    metric: "R$ 3.5k",
    color: "from-violet-500 to-violet-400"
  },
  {
    icon: Target,
    title: "Nenhum lead fica sem resposta",
    description: "Zero clientes perdidos por falta de atendimento. Cada um que entrou em contato foi atendido.",
    metric: "0 perdas",
    color: "from-orange-500 to-orange-400"
  },
  {
    icon: BarChart2,
    title: "Saiba exatamente o que está acontecendo",
    description: "Quantos leads entraram hoje? Quais carros mais procurados? Quem está pronto pra comprar? Você sabe.",
    metric: "Dados",
    color: "from-pink-500 to-pink-400"
  },
  {
    icon: CheckCircle,
    title: "Cliente bem atendido volta e indica",
    description: "Atendimento rápido e profissional gera indicação. Indicação gera mais vendas. Simples assim.",
    metric: "5★",
    color: "from-cyan-400 to-emerald-400"
  }
];

const BenefitsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="beneficios" className="section-padding relative" ref={elementRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-500/5 to-background" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-card text-xs sm:text-sm text-emerald-400 font-medium mb-4 sm:mb-6 animate-fade-in">
            O que você ganha
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-slide-up">
            Como Funciona <span className="gradient-text-accent">Na Prática</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground animate-slide-up animation-delay-100">
            Sem enrolação, sem promessa milagrosa. São esses os resultados que você vai ter:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 group hover:scale-[1.02] transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg transition-all duration-300 ${isVisible ? 'animate-icon-pop' : 'icon-hidden'
                  }`}
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}>
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
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
