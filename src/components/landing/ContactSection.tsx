import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    whatsapp: "",
    email: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://ericksantos-n8n.cloudfy.cloud/webhook/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          whatsapp: formData.whatsapp,
          email: formData.email
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      toast({
        title: "Solicitação enviada com sucesso! 🎉",
        description: "Entraremos em contato em até 24 horas para agendar sua demonstração.",
      });

      setFormData({ name: "", company: "", whatsapp: "", email: "" });
    } catch (error) {
      toast({
        title: "Erro ao enviar solicitação",
        description: "Por favor, tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatWhatsApp = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, "");

    // Aplica a máscara
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "whatsapp") {
      const formatted = formatWhatsApp(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formatted
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const guarantees = [
    "Sem compromisso",
    "Suporte completo",
    "Treinamento incluído"
  ];

  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-500/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-emerald-400 font-medium mb-6 animate-fade-in">
              Comece Agora
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
              Comece a Vender Mais{" "}
              <span className="gradient-text-accent">Hoje Mesmo</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-100">
              Agende uma demonstração gratuita e veja o sistema funcionando na prática. Sem compromisso.
            </p>
          </div>

          {/* Form Card */}
          <div className="glass-card rounded-2xl p-8 md:p-10 shadow-glow-md animate-scale-in animation-delay-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Nome completo</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">Nome da concessionária</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Nome da sua empresa"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-foreground">WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="(53) 99999-9999"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    maxLength={15}
                    required
                    className="bg-secondary/50 border-border focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="heroAccent"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Quero agendar minha demo
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>

              {/* Guarantees */}
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>{guarantee}</span>
                  </div>
                ))}
              </div>
            </form>

            {/* WhatsApp Alternative */}
            <div className="mt-6 pt-6 border-t border-border/50 text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Ou, chame no WhatsApp...
              </p>
              <a
                href="https://wa.me/5553991631843?text=Olá! Gostaria de agendar uma demonstração do Auto Smart Hub."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
