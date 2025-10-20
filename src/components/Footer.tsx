import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-sm border-t border-white/20 py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2 text-white/90">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
            <span>para tu mascota</span>
          </div>
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Caprichos Pet Shop. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/70">
            Fusagasugá, Cundinamarca - Colombia 🇨🇴
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
