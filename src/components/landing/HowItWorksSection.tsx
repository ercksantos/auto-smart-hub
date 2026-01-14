import { Upload, Smartphone, MessageCircle, Handshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Configure seu catálogo",
    description: "Adicione seus veículos com fotos e informações completas. É simples e rápido.",
    color: "from-cyan-500 to-cyan-400"
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Conecte o WhatsApp",
    description: "Integração simples com seu número comercial. Leva menos de 5 minutos.",
    color: "from-emerald-400 to-emerald-500"
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Cliente conversa com a IA",
    description: "Atendimento automático e humanizado. A IA responde como um vendedor experiente.",
    color: "from-violet-500 to-violet-400"
  },
  {
    number: "04",
    icon: Handshake,
    title: "Você fecha a venda",
    description: "Receba leads qualificados e prontos para comprar. Foque no que importa: vender.",
    color: "from-orange-500 to-orange-400"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-cyan-400 font-medium mb-6 animate-fade-in">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Simples de Configurar,{" "}
            <span className="gradient-text">Poderoso de Usar</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100">
            Em apenas 4 passos simples, sua concessionária estará atendendo clientes automaticamente.
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
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mt-4 mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
