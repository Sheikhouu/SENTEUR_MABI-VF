import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';

interface WhatsAppCartButtonProps {
  className?: string;
  variant?: 'default' | 'floating' | 'inline';
  phoneNumber?: string;
  customMessage?: string;
}

const WhatsAppCartButton: React.FC<WhatsAppCartButtonProps> = ({
  className = '',
  variant = 'default',
  phoneNumber = '+221784209999', // Numéro WhatsApp officiel
  customMessage
}) => {
  const { items, total } = useCart();

  const generateWhatsAppMessage = () => {
    if (customMessage) {
      return encodeURIComponent(customMessage);
    }

    if (items.length === 0) {
      return encodeURIComponent('👋 Bonjour, je souhaiterais avoir plus d\'informations sur vos produits. Merci !');
    }

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

  const handleWhatsAppClick = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const variants = {
    default: 'bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium',
    floating: 'fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50',
    inline: 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-medium'
  };

  const currentVariant = variants[variant];

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className={`
        ${currentVariant}
        flex items-center gap-2 transition-all duration-200
        hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500/20
        ${className}
      `}
      whileHover={{ scale: variant === 'floating' ? 1.1 : 1.02 }}
      whileTap={{ scale: variant === 'floating' ? 0.9 : 0.98 }}
    >
      <MessageCircle className={variant === 'floating' ? 'w-6 h-6' : 'w-5 h-5'} />
      {variant !== 'floating' && (
        <span>
          {items.length > 0 ? 'Commander sur WhatsApp' : 'Contacter sur WhatsApp'}
        </span>
      )}
    </motion.button>
  );
};

export default WhatsAppCartButton; 