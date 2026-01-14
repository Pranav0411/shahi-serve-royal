import { motion } from "framer-motion";
import { Sparkles, ChefHat } from "lucide-react";

const creativeIdeas = [
  {
    id: 1,
    title: "Galouti Sliders",
    description: "Mini brioche buns + our kebabs + pickled onions = party perfection",
    emoji: "🍔",
    accent: "Perfect for house parties"
  },
  {
    id: 2,
    title: "Kebab Tacos",
    description: "Soft tacos, crumbled kebabs, mint chutney, and crispy slaw",
    emoji: "🌮",
    accent: "Fusion Friday vibes"
  },
  {
    id: 3,
    title: "Biryani Bowl",
    description: "Layer with fragrant rice, raita, and crispy fried onions",
    emoji: "🍚",
    accent: "Ultimate comfort meal"
  },
  {
    id: 4,
    title: "Wrap & Roll",
    description: "Roomali roti, kebabs, salad, and tangy sauce - rolled to go",
    emoji: "🌯",
    accent: "Quick lunch goals"
  },
  {
    id: 5,
    title: "Kebab Pizza",
    description: "Top your pizza with our kebabs, cheese, and jalapeños",
    emoji: "🍕",
    accent: "Game night special"
  },
  {
    id: 6,
    title: "Breakfast Hash",
    description: "Crumbled kebabs with eggs, potatoes, and cheese",
    emoji: "🍳",
    accent: "Brunch with a twist"
  }
];

export const CreativeWaysSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#F4E6AD' }}>
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(23, 63, 98, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(229, 189, 130, 0.3) 0%, transparent 50%)' 
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal-navy/10 mb-6">
            <ChefHat className="w-4 h-4 text-royal-navy" />
            <span className="text-royal-navy text-sm font-medium uppercase tracking-wider">Get Creative</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-royal-navy leading-tight mb-4">
            Ways to <span className="text-royal-gold-rich italic">Enjoy</span>
          </h2>
          <p className="text-royal-navy/70 text-lg max-w-2xl mx-auto">
            Our kebabs are versatile AF. Here's how our community loves to switch things up.
          </p>
        </motion.div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {creativeIdeas.map((idea, index) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="h-full p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-royal-navy/10 hover:border-royal-gold transition-all duration-300 shadow-md hover:shadow-xl">
                {/* Emoji Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {idea.emoji}
                </div>
                
                {/* Content */}
                <h3 className="font-heading text-xl text-royal-navy mb-2 group-hover:text-royal-gold-rich transition-colors duration-300">
                  {idea.title}
                </h3>
                <p className="text-royal-navy/70 text-sm mb-4 leading-relaxed">
                  {idea.description}
                </p>
                
                {/* Accent Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-royal-gold/20 text-royal-navy text-xs font-medium">
                  <Sparkles className="w-3 h-3" />
                  {idea.accent}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-royal-navy/60 text-sm mb-4">Got a creative recipe? Share it with us!</p>
          <div className="inline-flex items-center gap-2 text-royal-navy font-semibold">
            <span className="text-lg">#ShahiServeCreations</span>
            <span className="text-royal-gold text-2xl">✨</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
