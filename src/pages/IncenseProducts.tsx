import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { productData } from '../data/products';
import AddToCartButton from '../components/AddToCartButton';
import PriceDisplay from '../components/PriceDisplay';

const IncenseProducts = () => {
  const [selectedSize, setSelectedSize] = useState<'150g' | '300g'>('150g');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  // Force l'affichage immédiatement pour éviter les problèmes d'intersection observer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Protection contre les données manquantes
  if (!productData?.encens?.varieties) {
    return (
      <div className="pt-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-playfair mb-4">Collection Encens</h1>
            <p className="text-red-500">Erreur: Données des encens non disponibles</p>
          </div>
        </div>
      </div>
    );
  }

  // Get all products from productData
  const products = (productData.encens.varieties || []).map(product => ({
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

  const categories = ['all', ...new Set(products.map(p => p.category).filter(Boolean))];
  
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

          {/* Boutons de sélection de format - PRIX CORRIGÉS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8">
            <motion.button
              className={`px-6 sm:px-8 py-3 rounded-full transition-all duration-200 border ${
                selectedSize === '150g' 
                  ? 'bg-primary text-white border-primary shadow-lg' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:shadow-md'
              }`}
              onClick={() => setSelectedSize('150g')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Format 150g - 7 000 FCFA
            </motion.button>
            <motion.button
              className={`px-6 sm:px-8 py-3 rounded-full transition-all duration-200 border ${
                selectedSize === '300g' 
                  ? 'bg-primary text-white border-primary shadow-lg' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:shadow-md'
              }`}
              onClick={() => setSelectedSize('300g')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Format 300g - 15 000 FCFA
            </motion.button>
          </div>

          {/* Boutons de catégorie */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-200 border text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-primary text-white border-primary shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-gray-200 hover:border-primary'
                }`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category === 'all' ? 'Tous les encens' : category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Affichage des produits */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-playfair mb-2">Aucun encens trouvé</h3>
            <p className="text-gray-500 mb-4">
              {selectedCategory === 'all' 
                ? 'Aucun produit disponible actuellement.' 
                : `Aucun encens dans la catégorie "${selectedCategory}".`
              }
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-primary hover:underline"
            >
              Voir tous les encens
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={`${product.id}-${selectedSize}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col h-full transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  y: isVisible ? 0 : 30 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x500/e5e7eb/9ca3af?text=Image+non+disponible';
                    }}
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                      {product.category}
                    </span>
                    <span className="bg-white text-primary px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                      {product.size}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-playfair mb-2 text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed flex-grow">
                    {product.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-medium text-sm mb-2 text-gray-700">Catégorie</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center font-medium">
                          <Flame className="w-3 h-3 mr-1" />
                          {product.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex flex-col gap-4">
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
        )}
      </div>
    </div>
  );
};

export default IncenseProducts;