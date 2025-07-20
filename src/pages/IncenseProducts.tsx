import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Flame, Star } from 'lucide-react';
import { productData } from '../data/products';
import AddToCartButton from '../components/AddToCartButton';
import PriceDisplay from '../components/PriceDisplay';

const IncenseProducts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedSize, setSelectedSize] = useState<'150g' | '300g'>('150g');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get all products from productData
  const products = productData.encens.varieties.map(product => ({
    ...product,
    prices: {
      eur: selectedSize === '150g' ? 
        productData.encens.formats.small.prices.eur : 
        productData.encens.formats.large.prices.eur,
      cad: selectedSize === '150g' ? 
        productData.encens.formats.small.prices.cad : 
        productData.encens.formats.large.prices.cad,
      fcfa: selectedSize === '150g' ? 
        productData.encens.formats.small.prices.fcfa : 
        productData.encens.formats.large.prices.fcfa
    },
    size: selectedSize
  }));

  const categories = ['all', ...new Set(products.map(p => p.category))];
  
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

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
            Collection Encens
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Découvrez notre collection d'encens traditionnels, des fragrances authentiques pour créer une atmosphère unique et envoûtante.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <motion.button
              className={`px-8 py-3 rounded-full transition-colors ${
                selectedSize === '150g' ? 'bg-primary text-white' : 'bg-white text-gray-600'
              }`}
              onClick={() => setSelectedSize('150g')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Format 150g - 5 000 FCFA
            </motion.button>
            <motion.button
              className={`px-8 py-3 rounded-full transition-colors ${
                selectedSize === '300g' ? 'bg-primary text-white' : 'bg-white text-gray-600'
              }`}
              onClick={() => setSelectedSize('300g')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Format 300g - 10 000 FCFA
            </motion.button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'all' ? 'Tous les encens' : category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {filteredProducts.map((product, index) => (
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
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                  <span className="bg-white text-primary px-3 py-1 rounded-full text-sm shadow-md">
                    {product.size}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-playfair mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="space-y-4 mb-6 flex-grow">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Catégorie</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center">
                        <Flame className="w-3 h-3 mr-1" />
                        {product.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t mt-auto">
                  <div className="flex flex-col gap-3">
                    <PriceDisplay prices={product.prices} showAll={true} />
                    <AddToCartButton
                      product={{
                        id: product.id,
                        name: product.name,
                        price: product.prices.fcfa,
                        category: 'Encens',
                        size: product.size,
                        image: product.image
                      }}
                      variant="default"
                      maxQuantity={10}
                    />
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

export default IncenseProducts;