import { motion } from "framer-motion";
import { Clock, Leaf, Drumstick, ThermometerSun, Shield, Award } from "lucide-react";

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
    <section className="py-20 lg:py-28 bg-royal-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-royal-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-royal-gold font-medium tracking-widest uppercase text-sm">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-royal-cream-light mt-3 mb-4">
            The Royal Promise
          </h2>
          <p className="text-royal-cream/70 max-w-2xl mx-auto text-lg">
            Every aspect of our process is designed to bring you the authentic royal experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-royal-navy-light/50 backdrop-blur-sm border border-royal-gold/10 rounded-2xl p-6 hover:border-royal-gold/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-royal-gold/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-royal-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-royal-cream-light mb-2">
                {feature.title}
              </h3>
              <p className="text-royal-cream/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
