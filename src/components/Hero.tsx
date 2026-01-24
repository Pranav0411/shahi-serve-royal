import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import logo from "@/assets/logo.png";
import productGalouti from "@/assets/product-galouti-1.jpg";
import productKorma from "@/assets/product-korma.jpg";
import productBhuna from "@/assets/product-bhuna.jpg";

interface Slide {
  id: number;
  headline: string;
  highlightedText: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    headline: "The Galouti",
    highlightedText: "That Melts.",
    subtext: "Authentic Lucknowi spices. 100% Protein. Zero Guilt.",
    ctaText: "Shop Galouti Kebab",
    ctaLink: "/products",
    image: productGalouti,
  },
  {
    id: 2,
    headline: "Dinner Sorted",
    highlightedText: "in 5 Mins.",
    subtext: "No chopping. No cooking. Just Heat & Eat.",
    ctaText: "Shop All Curries",
    ctaLink: "/products",
    image: productKorma,
  },
  {
    id: 3,
    headline: "Royal Taste.",
    highlightedText: "Clean Label.",
    subtext: "Absolutely NO Preservatives. Retort Technology keeps it fresh.",
    ctaText: "Explore the Menu",
    ctaLink: "/products",
    image: productBhuna,
  },
];

export const Hero = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const autoplayPlugin = Autoplay({ delay: 4000, stopOnInteraction: false });
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: false },
    [autoplayPlugin]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative min-h-screen bg-royal-navy overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--royal-gold) / 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, hsl(var(--royal-gold) / 0.05) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Carousel Container */}
      <div className="relative h-screen" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0 h-full"
            >
              <div className="container mx-auto px-4 h-full flex items-center pt-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                  {/* Left Content */}
                  <AnimatePresence mode="wait">
                    {selectedIndex === index && (
                      <motion.div
                        key={`content-${slide.id}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center lg:text-left order-2 lg:order-1"
                      >
                        {/* Logo - Only on first slide */}
                        {index === 0 && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="mb-6 flex justify-center lg:justify-start"
                          >
                            <img
                              src={logo}
                              alt="Shahi Serve"
                              className="h-20 md:h-24 w-auto drop-shadow-2xl"
                            />
                          </motion.div>
                        )}

                        {/* Tagline */}
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="inline-block text-royal-gold font-medium tracking-widest uppercase text-sm mb-4"
                        >
                          Fit for a King
                        </motion.span>

                        {/* Headline */}
                        <motion.h1
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-royal-cream-light leading-tight mb-6"
                        >
                          {slide.headline}{" "}
                          <span className="text-royal-gold">{slide.highlightedText}</span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                          className="text-royal-cream/80 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8"
                        >
                          {slide.subtext}
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          <a
                            href={slide.ctaLink}
                            className="btn-royal text-lg px-10 py-4 inline-block"
                          >
                            {slide.ctaText}
                          </a>
                        </motion.div>

                        {/* Trust Badges - Only on first slide */}
                        {index === 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10"
                          >
                            {[
                              { icon: "⏱️", text: "Ready in 5 Mins" },
                              { icon: "🌿", text: "No Preservatives" },
                              { icon: "💪", text: "100% Protein" },
                            ].map((badge, badgeIndex) => (
                              <div
                                key={badgeIndex}
                                className="flex items-center gap-2 text-royal-cream/70"
                              >
                                <span className="text-xl">{badge.icon}</span>
                                <span className="text-sm font-medium">{badge.text}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Right Image */}
                  <AnimatePresence mode="wait">
                    {selectedIndex === index && (
                      <motion.div
                        key={`image-${slide.id}`}
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, x: -30 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
                      >
                        {/* Decorative Ring */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full border-2 border-royal-gold/20 animate-pulse" />
                        </div>
                        
                        {/* Image Container */}
                        <div className="relative w-[260px] h-[260px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden shadow-2xl border-4 border-royal-gold/30">
                          <img
                            src={slide.image}
                            alt={slide.headline}
                            className="w-full h-full object-cover"
                          />
                          {/* Golden Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-royal-navy/30 via-transparent to-royal-gold/10" />
                        </div>

                        {/* Floating Decorative Elements */}
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                          className="absolute top-10 right-10 w-4 h-4 bg-royal-gold rounded-full opacity-60"
                        />
                        <motion.div
                          animate={{ y: [0, 10, 0] }}
                          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                          className="absolute bottom-20 left-10 w-3 h-3 bg-royal-gold/50 rounded-full"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Desktop */}
      <div className="hidden md:block">
        <button
          onClick={scrollPrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-royal-gold/10 border border-royal-gold/30 flex items-center justify-center text-royal-gold hover:bg-royal-gold/20 transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-royal-gold/10 border border-royal-gold/30 flex items-center justify-center text-royal-gold hover:bg-royal-gold/20 transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "bg-royal-gold w-8"
                : "bg-royal-cream/30 hover:bg-royal-cream/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
