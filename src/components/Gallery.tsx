import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import gallery1 from "@/assets/gallery.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";

const images = [
  { src: gallery1, title: "Servicios veterinarios", desc: "Cuidado veterinario completo para tu mascota" },
  { src: gallery2, title: "Baño y estética", desc: "Baño y estética para tu mascota" },
  { src: gallery3, title: "Peluquería profesional", desc: "Peluquería profesional para tu mascota" },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-white/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Nuestra galería
          </h2>
        </div>
        
        {/* Grid layout for better organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <Card key={i} className="overflow-hidden bg-white/95 border-2 border-white/30 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="relative aspect-[4/5]">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover object-center" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-white text-xl mb-0 drop-shadow-lg">{img.title}</h3>
                    <p className="text-white/90 text-sm drop-shadow-md">{img.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;


