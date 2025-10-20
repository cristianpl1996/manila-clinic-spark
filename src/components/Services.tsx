import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Scissors, Bone, Package, Cookie } from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Alimentos",
    description: "Alimentos premium nacionales e importados para tu mascota",
    emoji: "🍖"
  },
  {
    icon: Package,
    title: "Accesorios",
    description: "Correas, camas, platos y todo lo que necesitas",
    emoji: "🎀"
  },
  {
    icon: Scissors,
    title: "Peluquería",
    description: "Servicio profesional de baño y peluquería",
    emoji: "✂️"
  },
  {
    icon: Bone,
    title: "Juguetes",
    description: "Gran variedad de juguetes para el entretenimiento",
    emoji: "🎾"
  },
  {
    icon: Cookie,
    title: "Snacks",
    description: "Premios y snacks deliciosos para tu peludo",
    emoji: "🦴"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que tu mascota necesita en un solo lugar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card/80 backdrop-blur"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-rainbow rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="text-4xl mb-3">{service.emoji}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
