import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const faqData = [
  {
    question: "¿Hacen domicilios en Fusagasugá?",
    answer: "¡Sí! Ofrecemos servicio de domicilios en toda Fusagasugá y zonas aledañas. El costo del domicilio depende de la distancia. Escríbenos por WhatsApp para coordinar entrega y pago."
  },
  {
    question: "¿Qué marcas de alimento manejan?",
    answer: "Contamos con marcas premium como Royal Canin, Hills, Pro Plan, Nutra Nuggets, Dog Chow, Whiskas, Friskies y muchas más. Te asesoramos según la edad, raza y necesidades específicas de tu mascota."
  },
  {
    question: "¿Cómo agendar peluquería?",
    answer: "Puedes agendar por WhatsApp o llamando al 322 2155558. Indica la raza, tamaño, tipo de corte deseado y tu disponibilidad. Te confirmamos la cita y te damos recomendaciones previas para el baño."
  },
  {
    question: "¿Cuáles son sus horarios de atención?",
    answer: "Estamos abiertos de lunes a sábado de 9:00 AM a 7:00 PM. Los domingos cerramos. Para peluquería, recomendamos agendar con anticipación."
  },
  {
    question: "¿Aceptan diferentes métodos de pago?",
    answer: "Sí, aceptamos efectivo, tarjetas débito y crédito, transferencias bancarias y Nequi. Para domicilios, el pago puede ser contra entrega o por transferencia previa."
  },
  {
    question: "¿Tienen productos para gatos y perros?",
    answer: "¡Por supuesto! Tenemos una amplia variedad de productos para perros, gatos, aves, peces y otros animales domésticos. Alimentos, juguetes, accesorios, medicamentos y todo lo que necesites."
  },
  {
    question: "¿Ofrecen asesoría nutricional?",
    answer: "Sí, nuestro personal está capacitado para asesorarte sobre la mejor alimentación para tu mascota según su edad, raza, actividad física y condiciones de salud. ¡Consúltanos sin compromiso!"
  },
  {
    question: "¿Puedo ver los productos antes de comprar?",
    answer: "¡Claro! Te invitamos a visitar nuestra tienda física en el Centro Comercial Manila. También puedes pedir fotos de productos específicos por WhatsApp antes de decidir."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white/10 backdrop-blur-sm">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {faqData.slice(0, 4).map((faq, index) => (
              <Card key={index} className="bg-white/95 border-2 border-white/30 hover:border-primary/50 transition-colors">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${index + 1}`} className="border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-card-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-card-foreground/80 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            ))}
          </div>
          
          <div className="space-y-4">
            {faqData.slice(4, 8).map((faq, index) => (
              <Card key={index + 4} className="bg-white/95 border-2 border-white/30 hover:border-primary/50 transition-colors">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${index + 5}`} className="border-none">
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-card-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-card-foreground/80 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;


