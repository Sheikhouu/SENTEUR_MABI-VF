import React from 'react';
import { motion } from 'framer-motion';

interface WhatsAppButtonProps {
  productName: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ productName, className = '' }) => {
  const message = encodeURIComponent(`Bonjour, je suis intéressé(e) par le produit : ${productName}`);
  const whatsappUrl = `https://wa.me/221784209999?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 ${className}`}
    >
      <span>Commander</span>
    </motion.a>
  );
};

export default WhatsAppButton;