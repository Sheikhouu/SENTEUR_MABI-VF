import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, Star } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import PriceDisplay from './PriceDisplay';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  price?: number;
  prices?: {
    eur?: number;
    cad?: number;
    fcfa?: number;
  };
  emoji?: string;
  notes?: string[];
  benefits?: string[];
  usage?: string;
  imageUrl?: string;
  image?: string;
  category: string;
  size?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  fullDescription,
  price,
  prices,
  emoji,
  notes,
  benefits,
  usage,
  imageUrl,
  image,
  category,
  size
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const productImage = imageUrl || image;
  const displayPrices = prices || (price ? { fcfa: price } : undefined);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/5]">
        <OptimizedImage
          src={productImage}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span>
          {size && (
            <span className="bg-white text-primary px-3 py-1 rounded-full text-sm shadow-md">
              {size}
            </span>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h3 className="font-playfair text-xl text-text leading-tight h-[2.5rem] line-clamp-1">
              {name}
            </h3>
            {emoji && <span className="text-xl">{emoji}</span>}
          </div>
          <motion.button
            className="text-gray-400 hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Info className="w-5 h-5" />
          </motion.button>
        </div>

        <motion.div
          className="space-y-4 flex-grow"
          animate={{ height: isExpanded ? 'auto' : '6rem' }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-600 text-sm leading-relaxed h-[3rem] line-clamp-2">
            {isExpanded ? fullDescription || description : description}
          </p>

          {isExpanded && benefits && (
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Bienfaits</h4>
              <div className="flex flex-wrap gap-2">
                {benefits.map((benefit, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs flex items-center"
                  >
                    <Star className="w-3 h-3 mr-1" />
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          )}

          {notes && notes.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {notes.map((note, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                >
                  {note}
                </span>
              ))}
            </div>
          )}

          {isExpanded && usage && (
            <div className="text-sm text-gray-600">
              <strong className="font-medium">Utilisation : </strong>
              {usage}
            </div>
          )}
        </motion.div>

        <div className="pt-4 border-t mt-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <PriceDisplay prices={displayPrices} showAll={true} />
              {size && (
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {size}
                </span>
              )}
            </div>
            <AddToCartButton
              product={{
                id: name.toLowerCase().replace(/\s+/g, '-'),
                name: name,
                price: displayPrices?.fcfa || price || 0,
                category: category,
                size: size,
                image: imageUrl || image
              }}
              variant="default"
              maxQuantity={15}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;