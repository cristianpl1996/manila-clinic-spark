import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse" />
            <span>para tu mascota</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Caprichos Pet Shop. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Fusagasugá, Cundinamarca - Colombia 🇨🇴
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
