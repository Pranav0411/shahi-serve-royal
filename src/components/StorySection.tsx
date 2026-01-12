import { motion } from "framer-motion";
import pattern from "@/assets/pattern.png";

export const StorySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-royal-cream-light relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: `url(${pattern})`,
          backgroundSize: '300px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-royal-gold-rich font-medium tracking-widest uppercase text-sm">
              Our Story
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-royal-navy mt-3 mb-8">
              Fit for a King
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-royal-navy/80"
          >
            <p>
              For centuries, kings and emperors have never stepped into the bustling markets to seek a meal. 
              The finest ingredients, the richest spices, and the most indulgent dishes were prepared and served 
              to them within the grand walls of their palaces.
            </p>
            <p>
              In today's world, every individual deserves that same royal treatment. The modern consumer 
              is no less than a king — seeking meals that are scrumptious, indulgent, and flavourful 
              but without the time-consuming effort of cooking.
            </p>
            <p className="font-heading text-2xl text-royal-navy font-medium italic">
              "Shahi Serve will serve you the feast you truly deserve."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <button className="btn-royal">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
