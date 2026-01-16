import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto custa?",
    answer: "Você testa 14 dias grátis. Depois disso, o investimento é bem menor que o salário de um vendedor junior. E ao contrário do vendedor, funciona 24h por dia sem férias, sem descanso e sem reclamar."
  },
  {
    question: "Vou precisar contratar alguém pra mexer nisso?",
    answer: "Não. Se você consegue postar no Instagram, consegue usar o sistema. A gente instala tudo pra você. Você só cadastra os carros (que é simples) e pronto."
  },
  {
    question: "E se o sistema der problema?",
    answer: "A gente resolve. Suporte via WhatsApp, rápido. Mas o sistema é robusto e fica online 24/7. Já tá rodando em várias concessionárias sem dor de cabeça."
  },
  {
    question: "Isso realmente aumenta vendas ou é só conversa?",
    answer: "Pensa assim: se você responde 100% dos leads em menos de 1 minuto ao invés de perder metade deles, logicamente você vai vender mais. Não é mágica, é matemática."
  },
  {
    question: "Meus vendedores vão ficar sem ter o que fazer?",
    answer: "Pelo contrário. Eles vão parar de perder tempo respondendo \"qual o preço?\" e vão focar em fechar vendas com clientes já qualificados. Produtividade sobe, estresse desce."
  },
  {
    question: "E se eu não gostar depois dos 14 dias?",
    answer: "Cancela. Simples assim. Sem burocracia, sem multa, sem pergunta inconveniente. O risco é todo meu, não seu."
  },
  {
    question: "Quanto tempo leva pra começar a funcionar?",
    answer: "Menos de 24 horas. A gente faz a integração do WhatsApp, você cadastra uns 5-10 carros pra começar, e já tá no ar. O resto do estoque você vai adicionando aos poucos."
  },
  {
    question: "Os dados dos meus clientes ficam seguros?",
    answer: "Sim. Tudo dentro da LGPD, servidores no Brasil, criptografia, essas coisas chatas mas importantes. Seus dados não vão pra lugar nenhum."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-cyan-400 font-medium mb-6 animate-fade-in">
            Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            O Que Você Provavelmente{" "}
            <span className="gradient-text">Está Pensando</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100">
            Deixa eu adivinhar suas perguntas:
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-lg sm:rounded-xl border-0 px-4 sm:px-6 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${(index + 1) * 50}ms` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5 text-sm sm:text-base text-foreground font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-5 leading-relaxed">
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
