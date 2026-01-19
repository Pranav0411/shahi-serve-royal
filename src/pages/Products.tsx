import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-royal-navy overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-20" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-royal-gold font-medium tracking-widest uppercase text-sm">
                Our Royal Collection
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-royal-cream-light mt-4 mb-6">
                Signature Delicacies
              </h1>
              <p className="text-royal-cream/80 max-w-2xl mx-auto text-lg">
                Each dish crafted with the same indulgence and perfection once reserved for kings. 
                Experience the authentic taste of royal kitchens.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            {/* Category Filter - Optional for future */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <button className="px-6 py-2 rounded-full bg-royal-gold text-royal-navy font-medium text-sm">
                All Products
              </button>
              <button className="px-6 py-2 rounded-full border border-royal-navy/20 text-royal-navy font-medium text-sm hover:bg-royal-navy hover:text-royal-cream-light transition-colors">
                Kebabs
              </button>
              <button className="px-6 py-2 rounded-full border border-royal-navy/20 text-royal-navy font-medium text-sm hover:bg-royal-navy hover:text-royal-cream-light transition-colors">
                Curries
              </button>
            </motion.div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-royal-cream">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-royal-gold/20 flex items-center justify-center">
                  <span className="text-2xl">🍖</span>
                </div>
                <h3 className="font-heading text-xl text-royal-navy mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">Only the finest cuts and freshest ingredients make it to your table</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-royal-gold/20 flex items-center justify-center">
                  <span className="text-2xl">⏱️</span>
                </div>
                <h3 className="font-heading text-xl text-royal-navy mb-2">Ready in Minutes</h3>
                <p className="text-muted-foreground">From frozen to feast in under 10 minutes with our easy cooking guide</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-royal-gold/20 flex items-center justify-center">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="font-heading text-xl text-royal-navy mb-2">Fresh Delivery</h3>
                <p className="text-muted-foreground">Delivered frozen to preserve authentic taste and quality</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
