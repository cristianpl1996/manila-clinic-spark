import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-caprichos-transparent.png";

const Navbar = () => {
  const whatsappNumber = "573222155558";
  const whatsappMessage = "Hola! Me gustaría conocer más sobre sus servicios 🐾";

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <div className="container px-4 mx-auto h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="Caprichos Pet Shop" className="h-10 w-10 object-contain" />
          </div>

          <nav className="hidden md:flex items-center gap-6 text-white/90">
            <button className="hover:text-white transition-colors" onClick={() => scrollTo('servicios')}>Servicios</button>
            <button className="hover:text-white transition-colors" onClick={() => scrollTo('testimonios')}>Testimonios</button>
            <button className="hover:text-white transition-colors" onClick={() => scrollTo('faq')}>FAQ</button>
            <button className="hover:text-white transition-colors" onClick={() => scrollTo('contacto')}>Contacto</button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant="whatsapp"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


