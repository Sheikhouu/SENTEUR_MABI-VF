import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { productData } from '../data/products';
import WhatsAppButton from '../components/WhatsAppButton';
import PriceDisplay from '../components/PriceDisplay';
import { Info } from 'lucide-react';

const WomenCollection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedType, setSelectedType] = useState<'oil' | 'mist'>('oil');
  const [selectedSize, setSelectedSize] = useState<'30ml' | '50ml'>('50ml');

  const products = selectedType === 'oil' 
    ? productData.womenCollection.products.map(product => ({
        ...product,
        prices: {
          eur: selectedSize === '30ml' ? 17 : 22.5,
          cad: selectedSize === '30ml' ? 26 : 30,
          fcfa: selectedSize === '30ml' ? 5500 : 7500
        },
        size: selectedSize
      }))
    : [{
        id: 'brume-femme',
        name: 'Brume Femme',
        description: 'Une brume délicate et raffinée qui enveloppe votre peau d\'un voile parfumé subtil et élégant.',
        prices: productData.womenCollection.formats.mist.prices,
        size: productData.womenCollection.formats.mist.size,
        image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743893949/brume_femme_rgqpi7.png'
      }];

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
            Collection Femme
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez notre collection exclusive de fragrances délicates et envoûtantes, disponible en huiles parfumées et brumes corporelles.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <motion.button
              className={`px-8 py-3 rounded-full transition-colors ${
                selectedType === 'oil' ? 'bg-primary text-white' : 'bg-white text-gray-600'
              }`}
              onClick={() => setSelectedType('oil')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Huiles Parfumées
            </motion.button>
            <motion.button
              className={`px-8 py-3 rounded-full transition-colors ${
                selectedType === 'mist' ? 'bg-primary text-white' : 'bg-white text-gray-600'
              }`}
              onClick={() => setSelectedType('mist')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Brumes Corporelles - 8 000 FCFA
            </motion.button>
          </div>

          {selectedType === 'oil' && (
            <motion.div
              className="bg-white rounded-lg p-6 shadow-lg max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-playfair text-xl mb-4">Choisissez votre format</h3>
                  <div className="flex flex-col gap-4">
                    <motion.button
                      className={`px-6 py-3 rounded-lg transition-colors ${
                        selectedSize === '30ml' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => setSelectedSize('30ml')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Format 30ml ➡️ 5.500 FCFA
                    </motion.button>
                    <motion.button
                      className={`px-6 py-3 rounded-lg transition-colors ${
                        selectedSize === '50ml' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => setSelectedSize('50ml')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Format 50ml ➡️ 7.500 FCFA
                    </motion.button>
                  </div>
                  <p className="text-center text-gray-600 mt-4">
                    ✨ Choisissez le format qui vous convient ! ✨
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        <div className={`grid grid-cols-1 ${selectedType === 'oil' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-1 max-w-md mx-auto'} gap-8`} ref={ref}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {selectedType === 'oil' ? 'Huile Parfumée' : 'Brume Corporelle'}
                  </span>
                  <span className="bg-white text-primary px-3 py-1 rounded-full text-sm shadow-md">
                    {product.size}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-playfair mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <PriceDisplay prices={product.prices} showAll={true} />
                    <WhatsAppButton productName={`${product.name} (${selectedType === 'oil' ? 'Huile' : 'Brume'} ${product.size})`} />
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

export default WomenCollection;