import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import productImg1 from "@/assets/product-galouti-1.jpg";
import productImg2 from "@/assets/product-galouti-2.jpg";
import productImg3 from "@/assets/product-galouti-3.jpg";

const products = [
  {
    id: "1",
    name: "Mutton Galouti Kebab",
    description: "Melt-in-your-mouth delicacy from the royal kitchens of Lucknow. Made with finest mutton and 160 spices.",
    image: productImg1,
    packSizes: [
      { count: 1, price: 299 },
      { count: 3, price: 799 },
      { count: 5, price: 1249 },
    ],
    isVeg: false,
  },
  {
    id: "2",
    name: "Chicken Shammi Kebab",
    description: "Succulent minced chicken kebabs infused with aromatic spices. A royal treat for your taste buds.",
    image: productImg2,
    packSizes: [
      { count: 1, price: 249 },
      { count: 3, price: 649 },
      { count: 5, price: 999 },
    ],
    isVeg: false,
  },
  {
    id: "3",
    name: "Seekh Kebab Royale",
    description: "Hand-rolled skewered kebabs with a perfect blend of herbs and spices. Grilled to perfection.",
    image: productImg3,
    packSizes: [
      { count: 1, price: 279 },
      { count: 3, price: 749 },
      { count: 5, price: 1149 },
    ],
    isVeg: false,
  },
];

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
          {products.map((product, index) => (
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
          <button className="btn-royal-outline border-royal-navy text-royal-navy hover:bg-royal-navy hover:text-royal-cream-light">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
};
