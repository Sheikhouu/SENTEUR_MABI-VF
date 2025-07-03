import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Fuse from 'fuse.js';
import { useNavigate } from 'react-router-dom';
import { productData } from '../data/products';

// Create a flat array of all products with safe property access
const getAllProducts = () => {
  const products = [];
  
  // Add incense products if they exist
  if (productData?.encens?.varieties) {
    productData.encens.varieties.forEach(product => {
      products.push({
        ...product,
        category: 'Encens',
        path: `/categories/incense`
      });
    });
  }

  // Add body oils if they exist
  if (productData?.womenCollection?.products) {
    productData.womenCollection.products.forEach(product => {
      products.push({
        ...product,
        category: 'Huiles corporelles',
        path: `/categories/body-oils/women`
      });
    });
  }

  if (productData?.menCollection?.products) {
    productData.menCollection.products.forEach(product => {
      products.push({
        ...product,
        category: 'Huiles corporelles',
        path: `/categories/body-oils/men`
      });
    });
  }

  // Add ambient fragrances if they exist
  if (productData?.ambientFragrances?.products) {
    productData.ambientFragrances.products.forEach(product => {
      products.push({
        ...product,
        category: 'Parfums d\'ambiance',
        path: `/categories/ambient-fragrances`
      });
    });
  }

  return products;
};

const fuse = new Fuse(getAllProducts(), {
  keys: ['name', 'description', 'category'],
  threshold: 0.3,
});

interface SearchBarProps {
  className?: string;
  onClose?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ className = '', onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        if (onClose) onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value.length > 1) {
      const searchResults = fuse.search(value);
      setResults(searchResults.map(result => result.item));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleSelectProduct = (product: any) => {
    navigate(product.path);
    setSearchTerm('');
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Rechercher un produit..."
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-primary"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto"
          >
            {results.map((product, index) => (
              <motion.div
                key={`${product.id}-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleSelectProduct(product)}
              >
                <div className="font-medium text-gray-900">{product.name}</div>
                <div className="text-sm text-gray-500">{product.category}</div>
                <div className="text-sm text-gray-600 line-clamp-2">{product.description}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;