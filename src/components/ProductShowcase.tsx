import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";

// Show only first 3 products on homepage
const showcaseProducts = products.slice(0, 3);

export const ProductShowcase = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-royal-gold-rich font-medium tracking-widest uppercase text-sm">
            The Royal Menu
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Signature Delicacies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each dish crafted with the same indulgence and perfection once reserved for kings.
          </p>
        </motion.div>

        {/* Products Grid */}
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
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
