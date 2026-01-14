import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Users, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-float animation-delay-300" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full glass-card mb-4 sm:mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-muted-foreground">
                Já utilizado por concessionárias em todo o Brasil
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 animate-slide-up">
              Automatize o Atendimento e Gestão da Sua{" "}
              <span className="gradient-text">Concessionária</span> com{" "}
              <span className="gradient-text-accent">Inteligência Artificial</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up animation-delay-100">
              Sistema completo que atende seus clientes 24/7, gerencia seu estoque e aumenta suas vendas automaticamente
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10 animate-slide-up animation-delay-200">
              <Button variant="heroAccent" size="xl" asChild className="text-sm sm:text-base">
                <a href="#contato" className="group">
                  <span className="hidden sm:inline">Solicitar Demonstração Gratuita</span>
                  <span className="sm:hidden">Agendar Demo Grátis</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild className="text-sm sm:text-base">
                <a href="#como-funciona">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Ver Como Funciona
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start animate-slide-up animation-delay-300">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Dados Seguros</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>+500 Usuários</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Suporte 24h</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-scale-in animation-delay-200">
            <div className="relative">
              {/* Main Dashboard Image */}
              <div className="glass-card rounded-2xl p-2 shadow-glow-lg animate-glow-pulse">
                <div className="bg-card rounded-xl overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="bg-secondary/50 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">dashboard.concessionaria-inteligente.com</span>
                  </div>

                  {/* Dashboard Image */}
                  <img
                    src="/dashboard-inicio.png"
                    alt="Dashboard da Concessionária Inteligente"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Floating WhatsApp Card */}
              <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 shadow-lg animate-float animation-delay-500 max-w-[200px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">💬</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-1">WhatsApp Bot</p>
                    <p className="text-xs text-muted-foreground">"Oi! Vi o Corolla 2023, ainda está disponível?"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
