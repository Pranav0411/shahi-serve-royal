import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { ProductCardCompact } from "./ProductCardCompact";
import { products } from "@/data/products";
import { useIsMobile } from "@/hooks/use-mobile";

// Show only first 3 products on homepage
const showcaseProducts = products.slice(0, 3);

export const ProductShowcase = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-14"
        >
          <span className="text-royal-gold-rich font-medium tracking-widest uppercase text-sm">
            The Royal Menu
          </span>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Each dish crafted with the same indulgence and perfection once reserved for kings.
          </p>
        </motion.div>

        {/* Mobile: Horizontal Scroll Carousel */}
        {isMobile ? (
          <div className="relative -mx-4">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 px-4 pb-4 no-scrollbar">
              {showcaseProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="min-w-[45vw] max-w-[45vw] snap-center shrink-0"
                >
                  <ProductCardCompact {...product} />
                </motion.div>
              ))}
              {/* Peek card - hints at more products */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="min-w-[30vw] max-w-[30vw] snap-center shrink-0 flex items-center justify-center"
              >
                <Link 
                  to="/products"
                  className="h-full w-full bg-royal-navy/5 rounded-xl border border-dashed border-royal-navy/20 flex flex-col items-center justify-center p-4 text-center"
                >
                  <span className="text-royal-navy font-heading text-sm font-medium">View All</span>
                  <span className="text-muted-foreground text-xs mt-1">+{products.length - 3} more</span>
                </Link>
              </motion.div>
            </div>
          </div>
        ) : (
          /* Desktop: Regular Grid */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {showcaseProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 md:mt-12"
        >
          <Link 
            to="/products"
            className="btn-royal-outline border-royal-navy text-royal-navy hover:bg-royal-navy hover:text-royal-cream-light inline-block"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
