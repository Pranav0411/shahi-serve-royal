import { motion } from "framer-motion";
import { RefreshCw, Award, Heart, Sparkles, Check } from "lucide-react";
import productImage from "@/assets/product-galouti-1.jpg";
import pattern from "@/assets/pattern.png";

const trustFeatures = [
  {
    icon: RefreshCw,
    title: "Zero Preservatives",
    description: "Every meal is crafted without any artificial preservatives or additives — just pure, wholesome ingredients.",
  },
  {
    icon: Award,
    title: "Heritage Recipes",
    description: "Authentic regional Indian recipes passed down through generations, perfected by master chefs.",
  },
  {
    icon: Heart,
    title: "Premium Ingredients",
    description: "Pure ghee, real protein, and high-grade spices sourced from the finest suppliers across India.",
  },
  {
    icon: Sparkles,
    title: "Ready to Serve",
    description: "Shelf-stable convenience without compromising on taste, hygiene, or nutritional value.",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-royal-navy">
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: `url(${pattern})`,
          backgroundSize: '200px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-royal-gold/30 rounded-3xl" />
              <div className="absolute -inset-8 border border-royal-gold/10 rounded-3xl hidden lg:block" />
              
              {/* Gold Accent Corner */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-royal-gold rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-royal-navy rounded-2xl -z-10" />
              
              {/* Image */}
              <img
                src={productImage}
                alt="Shahi Serve Premium Products"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover relative z-10"
              />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-8 -right-4 lg:-right-8 bg-royal-navy text-royal-cream-light px-6 py-4 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-royal-gold/20 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-royal-gold" />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-bold">100%</p>
                    <p className="text-sm text-royal-cream/70">Quality Assured</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - USPs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Header */}
            <div className="mb-10">
              <span className="inline-block text-royal-gold font-medium tracking-widest uppercase text-sm mb-4">
                Why Choose Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-royal-cream-light leading-tight mb-4">
                The <span className="text-royal-gold italic">Royal</span> Promise
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-royal-gold rounded-full" />
                <div className="w-3 h-3 bg-royal-gold rotate-45" />
              </div>
              <p className="text-royal-cream/70 text-lg">
                Every aspect of our process is designed to bring you the authentic royal experience.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-5">
              {trustFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-royal-navy-light/50 transition-colors duration-300"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-royal-navy to-royal-navy-light rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <feature.icon className="w-6 h-6 text-royal-gold" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold text-royal-cream-light mb-1 group-hover:text-royal-gold transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-royal-cream/60 text-sm">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Check Mark */}
                  <div className="flex-shrink-0 w-8 h-8 bg-royal-gold/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Check className="w-4 h-4 text-royal-gold" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10"
            >
              <button className="btn-royal text-lg px-8 py-4">
                Order Now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
