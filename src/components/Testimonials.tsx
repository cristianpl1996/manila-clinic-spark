import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María Fernanda",
    text: "Excelente servicio y productos de calidad. Mi perrita ama sus snacks!",
    rating: 5,
  },
  {
    name: "Carlos López",
    text: "La peluquería quedó perfecta. Muy atentos y profesionales.",
    rating: 5,
  },
  {
    name: "Ana Pérez",
    text: "Siempre encuentro lo que necesito y me asesoran súper bien.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 bg-white/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Testimonios de nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-white/95 border-2 border-white/30 backdrop-blur hover:-translate-y-1 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-card-foreground/80 leading-relaxed mb-4">“{t.text}”</p>
                <p className="font-semibold text-card-foreground">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


