import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart } from 'lucide-react';
import PriceDisplay from './PriceDisplay';
import WhatsAppButton from './WhatsAppButton';
import AddToCartButton from './AddToCartButton';

const products = [
  {
    id: 1,
    name: "L'Essence du Désir",
    prices: {
      eur: 12,
      cad: 18,
      fcfa: 5000
    },
    description: "Une fragrance envoûtante qui éveille les sens",
    image: "https://res.cloudinary.com/dkzwityrq/image/upload/v1742078085/Mabi/senteurs/pzpga4zlqfhydteuxgln.jpg"
  },
  {
    id: 2,
    name: "Rêve d'Orient",
    prices: {
      eur: 12,
      cad: 18,
      fcfa: 5000
    },
    description: "Un voyage olfactif au cœur des traditions",
    image: "https://res.cloudinary.com/dkzwityrq/image/upload/v1742078090/Mabi/senteurs/qigusntf8bkup2ih1coc.jpg"
  },
  {
    id: 3,
    name: "Nuit Étoilée",
    prices: {
      eur: 14,
      cad: 20,
      fcfa: 7500
    },
    description: "Une composition mystérieuse et captivante",
    image: "https://res.cloudinary.com/dkzwityrq/image/upload/v1742078087/Mabi/senteurs/zmxh54d941moryv2surt.jpg"
  }
];

const BestSellers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl text-text mb-4">
            Nos Best-Sellers
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez nos produits les plus appréciés, sélectionnés avec soin pour vous offrir une expérience sensorielle unique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
            >
              <div className="aspect-w-3 aspect-h-4">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.button
                  className={`absolute top-4 right-4 p-2 rounded-full ${
                    likedProducts.includes(product.id)
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600'
                  } shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleLike(product.id)}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      likedProducts.includes(product.id) ? 'fill-current' : ''
                    }`}
                  />
                </motion.button>
              </div>

              <AnimatePresence>
                {(hoveredProduct === product.id || likedProducts.includes(product.id)) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-6 transform"
                  >
                    <h3 className="font-playfair text-xl text-text mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-3">{product.description}</p>
                    <div className="flex flex-col gap-3">
                      <PriceDisplay prices={product.prices} showAll={true} />
                      <div className="flex flex-col gap-2">
                        <AddToCartButton
                          product={{
                            id: `bestseller-${product.id}`,
                            name: product.name,
                            price: product.prices.fcfa,
                            category: "Best-Sellers",
                            image: product.image
                          }}
                          variant="compact"
                          maxQuantity={10}
                        />
                        <WhatsAppButton productName={product.name} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;