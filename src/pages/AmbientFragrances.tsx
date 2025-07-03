import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Info } from 'lucide-react';
import { productData } from '../data/products';
import PriceDisplay from '../components/PriceDisplay';
import WhatsAppButton from '../components/WhatsAppButton';

const AmbientFragrances = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const products = productData.ambientFragrances.products;

  return (
    <div className="pt-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-playfair mb-4">
            Parfums d'Ambiance
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Créez une atmosphère unique et envoûtante dans votre intérieur avec notre collection de parfums d'ambiance.
          </p>
        </motion.div>

        {/* Notice de sécurité */}
        <motion.div
          className="bg-white rounded-lg p-6 shadow-lg mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-playfair text-xl mb-4">Conseils d'utilisation</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Utiliser uniquement dans un brûle-parfum adapté</li>
                <li>• Ne jamais laisser un brûleur sans surveillance</li>
                <li>• Utiliser uniquement dans un espace bien ventilé</li>
                <li>• Tenir hors de portée des enfants et des animaux</li>
                <li>• En cas de contact avec les yeux, rincer abondamment à l'eau</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative aspect-[4/5] w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {product.id.includes('huile-bruler') ? 'Huile à brûler' : 'Parfum d\'ambiance'}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-playfair mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {product.notes && (
                  <div className="space-y-4 mb-6 flex-grow">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Notes principales</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.notes.map((note, i) => (
                          <span
                            key={i}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center"
                          >
                            <Star className="w-3 h-3 mr-1" />
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <PriceDisplay prices={product.prices} showAll={true} />
                      <span className="text-sm text-gray-500">
                        {product.volume_ml}ml
                      </span>
                    </div>
                    <WhatsAppButton productName={product.name} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmbientFragrances;