import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Droplet } from 'lucide-react';
import { productData } from '../data/products';
import PriceDisplay from '../components/PriceDisplay';
import WhatsAppButton from '../components/WhatsAppButton';
import AddToCartButton from '../components/AddToCartButton';

const LuxeHomme = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Get products from productData
  const products = [
    {
      id: 'huile-luxe-homme',
      name: 'Huile Luxe Homme',
      description: 'Une fusion envoûtante entre fraîcheur, sensualité et intensité boisée. Une fragrance masculine affirmée, puissante et raffinée.',
      type: 'Huile Corporelle',
      prices: productData.menCollection.formats.oil.prices,
      volume: productData.menCollection.formats.oil.size,
      notes: ['Notes Fraîches', 'Boisé', 'Musc'],
      image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743893954/luxe_homme_photo_main_qycv0u.png'
    },
    {
      id: 'brume-luxe-homme',
      name: 'Brume Luxe Homme',
      description: 'Une brume rafraîchissante aux notes boisées et musquées. L\'élégance masculine sublimée dans une fragrance légère et persistante.',
      type: 'Brume Corporelle',
      prices: productData.menCollection.formats.mist.prices,
      volume: productData.menCollection.formats.mist.size,
      notes: ['Bois Précieux', 'Agrumes', 'Musc'],
      image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743893954/luxe_homme_nmj8ns.png'
    }
  ];

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
            Collection Luxe Homme
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Une ligne exclusive dédiée aux hommes qui osent se démarquer. Des fragrances sophistiquées alliant puissance et raffinement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" ref={ref}>
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
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {product.type}
                  </span>
                  <span className="bg-white text-primary px-3 py-1 rounded-full text-sm shadow-md">
                    {product.volume}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-playfair mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="space-y-4 mb-6 flex-grow">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Notes principales</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.notes.map((note, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm flex items-center"
                        >
                          <Droplet className="w-3 h-3 mr-1" />
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t mt-auto">
                  <div className="flex flex-col gap-3">
                    <PriceDisplay prices={product.prices} showAll={true} />
                    <div className="flex flex-col gap-2">
                      <AddToCartButton
                        product={{
                          id: product.id,
                          name: product.name,
                          price: product.prices.fcfa,
                          category: "Luxe Homme",
                          size: product.volume,
                          image: product.image
                        }}
                        variant="default"
                        maxQuantity={10}
                      />
                      <WhatsAppButton productName={product.name} />
                    </div>
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

export default LuxeHomme;