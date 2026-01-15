import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface PackSize {
  count: number;
  price: number;
}

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  packSizes: PackSize[];
  isVeg?: boolean;
}

export const ProductCard = ({ id, name, description, image, packSizes, isVeg = false }: ProductCardProps) => {
  const [selectedPack, setSelectedPack] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      addToCart({
        id,
        name,
        image,
        packSize: packSizes[selectedPack].count,
        price: packSizes[selectedPack].price,
      });
      setIsAdding(false);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-royal group"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Veg/Non-Veg Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
          isVeg 
            ? 'bg-green-500/90 text-white' 
            : 'bg-red-600/90 text-white'
        }`}>
          {isVeg ? '🌱 Veg' : '🍖 Non-Veg'}
        </div>
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-royal-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title & Description */}
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Pack Size Selector */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
            Select Pack Size
          </p>
          <div className="flex gap-2 flex-wrap">
            {packSizes.map((pack, index) => (
              <button
                key={pack.count}
                onClick={() => setSelectedPack(index)}
                className={`pack-pill ${selectedPack === index ? 'pack-pill-active' : ''}`}
              >
                Pack of {pack.count}
              </button>
            ))}
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-heading text-2xl font-bold text-foreground">
              ₹{packSizes[selectedPack].price}
            </p>
            <p className="text-xs text-muted-foreground">
              ₹{Math.round(packSizes[selectedPack].price / packSizes[selectedPack].count)} per piece
            </p>
          </div>
          
          <motion.button
            onClick={handleAddToCart}
            disabled={isAdding}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
              isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-royal-gold-rich text-royal-navy hover:shadow-gold'
            }`}
          >
            <AnimatePresence mode="wait">
              {isAdding ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="w-5 h-5 border-2 border-royal-navy/30 border-t-royal-navy rounded-full animate-spin"
                />
              ) : isAdded ? (
                <motion.div
                  key="added"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="flex items-center gap-2"
                >
                  <Check size={18} />
                  <span>Reserved!</span>
                </motion.div>
              ) : (
                <motion.div
                  key="add"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="flex items-center"
                >
                  <span className="whitespace-nowrap">Reserve this Delicacy</span>
                  <span>Add to Cart</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
