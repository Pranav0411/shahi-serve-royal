import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import productHero from "@/assets/product-galouti-3.jpg";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Product Image */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url(${productHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-royal-navy/70" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Brand Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-6 flex justify-center"
            >
              <img 
                src={logo} 
                alt="Shahi Serve" 
                className="h-28 md:h-36 lg:h-44 w-auto drop-shadow-2xl"
              />
            </motion.div>
            
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-royal-gold font-medium tracking-widest uppercase text-sm mb-4"
            >
              Fit for a King
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-royal-cream-light leading-tight mb-6"
            >
              Dining Like a King,{" "}
              <span className="text-royal-gold">Now at Home</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-royal-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-8"
            >
              Experience the grandeur of royal Indian cuisine. Succulent kebabs, 
              aromatic biryanis, and decadent curries — ready in minutes.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="btn-royal text-lg px-10 py-4">
                Order Your Feast
              </button>
              <button className="btn-royal-outline text-lg px-10 py-4">
                Explore Menu
              </button>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-6 justify-center mt-10"
            >
              {[
                { icon: "⏱️", text: "Ready in 5 Mins" },
                { icon: "🌿", text: "No Preservatives" },
                { icon: "💪", text: "100% Protein" },
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-royal-cream/70">
                  <span className="text-xl">{badge.icon}</span>
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-royal-gold"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};
