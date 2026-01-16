import { Upload, Smartphone, MessageCircle, Handshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Cadastra seus carros",
    description: "Coloca foto, preço e informações dos veículos. Simples como fazer um post no Instagram.",
    color: "from-cyan-500 to-cyan-400"
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Conecta seu WhatsApp",
    description: "A gente faz a integração em menos de 10 minutos. Você só precisa aprovar.",
    color: "from-emerald-400 to-emerald-500"
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Sistema começa a atender",
    description: "Todo lead que entra é respondido na hora. Fotos enviadas, perguntas respondidas, cliente qualificado.",
    color: "from-violet-500 to-violet-400"
  },
  {
    number: "04",
    icon: Handshake,
    title: "Você fecha a venda",
    description: "Cliente chega pra você já interessado, já qualificado, já sabendo o preço. Só fechar.",
    color: "from-orange-500 to-orange-400"
  }
];

const HowItWorksSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="como-funciona" className="section-padding relative overflow-hidden" ref={elementRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-cyan-400 font-medium mb-6 animate-fade-in">
            Como funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text">4 Passos</span> e Está Funcionando
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100">
            Sem complicação, sem treinamento extenso, sem mudar toda sua operação.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-emerald-400/20 to-cyan-500/20 -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative animate-slide-up`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Card */}
                <div className="glass-card rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-background text-sm font-bold shadow-lg`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mt-4 mb-5 shadow-lg transition-all duration-300 ${isVisible ? 'animate-icon-scale-bounce' : 'icon-hidden'
                    }`}
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                    <step.icon className="w-8 h-8 text-background" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2 z-10">
                    <div className="w-full h-full border-t-2 border-r-2 border-cyan-500/40 rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
