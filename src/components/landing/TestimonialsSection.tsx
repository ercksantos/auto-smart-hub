import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Roberto Ferreira",
    role: "Proprietário",
    company: "Auto Premium SP",
    image: "/avatars/roberto.jpg",
    rating: 5,
    text: "Depois que implementamos o sistema, nossas vendas aumentaram 35% no primeiro mês. O chatbot atende tão bem que alguns clientes nem percebem que é IA."
  },
  {
    name: "Carla Mendes",
    role: "Gerente Comercial",
    company: "Veículos Estrela",
    image: "/avatars/carla.jpg",
    rating: 5,
    text: "A gestão de leads ficou muito mais organizada. Antes perdíamos muitos contatos, agora temos controle total e não deixamos nenhuma oportunidade escapar."
  },
  {
    name: "Marcos Oliveira",
    role: "Diretor",
    company: "MO Automóveis",
    image: "/avatars/marcos.jpg",
    rating: 5,
    text: "O suporte é excelente e a plataforma é muito intuitiva. Minha equipe se adaptou em menos de uma semana. Recomendo para qualquer concessionária."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-cyan-400 font-medium mb-6 animate-fade-in">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            O Que Nossos{" "}
            <span className="gradient-text">Clientes Dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100">
            Histórias reais de concessionárias que transformaram seus negócios com nossa plataforma.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 relative animate-slide-up`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-400 flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-background" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-cyan-500/30"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
