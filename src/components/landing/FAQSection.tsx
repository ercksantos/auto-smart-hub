import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a integração com WhatsApp?",
    answer: "A integração é simples e segura. Você conecta seu número comercial através do WhatsApp Business API e nosso chatbot passa a responder automaticamente as mensagens. Todo o processo leva menos de 5 minutos."
  },
  {
    question: "Quantos veículos posso cadastrar?",
    answer: "Não há limite de veículos. Você pode cadastrar todo o seu estoque, seja ele de 10 ou 1.000 veículos. Nosso sistema foi desenvolvido para escalar conforme sua necessidade."
  },
  {
    question: "A IA substitui minha equipe de vendas?",
    answer: "Não, a IA complementa sua equipe. Ela faz o primeiro atendimento, qualifica leads e agenda visitas. Quando o cliente está pronto para negociar, sua equipe entra em ação com todas as informações necessárias."
  },
  {
    question: "Como são enviadas as fotos dos veículos?",
    answer: "Quando um cliente pergunta sobre um veículo específico, a IA automaticamente envia as fotos cadastradas no sistema. Você pode adicionar fotos internas, externas e de detalhes de cada veículo."
  },
  {
    question: "O sistema funciona para motos e caminhões também?",
    answer: "Sim! Nosso sistema é flexível e pode ser usado para qualquer tipo de veículo: carros, motos, caminhões, utilitários, máquinas agrícolas, entre outros."
  },
  {
    question: "Há período de teste gratuito?",
    answer: "Oferecemos uma demonstração gratuita completa onde você pode ver o sistema funcionando com seus próprios veículos. Após a demonstração, você decide se deseja contratar."
  },
  {
    question: "Como funciona a simulação de financiamento?",
    answer: "Integramos com as principais financeiras do mercado. Quando o cliente demonstra interesse em financiamento, a IA coleta os dados necessários e realiza a consulta de crédito, retornando se o cliente está aprovado ou não."
  },
  {
    question: "Os dados dos clientes ficam seguros?",
    answer: "Absolutamente. Utilizamos criptografia de ponta a ponta e seguimos todas as normas da LGPD. Seus dados e os dados dos seus clientes estão protegidos em servidores seguros no Brasil."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-cyan-400 font-medium mb-6 animate-fade-in">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Perguntas{" "}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100">
            Tire suas dúvidas sobre nossa plataforma. Se não encontrar o que procura, entre em contato conosco.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl border-0 px-6 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${(index + 1) * 50}ms` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-foreground font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
