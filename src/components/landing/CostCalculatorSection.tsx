import { DollarSign, TrendingDown, AlertTriangle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const lossScenarios = [
    {
        icon: TrendingDown,
        scenario: "Leads perdidos fora do horário",
        calculation: "5 leads/semana × R$ 2.000 comissão",
        monthly: "R$ 40.000",
        description: "Dinheiro que está indo pra concorrência todo mês"
    },
    {
        icon: AlertTriangle,
        scenario: "Tempo do vendedor desperdiçado",
        calculation: "15 horas/semana × R$ 35/hora",
        monthly: "R$ 2.100",
        description: "Salário pago pra responder 'qual o preço?'"
    },
    {
        icon: DollarSign,
        scenario: "Leads que desistem de esperar",
        calculation: "8 leads/semana × R$ 2.000 comissão",
        monthly: "R$ 64.000",
        description: "Cliente mandou mensagem, esperou 2h, foi embora"
    }
];

const CostCalculatorSection = () => {
    const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section id="quanto-custa" className="section-padding relative overflow-hidden" ref={elementRef}>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-destructive/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
                    <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-destructive font-medium mb-6 animate-fade-in">
                        Faça as contas
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
                        Quanto Você Está <span className="text-destructive">PERDENDO</span> Por Mês?
                    </h2>
                    <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100">
                        Esses números são conservadores. A realidade provavelmente é pior.
                    </p>
                </div>

                {/* Loss Scenarios */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                    {lossScenarios.map((scenario, index) => (
                        <div
                            key={index}
                            className={`glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-destructive/20 hover:border-destructive/40 transition-all duration-300 animate-slide-up`}
                            style={{ animationDelay: `${(index + 1) * 100}ms` }}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className={`w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isVisible ? 'animate-icon-bounce' : 'icon-hidden'
                                    }`}
                                    style={{ animationDelay: `${(index + 1) * 150}ms` }}>
                                    <scenario.icon className="w-6 h-6 text-destructive" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-foreground mb-2">{scenario.scenario}</h3>
                                    <p className="text-sm text-muted-foreground mb-1">{scenario.calculation}</p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-border/50">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-xl sm:text-2xl font-bold text-destructive">{scenario.monthly}</span>
                                    <span className="text-sm text-muted-foreground">/mês</span>
                                </div>
                                <p className="text-xs text-muted-foreground">{scenario.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Total Impact */}
                <div className="max-w-2xl mx-auto glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-destructive/5 to-destructive/10 border-2 border-destructive/30 animate-scale-in animation-delay-400">
                    <div className="text-center">
                        <p className="text-sm sm:text-base text-muted-foreground mb-2">Perda total estimada por mês:</p>
                        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-destructive mb-4">
                            R$ 106.100
                        </p>
                        <p className="text-base sm:text-lg text-foreground mb-6">
                            Isso dá <span className="font-bold text-destructive">R$ 1.273.200</span> por ano jogados fora.
                        </p>
                        <div className="pt-6 border-t border-border/50">
                            <p className="text-muted-foreground text-sm mb-4">
                                Enquanto isso, o investimento no sistema é menor que o salário de um vendedor júnior.
                            </p>
                            <p className="text-foreground font-semibold">
                                Você consegue fazer essa conta?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CostCalculatorSection;
