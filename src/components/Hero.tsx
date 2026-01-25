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
    headline: "Dinner in",
    highlightedText: "5 Minutes.",
    subtext: "No chopping. No cooking. Just Heat & Eat.",
    ctaText: "Shop All Curries",
    ctaLink: "/products",
    image: productKorma,
  },
  {
    id: 3,
    headline: "Royal Taste.",
    highlightedText: "Zero Guilt.",
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
    <section className="relative min-h-[65vh] md:min-h-[85vh] overflow-hidden bg-hero-gradient pt-16 md:pt-20 lg:pt-24">
      {/* Radial Spotlight Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 70% at 30% 50%, hsl(var(--royal-navy-light) / 0.4) 0%, transparent 60%),
                       radial-gradient(ellipse 50% 50% at 70% 30%, hsl(var(--royal-gold) / 0.05) 0%, transparent 50%)`,
        }}
      />
      
      {/* Subtle Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Geometric Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(30deg, hsl(var(--royal-gold)) 12%, transparent 12.5%, transparent 87%, hsl(var(--royal-gold)) 87.5%, hsl(var(--royal-gold))),
                           linear-gradient(150deg, hsl(var(--royal-gold)) 12%, transparent 12.5%, transparent 87%, hsl(var(--royal-gold)) 87.5%, hsl(var(--royal-gold))),
                           linear-gradient(30deg, hsl(var(--royal-gold)) 12%, transparent 12.5%, transparent 87%, hsl(var(--royal-gold)) 87.5%, hsl(var(--royal-gold))),
                           linear-gradient(150deg, hsl(var(--royal-gold)) 12%, transparent 12.5%, transparent 87%, hsl(var(--royal-gold)) 87.5%, hsl(var(--royal-gold))),
                           linear-gradient(60deg, hsl(var(--royal-gold) / 0.5) 25%, transparent 25.5%, transparent 75%, hsl(var(--royal-gold) / 0.5) 75%, hsl(var(--royal-gold) / 0.5)),
                           linear-gradient(60deg, hsl(var(--royal-gold) / 0.5) 25%, transparent 25.5%, transparent 75%, hsl(var(--royal-gold) / 0.5) 75%, hsl(var(--royal-gold) / 0.5))`,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px',
        }}
      />

      {/* Carousel Container */}
      <div className="relative h-[65vh] md:h-[85vh]" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0 h-full"
            >
              {/* Mobile Layout: Image Top, Text Bottom */}
              <div className="flex flex-col lg:flex-row h-full">
                {/* Left Content - 40% on desktop */}
                <div className="lg:w-[40%] h-[60%] lg:h-full flex items-center order-2 lg:order-1 relative z-10">
                  <div className="container mx-auto px-4 md:px-6 lg:px-12 py-4 md:py-8">
                    <AnimatePresence mode="wait">
                      {selectedIndex === index && (
                        <motion.div
                          key={`content-${slide.id}`}
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -30 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 space-y-3 md:space-y-0"
                        >
                          {/* Logo - Only on first slide */}
                          {index === 0 && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1, duration: 0.5 }}
                              className="mb-3 md:mb-6 flex justify-center lg:justify-start"
                            >
                              <img
                                src={logo}
                                alt="Shahi Serve"
                                className="h-10 md:h-16 lg:h-20 w-auto drop-shadow-2xl"
                              />
                            </motion.div>
                          )}

                          {/* Tagline */}
                          <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block text-royal-gold font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs lg:text-sm mb-2 md:mb-4"
                          >
                            Fit for a King
                          </motion.span>

                          {/* Massive Headline */}
                          <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] mb-3 md:mb-6"
                          >
                            <span className="text-royal-cream-light block">{slide.headline}</span>
                            <span className="text-royal-gold block mt-1">{slide.highlightedText}</span>
                          </motion.h1>

                          {/* Gold Line Separator */}
                          <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="w-16 md:w-24 h-[2px] bg-gradient-to-r from-royal-gold via-royal-gold-light to-transparent mx-auto lg:mx-0 mb-3 md:mb-6"
                          />

                          {/* Subtext */}
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-royal-cream/80 text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0 mb-4 md:mb-8 font-light"
                          >
                            {slide.subtext}
                          </motion.p>

                          {/* CTA Button with Glow */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                          >
                            <a
                              href={slide.ctaLink}
                              className="inline-block bg-royal-gold hover:bg-royal-gold-rich text-royal-navy font-semibold text-sm md:text-base lg:text-lg px-6 md:px-10 lg:px-12 py-3 md:py-4 lg:py-5 rounded-sm transition-all duration-300 shadow-[0_0_30px_rgba(229,189,130,0.4)] hover:shadow-[0_0_50px_rgba(229,189,130,0.6)] hover:scale-105"
                            >
                              {slide.ctaText}
                            </a>
                          </motion.div>

                          {/* Trust Badges - Only on first slide */}
                          {index === 0 && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7, duration: 0.5 }}
                              className="hidden md:flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start mt-6 md:mt-10"
                            >
                              {[
                                { icon: "⏱️", text: "Ready in 5 Mins" },
                                { icon: "🌿", text: "No Preservatives" },
                                { icon: "💪", text: "100% Protein" },
                              ].map((badge, badgeIndex) => (
                                <div
                                  key={badgeIndex}
                                  className="flex items-center gap-2 text-royal-cream/60"
                                >
                                  <span className="text-lg">{badge.icon}</span>
                                  <span className="text-xs md:text-sm font-medium tracking-wide">{badge.text}</span>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Right Image - 60% on desktop, Full Height Edge-to-Edge */}
                <div className="lg:w-[60%] h-[40%] lg:h-full order-1 lg:order-2 relative">
                  <AnimatePresence mode="wait">
                    {selectedIndex === index && (
                      <motion.div
                        key={`image-${slide.id}`}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute inset-0"
                      >
                        {/* Full Height Image */}
                        <img
                          src={slide.image}
                          alt={slide.headline}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Soft Fade Gradient Overlay - Left Edge Blend */}
                        <div 
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: `linear-gradient(to right, hsl(var(--royal-navy)) 0%, hsl(var(--royal-navy) / 0.8) 10%, hsl(var(--royal-navy) / 0.4) 25%, transparent 50%),
                                        linear-gradient(to top, hsl(var(--royal-navy) / 0.6) 0%, transparent 30%),
                                        linear-gradient(to bottom, hsl(var(--royal-navy) / 0.3) 0%, transparent 20%)`,
                          }}
                        />

                        {/* Subtle Gold Shimmer Overlay */}
                        <div 
                          className="absolute inset-0 pointer-events-none opacity-20"
                          style={{
                            background: `linear-gradient(135deg, transparent 40%, hsl(var(--royal-gold) / 0.1) 50%, transparent 60%)`,
                          }}
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
      <div className="hidden lg:block">
        <button
          onClick={scrollPrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-royal-navy/50 border border-royal-gold/40 flex items-center justify-center text-royal-gold hover:bg-royal-gold/20 hover:border-royal-gold transition-all duration-300 backdrop-blur-sm group"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} className="group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-royal-navy/50 border border-royal-gold/40 flex items-center justify-center text-royal-gold hover:bg-royal-gold/20 hover:border-royal-gold transition-all duration-300 backdrop-blur-sm group"
          aria-label="Next slide"
        >
          <ChevronRight size={28} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "bg-royal-gold w-10 shadow-[0_0_10px_rgba(229,189,130,0.5)]"
                : "bg-royal-cream/30 w-2 hover:bg-royal-cream/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
