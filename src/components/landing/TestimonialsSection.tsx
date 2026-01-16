import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Roberto Ferreira",
    role: "Dono",
    company: "Concessionária em São Paulo",
    image: "/avatars/roberto.jpg",
    rating: 5,
    text: "Antes eu perdia uns 5-6 leads por semana só porque ninguém atendia fim de semana. Agora tá todo mundo sendo atendido. Valeu cada centavo."
  },
  {
    name: "Carla Mendes",
    role: "Gerente Comercial",
    company: "Revenda de Semi-Novos",
    image: "/avatars/carla.jpg",
    rating: 5,
    text: "Meus vendedores reclamavam que passavam o dia respondendo as mesmas perguntas. Agora eles só falam com quem tá pronto pra fechar. Produtividade subiu muito."
  },
  {
    name: "Marcos Oliveira",
    role: "Proprietário",
    company: "Loja de Veículos",
    image: "/avatars/marcos.jpg",
    rating: 5,
    text: "Achei que ia ser complicado de configurar, mas foi mais fácil que criar perfil no Instagram. Em 2 dias já tava rodando."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-cyan-400 font-medium mb-6 animate-fade-in">
            Quem já usa
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Você Não Precisa{" "}
            <span className="gradient-text">Acreditar em Mim</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100">
            Outras concessionárias já estão usando. Veja o que elas falam:
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 relative animate-slide-up`}
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
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
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
