import { Bot, Car, BarChart3, CreditCard, PieChart, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Atendimento Inteligente via WhatsApp",
    description: "Chatbot humanizado que conversa com clientes",
    highlights: [
      "Disponível 24 horas por dia, 7 dias por semana",
      "Qualifica leads automaticamente",
      "Entende perguntas em linguagem natural"
    ],
    color: "from-cyan-500 to-cyan-400"
  },
  {
    icon: Car,
    title: "Catálogo Digital Completo",
    description: "Gestão centralizada de todo o estoque",
    highlights: [
      "Fotos externas e internas dos veículos",
      "Informações detalhadas (marca, modelo, ano, preço)",
      "Envio automático de fotos via WhatsApp"
    ],
    color: "from-emerald-400 to-emerald-500"
  },
  {
    icon: BarChart3,
    title: "Gestão de Leads Inteligente",
    description: "Captura automática de dados dos interessados",
    highlights: [
      "Resumo detalhado de cada atendimento",
      "Filtragem por status de financiamento",
      "Histórico completo de interações"
    ],
    color: "from-violet-500 to-violet-400"
  },
  {
    icon: CreditCard,
    title: "Simulação de Financiamento",
    description: "Integração com análise de crédito",
    highlights: [
      "Resposta automática ao cliente",
      "Aprovado ou reprovado em tempo real",
      "Acompanhamento do status"
    ],
    color: "from-orange-500 to-orange-400"
  },
  {
    icon: PieChart,
    title: "Dashboard Analítico",
    description: "Visão geral do seu negócio",
    highlights: [
      "Métricas de atendimentos realizados",
      "Veículos mais procurados",
      "Indicadores de performance"
    ],
    color: "from-pink-500 to-pink-400"
  },
  {
    icon: MessageSquare,
    title: "Multi-Atendimento",
    description: "Atenda centenas de clientes simultaneamente",
    highlights: [
      "Sem fila de espera",
      "Respostas instantâneas",
      "Escale sem contratar"
    ],
    color: "from-cyan-400 to-emerald-400"
  }
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="section-padding relative">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-cyan-400 font-medium mb-6 animate-fade-in">
            Funcionalidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Tudo o Que Você Precisa em{" "}
            <span className="gradient-text">Uma Única Plataforma</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100">
            Desenvolvemos cada funcionalidade pensando nas necessidades reais das concessionárias brasileiras.
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
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
