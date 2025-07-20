import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  minQuantity?: number;
  maxQuantity?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  minQuantity = 1,
  maxQuantity = 99,
  className = '',
  size = 'md'
}) => {
  const handleDecrease = () => {
    if (quantity > minQuantity) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= minQuantity && value <= maxQuantity) {
      onQuantityChange(value);
    }
  };

  // Styles selon la taille
  const sizes = {
    sm: {
      button: 'w-8 h-8',
      input: 'w-12 h-8 text-sm',
      icon: 'w-4 h-4'
    },
    md: {
      button: 'w-10 h-10',
      input: 'w-16 h-10 text-base',
      icon: 'w-5 h-5'
    },
    lg: {
      button: 'w-12 h-12',
      input: 'w-20 h-12 text-lg',
      icon: 'w-6 h-6'
    }
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.button
        type="button"
        onClick={handleDecrease}
        disabled={quantity <= minQuantity}
        className={`
          ${currentSize.button}
          flex items-center justify-center
          bg-gray-100 hover:bg-gray-200 
          disabled:bg-gray-50 disabled:text-gray-300
          rounded-full transition-colors
          focus:outline-none focus:ring-2 focus:ring-primary/20
        `}
        whileHover={{ scale: quantity > minQuantity ? 1.1 : 1 }}
        whileTap={{ scale: quantity > minQuantity ? 0.95 : 1 }}
      >
        <Minus className={currentSize.icon} />
      </motion.button>

      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min={minQuantity}
        max={maxQuantity}
        className={`
          ${currentSize.input}
          text-center border border-gray-200 rounded-lg
          focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
          transition-colors
        `}
      />

      <motion.button
        type="button"
        onClick={handleIncrease}
        disabled={quantity >= maxQuantity}
        className={`
          ${currentSize.button}
          flex items-center justify-center
          bg-gray-100 hover:bg-gray-200 
          disabled:bg-gray-50 disabled:text-gray-300
          rounded-full transition-colors
          focus:outline-none focus:ring-2 focus:ring-primary/20
        `}
        whileHover={{ scale: quantity < maxQuantity ? 1.1 : 1 }}
        whileTap={{ scale: quantity < maxQuantity ? 0.95 : 1 }}
      >
        <Plus className={currentSize.icon} />
      </motion.button>
    </div>
  );
};

export default QuantitySelector; 