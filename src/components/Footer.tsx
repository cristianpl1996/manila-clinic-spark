import { Heart, Facebook, Instagram, MessageCircle, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-sm border-t border-white/20 py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-medium">Caprichos Pet Shop</span>
            </div>
            <p className="text-white/80">Todo para tu mascota en un solo lugar.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contacto</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Transversal 12 #22-42, CC Manila</li>
              <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" />+57 322 2155558</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> Lun-Sáb 9:00-19:00</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Enlaces</h4>
            <ul className="space-y-2 text-white/80">
              <li><a className="hover:text-white" href="#servicios">Servicios</a></li>
              <li><a className="hover:text-white" href="#testimonios">Testimonios</a></li>
              <li><a className="hover:text-white" href="#faq">FAQ</a></li>
              <li><a className="hover:text-white" href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Síguenos</h4>
            <div className="flex gap-3">
              <a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white" href="https://wa.me/573222155558" target="_blank" rel="noreferrer"><MessageCircle className="w-5 h-5" /></a>
              <a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2] text-white" href="https://www.facebook.com/profile.php?id=100071478461910" target="_blank" rel="noreferrer"><Facebook className="w-5 h-5" /></a>
              <a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white" href="https://instagram.com/caprichos_petshop" target="_blank" rel="noreferrer"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-white/80 text-sm">
          © {new Date().getFullYear()} Caprichos Pet Shop. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
