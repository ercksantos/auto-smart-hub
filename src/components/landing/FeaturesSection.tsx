import { Bot, Car, BarChart3, CreditCard, PieChart, MessageSquare } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Bot,
    title: "Atendimento que nunca dorme",
    description: "Um funcionário digital que responde todos os clientes",
    highlights: [
      "Funciona 24h por dia, inclusive domingo e feriado",
      "Responde na hora, sem fazer o cliente esperar",
      "Envia fotos, valores e informações dos carros automaticamente"
    ],
    color: "from-cyan-500 to-cyan-400"
  },
  {
    icon: Car,
    title: "Todos os seus carros organizados",
    description: "Acabou planilha bagunçada e foto perdida no celular",
    highlights: [
      "Cada carro com fotos, dados e preço no lugar certo",
      "Cliente pede informação, sistema envia na hora",
      "Atualiza estoque e todo mundo vê em tempo real"
    ],
    color: "from-emerald-400 to-emerald-500"
  },
  {
    icon: BarChart3,
    title: "Sabe quem está pronto pra comprar",
    description: "Leads organizados por interesse real",
    highlights: [
      "Cliente só perguntou preço? Interesse baixo",
      "Pediu fotos, financiamento e agendou visita? Esse tá quente",
      "Vendedor vai direto nos leads que vão fechar"
    ],
    color: "from-violet-500 to-violet-400"
  },
  {
    icon: CreditCard,
    title: "Acompanha cada negociação",
    description: "Nenhuma proposta esquecida ou perdida",
    highlights: [
      "Registro de todas as ofertas feitas",
      "Status atualizado: proposta enviada, aguardando, fechado",
      "Vendedor sabe exatamente o que fazer com cada cliente"
    ],
    color: "from-orange-500 to-orange-400"
  },
  {
    icon: PieChart,
    title: "Entenda seu negócio de verdade",
    description: "Dados que mostram onde está o dinheiro",
    highlights: [
      "Quantos leads entraram hoje, essa semana, esse mês",
      "Quais carros o pessoal mais procura",
      "Taxa de conversão: quantos viraram venda de verdade"
    ],
    color: "from-pink-500 to-pink-400"
  },
  {
    icon: MessageSquare,
    title: "Atende 50 clientes ao mesmo tempo",
    description: "Seu vendedor só atende 1. O sistema atende todos",
    highlights: [
      "Sem fila, sem espera, sem cliente desistindo",
      "Cada um recebe atenção exclusiva",
      "Escala infinita sem contratar ninguém"
    ],
    color: "from-cyan-400 to-emerald-400"
  }
];

const FeaturesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="funcionalidades" className="section-padding relative" ref={elementRef}>
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-cyan-400 font-medium mb-6 animate-fade-in">
            O que tem dentro
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Tudo Que Você Precisa{" "}
            <span className="gradient-text">Em Um Só Lugar</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100">
            Não é só um chatbot. É um sistema completo pra você parar de perder vendas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group animate-slide-up`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg transition-all duration-300 ${isVisible ? 'animate-icon-rotate' : 'icon-hidden'
                }`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}>
                <feature.icon className="w-7 h-7 text-background" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {feature.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-2 text-sm">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${feature.color} flex-shrink-0`} />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
