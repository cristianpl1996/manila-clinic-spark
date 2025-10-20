import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin } from "lucide-react";
import logoCaprichos from "@/assets/logo-caprichos-transparent.png";

const Hero = () => {
  const whatsappNumber = "573222155558";
  const whatsappMessage = "Hola! Me gustaría conocer más sobre sus servicios 🐾";
  
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden py-12">
      {/* Animated paw prints background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-7xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>🐾</div>
        <div className="absolute top-40 right-20 text-6xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>🐾</div>
        <div className="absolute bottom-32 left-1/4 text-8xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}>🐾</div>
        <div className="absolute bottom-20 right-1/3 text-7xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}>🐾</div>
        <div className="absolute top-1/3 right-10 text-6xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}>🐾</div>
      </div>

      <div className="container px-4 py-8 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Logo with enhanced animation */}
          <div className="mb-12 animate-in fade-in zoom-in duration-1000">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
              <img 
                src={logoCaprichos} 
                alt="Caprichos Pet Shop - Todo para tu Mascota en Fusagasugá" 
                className="relative w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-[0_10px_30px_rgba(255,255,255,0.3)] hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>

          {/* Main heading with gradient text effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
            <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,255,255,0.5)]">
              Todo para tu Peludo Amigo
            </span>
          </h1>

          {/* Subheading with better contrast */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white font-medium mb-10 max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 leading-relaxed">
            En <span className="font-extrabold text-secondary drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">Caprichos Pet Shop</span> encontrarás alimentos, accesorios, juguetes y todo lo que tu mascota necesita 🐶🐱
          </p>

          {/* Location badge with enhanced styling */}
          <div className="flex items-center gap-3 mb-12 px-8 py-4 bg-white/95 backdrop-blur-sm rounded-full shadow-2xl border-2 border-white/50 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500 hover:scale-105 transition-transform">
            <MapPin className="w-6 h-6 text-primary" />
            <span className="text-base md:text-lg font-bold text-card-foreground">
              📍 Transversal 12 #22-42, CC Manila - Fusagasugá
            </span>
          </div>

          {/* CTA Buttons with social media colors */}
          <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700 w-full sm:w-auto">
            <Button
              size="lg"
              variant="whatsapp"
              className="text-lg px-10 py-7 font-bold rounded-xl transition-all duration-300"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Escríbenos por WhatsApp
            </Button>
            <Button
              size="lg"
              variant="maps"
              className="text-lg px-10 py-7 font-bold rounded-xl transition-all duration-300"
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Transversal+12+22-42+Centro+Comercial+Manila+Fusagasugá', '_blank')}
            >
              <MapPin className="mr-3 h-6 w-6" />
              Ver en Google Maps
            </Button>
          </div>

          {/* Additional trust indicator */}
          <div className="mt-12 text-white/80 text-sm md:text-base animate-in fade-in duration-700 delay-1000">
            ✨ Más de 10 años cuidando a tus mascotas ✨
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
