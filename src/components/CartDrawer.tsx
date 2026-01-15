import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";

export const CartDrawer = () => {
  const { items, totalItems, totalPrice, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent 
        side="right" 
        className="w-full sm:w-[420px] bg-royal-navy border-l border-royal-gold/30 p-0 flex flex-col"
      >
        {/* Header */}
        <SheetHeader className="px-6 py-5 border-b border-royal-gold/20 bg-royal-navy-light">
          <SheetTitle className="flex items-center gap-3 text-royal-cream-light font-heading text-xl">
            <div className="p-2 rounded-full bg-royal-gold/20">
              <ShoppingBag className="w-5 h-5 text-royal-gold" />
            </div>
            Your Cart
            {totalItems > 0 && (
              <span className="ml-auto bg-royal-gold text-royal-navy text-sm font-bold px-3 py-1 rounded-full">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                <ShoppingBag className="w-10 h-10 text-royal-gold/50" />
              </div>
              <p className="text-royal-cream-light font-heading text-lg mb-2">Your cart is empty</p>
              <p className="text-royal-cream/60 text-sm font-body">
                Add some delicious kebabs to get started!
              </p>
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.div
                  key={`${item.id}-${item.packSize}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-4 py-4 border-b border-royal-gold/10 last:border-0"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-royal-gold/20">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading text-royal-cream-light font-semibold text-sm leading-tight mb-1 truncate">
                      {item.name}
                    </h4>
                    <p className="text-royal-cream/60 text-xs font-body mb-2">
                      Pack of {item.packSize}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-royal-navy-light rounded-full px-1 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.packSize, item.quantity - 1)}
                          className="w-7 h-7 rounded-full flex items-center justify-center text-royal-cream hover:bg-royal-gold/20 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-royal-cream-light font-semibold text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.packSize, item.quantity + 1)}
                          className="w-7 h-7 rounded-full flex items-center justify-center text-royal-cream hover:bg-royal-gold/20 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className="font-heading text-royal-gold font-bold">
                          ₹{item.price * item.quantity}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id, item.packSize)}
                          className="p-1.5 text-royal-cream/50 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Footer with Total and Checkout */}
        {items.length > 0 && (
          <SheetFooter className="px-6 py-5 border-t border-royal-gold/20 bg-royal-navy-light flex-col gap-4">
            {/* Order Summary */}
            <div className="w-full space-y-2">
              <div className="flex justify-between text-royal-cream/70 text-sm font-body">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-royal-cream/70 text-sm font-body">
                <span>Delivery</span>
                <span className="text-green-400">FREE</span>
              </div>
              <div className="h-px bg-royal-gold/20 my-2" />
              <div className="flex justify-between text-royal-cream-light font-heading text-lg font-bold">
                <span>Total</span>
                <span className="text-royal-gold">₹{totalPrice}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="w-full py-4 bg-royal-gold text-royal-navy font-semibold rounded-full hover:bg-royal-gold-light transition-colors duration-300 shadow-lg hover:shadow-royal-gold/25 font-body flex items-center justify-center gap-2">
              Proceed to Checkout
              <span className="text-sm opacity-80">(₹{totalPrice})</span>
            </button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
