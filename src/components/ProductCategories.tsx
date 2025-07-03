import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'encens',
    name: 'Encens',
    description: 'Découvrez notre collection d\'encens traditionnels',
    subcategories: []
  },
  {
    id: 'autres-senteurs',
    name: 'Autres senteurs',
    description: 'Parfums d\'ambiance et huiles à brûler',
    subcategories: [
      { id: 'parfums-ambiance', name: 'Parfums d\'ambiance' },
      { id: 'huiles-bruler', name: 'Huiles à brûler' }
    ]
  },
  {
    id: 'corps',
    name: 'Pour le corps',
    description: 'Brumes et huiles pour le corps',
    subcategories: [
      { 
        id: 'brumes', 
        name: 'Brumes',
        genders: ['homme', 'femme']
      },
      { 
        id: 'huiles', 
        name: 'Huiles pour le corps',
        genders: ['homme', 'femme']
      }
    ]
  }
 
];

const ProductCategories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <motion.div
          key={category.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="p-6">
            <h3 className="text-xl font-playfair mb-2">{category.name}</h3>
            <p className="text-gray-600 mb-4">{category.description}</p>
            
            {category.subcategories.length > 0 && (
              <div className="space-y-2">
                {category.subcategories.map((sub) => (
                  <div key={sub.id}>
                    <h4 className="font-medium mb-2">{sub.name}</h4>
                    {'genders' in sub && sub.genders && (
                      <div className="flex gap-2">
                        {sub.genders.map((gender) => (
                          <Link
                            key={`${sub.id}-${gender}`}
                            to={`/categories/${sub.id}/${gender}`}
                            className="text-sm bg-gray-100 px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors"
                          >
                            {gender === 'homme' ? 'Hommes' : 'Femmes'}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            <Link
              to={`/categories/${category.id}`}
              className="inline-block mt-4 text-primary hover:text-primary/80 transition-colors"
            >
              Découvrir →
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductCategories;