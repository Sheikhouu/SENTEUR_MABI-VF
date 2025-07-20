import React, { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart, CartItem } from '../contexts/CartContext';
import QuantitySelector from './QuantitySelector';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    category: string;
    size?: string;
    image?: string;
  };
  className?: string;
  variant?: 'default' | 'compact' | 'expanded';
  maxQuantity?: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  className = '',
  variant = 'default',
  maxQuantity = 10
}) => {
  const { addItem, items } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [showQuantitySelector, setShowQuantitySelector] = useState(variant === 'expanded');

  // Vérifier si le produit est déjà dans le panier
  const existingItem = items.find(item => 
    item.id === product.id && item.size === product.size
  );

  const handleAddToCart = () => {
    const cartItem: Omit<CartItem, 'quantity'> & { quantity: number } = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      size: product.size,
      image: product.image,
      quantity: quantity
    };

    addItem(cartItem);
    
    // Animation de confirmation
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);

    // Réinitialiser la quantité après ajout
    if (variant !== 'expanded') {
      setQuantity(1);
      setShowQuantitySelector(false);
    }
  };

  const handleToggleQuantitySelector = () => {
    if (variant !== 'expanded') {
      setShowQuantitySelector(!showQuantitySelector);
    }
  };

  // Styles selon la variante
  const variants = {
    default: {
      container: 'flex flex-col gap-3',
      button: 'w-full px-6 py-3 rounded-lg font-medium transition-all duration-200',
      quantityContainer: 'flex items-center justify-center'
    },
    compact: {
      container: 'flex items-center gap-2',
      button: 'px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
      quantityContainer: 'flex items-center'
    },
    expanded: {
      container: 'flex flex-col gap-4 p-4 border border-gray-200 rounded-lg bg-gray-50',
      button: 'w-full px-6 py-3 rounded-lg font-medium transition-all duration-200',
      quantityContainer: 'flex items-center justify-between'
    }
  };

  const currentVariant = variants[variant];

  return (
    <div className={`${currentVariant.container} ${className}`}>
      {/* Sélecteur de quantité */}
      <AnimatePresence>
        {showQuantitySelector && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={currentVariant.quantityContainer}
          >
            {variant === 'expanded' && (
              <span className="text-sm font-medium text-gray-700">Quantité:</span>
            )}
            <QuantitySelector
              quantity={quantity}
              onQuantityChange={setQuantity}
              maxQuantity={maxQuantity}
              size={variant === 'compact' ? 'sm' : 'md'}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton d'ajout au panier */}
      <motion.button
        onClick={variant === 'expanded' || showQuantitySelector ? handleAddToCart : handleToggleQuantitySelector}
        className={`
          ${currentVariant.button}
          ${isAdded 
            ? 'bg-green-500 text-white' 
            : 'bg-primary hover:bg-primary-dark text-white hover:shadow-lg'
          }
          flex items-center justify-center gap-2
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isAdded}
      >
        <AnimatePresence mode="wait">
          {isAdded ? (
            <motion.div
              key="added"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center gap-2"
            >
              <Check className="w-5 h-5" />
              Ajouté au panier !
            </motion.div>
          ) : (
            <motion.div
              key="add"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              {showQuantitySelector || variant === 'expanded' 
                ? `Ajouter ${quantity > 1 ? `(${quantity})` : ''}` 
                : 'Ajouter au panier'
              }
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Indicateur si le produit est déjà dans le panier */}
      {existingItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-primary text-center"
        >
          Déjà {existingItem.quantity} dans le panier
        </motion.div>
      )}
    </div>
  );
};

export default AddToCartButton; 