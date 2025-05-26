
import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Carrousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoplayRef = useRef(null);

  const products = [
    { id: 1, name: "Hola", image: "/images/png5.jpg" },
    { id: 2, name: "Galaxy M13", image: "/images/png2.jpg" },
    { id: 3, name: "Galaxy M33", image: "/images/png3.jpg" },
    { id: 4, name: "Galaxy M53", image: "/images/png4.jpg" },
    { id: 5, name: "S22 Ultra Green", image: "/images/png1.jpg" },
  ];

  // Autoplay cada 5 segundos
  useEffect(() => {
    if (!emblaApi) return;

    autoplayRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000); // Cambia aquí el tiempo si deseas

    return () => clearInterval(autoplayRef.current);
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative overflow-hidden max-w-screen-xl mx-auto pt-8" ref={emblaRef}>
      <div className="flex">
        {products.map((product) => (
          <div key={product.id} className="flex-[0_0_100%] relative px-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover " // 👈 rounded agregado
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded">
              {product.name}
            </div>
          </div>
        ))}
      </div>

      {/* Botón Previous */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft />
      </button>

      {/* Botón Next */}
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronRight />
      </button>
    </div>
  );
};