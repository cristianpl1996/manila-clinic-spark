import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin } from "lucide-react";
import logoCaprichos from "@/assets/logo-caprichos.png";

const Hero = () => {
  const whatsappNumber = "573222155558";
  const whatsappMessage = "Hola! Me gustaría conocer más sobre sus servicios 🐾";
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Decorative paw prints */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl">🐾</div>
        <div className="absolute top-40 right-20 text-5xl">🐾</div>
        <div className="absolute bottom-32 left-1/4 text-7xl">🐾</div>
        <div className="absolute bottom-20 right-1/3 text-6xl">🐾</div>
        <div className="absolute top-1/3 right-10 text-5xl">🐾</div>
      </div>

      <div className="container px-4 py-16 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <img 
              src={logoCaprichos} 
              alt="Caprichos Pet Shop Logo" 
              className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Todo para tu Peludo Amigo
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            En <span className="font-semibold text-primary">Caprichos Pet Shop</span> encontrarás alimentos, accesorios, juguetes y todo lo que tu mascota necesita en Fusagasugá 🐶🐱
          </p>

          {/* Location badge */}
          <div className="flex items-center gap-2 mb-10 px-6 py-3 bg-card rounded-full shadow-card border border-border animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm md:text-base font-medium">
              Transversal 12 #22-42, Centro Comercial Manila - Fusagasugá
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-glow hover:scale-105 transition-all"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contáctanos por WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 hover:scale-105 transition-all border-2"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Cómo Llegar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
