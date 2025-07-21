import React from 'react';
import { X, ShoppingCart, Trash2, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import QuantitySelector from './QuantitySelector';
import OptimizedImage from './OptimizedImage';

const Cart: React.FC = () => {
  const { items, total, itemCount, isOpen, closeCart, removeItem, updateQuantity, clearCart } = useCart();

  // Générer le message WhatsApp
  const generateWhatsAppMessage = () => {
    if (items.length === 0) return '';

    let message = '🛍️ *Commande Senteurs by Mabi*\n\n';
    
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      if (item.size) message += `   📏 Taille: ${item.size}\n`;
      message += `   📦 Quantité: ${item.quantity}\n`;
      message += `   💰 Prix unitaire: ${item.price.toLocaleString()} FCFA\n`;
      message += `   💸 Sous-total: ${(item.price * item.quantity).toLocaleString()} FCFA\n\n`;
    });

    message += `🧾 *TOTAL: ${total.toLocaleString()} FCFA*\n\n`;
    message += `👋 Bonjour, je souhaiterais commander ces articles. Merci !`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    const phoneNumber = '+221784209999'; // Numéro WhatsApp officiel
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    // Optionnel: vider le panier après commande
    // clearCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeCart}
          />

          {/* Drawer du panier */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-playfair">Mon Panier</h2>
                {itemCount > 0 && (
                  <span className="bg-primary text-white text-sm px-2 py-1 rounded-full">
                    {itemCount}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Contenu du panier */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-6">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-500 mb-2">
                    Votre panier est vide
                  </h3>
                  <p className="text-gray-400">
                    Ajoutez des produits pour commencer vos achats
                  </p>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={`${item.id}-${item.size}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-gray-50 rounded-lg p-4"
                    >
                      <div className="flex gap-4">
                        {/* Image du produit */}
                        <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                          {item.image ? (
                            <OptimizedImage
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <ShoppingCart className="w-6 h-6 text-gray-400" />
                            </div>
                          )}
                        </div>

                        {/* Informations du produit */}
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">
                            {item.name}
                          </h4>
                          <div className="text-sm text-gray-500 space-y-1">
                            <p>{item.category}</p>
                            {item.size && <p>Taille: {item.size}</p>}
                            <p className="font-medium text-primary">
                              {item.price.toLocaleString()} FCFA
                            </p>
                          </div>
                        </div>

                        {/* Bouton supprimer */}
                        <button
                          onClick={() => removeItem(`${item.id}-${item.size}`)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Gestion de la quantité */}
                      <div className="flex items-center justify-between mt-4">
                        <QuantitySelector
                          quantity={item.quantity}
                          onQuantityChange={(quantity) => 
                            updateQuantity(`${item.id}-${item.size}`, quantity)
                          }
                          size="sm"
                        />
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Sous-total</p>
                          <p className="font-medium text-gray-900">
                            {(item.price * item.quantity).toLocaleString()} FCFA
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer avec total et boutons */}
            {items.length > 0 && (
              <div className="border-t p-6 space-y-4">
                {/* Total */}
                <div className="flex justify-between items-center text-lg font-playfair">
                  <span>Total:</span>
                  <span className="text-primary font-bold">
                    {total.toLocaleString()} FCFA
                  </span>
                </div>

                {/* Boutons d'action */}
                <div className="space-y-3">
                  <motion.button
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Commander via WhatsApp
                  </motion.button>

                  <button
                    onClick={clearCart}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-6 rounded-lg font-medium transition-colors"
                  >
                    Vider le panier
                  </button>
                </div>

                {/* Information de livraison */}
                <div className="text-center text-sm text-gray-500">
                  📦 Livraison à la charge du client<br />
                  🚚 Expédition sous 24h
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart; 