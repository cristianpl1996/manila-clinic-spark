import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin } from "lucide-react";
import logoCaprichos from "@/assets/logo-caprichos-hq.jpg";

const Hero = () => {
  const whatsappNumber = "573222155558";
  const whatsappMessage = "Hola! Me gustaría conocer más sobre sus servicios 🐾";
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Decorative paw prints */}
      <div className="absolute inset-0 paw-print">
        <div className="absolute top-20 left-10 text-6xl animate-pulse" style={{ animationDelay: '0s' }}>🐾</div>
        <div className="absolute top-40 right-20 text-5xl animate-pulse" style={{ animationDelay: '1s' }}>🐾</div>
        <div className="absolute bottom-32 left-1/4 text-7xl animate-pulse" style={{ animationDelay: '2s' }}>🐾</div>
        <div className="absolute bottom-20 right-1/3 text-6xl animate-pulse" style={{ animationDelay: '0.5s' }}>🐾</div>
        <div className="absolute top-1/3 right-10 text-5xl animate-pulse" style={{ animationDelay: '1.5s' }}>🐾</div>
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Todo para tu Peludo Amigo
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
            En <span className="font-bold text-secondary drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Caprichos Pet Shop</span> encontrarás alimentos, accesorios, juguetes y todo lo que tu mascota necesita en Fusagasugá 🐶🐱
          </p>

          {/* Location badge */}
          <div className="flex items-center gap-2 mb-10 px-6 py-3 bg-white/95 rounded-full shadow-card border-2 border-white animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm md:text-base font-semibold text-card-foreground">
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
              variant="secondary"
              className="text-lg px-8 py-6 hover:scale-105 transition-all shadow-lg border-2 border-secondary"
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Transversal+12+22-42+Centro+Comercial+Manila+Fusagasugá', '_blank')}
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
