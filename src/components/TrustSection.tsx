import { motion } from "framer-motion";
import { Clock, Leaf, Drumstick, ThermometerSun, Shield, Award } from "lucide-react";
import pattern from "@/assets/pattern.png";

const trustFeatures = [
  {
    icon: Clock,
    title: "Ready in 5 Minutes",
    description: "From freezer to feast in just 5 minutes. Heat and enjoy!",
  },
  {
    icon: Leaf,
    title: "Zero Preservatives",
    description: "All of the heritage, none of the preservatives.",
  },
  {
    icon: Drumstick,
    title: "100% Protein",
    description: "Premium quality meat with 40g protein per serving.",
  },
  {
    icon: ThermometerSun,
    title: "Three Ways to Heat",
    description: "Microwave, stove, or boiling water — your choice!",
  },
  {
    icon: Shield,
    title: "FSSAI Certified",
    description: "Manufactured following highest food safety standards.",
  },
  {
    icon: Award,
    title: "Royal Recipes",
    description: "Authentic recipes from the royal kitchens of India.",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: `url(${pattern})`,
          backgroundSize: '300px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal-navy via-royal-navy-light/90 to-royal-navy" />
      
      {/* Decorative Gold Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />
      
      {/* Decorative Corner Ornaments */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-royal-gold/30 rounded-tl-lg" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-royal-gold/30 rounded-tr-lg" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-royal-gold/30 rounded-bl-lg" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-royal-gold/30 rounded-br-lg" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Decorative Crown Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-5xl">👑</span>
          </motion.div>
          
          <span className="inline-block text-royal-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 px-6 py-2 border border-royal-gold/30 rounded-full">
            Why Choose Us
          </span>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-royal-cream-light mt-6 mb-6">
            The <span className="text-royal-gold italic">Royal</span> Promise
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-royal-gold/60" />
            <div className="w-3 h-3 bg-royal-gold rotate-45" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-royal-gold/60" />
          </div>
          
          <p className="text-royal-cream/70 max-w-2xl mx-auto text-lg font-light italic">
            "Every aspect of our process is designed to bring you the authentic royal experience."
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-royal-navy-light/80 to-royal-navy/80 backdrop-blur-sm border border-royal-gold/20 rounded-xl p-8 hover:border-royal-gold/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(229,189,130,0.15)]">
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-royal-gold/40 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-6 h-6 border-r border-t border-royal-gold/40 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l border-b border-royal-gold/40 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-royal-gold/40 rounded-br-xl" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-royal-gold/20 to-royal-gold/5 rounded-full flex items-center justify-center group-hover:from-royal-gold/30 group-hover:to-royal-gold/10 transition-all duration-500">
                    <div className="w-12 h-12 bg-royal-navy border border-royal-gold/30 rounded-full flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-royal-gold" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-royal-cream-light mb-3 group-hover:text-royal-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-royal-cream/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center mt-16 gap-3"
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-royal-gold/40" />
          <span className="text-royal-gold text-2xl">✦</span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-royal-gold/40" />
        </motion.div>
      </div>
    </section>
  );
};
