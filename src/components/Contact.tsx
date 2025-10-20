import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = {
    phone: "322 2155558",
    email: "caprichospetshop25@gmail.com",
    address: "Transversal 12 #22-42, Centro Comercial Manila",
    city: "Fusagasugá, Cundinamarca",
    whatsapp: "573222155558",
    facebook: "https://www.facebook.com/profile.php?id=100071478461910",
    instagram: "https://instagram.com/caprichos_petshop"
  };

  return (
    <section id="contacto" className="py-20 bg-white/10 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Contáctanos
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Info */}
          <Card className="border-2 border-white/30 shadow-card bg-white/95 hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">Información de Contacto</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-card-foreground mb-1">Dirección</p>
                    <p className="text-card-foreground/70 text-sm leading-relaxed">{contactInfo.address}</p>
                    <p className="text-card-foreground/70 text-sm">{contactInfo.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-card-foreground mb-1">Teléfono</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-card-foreground/70 hover:text-primary transition-colors text-sm">
                      +57 {contactInfo.phone}
                    </a>
                    <p className="text-card-foreground/60 text-sm mt-1">Lun-Sáb 9:00 AM - 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-card-foreground mb-1">Correo electrónico</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-card-foreground/70 hover:text-primary transition-colors break-all text-sm">
                      {contactInfo.email}
                    </a>
                    <p className="text-card-foreground/60 text-sm mt-1">Respuesta en 24 horas</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media & CTA */}
          <Card className="border-2 border-white/30 shadow-card bg-white/95 hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">Conéctate con nosotros</h3>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  variant="whatsapp"
                  className="w-full text-lg shadow-glow hover:scale-105 transition-all"
                  onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hola! Me gustaría conocer más sobre sus servicios 🐾')}`, '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>

                <Button
                  size="lg"
                  variant="facebook"
                  className="w-full text-lg hover:scale-105 transition-all"
                  onClick={() => window.open(contactInfo.facebook, '_blank')}
                >
                  <Facebook className="mr-2 h-5 w-5" />
                  Facebook
                </Button>

                <Button
                  size="lg"
                  variant="instagram"
                  className="w-full text-lg hover:scale-105 transition-all"
                  onClick={() => window.open(contactInfo.instagram, '_blank')}
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="border-2 border-white/30 shadow-card overflow-hidden bg-white/95 hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="text-center mt-8 mb-8">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">Nuestra ubicación</h3>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.0889934487897!2d-74.36481892473894!3d4.338825595719285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f2f0a6c8f8f8f%3A0x0!2zNMKwMjAnMTkuOCJOIDc0wrAyMSc0NC45Ilc!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Ubicación Caprichos Pet Shop"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
