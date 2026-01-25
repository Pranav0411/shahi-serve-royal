import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ProductTag, TagType } from "./ProductTag";

interface PackSize {
  count: number;
  price: number;
}

interface ProductCardCompactProps {
  id: string;
  name: string;
  image: string;
  packSizes: PackSize[];
  tagType?: TagType;
}

export const ProductCardCompact = ({ id, name, image, packSizes, tagType }: ProductCardCompactProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  // Use the first pack size for quick add
  const defaultPack = packSizes[0];

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      addToCart({
        id,
        name,
        image,
        packSize: defaultPack.count,
        price: defaultPack.price,
      });
      setIsAdding(false);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 1500);
    }, 400);
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border/50 h-full flex flex-col">
      {/* Square Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        
        {/* Premium Tag Badge */}
        {tagType && <ProductTag type={tagType} />}
      </div>

      {/* Compact Content */}
      <div className="p-3 flex flex-col flex-1">
        {/* Title - Truncated */}
        <h3 className="font-heading text-sm font-semibold text-foreground line-clamp-1 mb-2">
          {name}
        </h3>

        {/* Price & Add Button */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="font-heading text-lg font-bold text-foreground">
              ₹{defaultPack.price}
            </p>
            <p className="text-[10px] text-muted-foreground">
              Pack of {defaultPack.count}
            </p>
          </div>
          
          <motion.button
            onClick={handleAddToCart}
            disabled={isAdding}
            whileTap={{ scale: 0.9 }}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
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
                  className="w-4 h-4 border-2 border-royal-navy/30 border-t-royal-navy rounded-full animate-spin"
                />
              ) : isAdded ? (
                <motion.div
                  key="added"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                >
                  <Check size={16} />
                </motion.div>
              ) : (
                <motion.div
                  key="add"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                >
                  <Plus size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </div>
  );
};
