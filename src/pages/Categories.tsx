import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'encens',
    name: 'Encens',
    path: '/categories/incense',
    image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743893955/symphonie_florale_mgezmm.png',
    description: 'Des encens traditionnels aux parfums envoûtants'
  },
  {
    id: 'collection-femme',
    name: 'Collection Femme',
    path: '/categories/women',
    image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894099/selmat_last_last_e0gyon.png',
    description: 'Huiles et brumes pour une signature olfactive unique'
  },
  {
    id: 'collection-homme',
    name: 'Collection Homme',
    path: '/categories/men',
    image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/parfum_de_chambre_last_iprd5l.png',
    description: 'Une collection raffinée dédiée aux hommes'
  },
  {
    id: 'parfums-ambiance',
    name: 'Parfums d\'ambiance',
    path: '/categories/ambient',
    image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/parfum_de_chambre_last_iprd5l.png',
    description: 'Créez une atmosphère unique dans votre intérieur'
  }
];

const Categories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="pt-20 bg-background">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-playfair text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nos Collections
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" ref={ref}>
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="relative overflow-hidden rounded-lg shadow-lg group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link to={category.path}>
                <div className="relative aspect-w-3 aspect-h-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-center transform group-hover:translate-y-0 transition-transform duration-300">
                        <h2 className="text-3xl font-playfair text-white mb-4">{category.name}</h2>
                        <p className="text-white/90 mb-6">{category.description}</p>
                        <span className="inline-block bg-white text-text font-montserrat px-6 py-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                          Découvrir
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;