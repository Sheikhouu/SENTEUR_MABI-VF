import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';

interface CartButtonProps {
  className?: string;
}

const CartButton: React.FC<CartButtonProps> = ({ className = '' }) => {
  const { itemCount, toggleCart } = useCart();

  return (
    <motion.button
      onClick={toggleCart}
      className={`
        relative p-2 rounded-full hover:bg-gray-100 transition-colors
        focus:outline-none focus:ring-2 focus:ring-primary/20
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ShoppingCart className="w-6 h-6 text-gray-700" />
      
      {/* Indicateur de quantité */}
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium"
          >
            {itemCount > 99 ? '99+' : itemCount}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CartButton; 