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
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contáctanos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte y a tu mascota
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <Card className="border-2 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Dirección</p>
                    <p className="text-muted-foreground">{contactInfo.address}</p>
                    <p className="text-muted-foreground">{contactInfo.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors break-all">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media & CTA */}
          <div className="space-y-6">
            <Card className="border-2 shadow-card bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Síguenos en Redes</h3>
                
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full text-lg shadow-glow hover:scale-105 transition-all"
                    onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hola! Me gustaría conocer más sobre sus servicios 🐾')}`, '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-lg border-2 hover:scale-105 transition-all"
                    onClick={() => window.open(contactInfo.facebook, '_blank')}
                  >
                    <Facebook className="mr-2 h-5 w-5" />
                    Facebook
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-lg border-2 hover:scale-105 transition-all"
                    onClick={() => window.open(contactInfo.instagram, '_blank')}
                  >
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="border-2 shadow-card overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.0889934487897!2d-74.36481892473894!3d4.338825595719285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f2f0a6c8f8f8f%3A0x0!2zNMKwMjAnMTkuOCJOIDc0wrAyMSc0NC45Ilc!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco"
                  width="100%"
                  height="250"
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
      </div>
    </section>
  );
};

export default Contact;
