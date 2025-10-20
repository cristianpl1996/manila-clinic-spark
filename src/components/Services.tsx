import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Scissors, Bone, Package, Cookie, Heart } from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Alimentos",
    description: "Alimentos premium nacionales e importados para tu mascota"
  },
  {
    icon: Package,
    title: "Accesorios",
    description: "Correas, camas, platos y todo lo que necesitas"
  },
  {
    icon: Scissors,
    title: "Peluquería",
    description: "Servicio profesional de baño y peluquería"
  },
  {
    icon: Bone,
    title: "Juguetes",
    description: "Gran variedad de juguetes para el entretenimiento"
  },
  {
    icon: Cookie,
    title: "Snacks",
    description: "Premios y snacks deliciosos para tu peludo"
  },
  {
    icon: Heart,
    title: "Veterinaria",
    description: "Servicios veterinarios y consultas de salud"
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-white/10 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Nuestros productos y servicios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-2 border-white/30 hover:border-primary bg-white/95 backdrop-blur"
            >
              <CardContent className="p-8 text-center cursor-pointer">
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">{service.title}</h3>
                <p className="text-card-foreground/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
