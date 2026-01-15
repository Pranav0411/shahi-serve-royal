import { motion } from "framer-motion";
import { Star, Flame, TrendingUp } from "lucide-react";

const bestsellers = [
  {
    id: 1,
    name: "Classic Galouti Kebab",
    image: "/src/assets/product-galouti-1.jpg",
    rating: 4.9,
    reviews: 2847,
    badge: "Most Loved",
    tagline: "The OG Royal Experience"
  },
  {
    id: 2,
    name: "Signature Shammi",
    image: "/src/assets/product-galouti-2.jpg",
    rating: 4.8,
    reviews: 1923,
    badge: "Trending",
    tagline: "Crispy Outside, Juicy Inside"
  },
  {
    id: 3,
    name: "Royal Seekh Kebab",
    image: "/src/assets/product-galouti-3.jpg",
    rating: 4.7,
    reviews: 1456,
    badge: "Chef's Pick",
    tagline: "Perfectly Spiced Delight"
  }
];

export const BestsellersSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-royal-navy">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-royal-gold/10 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-gold/5 rounded-full -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal-gold/20 mb-6">
            <Flame className="w-4 h-4 text-royal-gold" />
            <span className="text-royal-gold text-sm font-medium uppercase tracking-wider font-body">Fan Favorites</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-royal-cream-light leading-tight mb-4">
            Our <span className="text-royal-gold italic">Bestsellers</span>
          </h2>
          <p className="text-royal-cream/70 text-lg max-w-2xl mx-auto font-body">
            The ones everyone's talking about. Join thousands who've made these their go-to comfort food.
          </p>
        </motion.div>

        {/* Bestsellers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bestsellers.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-royal-navy-light border border-royal-gold/20 hover:border-royal-gold/40 transition-all duration-300 h-full">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-royal-gold text-royal-navy font-body">
                    {item.badge === "Trending" && <TrendingUp className="w-3 h-3" />}
                    {item.badge === "Most Loved" && <Star className="w-3 h-3 fill-current" />}
                    {item.badge === "Chef's Pick" && <Flame className="w-3 h-3" />}
                    {item.badge}
                  </span>
                </div>

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-navy via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="font-heading text-xl lg:text-2xl text-royal-cream-light mb-3 group-hover:text-royal-gold transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-royal-cream/60 text-base mb-5 font-body">{item.tagline}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(item.rating) ? 'text-royal-gold fill-royal-gold' : 'text-royal-cream/30'}`}
                        />
                      ))}
                    </div>
                    <span className="text-royal-cream-light font-semibold text-lg">{item.rating}</span>
                    <span className="text-royal-cream/50 text-sm font-body">({item.reviews.toLocaleString()} reviews)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-royal-gold text-royal-navy font-semibold rounded-full hover:bg-royal-gold-light transition-colors duration-300 shadow-lg hover:shadow-royal-gold/25 font-body">
            <span>Shop All Bestsellers</span>
            <TrendingUp className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
